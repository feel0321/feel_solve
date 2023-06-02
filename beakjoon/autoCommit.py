from git import Repo
from time import sleep
import os
from re import findall

if __name__ == "__main__":
    cur_dir = os.path.abspath(os.curdir)
    FOLDER = "beakjoon"
    os.chdir(cur_dir.split(FOLDER)[0])

    PATH_TARGET = os.path.abspath(os.curdir)

    repo = Repo(PATH_TARGET)
    repo.remotes.origin.pull()
    filenames = [filename for filename in repo.untracked_files if filename.startswith(f"{FOLDER}/")]
    for filename in filenames:
        try:
            fileNum = findall("[0-9]+", os.path.basename(filename))[0]
            repo.git.add(filename)
            repo.index.commit(f"feat: 백준 {fileNum}번 문제 해결")
            sleep(1)
        except IndexError as e:
            print(f"[ERROR] '{filename}' is wrong file name. ex) 3381_Barrel.py or Barrel_3381.js")
            exit()
        except Exception as e:
            print(e)
            exit()
