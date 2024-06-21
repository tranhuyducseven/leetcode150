/**
A subsequence is a sequence of letters in a string in order, but with any number of character removed.

For example, 3 letter subsequences of abcd are abc, abd, acd and bcd. Vowels are letters in the string {a, e, i, o, u}

Given a string, determine the length of the longest subsequence that contains all the vowels in order.

Example:

s = "aeeiiouu"

All 5 vowels are present in order, so the length of the entire string, 8, is returned.

s = "aeeiiaouu"

Again, all 5 vowels are present in the correct order, though they dont make the entire string. The 'a' at position 5 must be removed since it is out of order, leaving 'aeeiiouu'. The length of this string is 8, so 8 is returned.

Function Description

Complete the function longestVowelSubsequence in the editor below.

longestVowelSubsequence has the following parameter(s):

	string s: a string

Returns:

	int: an integer that represents the length of the longest subsequence that contains all the vowels in order

Constraints:

	5 ≤ |s| ≤ 5 * 10^5
	Each character of s is a lowercase letter of "a", "e", "i", "o", or "u"

**/

package skymavis
