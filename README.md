# Gary's Pokedex

## Introduction

Gary's Pokedex is a web application that allows users to explore, update, and reset Pokemon data. The app provides a user-friendly interface for viewing and interacting with Pokemon records. It is created with React + Vite.

## Preview

<img src="https://s6.gifyu.com/images/S6cYF.gif">

Frontend static version: https://garys-pokedex.vercel.app/
(The pokemon cards will not show up)

## Get Started

[Ctrl + click here for this project's backend repo.](https://github.com/innopaolo/pokedex-backend)

- Download both this repo and the pokedex backend.
- Navigate to the folder of the backend in your terminal, then cd into /src and run `pm2 start server.mjs`.
- Navigate to garys-pokedex in your terminal and run `npm run dev`.
- Open your web browser and visit `http://localhost:5173/`.

## Features

- View a list of Pokemon with details such as name, type, and stats.
- Click on a Pokemon to view its detailed information.
- Create new Pokemon entries with custom data. (A hidden digimon lurks in the database!)
- Update existing Pokemon records to modify stats.
- Delete unwanted Pokemon entries.
- Reset the Pokedex data to its initial state by rebuilding the database.

## What I Learned

- Building a full-stack web application using React and Express.js.
- Working with a relational database (SQLite) for data storage.
- Implementing RESTful API endpoints for CRUD operations.
- Handling data fetching from external sources and database operations.
- Using process management with PM2 for automatic server restarts.

## Struggles

Challenges I faced during development included:

- Error handling for database operations and network requests.
- Managing the automatic rebuild process and server restarts.
- Debugging and testing the app to ensure stability.
- Creating modals became convoluted as I tried to separate concerns.
- Deploying a full stack project online proved to be more trouble than I expected!

## Technologies Used

- Frontend: ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
- Backend: ![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white), ![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
- Database: ![SQLite](https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white)
- Data Fetching: [node-fetch](https://www.npmjs.com/package/node-fetch)
- Process Management: [PM2](https://pm2.keymetrics.io/)

## Future Enhancements

In the future, I plan to:

- Implement user authentication for personalized Pokedex management.
- Enhance the user interface and user experience.
- Add a sliding menu that will host the user's pokemon party.

## Acknowledgements

- Data fetched from [Fanzeyi's Pokemon JSON repo](https://github.com/fanzeyi/pokemon.json).
- Font Meme for the [pokemon font](https://fontmeme.com/pokemon-font/).

---

Happy Pokemon exploring!
