/**

31. Maximum Knowledge
There is going to be a conference for d days. The schedule of n meetings is given as three arrays, s (start), e (end), and a (additional knowledge gained).
The ith meeting is available from [s[i], e[i]] days (both inclusive) and provides a knowledge
gain of a[i]. A limit of k meetings can be attended in one day.
Find the maximum knowledge that can be gained in a day.
Example
d = 10
n = 4
k = 2
s = [2, 5, 4, 3]
e = [8, 9, 7, 5]
a = [800, 1600, 200, 400]


Table:
 * | Meeting | Start | End | Additional Knowledge |
 * |---------|-------|-----|----------------------|
 * | 1       | 2     | 8   | 800                  |
 * | 2       | 5     | 9   | 1600                 |
 * | 3       | 4     | 7   | 200                  |
 * | 4       | 3     | 5   | 400                  |
 *
 * For day 1, the knowledge gain is zero
 * For day 2, the knowledge gain is 800 by attending meeting 1
 * For day 3, the knowledge gain is 1200 by attending meeting 1, 4
 * For day 5, the knowledge gain is 2400 by attending meeting 1, 2
 * No combination of 2 meetings provides a knowledge gain of more than 2400. Return 2400.

Function Description:
Complete the function maxKnowledgeGain in the editor below.

maxKnowledgeGain has the following parameter(s):
	int d: the number of days
	int s[n]: the start day of the ith meeting
	int e[n]: the end day of the ith meeting
	int a[n]: the additional knowledge gained by attending the ith meeting
	int k: the maximum number of meetings that can be attended in one day

Returns:
	int: the maximum knowledge that can be gained in a day

Constraints:
	1 <= k <= n <= 10^3
	1 <= s[i] <= e[i] <= d <= 10^9
	1 <= a[i] <= 10^6
**/

package skymavis
