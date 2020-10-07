# Catalisa-Public-Apis-Browser

This was my project for the Catalisa challenge from [Zup](https://zup.com.br). The goal was to create an Angular app to consume an API and show the results to the user.

This project is an accessible app to browse public APIS from the [public-apis
API](https://github.com/public-apis/public-apis). You can search specific APIs
using the search box or search by categories using the navigation bar.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.3.

## Running the app

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

This app also includes language support. Only one language is supported for now
(Portuguese). I'll gladly accept pull request translations or code
contributions for this app when the challenge ends completely. To test the app in
another language, change the `"localize": false,` to your language of choice, for example
            `"localize": ["pt"].

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
If you want to build the app for all the languages, set `localize: true` on the
`angular.json` file. The build system will create folders for each of the
supported app languages.
