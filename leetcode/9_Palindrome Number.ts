function isPalindrome(x: number): boolean {
  const str_x = String(x);
  for (let i = 0; i < Math.floor(str_x.length / 2); i++) {
    if (str_x[i] !== str_x[str_x.length - 1 - i]) return false;
  }
  return true;
}
