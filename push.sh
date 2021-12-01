name = whoami
date = date +"%d-%m-%y-%HH-%MM-%SS"

git add *
git commit -m "$name : $date"
git push
