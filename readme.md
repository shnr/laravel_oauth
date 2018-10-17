# laravel_oauth

This is the simple Vue.js & Laravel CRUD.
It also Passport installed.


Reference for to install Homestead.
https://blog.shnr.net/?p=832

```
$ composer require laravel/homestead --dev
$ php vendor/bin/homestead make
$ vim Homestead.yaml
```


Edit site url, server name, hostname. Default name is directry name.
```
        type: "apache"
        options:
          rsync__args: ["--verbose", "--archive", "--delete", "-zz"]
          rsync__exclude: ["node_modules"]
```

Edit host.
```
$ sudo vim /private/etc/hosts
```

Clone repogitory

```
git clone https://shnr@github.com/shnr/laravel_oauth.git
```

Change dir name and delete git.
```
mv laravel_oauth/ project
cd project
rm -rf .git
```

Create .env
```
vim .env
```

vagrant up.
```
vagrant up
```

Connect server and create table.
```
vagrant ssh
cd project/dir/
```

DB migrate.
```
php artisan migrate
```

Passport key genarate
```
php artisan passport:keys
```

Create Client. Then copy and paste it on app.js.
```
php artisan passport:client --password
```

app.js
```
    clientSecret: 'rMTv7zrWS6ky9DjJv9XLNapNbbGD7djLjy48mDKR', 
    clientId: 1,  
```

exit server, then
Install NPM Modules
```
npm install
```

Let's coding!!
```
npm run watch
```
