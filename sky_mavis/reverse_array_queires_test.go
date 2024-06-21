package skymavis_test

import (
	skymavis "leetcode150/sky_mavis"
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestReverseArrayQueries(t *testing.T) {
	restult := skymavis.ReverseArrayQuery([]int{9, 8, 7, 6, 5, 4, 3, 2, 1, 0}, [][]int{{0, 9}, {4, 5}, {3, 6}, {2, 7}, {1, 8}, {0, 9}})

	// TODO: Add more test cases
	assert.Equal(t, len(restult), 1)

}
