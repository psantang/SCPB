# SCPB

## Framework7 CLI Options

Framework7 app created with following options:

```
{
  "cwd": "/Users/paulsantangelo/GitHub/SCPB",
  "type": [
    "cordova"
  ],
  "name": "SCPB",
  "framework": "core",
  "template": "tabs",
  "bundler": "webpack",
  "cssPreProcessor": false,
  "theming": {
    "customColor": true,
    "color": "#f4840b",
    "darkTheme": false,
    "iconFonts": true,
    "fillBars": true
  },
  "customBuild": false,
  "webpack": {
    "developmentSourceMap": true,
    "productionSourceMap": true,
    "hashAssets": false,
    "preserveAssetsPaths": false,
    "inlineAssets": true
  },
  "pkg": "com.paulsantangelo.scpb",
  "cordova": {
    "folder": "cordova",
    "platforms": [
      "ios",
      "android"
    ],
    "plugins": [
      "cordova-plugin-statusbar",
      "cordova-plugin-keyboard",
      "cordova-plugin-splashscreen",
      "cordova-plugin-wkwebview-file-xhr"
    ]
  }
}
```

## NPM Scripts

* 🔥 `start` - run development server
* 🔧 `dev` - run development server
* 🔧 `build-dev` - build web app using development mode (faster build without minification and optimization)
* 🔧 `build-prod` - build web app for production
* 📱 `build-dev-cordova` - build cordova app using development mode (faster build without minification and optimization)
* 📱 `build-prod-cordova` - build cordova app
* 📱 `build-dev-cordova-ios` - build cordova iOS app using development mode (faster build without minification and optimization)
* 📱 `build-prod-cordova-ios` - build cordova iOS app
* 📱 `build-dev-cordova-android` - build cordova Android app using development mode (faster build without minification and optimization)
* 📱 `build-prod-cordova-android` - build cordova Android app

## WebPack

There is a webpack bundler setup. It compiles and bundles all "front-end" resources. You should work only with files located in `/src` folder. Webpack config located in `build/webpack.config.js`.

Webpack has specific way of handling static assets (CSS files, images, audios). You can learn more about correct way of doing things on [official webpack documentation](https://webpack.js.org/guides/asset-management/).
## Cordova

Cordova project located in `cordova` folder. You shouldn't modify content of `cordova/www` folder. Its content will be correctly generated when you call `npm run cordova-build-prod`.



## Assets

Assets (icons, splash screens) source images located in `assets-src` folder. To generate your own icons and splash screen images, you will need to replace all assets in this directory with your own images (pay attention to image size and format), and run the following command in the project directory:

```
framework7 generate-assets
```

Or launch UI where you will be able to change icons and splash screens:

```
framework7 generate-assets --ui
```

## Documentation & Resources

* [Framework7 Core Documentation](https://framework7.io/docs/)


* [Framework7 Icons Reference](https://framework7.io/icons/)
* [Community Forum](https://forum.framework7.io)

## Support Framework7

Love Framework7? Support project by donating or pledging on patreon:
https://patreon.com/vladimirkharlampidi




## PS: added.  This was generated after I ran the f7 create command to start this project.
ℹ Next steps:
  - 🔥 Run "npm run start" - run development server
  - 🔧 Run "npm run dev" - run development server
  - 🔧 Run "npm run build-dev" - build web app using development mode (faster build without minification and optimization)
  - 🔧 Run "npm run build-prod" - build web app for production
  - 📱 Run "npm run build-dev-cordova" - build cordova app using development mode (faster build without minification and optimization)
  - 📱 Run "npm run build-prod-cordova" - build cordova app
  - 📱 Run "npm run build-dev-cordova-ios" - build cordova iOS app using development mode (faster build without minification and optimization)
  - 📱 Run "npm run build-prod-cordova-ios" - build cordova iOS app
  - 📱 Run "npm run build-dev-cordova-android" - build cordova Android app using development mode (faster build without minification and optimization)
  - 📱 Run "npm run build-prod-cordova-android" - build cordova Android app
  - 📖 Visit documentation at https://framework7.io/docs/
  - 📖 Check README.md in project root folder with further instructions