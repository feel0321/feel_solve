function solution(record) {
  let userInfo = {};

  for (let command of record) {
    const [what, id, name] = command.split(" ");

    if (what === "Enter") {
      userInfo[id] = name || userInfo[id];
    }
    if (what === "Change") {
      userInfo[id] = name;
    }
  }

  const answer = record.reduce((result, command) => {
    const [what, id] = command.split(" ");
    if (what === "Enter") {
      result.push(`${userInfo[id]}님이 들어왔습니다.`);
    }
    if (what === "Leave") {
      result.push(`${userInfo[id]}님이 나갔습니다.`);
    }
    return result;
  }, []);

  return answer;
}
