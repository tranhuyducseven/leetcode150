/**

A number of cities are arranged on a graph that has been divided up like an ordinary Cartesian plane. Each city is located at an integral (x, y) coordinate intersection.
City names and locations are given in the form of three arrays: c, x, and y, which are aligned by the index to provide the city name (c[i]), and its coordinates, (x[i], y[i]).
Determine the name of the nearest city that shares either an x or a y coordinate with the queried city. If no other cities share an x or y coordinate, return 'NONE'.
If two cities have the same distance to the queried city, q[i], consider the one with an alphabetically shorter name (i.e. 'ab' < 'aba'<'abb') as the closest choice.
The distance is the Manhattan distance, the absolute difference in x plus the absolute difference in y.

Coordinate values are all integers.
  C1 (x,y) = (3, 3)
  C2 (2, 2)
  C3 (3, 1)


The three points at (x[i], y[i]) are (3, 3), (2, 2) and (1, 3) represent the coordinates of the cities on the graph. The nearest city to c1 is c3, which shares a yvalue (distance = (3-1)+(3-3)= 2). City c2 does not have a nearest city as none share an x or y with c2, so this query returns 'NONE': A query of c3 returns c7 based on the first return array after all queries are complete is ['c3', 'c7'].


**/

package skymavis
