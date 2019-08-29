package io.allroundtesters.algo;

/**
 * <li>说明 KMP算法是用于字符串匹配的一种优化算法，思想是，主串中已经匹配过的就不再匹配，只移动模式串到对应的位置来继续匹配，以此来减少匹配次数
 * <li>参考：http://blog.csdn.net/tukangzheng/article/details/38438481
 * <li>作者 zer0
 * <li>创建日期 2015-6-04
 */
public class KMPchatMatch {

	/**
	 * <li>方法名 getNext
	 * <li>@param matchString
	 * <li>返回类型 int[]
	 * <li>说明 next数组即模式串要跳转到的位置的存储，该函数就是用于求next数组，next数组只与模式串本身有关，模式串重复度越高，next的值越大。
	 * <li>求next值的意思就是模式串自己和自己匹配
	 * <li>作者 zer0
	 * <li>创建日期 2015-6-04
	 * @return 
	 */
	public int[] getNext(String matchString){
		int stringLength = matchString.length();
		int[] next = new int[stringLength];
		next[0] = -1;//模式串第一个字符的next规定为0
		int k = -1;//模式串被匹配部分的游标
		int j = 0;//模式串匹配部分的游标
		
		int count = 0;//统计模式串的自我匹配进行了多少次
		
		//j<stringLength-1是因为next数组的求值中，每次循环求的都送j++的next值
		while (j < stringLength - 1) {
			if (k == -1 || matchString.charAt(j) == matchString.charAt(k)) {
				j++;
				k++;
				
				//此处主要是防止aaaaaaj这种极端情况出现,
				if (matchString.charAt(j) != matchString.charAt(k)) {
					next[j] = k;
				}else {
					//如果字符相等，则继续向前搜索
					next[j] = next[k];
				}
			}else {
				k = next[k];
			}
			count++;
		}
		System.out.println("模式串自我匹配次数=" + count);
		return next;
	}
	
	public int Kmp_index(String targetString, String matchString){
		int[] next = getNext(matchString);
		int i = 0;//目标字符串的游标
		int j = 0;//模式串的游标
		int targetLength = targetString.length();
		int matchLength = matchString.length();
		
		int count = 0;//字符串匹配次数
		
		while (i < targetLength && j < matchLength) {
			//j==-1代表模式串要从头开始匹配，这样的话，必须把模式串和目标串都后移一位继续匹配
			if (j == -1 || targetString.charAt(i) == matchString.charAt(j)) {
				j++;
				i++;
			}else{
				//如果在某处目标串和模式串的字符不相等，那就去找上一个可能相等的字符，即j=next[j]
				j = next[j];
			}
			
			count++;
		}
		
		System.out.println("字符串匹配进行次数=" + count);
		
		if (j == matchLength) {
			//返回的是模式串在目标串中第一次出现的位置
			return i - j;
		}
		
		return -1;
	}
	
	public static void main(String[] args) {
		String target = "abacababc";
		String match = "abab";
		
		KMPchatMatch kmpChatMatch = new KMPchatMatch();
		int index = kmpChatMatch.Kmp_index(target, match);
		System.out.println("index=" + index);
	}
}
