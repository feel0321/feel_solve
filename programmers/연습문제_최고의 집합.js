function solution(n, s) {
    if (n > s) {
        return [-1];
    }
    
    const value = Math.floor(s / n);
    const modular = s % n;
    const answer = Array.from({ length: n }, () => value);
    for (let i = 0; i < modular; i++) {
        answer[answer.length - 1 - i] += 1;
    }
    
    return answer
}