class Solution:
    def removeElement(self, nums: List[int], val: int) -> int:
        l = len(nums)
        i = 0 
        k = 0
        while i < l:
            if nums[i] != val:
                nums[k] = nums[i]
                k += 1
            i += 1
        return k

        