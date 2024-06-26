# SMAL Interview Task

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
This project supposed to be a landing page to introduce the specific product.
The design is pixel perfect and mobile-first.
The project is developed with React, TypeScript, and SCSS.
The project is developed with reusable components and the components are developed with StoryBook.

![Main](https://github.com/amirzenoozi/smal-interview/actions/workflows/docker-hub.yml/badge.svg?event=push)

## Objectives

- [x] Developed Pixel Perfect Design
- [x] Reusable Components
- [x] Add StoryBook
- [x] Support Multiple Languages (English, German, Italian, Dutch)
- [x] Variable Based Typography System
- [x] Implement SpriteSvg Icon System
- [ ] UX
  - [x] Prevent Animating When `prefers-reduced-motion` is `reduce`
  - [x] Mobile First Design
  - [x] Change Lang By `QueryParams`; Just Set/Change `lng`
- [ ] Unit Test
  - [x] Button Component
  - [x] FlexRow
  - [x] FlexCol
  - [x] Container
- [ ] Deployment
  - [x] Dockerfile
  - [x] GitHub Actions to Push Image to DockerHub
  - [x] Deploy on the external server

## Run the project

In the project directory, you can run:
- ``` git clone git@github.com:amirzenoozi/smal-interview.git ```
- ``` cd smal-interview ```
- ``` git config core.hooksPath .githooks ```
- ``` yarn install ```
- ``` yarn start ```
- Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Sprite SVG System
Nowadays, SVG icons are one of the most common assets in Web applications. And we need to use them in our applications properly. Using `font-icon` system is one of the most common ways to render the SVG icons, however, in this way, we will treat them as a font while they are kind of vector. Using the `img` tag is our second option, but we don't want it since we are not able to use the SVG features including scaling and changing their colors, also in this way search engines index these assets as an Image and we don't want this. One of the best ways to render SVG icons is using SpriteSVG files, which enable us to render them wherever we want with an `SVG` tag. For more information:

1. [Icon Fonts vs. SVG sprite](https://webfontapp.com/svg-sprite-vs-icon-font)
2. [Icon Fonts vs SVGs](https://www.keycdn.com/blog/icon-fonts-vs-svgs)

## Other Available Scripts

1. For Test: `yarn run test`
2. For Build: `yarn run build`
3. For Manual Setting: `yarn run eject`
4. To Generate Sprite SVG file: `yarn run sprite`

> **Note: this is a one-way operation. Once you `eject`, you can’t go back!**

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.


## Useful Links

1. [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
2. [React documentation](https://reactjs.org/).
