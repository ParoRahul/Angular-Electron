<div align="center">
  <h1> Electron Angular Template With Database Sqlite3 and Typeorm<h1>
</div>

<a href="https://electronjs.org/">
    <img style="display: inline-block" src="https://www.vectorlogo.zone/logos/electronjs/electronjs-ar21.svg"  height="128">
</a>

---------------------------------------

<a href="https://angular.io/">
    <img style="display: inline-block" src="https://www.vectorlogo.zone/logos/angular/angular-ar21.svg"  height="128">
</a>
<a href="https://getbootstrap.com/">
    <img style="display: inline-block" src="https://www.vectorlogo.zone/logos/getbootstrap/getbootstrap-ar21.svg"  height="128">
</a>

---------------------------------------

<a href="www.sqlite.org">
    <img style="display: inline-block" src="https://www.vectorlogo.zone/logos/sqlite/sqlite-ar21.svg"  height="128">
</a>
<a href="http://typeorm.io/">
    <img style="display: inline-block" src="https://github.com/typeorm/typeorm/raw/master/resources/logo_big.png"  height="128">
</a>

---------------------------------------

#### Credits 

This repositoty is created with the help of [Angular Electron maximegris ](https://github.com/maximegris/angular-electron). Big Thanks for the boilerplate code.

----------------------------------------

#### Getting Started

* Clone this repository locally : ``` git clone https://github.com/ParoRahul/electron-ng-template.git ```
* Modify the following file to replace the existing project name to your project name
  1. package.json
  2. angular.json 
  3. frontend/karma.conf.js

* Install dependencies with npm :``` npm install```
* jump into coding 
-----------------------------------------------
#### Big reminder 

`ng serve` is not going to work as the browser mode dont support the netaive Library. Kindly use ` npm run start` , which inerternally use `ng serve -c dev -o`

----------------------------------------
#### Commands
|Command|Description| 
|--|--|
|`npm run start`| Execute the app in the electron for development |
|`npm run ng:serve`| Execute the app in the browser for with no electron module enabled|
|`npm run backend:transpile`| Build the electron part of app in the /build folder. |
|`npm run frontend:transpile`| Build the angular Fe app with Angular aot. Built files will be in /build |
|`npm run app:transpile`| Builds the complete application . Built files will be in /build |
|`npm run build:linux`| Execute the app in the electron for linux |
|`npm run build:windows`| Builds the complete application for Windows |
|`npm run build:mac`| Execute the app in the electron for MAC  |


#### Features
1.  Title bar 
2.  Menubar
3.  Status bar 
4.  Tab bar

#### Service 
1. Dialog Service
2. Tab Scheduleing service
3. File system and OS process, child process access
4. sqlite3 with typeorm From Electron Render process. Follow frontend/app/shared/service/db.service.ts & angular.json for customwebpack.


