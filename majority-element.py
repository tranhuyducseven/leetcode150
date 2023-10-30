class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        n = len(nums)
        map_ = defaultdict(int)
        for num in nums:
            map_[num] += 1
        n = n // 2
        for key, value in map_.items():
            if value > n:
                return key
        return 0

class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        nums.sort()
        n = len(nums)
        return nums[n//2]

class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        n = len(nums)
        map_ = defaultdict(int)
        count = 0 
        candidate = 0
        for num in nums:
            if count == 0:
                candidate = num
            if num == candidate:
                count += 1
            else:
                count -=1
            
        return candidate
