class Solution:
    def isSubsequence(self, s: str, t: str) -> bool:
        len1 = len(s)
        len2 = len(t)
        if len1 == len2:
            return s == t
        if len1 == 0:
            return True
        if len1 > len2:
            return False
        
        k = 0
        i = 0
        while i < len2 and k < len1:
            if t[i] == s[k]:
               k += 1
            i += 1

        if k != len1:
            return False
        return True

        