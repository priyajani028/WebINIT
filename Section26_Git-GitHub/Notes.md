## NOTES

check this: https://learngitbranching.js.org/

Version control -> helps you to manage diffrent versions of your project

To initialize:

git init

git status: to track changes (shows untracked files)

git add xyz.txt: to add (xyz.txt files goes into staging area)

git add . : to add all files 

git commit -m "" : To commit changes, A new savepoint  (Use present tense...like instead of completed xyx.txt , write compelte xyx.txt )

git log: to see all commits


So...


Q: why there is an extra layer called staging area?

A: we have it as we don't always want to commit directly to the repo, so it acts as an area that if we are satisfied with the work  and its error-free then only we commit the changes.


git checkout xyz.txt:  to rollback or revert back the changes (from git repo to working directory)

git diff xyz.txt :  shows the changes over tracked version and modified changes

git remote add origin https://github.com/sdsjhdfh.git : adds origin

git push -u origin master : push changes to master branch


Working directory (where you initailize your project) ----(git add)----> Staging Area (where untracked files are staged before commitment ) ---git commit---> Git repository

local repo will have timeline of differentversions/commits of master branch

Remote repo(github): local repo which are .git files are then moved to github and are hosted on that platform when git push is done.

.gitignore :  this file is ignored by github .. mainly used for storing api keys, password, dark secrets

git rm --cached -r . : to remove all the files from staging area.


## **Cloning**

to clone from remote to your working directory

git clone {url}: to clone 


## **Branching & Merging**

![image](https://github.com/priyajani028/WebINIT/assets/87660206/80f7b65c-907f-4b28-9774-2582b544d4bb)

git branch abc : makes new branch

git branch: to view all branch

git checkout abc: to switch to abc branch

Do all normal things that you do in master branch like git add . ,git commit -m ""

then  for merging,

go back to main master branch using git checkout master

git merge abc : to merge .. if text msg box appears, you can escape by :q! 



# **Forking and Pull Requests**

Fork : to get access to repo by owning a copy so that he/she can change by cloning it and can work on the same

Pull requests? they are the requests done by saamne wali party so that they are pulled into original repo and then can be merged


![image](https://github.com/priyajani028/WebINIT/assets/87660206/975f9cc2-77cb-4264-91ed-33db15e73878)


