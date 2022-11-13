# top-rock-paper-scissors
TOP Rock, Paper, Scissors Game
Updated November 13, 2022
This is the first iteration of my rock, paper, scissors game for The Odin Project. It's currently completely in javascript, other than a blank HTML page. To play, put console.log(game()); in the console.

The game prompts the player for their input, and goes through 5 rounds of rock, paper, scissors versus the computer, displaying a round message and score for each round. At the end of the game, it declares a winner and lists the score.

Notes during coding this project:
-Need to learn an easier way to randomize the computer selection
    Currently use a randomize number function, then assign RPS based on that. Can I have a function choose randomly from a list of choices? Maybe when I get to arrays.

-Learned how to run functions inside another function!
    Figured out how to have the getComputerSelection function work as a variable inside the playRound function - mainly forgot the () after the function name. Unfortunately, once I figured that out, it led to a bug that took a while to figure out. It ran the function *again* every time it was called, which led to invalid options with the RPS rounds. Finally figured out I only needed to run it once at the start of the playRound function and assign it to a variable for the round.

Future Improvements Needed:
-Easier way to randomize computer selection
-Give an error if the user inputs something *other* than rock, paper, or scissors, and not have it count as a round if they do - add a loop for the prompt?
-Have it play until either the player or computer gets 3 points
-A nice UI to play the game


Project briefing: https://www.theodinproject.com/lessons/foundations-rock-paper-scissors
