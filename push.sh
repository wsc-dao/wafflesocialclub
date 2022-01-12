#!/bin/bash
commiter_name=$(whoami)
today_date=$1
echo $commiter_name
echo $today_date

git add *
git commit -m "$commiter_name : $today_date $2"
git push

# git checkout -b <newbranch>
# git push -u origin HEAD
# git push origin --delete dev_toan
# git branch -d localBranchName

