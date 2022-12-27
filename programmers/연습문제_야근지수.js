function solution(n, works) {
    const currentSum = works.reduce((acc, work) => acc + work, 0);
    if (n >= currentSum) return 0
    
    works.sort();
    while (n > 0) {
        const max = Math.max(...works)
        for (let i = works.length - 1; i >= 0; i--) {
            if (n > 0 && works[i] === max) {
                works[i] -= 1;
                n -= 1;
            }
        }   
    }    
    
    return works.reduce((acc, work) => acc + work ** 2, 0)
}
