name = whoami
date = date +"%d-%m-%y-%HH-%MM-%SS"
echo $name
echo $date

git add *
git commit -m "$name : $date"
git push
