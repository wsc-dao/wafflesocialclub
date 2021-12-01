#!/bin/bash
commiter_name=$(whoami)
today_date=$(date +%d-%m-%y-%HH-%MM-%SS)
echo $commiter_name
echo $today_date

git add *
git commit -m "$commiter_name : $today_date"
git push

# git checkout -b <newbranch>
# git push -u origin HEAD
# git push origin --delete dev_toan
# git branch -d localBranchName

