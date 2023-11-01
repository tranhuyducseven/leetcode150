function findSubstring(s: string, words: string[]): number[] {
    const result: number[] = [];
    const map: Map<string, number> = new Map();
    for (const word of words) {
        map.set(word, (map.get(word) || 0) + 1);
    }

    const wordLength = words[0].length;
    const totalLength = words.length * wordLength;
    const l = s.length - totalLength;
    if (l < 0) {
        return result;
    }

    for (let i = 0; i <= l; i++) {
        const subMap: Map<string, number> = new Map(map);
        let c = 0;
        for(let j = i; j < s.length; j+= wordLength) {
            const sub = s.substring(j, j + wordLength);
            let value = subMap.get(sub);
            if (value === undefined) {
                break;
            }
            if (value > 0) {
                c++;
                value--;
                subMap.set(sub, value);
            }
            else{
                break;
            }
        }

        if (c === words.length) {
            result.push(i);
        }        
    }
    return result;
}