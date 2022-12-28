
function solution(begin, target, words) {
    if (!words.includes(target)) {
        return 0;
    }
    
    const queue = [[begin, 0]];
    const visited = [];
    
    while (queue.length) {
        const [currentWord, jump] = queue.shift();
        if (currentWord === target) {
            return jump;
        }
        
        visited.push(currentWord)
        for (const word of words) {
            let diffCount = 0;
            for (let i = 0; i < word.length; i++) {
                if (word[i] !== currentWord[i]) {
                    diffCount += 1;
                }                
            }
            if (diffCount === 1 && !visited.includes(word)) {
                queue.push([word, jump + 1])
            }
        }
    }
}