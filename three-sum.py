class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        if len(nums) < 3:
            return []
        
        nums.sort()
        result = []
        i = 0
        result = []
        while i < len(nums) - 2:
            if nums[i] > 0:
                break
            if i > 0 and nums[i] == nums[i-1]:
                i += 1
                continue
            left = i + 1
            right = len(nums) -1
            while left < right:
                sum = nums[i] + nums[left] + nums[right]
                if sum < 0:
                    left += 1
                elif sum > 0:
                    right -= 1
                else:
                    res = [nums[i], nums[left], nums[right]]
                    result.append(res)
                    while left < right and nums[left] == res[1]:
                        left += 1
                    while left < right and nums[right] == res[2]:
                        right -= 1
               
            i += 1
        return result

#         # -4 -1 -1 0 1 2
