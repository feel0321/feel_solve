/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color) {
  const initialColor = image[sr][sc];
  const dr = [1, 0, -1, 0];
  const dc = [0, 1, 0, -1];

  function dfs(currentSr, currentSc) {
    image[currentSr][currentSc] = color;

    for (let i = 0; i < 4; i++) {
      const nextSr = currentSr + dr[i];
      const nextSc = currentSc + dc[i];

      if (
        nextSr >= 0 &&
        nextSr < image.length &&
        nextSc >= 0 &&
        nextSc < image[0].length &&
        image[nextSr][nextSc] === initialColor
      ) {
        dfs(nextSr, nextSc);
      }
    }
  }

  if (image[sr][sc] !== color) {
    dfs(sr, sc);
  }

  return image;
};
