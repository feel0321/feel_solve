function isValid(s: string): boolean {
  const myObj = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  const arr = [];

  for (let i = 0; i < s.length; i++) {
    if (Object.keys(myObj).includes(s[i])) {
      arr.push(myObj[s[i]]);
      continue;
    }

    if (arr[arr.length - 1] === s[i]) {
      arr.pop();
      continue;
    }
    return false;
  }
  return !Boolean(arr.length);
}
