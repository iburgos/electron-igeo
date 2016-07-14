# Electron-Angular2

This Electron/Angular2 demo is based off of <https://auth0.com/blog/2015/12/15/create-a-desktop-app-with-angular-2-and-electron/>,<br/>which is linked 
to [this repo](https://github.com/auth0/angular2-electron). There are some slight tweaks to the webconfig, as I couldn't get chenkie's source to run correctly.<br/>

***

##Issues encountered
*  Despite copying the original tutorial's `package.json`, I had to manually install:<br/>
		*  `npm install electron --save`<br/>
		*  `npm install es6-shim@0.33.3 --save`<br/>
		*  `npm install reflect-metadata@0.1.2 --save`<br/>
		*  `npm install rxjs@5.0.0-beta.0 --save`<br/>
		*  `npm install -g tsd`<br/>
		*  `tsd init` (though, to be fair, I'm not sure this was 100% necessary)
		
...apparently this is an issue with npm 3 and will probably be fixed in the near future.<br/>

####webpack.config.js changes:<br/>
* Removed Line 14<br/>
* Line 19 (webpack.config):<br/>
		* Changed `'app': .app/app`  --> `'app': ./app/app`<br/>
		

####tsconfig.json<br/>
* Changed Line 11 to:<br/>
		* "./app/app.ts"
