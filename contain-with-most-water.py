class Solution:
    def maxArea(self, height: List[int]) -> int:
        if len(height) < 2:
            return 0
        i = 0 
        j = len(height) - 1
        water = 0 
        while i < j:
            local_water = min(height[i], height[j]) * (j - i)
            water = max(water, local_water)
            if(height[i] < height[j]):
               i += 1
            else:
                j -= 1
        return water  