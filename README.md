# Tamagotchi [![Netlify Status](https://api.netlify.com/api/v1/badges/571fd96d-1a21-46f3-b21f-d97e7eb25d54/deploy-status)](https://app.netlify.com/sites/dc-tamagotchi/deploys)

Hello, and welcome to my app. I created a simplified version of a Tamagotchi digital pet. If you haven't her of them, Tamagotchi was the first "virtual pet" that came out in the '90s.  It had three buttons and eight different menus.  After activating it, an egg would hatch, and then you would be responsible for keeping your pet alive.  Your pet could do things like eat, sleep, play, get sick, get medicine, and poop.  They sold over 82 million of them before 2017. This simplified version contains four quadrants, each of which has its CSS and javascript functionalities.

![Tamagotchi](https://user-images.githubusercontent.com/68397076/109547032-8a5a8700-7a90-11eb-899c-dd6084e26856.png)


## Relevant Links:
- [Loom Video](https://www.loom.com/share/3d05d8429097455895b5c406cec7382f)
- [Check out the deployed site](https://dc-tamagotchi.netlify.app/)
- [Wireframes](https://www.figma.com/file/nYtKy2P1C017HoIS80c6zd/Tamagotchi?node-id=36%3A5)
- [Project Board](https://github.com/danicrosby/tamagotchi/projects)


## Functionality Includes: 
#### Eat
The Eat component, located in the upper left quadrant has 2 buttons.  One is for healthy food that adds 10 to `full` when pressed.  The other is for unhealthy food that subtracts 3 from `full` when pushed.
#### Play
The Play component, located in the upper right quadrant has 2 buttons.  One is a super fun activity that adds 50 to `fun` when pressed.  The other button is a slightly fun activity that adds 2 to `fun` when pushed.

#### Fight
The Fight component, located in the lower left quadrant has 2 buttons.  One is for running away (bravely) that adds 1 to `strength` when pressed.  The other button is for committing violence and subtracts 10 from `strength` when pushed.

#### Sleep
The Sleep component, located in the lower right quadrant has 2 buttons.  One is to take a nap and and adds 50 to `energy` when pressed.  The other is for deep slumber and adds 60 to `sleep` when pushed.


## Future Goals For This Project Include: 

### Overall Progress Bar
The overall health of this Tamagochi should be based on the average of all four attributes (energy, strength, full, fun).

### Attribute Randomizer
Make all the buttons increase of decrease based on random number generators.

### Death
Something should happen when your energy, strength, full, fun, or overall heath goes to 0.

### Create Module Interactivity
* When Fullness goes up energy should go down (FOOD COMA)
* When Fullness goes down strength should down
* When Strength goes down energy, full, and fun go down
* When Strength goes up energy goes up.
* When energy goes down fun goes down


## Contributors
- [Dani Crosby](https://github.com/danicrosby)
