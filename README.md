# Kathi's Blog - SoftwareQ Merdeka Challenge

This blog was created for the [SoftwareQ Merdeka Challenge](https://www.softwareq.com/merdeka-challenge/). This blog is live and can be accessed through this [link](https://software-q-merdeka-challenge-blog.vercel.app/).

## How to use

1. Download or clone this repository to your pc.
2. Make sure to have [Node.JS](https://nodejs.org/en/) installed on your pc.
3. Open up your preferred terminal in the project directory.
4. Run either one of the following commands, depending if you prefer npm or yarn:

```bash
# NPM
npm install

# YARN
yarn install
```

5. To start the NextJS server, run the following command:

```bash
# NPM
npm run dev

# YARN
yarn run dev
```

6. Open up a web browser and go to [http://localhost:3000/](http://localhost:3000/)

## Features

I have implemented a fully responsive blog with a dark mode feature. The search bar is there for aesthetic purposes and does not provide any functionality as of now. If you try clicking on any blogs that have not been published, an error will popup. All blog data uses the API provided in the challenge.

## Things to be aware of if using your own server

1. If you get an error message on your localhost, check to make sure your internet connection is enabled and stable.
2. If some styling isn't loading properly, go to `tailwind.config.js` and save the file.
