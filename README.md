<p align="center">
  <img src="./heaps-logo.png" />
</p>

## Welcome to _heaps_ !

An app for sharing food with people near you and reduce waste.
After creating an account the user can create items, categorized as either _dishes_ or _groceries_, making it available in our platform being displayed either in out main list or our _map_ that display's the user's current location.
Other users to request items using the _chat_ to coordinate the pick up and preferred time.

## Screenshots

<p align="center">
  <img src="./screenshot.jpg" />
</p>

## Getting Started

1. Clone this repository with the command and get into the main directory
   ```bash
   git clone https://github.com/braga-felipe/heaps
   cd heaps
   ```
2. Get into the server directory and install the dependencies
   ```bash
   cd server
   npm install
   ```
3. From the server directory, get into the client directory and install the dependencies there as well

   ```bash
   cd ../client
   npm install
   ```

4. The app uses a PostgreSQL database. In the server/index.ts file, on line 52, replace the _process.env.DB_URL_ with a link to your own PostgreSQL database.

   ```bash
    ...
    await createConnection({
    url: process.env.DB_URL, # <---- enter your URL here!
    type: 'postgres',
    ...
    ...
   ```

5.
