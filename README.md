TownPlanning
============

Today's workshop is all about town planning. Individually at first,
then later in teams, you will write programs that generate the layout
of a city.

Setup
=====

You should start Google Chrome and open three tabs.

* Instructions and examples: https://github.com/ttworkshops/TownPlanning  
* Something for developing and running code online:
** http://rextester.com/runcode  
** http://www.compileonline.com 
** Or you can use equivalent local tools if you have them installed
* Something for visualising the map layouts you generate: http://ttworkshops.github.io/TownPlanning/ 
** Paste the full text of your map output into the input box
** Click "Render"
** After a few seconds, click inside the map to navigate around
** To try different map data, reload the page

Individual Challenge
====================

Using your programming language and tools of choice, write a program
to generate the layout of a city. A city layout is represented as
simple plain text, describing a grid of heights and materials.

Example of a 3x3 map:

3 3
0 water 0 water    0 water
0 water 4 building 0 water
0 water 0 water    0 water

The first line contains the width and height of the map.
Each subsequent line describes one row of the map.
Each cell in each row is a pair of a height and a material

Heights may be between 0 and 19 inclusive. The materials available are
as follows:

* grass
* water
* road
* building

So the above 3x3 map describes a city made up of a building 4 units
high, surrounded by a moat of water at ground level.

Your indiviual task is to generate a text city map in the format
above, to the following specifications.

* The city should be 60x60 in size
* The map should be populated by buildings (i.e. cells with material type building) of random heights (between 0 and 19), separated by a grid of 1-block-wide roads at height 0 running parallel to both the x and y axes
* Roads should appear at the perimeter of the map and then evenly spaced within, with parallel roads having 2 blocks of buildings between them
* As a flourish, every crossroads should have a water fountain (material water at height 0)


Group Challenge
===============