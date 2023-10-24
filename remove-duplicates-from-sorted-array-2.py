class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        if len(nums) == 1:
            return 1
        i = 1
        k = 0
        current = nums[0]
        flag = True # 1 2 (nums of inserted element)
        while i < len(nums):
            if current != nums[i]:
                current = nums[i]
                k = k + 1
                nums[k] = nums[i]
                flag = True             
            else:
                if flag:
                    k += 1
                    nums[k] = current
                    flag = False                
            i += 1
        return k + 1
        