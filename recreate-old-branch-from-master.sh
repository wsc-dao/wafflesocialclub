#!/bin/bash
commiter_name=$(whoami)
today_date=$(date +%d-%m-%y-%HH-%MM-%SS)
echo $commiter_name
echo $today_date

git push origin --delete $1
git branch -D $1
git checkout master
git checkout -b $1
git push -u origin HEAD

# git checkout -b <newbranch>
# git push -u origin HEAD
# git push origin --delete dev_toan
# git branch -d localBranchName

