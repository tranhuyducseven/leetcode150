class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        if len(numbers) == 0:
            return []
        i = 0
        j = len(numbers) - 1
        while i < j:
            if numbers[i] + numbers[j] < target:
                i += 1
                continue
            if numbers[i] + numbers[j] > target:
                j -= 1
                continue
            return [i+1, j+1]                  

        return []
        
        
