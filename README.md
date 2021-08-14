# Kathi's Blog - SoftwareQ Merdeka Challenge

This blog was created for the [SoftwareQ Merdeka Challenge](https://www.softwareq.com/merdeka-challenge/). This blog is live and can be accessed through this [link](https://software-q-merdeka-challenge-blog.vercel.app/).

## How to use

1. Download or clone this repository to your pc.
2. Make sure to have [Node.JS](https://nodejs.org/en/) installed on your pc.
3. Open up the project in your prefered code editor and create a file called `.env.local` in the root directory. Add the following code to the `.env.local` file:
```bash
SOFTWAREQ_SECRET_KEY=ENTER_YOUR_API_SECRET_KEY_HERE

# Replace ENTER_YOUR_API_SECRET_KEY_HERE with your own API key provided by SoftwareQ for this challenge.
```
4. Open up your preferred terminal in the project directory.
5. Run either one of the following commands, depending if you prefer npm or yarn:

```bash
# NPM
npm install

# YARN
yarn install
```

6. To start the NextJS server, run the following command:

```bash
# NPM
npm run dev

# YARN
yarn run dev
```

7. Open up a web browser and go to [http://localhost:3000/](http://localhost:3000/)

## Features

I have implemented a fully responsive blog with a dark mode feature. The search bar is there for aesthetic purposes and does not provide any functionality as of now. If you try clicking on any blogs that have not been published, an error will popup. All blog data uses the API provided in the challenge.

## Things to be aware of if using your own server

1. If you get an error message on your localhost, check to make sure your internet connection is enabled and stable.
2. If some styling isn't loading properly, go to `tailwind.config.js` and save the file.
3. If for whatever reason you are having trouble loading the site using your own server, the live link is [here](https://software-q-merdeka-challenge-blog.vercel.app/).
