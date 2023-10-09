# Pokedex 

<img src="./public/pokedex-sample.png" alt="pokedex preview" width="700">

## created with React + Vite


Currently working on this project. Already served by an API backend created by me, with data fetched from [Fanzeyi's Pokemon JSON repo](https://github.com/fanzeyi/pokemon.json).



[Click here for this project's backend repo.](https://github.com/innopaolo/pokedex-backend) 

Right now, there is the ability to search pokemon by name, filter by type, and click each card to get more info on each pokemon. You can also create and delete pokemon from the database, and update their stats. 

To use, simply follow these instructions:

- Download this repo and the backend repo(link provided above), and in your terminal go to where you downloaded the pokedex-backend folder.
- Type `node server.js` in your terminal 
- In your console, it should say
    ```console
    Server is running on port 3000
    Connected to the database
    ```

- Navigate to the downloaded garys-pokedex folder in the terminal.
- Type `npm run dev` in your terminal. Make sure you have npm installed.
- In your console, it should say
    ```console
    > garys-pokedex@0.0.0 dev
    > vite


    VITE v4.4.10  ready in 394 ms

    â  Local:   http://localhost:5173/
    â  Network: use --host to expose
    â  press h to show help
    ```

- Now visit this link and play around with the data: `http://localhost:5173/`

Make sure to run the backend server first before running the vite server in garys-pokedex. Enjoy!