# from glob import glob
from os import getenv, path
from re import findall
from requests import get
from datetime import datetime
from urllib.parse import quote
from notion_client import Client
from pytz import timezone

commit_message = getenv("COMMIT_MESSAGE")
problem_num = findall(r"\d+", commit_message)[0]


repo = getenv("GITHUB_REPOSITORY")
branch = getenv("GITHUB_REF").split("/")[-1]

file_list_path = "changed_files.txt"
filename = None
with open(file_list_path, "r") as f:
    for line in f:
        file_name = line.strip()
        if int(problem_num) in map(int, (findall("[0-9]+", path.basename(file_name)))):
            filename = quote(file_name)
            break

if filename == None:
    raise Exception("File is not exist")


json_data = get(
    f"https://solved.ac/api/v3/problem/show?problemId={problem_num}", headers={"Accept": "application/json"}
).json()


algos = []
for tag in json_data.get("tags"):
    for tag_info in tag.get("displayNames"):
        if tag_info.get("language") == "ko":
            algos.append({"name": tag_info.get("name")})

cores = ["브론즈", "실버", "골드", "플레티넘", "다이아몬드", "루비"]
levels = [1, 5, 4, 3, 2]
N = json_data.get("level")
core = cores[(N - 1) // 5]
level = levels[N % 5]

title = f"{problem_num}_{json_data['titleKo']}"


commit_timestamp = getenv("GITHUB_EVENT_HEAD_COMMIT_TIMESTAMP")
commit_datetime = datetime.fromisoformat(commit_timestamp)

kst = timezone("Asia/Seoul")
commit_datetime_kst = commit_datetime.astimezone(kst)


now_date = commit_datetime_kst.strftime("%Y-%m-%d")

notion = Client(auth=getenv("NOTION_TOKEN"))
database_id = getenv("DATABASE_ID")

new_record = {
    "상태": {"type": "select", "select": {"name": "해결"}},
    "문제 링크": {"type": "url", "url": f"https://www.acmicpc.net/problem/{problem_num}"},
    "단계": {"type": "multi_select", "multi_select": [{"name": f"{core} {level}"}]},
    "날짜": {"type": "date", "date": {"start": now_date, "end": None, "time_zone": None}},
    "깃헙 링크": {"type": "url", "url": f"https://github.com/{repo}/blob/{branch}/{filename}"},
    "사람": {"type": "people", "people": [{"object": "user", "id": getenv("NOTION_SELF_ID")}]},
    "출처": {"type": "multi_select", "multi_select": [{"name": "백준"}]},
    "알고리즘 분류": {"type": "multi_select", "multi_select": algos},
    "문제명": {
        "id": "title",
        "type": "title",
        "title": [
            {
                "type": "text",
                "text": {"content": title, "link": None},
                "plain_text": title,
            }
        ],
    },
}

notion.pages.create(parent={"database_id": database_id}, properties=new_record)
