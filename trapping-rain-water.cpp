#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

class Solution {
public:
    int trap(vector<int>& height) {
        int l = 0;
        int r = height.size() - 1;
        int left_max = INT_MIN;
        int right_max = INT_MIN;
        int water = 0;
        while(l < r){
            left_max = max(left_max, height[l]);
            right_max = max(right_max, height[r]);
            water += left_max < right_max ? left_max - height[l++] : right_max - height[r--];

        }
        return water;
    }

};