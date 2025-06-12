yum install -y python3
yum install -y git
yum install -y mod_wsgi
git clone https://punnasaiganesh111:glpat-fUYfZ-CkbZ782ZjUBtVv@gitlab.com//saga-studios/mini-project/speech-transcriptor/frontend.git
git clone https://punnasaiganesh111:glpat-fUYfZ-CkbZ782ZjUBtVv@gitlab.com//saga-studios/mini-project/speech-transcriptor/backend.git
mv frontend/* /opt/applications/container/apache-2.4.59/htdocs/
mv backend/* /var/www/backend/
echo "Stage completed! to proceed with running application, run run-appication.sh"