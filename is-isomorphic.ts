function isIsomorphic(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }
  const map1: Map<string, number> = new Map();
  const map2: Map<string, number> = new Map();
  for (let i = 0; i < s.length; i++) {
    if (map1[s[i]] !== map2[t[i]]) {
      return false;
    }
    map1[s[i]] = i + 1;
    map2[t[i]] = i + 1;
  }
  return true;
}

isIsomorphic("foo", "bar");
