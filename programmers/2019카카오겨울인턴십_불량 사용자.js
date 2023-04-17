function solution(user_id, banned_id) {
  const banned_regExp = banned_id.map(
    (id) => new RegExp(id.replaceAll("*", "[a-z0-9]{1}"))
  );
  const result = [];

  function dfs(index, selected, used) {
    if (index === banned_id.length) {
      const sorted = [...selected].sort().join("");
      if (!result.includes(sorted)) {
        result.push(sorted);
      }
      return;
    }

    for (let i = 0; i < user_id.length; i++) {
      const candidate = user_id[i];
      if (used.includes(i) || banned_id[index].length !== candidate.length) {
        continue;
      }

      if (banned_regExp[index].test(candidate)) {
        selected.push(candidate);
        used.push(i);
        dfs(index + 1, selected, used);
        used.pop();
        selected.pop();
      }
    }
  }

  dfs(0, [], []);
  return result.length;
}
