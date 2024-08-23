package skymavis_test

import (
	"fmt"
	skymavis "leetcode150/sky_mavis"
	"testing"
)

// go test -v -run ^TestLongestSubSeq$ leetcode150/sky_mavis
func TestLongestSubSeq(t *testing.T) {
	testCases := []struct {
		input    string
		expected int
	}{
		{"aeeioou", 7},
		// {"aeiaaioooaauuaeiou", 10},
		// {"ieaeiouiaooeeeaaeiou", 9},
		// {"ieaeou", 0},
		// {"ieaeoooo", 0},
		// {"aeiou", 5},
	}

	for _, tc := range testCases {
		t.Run(fmt.Sprintf("LongestVowelSubsequence(%v)", tc.input), func(t *testing.T) {
			if got := skymavis.LongestVowelSubsequence(tc.input); got != tc.expected {
				t.Errorf("expected %v, got %v", tc.expected, got)
			}
		})
	}
}
