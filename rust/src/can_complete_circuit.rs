use std::vec;

struct Solution;

impl Solution {
    pub fn can_complete_circuit(gas: Vec<i32>, cost: Vec<i32>) -> i32 {
        let length = gas.len();
        let mut sum_cost = 0;
        let mut sum_gas = 0;

        for i in 0..length {
            sum_cost += cost[i];
            sum_gas += gas[i];
        }

        if sum_gas < sum_cost {
            return -1;
        }

        let mut start = 0;
        let mut tank = 0;

        for i in 0..length {
            tank += gas[i] - cost[i];
            if tank < 0 {
                start = i + 1;
                tank = 0;
            }
        }

        start as i32
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_1() {
        assert_eq!(
            Solution::can_complete_circuit(vec![1, 2, 3, 4, 5], vec![3, 4, 5, 1, 2]),
            3
        );
    }

    #[test]
    fn test_2() {
        assert_eq!(
            Solution::can_complete_circuit(vec![2, 3, 4], vec![3, 4, 3]),
            -1
        );
    }

    #[test]
    fn test_3() {
        assert_eq!(
            Solution::can_complete_circuit(vec![5, 5, 1, 3, 4], vec![8, 1, 7, 1, 1]),
            3
        );
    }
}
