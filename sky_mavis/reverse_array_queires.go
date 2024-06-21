/**

For a given array of integers, perform operations on the array. Return the resulting array after all operations have been applied in the order given. Each operation contains two indices. Reverse the subarray between those zero-based indices, inclusive.

Example
arr = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
operations = [[0, 9], [4, 5], [3, 6], [2, 7], [1, 8], [0, 9]]

Operations:
 * | Operation | Left           | To Reverse         | Right        | Result         |
 * |-----------|----------------|--------------------|--------------|----------------|
 * | [0, 9]    | []             | [9, 8, 7, 6, 5,    |              | [0, 1, 2, 3, 4,|
 * |           |                |  4, 3, 2, 1, 0]    | []           | 5, 6, 7, 8, 9] |
 * |-----------|----------------|--------------------|--------------|----------------|
 * | [4, 5]    | [0, 1, 2, 3]   | [4, 5]             | [6, 7, 8, 9] | [0, 1, 2, 3, 5,|
 * |           |                |                    |              | 4, 6, 7, 8, 9] |
 * |-----------|----------------|--------------------|--------------|----------------|
 * | [3, 6]    | [0, 1, 2]      | [3, 5, 4, 6]       | [7, 8, 9]    | [0, 1, 2, 6, 4,|
 * |           |                |                    |              | 5, 3, 7, 8, 9] |
 * |-----------|----------------|--------------------|--------------|----------------|
 * | [2, 7]    | [0, 1]         | [2, 6, 4, 5, 3, 7] | [8, 9]       |  [0, 1, 7, 3, 5,|
 * |           |                |                    |              | 4, 6, 2, 8, 9] |
 * |-----------|----------------|--------------------|--------------|----------------|
 * | [1, 8]    | [0]            | [1, 7, 3, 5, 4, 6, | [9]          | [0, 8, 2, 6, 4,|
 * |           |                |  2]                |              | 5, 3, 7, 1, 9] |
 * |-----------|----------------|--------------------|--------------|----------------|
 * | [0, 9]    | []             | [0, 8, 2, 6, 4, 5,|              | [9, 1, 7, 3, 5,|
 * |           |                |  3, 7, 1, 9]       | []           | 4, 6, 2, 8, 0] |
 * |-----------|----------------|--------------------|--------------|----------------|
 *
 * Result = [9, 1, 7, 3, 5, 4, 6, 2, 8, 0]

Function Description:
Complete the function reverseArray in the editor below.

reverseArray has the following parameter(s):
	int arr[n]: an array of integers
	int operations[m][2]: a 2D array of integers

Returns:
	int[]: an array of integers

Constraints:
	1 <= n <= 10^5
	1 <= m <= 10^5
	0 <= arr[i] <= 10^9
	0 <= operations[i][0] <= operations[i][1] < n

*/

package skymavis

func ReverseArrayQuery(arr []int, operations [][]int) []int {
	return []int{0}
}
