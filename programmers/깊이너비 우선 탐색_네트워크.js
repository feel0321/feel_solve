function solution(n, computers) {
    const visited = Array.from({ length: n }, () => false)
    let answer = 0;

    for (let i = 0; i < n; i++) {
        if (visited[i]) continue;
        dfs(i)
        answer += 1;
    }

    function dfs(idx) {
        visited[idx] = true;
        for (let i2 = 0; i2 < n; i2++) {
            if (computers[idx][i2] && !visited[i2]) {
                dfs(i2)
            }
        }
    }
    
    return answer
}
