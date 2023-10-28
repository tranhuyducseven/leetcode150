class Solution:
    def minSubArrayLen(self, target: int, nums: List[int]) -> int:
        if len(nums) == 0:
            return 0
        s = 0
        i = 0
        while i < len(nums):
            s += nums[i]
            i += 1
        if s < target:
            return 0
        min_length = len(nums)
        left = 0
        right = 0 
        s = 0
        while right < len(nums):
            s += nums[right]
            while s >= target:
                min_length = min(min_length, right - left + 1)
                s -= nums[left]
                left += 1
            right += 1
        return min_length

        