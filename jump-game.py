class Solution:
    def canJump(self, nums: List[int]) -> bool:
        i = 0 
        max_reachable_steps = 0
        while i < (len(nums)):
            if i > max_reachable_steps:
                return False
            # steps was calculated from 0-index element,
            # so increase index -> step then += 1
            max_reachable_steps = max(max_reachable_steps, nums[i] + i)
            i += 1
        return True