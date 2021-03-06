# HTML5 webpack Works



This repository forked from < [tr1s](https://github.com/tr1s)/**[tris-webpack-boilerplate](https://github.com/tr1s/tris-webpack-boilerplate)** >



## Features

- webpack
    - common
        - ejs compile
        - sass compile
        - add vendor prefix to css
    - dev build
        - webpack dev server and watch
    - production build
        - minify html, js and css
        - cash busting for js and css
        - optimize jpg, png files
        - zip compression for html, js and css
        - generate touch-icon for mobile
- include fontawesome5 (svg)





## Install

```bash
$ git clone https://github.com/ontheroadjp/webpack-boilerplate-for-static-website.git mysite
$ cd mysite
$ npm install
$ rm -rf .git
```


## Usage

```bash
# for Development
$ npm run dev

# for Production
$ npm run build
```



## Build WEB Site

- webpack entry point is ``src/js/index.js``
    - includes ``src/ejc/index.ejs`` (main page of HTML)
    - includes ``src/scss/index.scss `` (main SASS file)



### Edit HTML

- ``<head></head>`` info are in ``src/ejc/variables/common/_meta.ejs``
- write HTML into ``src/ejc/index.ejs``



### Edit CSS(sass)

- Write css codes into ``src/scss/layout/_main.scss``

#### adding new scss file

- Your own scss file should be created at under the ``src/scss/layout/`` directory.
- Add line ``@import "./layout/_new.scss";`` into ``src/scss/index.scss``



### Edit Javascript

- write javascript code into ``src/js/





## Defined values

### CSS（sass）

#### classes

- ``src/scss/utilities/_images.scss``

| Class name        | Effection                                         |
| ----------------- | ------------------------------------------------- |
| ``.filter-white`` | Put a white translucent layer on top of the image |
| ``.filter-black`` | Put a black translucent layer on top of the image |
| ``.dot-white``    | Put a white dot layer on top of the image         |
| ``.dot-black``    | Put a black dot layer on top of the image         |



### valiables

- ``src/scss/utilities/_valiables.scss``

| Valiable name        | value       | memo                |
| -------------------- | ----------- | ------------------- |
| ``$white``           | ``#fff``    | color of white      |
| ``$light-grey``      | ``#fafafa`` | color of light grey |
| ``$grey``            | ``#d7d7d7`` | color of grey       |
| ``$blue``            | ``#2c638f`` | color of blue       |
| ``$pink​``            | ``#fff0f5`` | color of pink       |
| ``$yellow``          | ``#fffacd`` | color of yellow     |
| ``$color-primary``   | ``$blue``   | primary color       |
| ``$color-secondary`` | ``$pink``   | secondary color     |
| ``$color-tertiary``  | ``$yellow`` | tertiary color      |



### mixins

#### Media Queries

```scss
//! Example usage
@include respond-to('mobile') {}
```

- ``src/scss/utilities/_mixins.scss``

```scss
@mixin respond-to($breakpoint) {
    @if $breakpoint== "mobile-small" {
        @media (max-width: 320px) {
            @content;
        }
    } @else if $breakpoint== "mobile" {
        @media (max-width: 375px) {
            @content;
        }
    } @else if $breakpoint== "mobile-large" {
        @media (max-width: 414px) {
            @content;
        }
    } @else if $breakpoint== "tablet" {
        @media (max-width: 768px) {
            @content;
        }
    } @else if $breakpoint== "tablet-large" {
        @media (max-width: 1024px) {
            @content;
        }
    } @else if $breakpoint== "desktop-13" {
        @media (max-width: 1280px) {
            @content;
        }
    } @else if $breakpoint== "desktop-15" {
        @media (max-width: 1440px) {
            @content;
        }
    } @else if $breakpoint== "desktop-16" {
        @media (min-width: 1792px) {
            @content;
        }
    } @else {
        @media ($breakpoint) {
            @content;
        }
    }
}
```

### centering

```scss
//! Example usage
.parent {
    position: relative;
}
.child {
    @include centered;
}
```

- ``src/scss/utilities/_mixins.scss``

```scss
/* CENTERING */
@mixin centered {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
```



## tools/



### sorted-colors

- A tool to sort the named CSS colors in a way that it shows related colors together
- [scriptype](https://github.com/scriptype)/**[sorted-colors](https://github.com/scriptype/sorted-colors)**

