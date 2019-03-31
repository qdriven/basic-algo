class TreeTopic:
    class TreeNode:
        def __init__(self, x):
            self.val = x
            self.left = None
            self.right = None

    def __init__(self):
        pass

    def verify_sequence_of_BST(self, sequence):
        if sequence == []:
            return False

        root = sequence[-1]
        length = len(sequence)
        if min(sequence) > root or max(sequence)<root:
            return True

        index = 0
        