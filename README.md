# Tamagothchi!  [![Netlify Status](https://api.netlify.com/api/v1/badges/abe27adf-0777-4902-8c4a-3cba1d1fbc2b/deploy-status)](https://app.netlify.com/sites/dc-tamagothci/deploys)

This app is a simplified recreation of a Tamagotchi digital pet.

Tamagotchi was the first "digital virtual pet" that made it's fame in the 1990's.  It had three buttons and 8 different menus.  After activating it an egg would hatch and then you would be responsible for keeping your pet alive.  Your pet could do things like eat, sleep, play, get sick, get medicine, and poop.  They sold over 82 million of them before 2017.


[View App](dc-tamagothci.netlify.app)

## Get Started

## About the User
- The ideal user for this application is an adult reclaiming their childhood nostalgia
- A user who is allergic to real pets but is in need of a compainion
- They are keeping their digital pets alive
- The problem this app solves for them is it allows a distraction from social media

## Features
## User stories
- User see the screen divided into quadrants.  
- Each quadrant should have a different background color and represents a different activity that you can perform.  
- The four activities are: eat, sleep, play, and fight.  


### Eat
The Eat component should appear in the upper left quadrant with 2 buttons.  One should be a healthy food that adds 10 to `full` when pressed.  The other button should be an unhealthy food that subtracts 3 from `full` when pushed.
### Play
The Play component should appear in the upper right quadrant with 2 buttons.  One should be a super fun activity that adds 50 to `fun` when pressed.  The other button should be a slightly fun activity that adds 2 to `fun` when pushed.

### Fight
The Fight component should appear in the lower left quadrant with 2 buttons.  One should be for running away (bravely) that adds 1 to `strength` when pressed.  The other button should be for committing violence and should subtract 10 from `strength` when pushed.

### Sleep
The Sleep component should appear in the lower right quadrant with 2 buttons.  One should be for a nap and should add 50 to `energy` when pressed.  The other button should be for a deep slumber and add 60 to `sleep` when pushed.

## Stretch Goals Below

### Overall Progress Bar
The overall health of your Tamagochi should be based on the average of all four attributes (energy, strength, full, fun).  Use the div with the id of `progress` to display this overall score in some way.

### Pet Picture
Pet picture with url for a picture on page load - make that the image that displays.

### Attribute Randomizer
Make all the buttons increase of decrease based on random number generators.

### Death
Something should happen when your energy, strength, full, fun, or overall heath goes to 0.  Decide what happens and make it work.

### Module Interactivity
Currently each module operates independently.  This isn't really realistic.  Modify your code so the modules interact.  Here are some sample interactions:
* When Fullness goes up energy should go down (FOOD COMA)
* When Fullness goes down strength should down
* When Strength goes down energy, full, and fun go down
* When Strength goes up energy goes up.
* When energy goes down fun goes down
## Loom video Walkthrough of Tamagothci!



## Relevant Links 
- [Check out the deployed site](dc-tamagothci.netlify.app)
- [Figma WireFrame](https://www.figma.com/file/nYtKy2P1C017HoIS80c6zd/Tamagotchi)
- [Project Board](https://github.com/danicrosby/tamagotchi/projects)

## Project Screenshots
<img width="1148" alt="Tamagotchi Overveiw" src="./styles/images/tamaScreenShot.png">


## Contributors
- Dani Crosby: https://github.com/danicrosby
