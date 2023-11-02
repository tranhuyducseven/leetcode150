function canConstruct(ransomNote: string, magazine: string): boolean {
    const table: Map<string, number> = new Map();

    for(let i = 0; i < magazine.length; i++){
        if(magazine[i] in table){
            table[magazine[i]]++
        }
        else{
            table[magazine[i]] = 1
        }
    }

    for(let i = 0; i < ransomNote.length; i++){
        if(!(ransomNote[i] in table) || table[ransomNote[i]] == 0){
            return false
        }
        table[ransomNote[i]] --;
    }

    return true

};