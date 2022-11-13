# top-rock-paper-scissors

Notes during coding this project:
-Need to learn an easier way to randomize the computer selection
    Currently use a randomize number function, then assign RPS based on that. Can I have a function choose randomly from a list of choices? Maybe when I get to arrays.

-Learned how to run functions inside another function!
    Figured out how to have the getComputerSelection function work as a variable inside the playRound function - mainly forgot the () after the function name. Unfortunately, once I figured that out, it led to a bug that took a while to figure out. It ran the function *again* every time it was called, which led to invalid options with the RPS rounds. Finally figured out I only needed to run it once at the start of the playRound function and assign it to a variable for the round.

Next up: Loops and keeping score!