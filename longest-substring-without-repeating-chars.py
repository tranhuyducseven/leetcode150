class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        table = [-1] * 128
        start = 0
        end = 0
        max_length = 0
        # the table with two state, greater of smaller the left
        while end < len(s):
            order = ord(s[end])
            if table[order] >= start:
                start = table[order] + 1 # jump to the right of the stored index
            table[order] = end # store the index of the char
            max_length = max(max_length, end - start + 1)
            end += 1
        return max_length