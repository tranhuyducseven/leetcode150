function minWindow(s: string, t: string): string {
    if (s.length < t.length) {
        return "";
    }
    const map1: Map<string, number> = new Map();
    const map2: Map<string, number> = new Map();
    for (let i = 0; i < t.length; i++) {
        map1.set(t[i], map1.has(t[i]) ? map1.get(t[i]) + 1 : 1);
    }
    let left: number = 0;
    let right: number = 0;
    let count: number = 0;
    let minLen: number = Number.MAX_SAFE_INTEGER;
    let res: string = "";
    while (right < s.length) {
        if (map1.has(s[right])) {
            map2.set(s[right], map2.has(s[right]) ? map2.get(s[right]) + 1 : 1);
            if (map2.get(s[right]) <= map1.get(s[right])) {
                count++;
            }
        }
        while (count === t.length) {
            if (right - left + 1 < minLen) {
                minLen = right - left + 1;
                res = s.substring(left, right + 1);
            }
            if (map1.has(s[left])) {
                map2.set(s[left], map2.get(s[left]) - 1);
                if (map2.get(s[left]) < map1.get(s[left])) {
                    count--;
                }
            }
            left++;
        }
        right++;
    }
    return res;
};