# Guess States

A guessing game that will present random US State names.

## Intro Page

![image](https://i.postimg.cc/1zd0dLL2/Guess-States.png)

## Main Page

![image](https://i.postimg.cc/50vzRj5Q/guess.png)

## Winning Page

![image](https://i.postimg.cc/HW9ccq6m/Guess-States-1.png)

## Losing Page

![image](https://i.postimg.cc/B6gSb04w/Guess-States-2.png)


## Installation and Setup Instructions

To make below steps work, You will need node and npm installed globally on your machine.

```bash
# Clone this repository
$ git clone https://github.com/ZaidKhan144/game-show-app.git

# Enter the Git folder
$ cd game-show-app

# Install dependencies
$ npm install

# Start the project
$ npm start
```

## Tech used
- JavaScript
- jQuery
- HTML
- CSS
- ESLint - A linter tool to standardize code
- Prettier - Code formatter
- GitHub Pages

## Reflection

The main goal of this project was to experiment interactivity with `DOM` using `JavaScript`. 

This guessing game will present random US state names to guess from. Users may also keep track of the lives lost. On Guessing all the letters right, users will be directed to the winning page with an option to play again and vice versa.

Implemented a random method to present a new state name on every turn. I have also coded the method check win by comparing the key pressed by phrase's letter so that users can keep track of lives lost.

The technologies implemented in this project are `HTML`, `CSS`, `JavaScript`, and `jQuery`. I have used `jQuery` to animate the main page content, and I have also made different UI gradients for each background. 

You can view the live version of the app here: https://zaidkhan144.github.io/game-show-app/
