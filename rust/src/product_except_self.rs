struct Solution;

type Record = (i32, i32);

impl Solution {
    pub fn product_except_self(nums: Vec<i32>) -> Vec<i32> {
        let length = nums.len();
        let mut records: Vec<Record> = vec![(0, 0); length];

        let mut prev = 1;
        let mut next = 1;

        for i in 0..length {
            println!("i: {}", i);
            records[i].0 = prev;
            records[length - i - 1].1 = next;
            prev *= nums[i];
            next *= nums[length - i - 1];
        }

        return records.iter().map(|(a, b)| a * b).collect();
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_1() {
        assert_eq!(
            Solution::product_except_self(vec![1, 2, 3, 4]),
            vec![24, 12, 8, 6]
        );
    }
}
