# Pagedesigner

[![Code Climate](https://codeclimate.com/github/toh82/page-generator/badges/gpa.svg)](https://codeclimate.com/github/toh82/page-generator)

The Pagedesigner webapp should help to build easy storeable and nice looking pages.

Proper use case is for example Magento, which has a poor page engine. With Pagegenerator implemented, you can use custom content elements while the whole page is stored as json in the Magento content field. To render the output, pass the json to Pagegenerator render interface and it will give you back the rendered html.

## Start the app

Just type `npm start`

## Compile es6 with babel

- Enabling the babel watcher: `npm run watch`  
- Create a build of the JavaScript files: `npm run build:js`

## Compile scss stylesheet

`npm run build:css`

## Coding styleguide

The **javascript** code should follow npm standard, to check your code run `npm test`.  
For SCSS follow [sass-guidelin.es](https://sass-guidelin.es/). 

## Status
Current status: work in progress.
