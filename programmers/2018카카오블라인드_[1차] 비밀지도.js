function solution(n, arr1, arr2) {
  let new_map = [];

  for (let i in arr1) {
    let result = arr1[i].toString(2);
    while (result.length < n) result = "0" + result;
    arr1[i] = result;

    result = arr2[i].toString(2);
    while (result.length < n) result = "0" + result;
    arr2[i] = result;
  }

  for (let y = 0; y < n; y++) {
    new_map.push("");
    for (let x = 0; x < n; x++) {
      if (arr1[y][x] === "0" && arr2[y][x] === "0") {
        new_map[y] += " ";
        continue;
      }
      new_map[y] += "#";
    }
  }
  return new_map;
}
