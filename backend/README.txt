1.create environment
   1.python -m venv env
   2.env\Scripts\activate

2.install packeges
    if you want install bundle of packeges follow the steps
    1.create a requirements.txt file and store below
        asgiref
        Django
        django-cors-headers
        djangorestframework
        djangorestframework-simplejwt
        PyJWT
        pytz
        sqlparse
        psycopg2-binary
        python-dotenv
    2.run the file CMD is pip install -r requirements.txt
    3.update pip
        python -m pip install --upgrade pip
        pip install django --upgrade

3.install django project
    django-admin startproject backend

4.redirect backend 
    cd backend

5.createe django app
    python manage.py startapp api

6.install mysql packege
    pip install mysqlclient

7.make migrations
    1.python manage.py makemigrations
    2.python manage.py migrate

8.run django project 
    python manage.py runserver

9.Crete Admin Super User
    python manage.py createsuperuser

10.install admin theme
    pip install django-jazzmin

------------------------------------------------------------------------------------------------------------------------------

1.install react using vite
    npm create vite@latest frontend -- --template react

2.cd frontend
  npm install
  npm run dev

3.npm install axios react-router-dom jwt-decode

=============================================================================================================================
https://www.youtube.com/watch?v=c-QsfbznSXI&t=605s
https://www.youtube.com/watch?v=5j7QLUx277Q
https://www.npmjs.com/package/react-scroll-horizontal
https://chatgpt.com/share/67d18bca-3244-8006-aa98-81605eab584f
=============================================================================================================================

Admin credentials:
DB Name : react_web_app
username : Rameshkas
password : Rameshkas@1502







