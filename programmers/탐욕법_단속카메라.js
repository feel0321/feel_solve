function solution(routes) {
  let cameraPosition = Number.MIN_SAFE_INTEGER;
  let count = 0;

  routes
    .sort((a, b) => a[1] - b[1])
    .forEach((route) => {
      const [start, end] = route;

      if (start > cameraPosition) {
        count += 1;
        cameraPosition = end;
      }
    });

  return count;
}
