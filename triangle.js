const triangle = (numOfRow) => {
    if (numOfRow === 1) return [1];
    if (numOfRow < 1) return [];
    let triangle = [[1]];
    for (let i = 1; i < numOfRow; i++) {
        let prev = triangle[i - 1];
        let current = [];
        current.push(1);
        for (let j = 1; j < prev.length; j++) {
            current[j] = prev[j] + prev[j - 1];
        }
        current.push(1);
        triangle.push(current);
    }
    return triangle;
}
console.log(triangle(5))
//The output should be equal to [[1], [1, 1], [1, 2, 1],[1, 3, 3, 1], [1,4, 6, 4, 1]]