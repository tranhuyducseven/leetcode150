class Solution:
    def jump(self, nums: List[int]) -> int:
        i = 1
        if len(nums) == 1:
            return 0
        if nums[0] == 0:
            return 0
        while i < len(nums):
            nums[i] = max(nums[i] + i, nums[i-1])
            i += 1
        index = 0 
        result = 0
        while index < len(nums) - 1:
            result += 1
            index = nums[index]
        
        return result































































        