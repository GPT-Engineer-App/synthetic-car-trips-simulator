# synthetic-car-trips-simulator

Build a web app that allow the user to simulate synthetic car trips data for a generic driver.

First of all, there should be a button that generate a different map each time it is pressed. The map should include pictograms representing houses, destinations (example: grocery store, bank, restaurant, etc.), and roads linking houses and destinations together.

There should then be another button that simulate a trip when pressed.

For each trip, a departure point is randomly selected among houses, and a destination point is ramdomly selected amond destinations. Then, the trip direction should be simulated by highlighting the road the selected for the trip between the departure point and the destination.

It is assumed that driver come back home after each destinations.

Synthetic data should include second by second GPS points with randomely simulated speed and acceleration metrics, and corresponding calculations of of arch breacking, accelerations and speeding evnets, indicated on the trip map with corresponding pictograms.

The simulated trip is then returned on the maps on the sreen, highlighted in a distinct color

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React and Chakra UI.

- Vite
- React
- Chakra UI

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/synthetic-car-trips-simulator.git
cd synthetic-car-trips-simulator
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
