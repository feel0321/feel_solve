function solution(triangle) {
    const dp = [...triangle[triangle.length - 1]];
    
    for (let i = triangle.length - 2; i >= 0; i--) {
        for (let j = 0; j <= i; j++) {
            dp[j] = triangle[i][j] + Math.max(dp[j], dp[j + 1]);
        }
    }
    
    return dp[0];
}
/*
1
2 3
4 5 6

과 같은 삼각형을 위에서 아래로 내려오면서 최대합을 구하는것은 맨 아래에서 올라가는것과 같다. 덧셈이니까
아래에서 위로 올라가면 첫 배열 크기 할당 후 더 할당하지 않아도 된다
*/