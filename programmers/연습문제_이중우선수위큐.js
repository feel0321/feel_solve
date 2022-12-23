function solution(operations) {
    let arr = [];
    
    for (const operation of operations) {
        const [command, number] = operation.split(" ");
        const num = Number(number);
        
        if (command === 'I') {
            arr.push(num);
            arr.sort((a, b) => a - b);
            continue;
        }
        
        if (arr.length === 0) continue
        
        switch (num) {
            case 1: {
                arr.pop();
                break;
            }
            case -1: {
                arr = arr.slice(1)
            }
        }
    }
    
    if (arr.length === 0) {
        return [0, 0]    
    }
    const max = Math.max(...arr)
    const min = Math.min(...arr)
    return [max, min]
}