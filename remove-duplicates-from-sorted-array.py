class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        if len(nums) == 1:
            return 1
        current = nums[0]
        k = 1
        i = 1
        while i < len(nums):
            if nums[i] != current:
                current = nums[i]
                nums[k] = nums[i]
                k += 1
            else:
                i += 1
        return k
            


        