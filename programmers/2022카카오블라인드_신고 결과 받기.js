function solution(id_list, report, k) {
  let report_info = {};
  let mail_count = {};

  for (let command of report) {
    const [sender, receiver] = command.split(" ");

    if (report_info[receiver] && report_info[receiver].includes(sender))
      continue;
    report_info[receiver] = [...(report_info[receiver] || []), sender];
  }

  for (let id of id_list) {
    if (report_info[id] && report_info[id].length >= k) {
      for (let id2 of report_info[id])
        mail_count[id2] = mail_count[id2] ? mail_count[id2] + 1 : 1;
    }
  }

  const answer = id_list.map((id) => mail_count[id] || 0);
  return answer;
}

// case1
const id_list = ["muzi", "frodo", "apeach", "neo"];
const report = [
  "muzi frodo",
  "apeach frodo",
  "frodo neo",
  "muzi neo",
  "apeach muzi",
];
const k = 2;

// case2
// const id_list = ["con", "ryan"];
// const report = ["ryan con", "ryan con", "ryan con", "ryan con"];
// const k = 3;
console.log(solution(id_list, report, k));
