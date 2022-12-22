# top-rock-paper-scissors
TOP Rock, Paper, Scissors Game
Updated December 22, 2022
This is the second iteration of my rock, paper, scissors game for The Odin Project.

I've added a basic UI, CSS styling, along with javascript to make the game work together. The user can make their selection using the rock/paper/scissors buttons, and plays the computer until one player gets to five. It then removes the buttons and displays a victory or defeat message, and displays a "Play Again" button which refreshes the page when clicked.

Notes during coding this project:
-There were a few challenges to figure out, but overall this iteration was much easier than the first. The initial game logic was the toughest to work through.
-Learned how to implement a lot of Javascript DOM manipulation techniques, including a lot having to do with buttons. I got a lot more comfortable with making changes to the HTML using Javascript.
-Refreshed my memory on CSS/Flexbox/etc. when setting up the UI
-I'd love to have done more work on the UI (maybe someday!) but I'm pleased that it's done, it works, and it looks decent.

Notes from previous version:
-Need to learn an easier way to randomize the computer selection
    Currently use a randomize number function, then assign RPS based on that. Can I have a function choose randomly from a list of choices? Maybe when I get to arrays.

-Learned how to run functions inside another function!
    Figured out how to have the getComputerSelection function work as a variable inside the playRound function - mainly forgot the () after the function name. Unfortunately, once I figured that out, it led to a bug that took a while to figure out. It ran the function *again* every time it was called, which led to invalid options with the RPS rounds. Finally figured out I only needed to run it once at the start of the playRound function and assign it to a variable for the round.



Project briefing: https://www.theodinproject.com/lessons/foundations-rock-paper-scissors
