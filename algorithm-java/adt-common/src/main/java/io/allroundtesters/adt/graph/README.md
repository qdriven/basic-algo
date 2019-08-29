# Trees and Graph

图与树
搜索算法
α–β A* B* 回溯 集束 贝尔曼-福特 最佳优先 双向 Borůvka 分支限界 BFS 
大英博物馆 D* DFS 深度限制 迪杰斯特拉 Edmonds Floyd–Warshall 边缘搜索 爬山 IDA* 
迭代加深 Johnson 跳点 克鲁斯克尔 字典序BFS 普里姆 SMA*
分类
图算法 搜索算法
相关主题
动态规划 图的遍历 树的遍历

- 树的遍历 (https://zh.wikipedia.org/wiki/%E6%A0%91%E7%9A%84%E9%81%8D%E5%8E%86)

* Pre-Order Traversal
* In-Order Traversal
* Post-Order Traversal

```
先序遍历(Pre-Order Traversal)[编辑]
指先访问根，然后访问孩子的遍历方式，其C代码如下：

void XXBL(tree* root){
  //Do Something with root
  if(root->lchild!=NULL)
    XXBL(root->lchild);
  if(root->rchild!=NULL)
    XXBL(root->rchild);
}
中序遍历(In-Order Traversal)[编辑]
指先访问左（右）孩子，然后访问根，最后访问右（左）孩子的遍历方式，其C代码如下

void ZXBL(tree* root){
  if(root->lchild!=NULL)
    ZXBL(root->lchild);
  //Do Something with root
  if(root->rchild!=NULL)
    ZXBL(root->rchild);
}
后序遍历(Post-Order Traversal)[编辑]
指先访问孩子，然后访问根的遍历方式，其C代码如下

void HXBL(tree* root){
  if(root->lchild!=NULL)
    HXBL(root->lchild);
  if(root->rchild!=NULL)
    HXBL(root->rchild);
  //Do Something with root
}
广度优先遍历[编辑]
和深度优先遍历不同，广度优先遍历会先访问离根节点最近的节点。二叉树的广度优先遍历又称按层次遍历。算法借助队列实现。

void Layer_Traver(tree* root) {

   int head = 0,tail = 0;
   tree* p[SIZE] = {NULL};
   tree* tmp;
   if(root != NULL)
   {
       p[head] = root;
       tail++;
       //Do Something with p[head]
   }
   else
   {
       return;
   }
   while(head < tail)
   {
       tmp = p[head];
       if(tmp->left != NULL)//left
       {
           p[tail] = tmp->left;
           tail++;
           //Do Something with p[head]
       }
       if(tmp->right != NULL)//right
       {
           p[tail] = tmp->right;
           tail++;
           //Do Something with p[head]
       }
       head++;
   }
   return;
}

```