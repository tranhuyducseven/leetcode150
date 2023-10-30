class Solution:
    def rotate(self, nums: List[int], k: int) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        n = len(nums)
        k = k % n
        if k == 0:
            return
        right = nums[n-k:n]
        i = n - 1
        while i > k - 1:
            nums[i] = nums[i-k]
            i -= 1
        i = 0
        while i < k:
            nums[i] = right[i]
            i += 1       

