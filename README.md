TownPlanning
============

Today's workshop is all about town planning. Individually at first,
then later in teams, you will write programs that generate the layout
of a city.

Setup
-----

You should start Google Chrome and open three tabs.

* Instructions and examples: https://github.com/ttworkshops/TownPlanning  
* Something for developing and running code online:
    * http://rextester.com/runcode  
    * http://www.compileonline.com 
    * Or you can use equivalent local tools if you have them installed
* (Experimental!) Something for visualising the map layouts you generate: http://ttworkshops.github.io/TownPlanning/ 
    * Paste the full text of your map output into the input box
    * Click "Render"
    * After a few seconds, click inside the map to navigate around
    * Use the mouse to change where you're looking, space to jump/fly, shift to go down
    * Type escape to regain mouse control
    * To try different map data, reload the page

Individual Challenge
--------------------

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

We're more interested in how you generate the map data than how you
output the text for that data, so to save yourself time you can look
at the example files above to see how so output a simple/random map
with a conforming format.

Because we'll be doing more interesting things with the maps later, we
recommend using a datastructure to hold the map while you generate it,
then output the data in text form at the end. Don't try to generate
and ouput at the same time, on the fly!


Group Challenge
---------------

The group challenge builds on the individual challenge. Before you
properly get started you will need:

* A group to work within (we will help organise that)
* A name for your group! Decided by its members

The group challenge takes things to the next level. Using the
individual challenge map specification as a starting point, we now
want new features.

* One 30x30 quadrant of the map should be left unchanged
* One 30x30 quadrant of the map should be changed to contain a
  tasteful casino building in the shape of a square-based pyramid
* One 30x30 quadrant should become a grass park with an 
  interestingly-shaped (i.e. not rectangular) lake within in it
* One 30x30 quadrant should contain a signature feature of the 
  team's own devising 

We suggest the following steps, taking the requirements above into
account:

* Discuss which team member's individual challenge program is the best
  starting point for the group challenge
* Decide what signature feature you're shooting for
* Decide who's going to take on which quadrant, and how the outputs
  of each quadrant generator are going to be put together to make
  a single composite map
* Decide whether to do a "big bang" code integration at the end, or 
  to attempt a few fully integrated integrations 

You can exchange code be email, instant messaging, memory sticks, SD
cards, or any other means. But part of the challenge is to quickly
organise a way to collaborate and share code.
