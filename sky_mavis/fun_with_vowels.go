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

// public class Main {
//     /*
//         algo:
//         keep map of runningLongestSubsequence that ends in each letter. loop through String s. for each char, try appending
//         to runningLongestSubsequence for that char, as well as to runningLongestSubsequence for preceding char.
//         update map with whichever results in longer subsequence.

//         for String s = "ieaeiouiaooeeeaaeiou", final map is:
//         terminal letter in longest running subsequence-> longest running subsequence
//         a -> aaaa
//         e -> aeeeee
//         i -> aeeeeei
//         o -> aeeeeeio
//         u -> aeeeeeiou

//         naming:
//         precCharMap - precedingCharMap
//         runningLongestSubMap - runningLongestSubsequenceMap
//      */

//     public static int longestSubsequence(String s) {

//         if (s.length() <= 0) throw new IllegalArgumentException();

//         Map<Character, Character> precCharMap = new HashMap<>();
//         precCharMap.put('u', 'o');
//         precCharMap.put('o', 'i');
//         precCharMap.put('i', 'e');
//         precCharMap.put('e', 'a');

//         Map<Character, String> runningLongestSubMap = new HashMap<>();

//         for (char currChar : s.toCharArray()) {
//             //get longest subs
//             String currCharLongestSub;
//             String precCharLongestSub = null;
//             if (currChar == 'a') {
//                 currCharLongestSub = runningLongestSubMap.getOrDefault(currChar, "");
//             } else {
//                 currCharLongestSub = runningLongestSubMap.get(currChar);
//                 char precChar = precCharMap.get(currChar);
//                 precCharLongestSub = runningLongestSubMap.get(precChar);
//             }

//             //update running longest subsequence map
//             if (precCharLongestSub == null && currCharLongestSub != null) {
//                 updateRunningLongestSubMap(currCharLongestSub, currChar, runningLongestSubMap);
//             } else if (currCharLongestSub == null && precCharLongestSub != null) {
//                 updateRunningLongestSubMap(precCharLongestSub, currChar, runningLongestSubMap);
//             } else if (currCharLongestSub != null && precCharLongestSub != null) {
//                 //pick longer
//                 if (currCharLongestSub.length() < precCharLongestSub.length()) {
//                     updateRunningLongestSubMap(precCharLongestSub, currChar, runningLongestSubMap);
//                 } else {
//                     updateRunningLongestSubMap(currCharLongestSub, currChar, runningLongestSubMap);
//                 }
//             }
//         }

//         if (runningLongestSubMap.get('u') == null) {
//             return 0;
//         }
//         return runningLongestSubMap.get('u').length();
//     }

//     private static void updateRunningLongestSubMap(String longestSub, char currChar,
//                                                    Map<Character, String> runningLongestSubMap) {
//         String currCharLongestSub = longestSub + currChar;
//         runningLongestSubMap.put(currChar, currCharLongestSub);
//     }

//     public static void main(String[] args) {
//         //String s = "aeeiooua"; //7
//         //String s = "aeiaaioooaauuaeiou"; //10
//         String s = "ieaeiouiaooeeeaaeiou"; //9
//         //String s = "ieaeou"; //0
//         //String s = "ieaeoooo"; //0
//         //String s = "aeiou"; //5
//         //if u have String s beginning in "ao", it'll do nothing with o and
//         //continue on to index 2.

//         System.out.println(longestSubsequence(s));
//     }
// }

package skymavis

import "fmt"

func LongestVowelSubsequence(s string) int {
	if len(s) <= 0 {
		panic("Invalid argument")
	}

	precCharMap := map[string]string{
		"u": "o",
		"o": "i",
		"i": "e",
		"e": "a",
	}

	runningLongestSubMap := map[string]string{}

	// aeeioou
	for i := 0; i < len(s); i++ {
		//get longest subs
		var currCharLongestSub string
		var precCharLongestSub string
		var currChar string = string(s[i])
		if currChar == "a" {
			currCharLongestSub = runningLongestSubMap[currChar]
		} else {
			currCharLongestSub = runningLongestSubMap[currChar]
			precChar := precCharMap[currChar]
			precCharLongestSub = runningLongestSubMap[precChar]
			fmt.Println("currChar: ", currChar)
			fmt.Println("precCharLongestSub: ", precCharLongestSub)
			fmt.Println("currCharLongestSub: ", currCharLongestSub)
		}

		//update running longest subsequence map
		if precCharLongestSub == "" && currCharLongestSub != "" {
			updateRunningLongestSubMap(currCharLongestSub, currChar, runningLongestSubMap)
		} else if currCharLongestSub == "" && precCharLongestSub != "" {
			updateRunningLongestSubMap(precCharLongestSub, currChar, runningLongestSubMap)
		} else if currCharLongestSub != "" && precCharLongestSub != "" {
			//pick longer
			if len(currCharLongestSub) < len(precCharLongestSub) {
				updateRunningLongestSubMap(precCharLongestSub, currChar, runningLongestSubMap)
			} else {
				updateRunningLongestSubMap(currCharLongestSub, currChar, runningLongestSubMap)
			}
		}
	}

	if runningLongestSubMap["u"] == "" {
		fmt.Println("runningLongestSubMap['u'] is nil")
		return 0
	}
	return len(runningLongestSubMap["u"])
}

func updateRunningLongestSubMap(longestSub string, currChar string, runningLongestSubMap map[string]string) {
	currCharLongestSub := longestSub + string(currChar)
	runningLongestSubMap[currChar] = currCharLongestSub
}
