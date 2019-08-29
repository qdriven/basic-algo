package io.allroundtesters.algo;

/**
 * <li>说明 循环队列的实现，该队列的判定条件是【队列头指针在队列尾指针的下一位置】
 * <li>作者 zer0
 * <li>创建日期 2015-6-01
 */
public class CircularQuene {
	
	Object obj[];//存储队列的数组对象；
	int front;//头指针
	int rear;//尾指针
	
	public CircularQuene(int size){
		obj = new Object[size];
		//头指针和尾指针都为0表现队列为空
		front = 0;
		rear = 0;
	}

	/**
	 * <li>方法名 add
	 * <li>@param obj
	 * <li>返回类型 boolean
	 * <li>说明 添加元素到队列里，判断队列真溢出的条件是【(rear+1)%obj.length == front】
	 * <li>说求余是为了不让尾指针超出队列最大容量
	 * <li>作者 zer0
	 * <li>创建日期 2015-6-01
	 * @return 
	 */
	public boolean add(Object o){
		if ((rear+1)%obj.length == front) {
			return false;
		}
		obj[rear] = o;
		rear = (rear+1)%obj.length;//移动尾指针的位置
		return true;
	}
	
	/**
	 * <li>方法名 remove
	 * <li>@param obj
	 * <li>返回类型 Object
	 * <li>说明 删除队列首元素，若队列不为空，则删除
	 * <li>作者 zer0
	 * <li>创建日期 2015-6-01
	 * @return 
	 */
	public Object remove(){
		//若首指针和尾指针相等，并且首指针处无数据，证明队列为空
		if (isEmpty()){
			return null;
		}
		Object o = obj[front];//获取要删除的元素
		obj[front] = null;//释放队首的元素
		front = (front+1)%obj.length;//队首指针加一
		return o;
	}
	
	/**
	 * <li>方法名 isEmpty
	 * <li>返回类型 boolean
	 * <li>说明 判断队列是否为空
	 * <li>作者 zer0
	 * <li>创建日期 2015-6-01
	 * @return 
	 */
	public boolean isEmpty(){
		return front == rear && obj[rear] == null;
	}
}
