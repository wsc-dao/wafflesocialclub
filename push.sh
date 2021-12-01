var commiter_name = whoami
var today_date = date +"%d-%m-%y-%HH-%MM-%SS"
echo $commiter_name
echo $today_date

git add *
git commit -m "$commiter_name : $today_date"
git push
