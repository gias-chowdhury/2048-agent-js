README FILE

One of the most addictive game is 2048 which is available across all platforms even in wearable devices. we forked a clone from the original game 2048 by Gabriele Cirulli due to time constraint and created an agent which capable of playing the game without human interference and with an increased possibility of winning this game when compared to an average player. For this, we used exceptiminimax often referred as expectimax to solve the game which calculates all the possible moves and selects the one with highest probability.


Included Files:
index.html

style/
	includes all CSS files

js/
	animframe_polyfill.js
	application.js
	game_manager.js
	grid.js
	html_actuator.js
	keyboard_input_manager.js
	tile.js
	newTile.js
	state2048.js
	stateTrans.js

Following files are completley written by me.

	newTile.js
	state2048.js
	stateTrans.js

newTile.js

This keep track of the tiles. Though we have a seperate tile class, I have written this which is convenient for using in State2048 class.

stateTrans.js
This contain StateTrans class. This class just holds the state and action information for each transition.

state20048.js
This file contains State2048 class and all methods and functionalities of this. Even the implemented Expectimax algorithm is defined in this file. State2048 is the new representation of the Grid. It takes the grid and convert the value of the cells in natural logarithm and stores in two dimensional array as in Grid.

	All defined methods:
	build - just make the empty two dimensional array of cells
	buildFromGrid - convert the value of the cells of Grid in natural log
	makeFromState - build a copy of another state
	pushLeft - push a row left and determine if Left action is possible
	pushRight - push a row right and determine if Right action is possible
 	pushRowLeft - push a row in left
	pushRowRight - push a row in right
	pushUp - push a column up and determine if Up action is possible
	pushColUp - push a column up
	pushDown - push a column down and determine if Down action is possible
	pushColDown - push a column down
	getFree - find the empty cells
	GetSnake - find the horizontal/vertical path for merging tiles
	SnakeRating - find the best path score
	Rate - heuristic function used for evaluating the path
	getMaxValue - get the highest value in current state
	emptyCells - find the available cells
	expectiminimax - this is the implement Expectimax algorithm for this game.
	ProbabilityOfChild - determine the probability for the possible tile.
	getAllMoveStates - get all the moveable states and their associated actions.
	getAllRandom - get random value of cell for free cells.
	equalTo - compare two states.
	toString - a string representation of the grid/state.


How the code works:

Game manager build a State2048 from the Grid and find all legal actions/transition states by calling getAllMoveStates from State2048. For each transition, Game manager call expectiminimax method of State2048 to find the score and select the best transition/action and apply to the gird. This process continues until the game ends. Expectiminimax method used path technique to calculate score.  

Key Ideas tried from course to solve the problem:

	1. MDP
	2. Evaluation functions
	3. Heuristic function
	4. Q-learning
	5. Adversarial Search
	6. Expectimax alogorithm  

Instruction to play game:
	1. Open index.html
	2. Just hit Auto Run button. Agent will start playing the game.
	