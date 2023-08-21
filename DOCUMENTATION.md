# Documentation

Note: 2023 version has been migrated, you can access 2023 version with https://fullyhacks.acmcsuf.com/2023

## Folder Structure Overview
- All folders / files you need are inside ```src/```

### I. ```pages/```: every file in this folder is a page

Ex: ```pages/portal.tsx``` is fullyhacks.acmcsuf.com/portal

You'll see there's a ```/2023``` folder which contain all the 2023 version pages, we'll develope the 2024 version under the ```/pages``` so it displays 2024 version right away when user first visit page


### II. ```components/```: contains all the components made up a page

These components are reusable, for example if 2024 version need to have a countdown like the 2023 version, we can just import it from ```components/LandingPage/CountDown```

The ```...Page``` component (ex: LandingPage, FeedPage,...) serve as a parent component to include different children components, there'll be ```2023/``` and ```2024/``` folder for each "Page" to render different version of the website

### III. ```/pages/api```: contains all API endpoints for the website

Each folder inside this is a Next.js API endpoints, we'll migrate these API endpoints as well later

### IV. ```prisma/```: contains Prisma schema for our database

It basically a blueprint for our database
