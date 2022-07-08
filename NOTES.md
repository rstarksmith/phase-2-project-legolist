# Lego List
## Overview
User can keep a list of lego sets owned and post new sets as purchased.
## Features
* landing page
* navigation (navbar - 2 or 3 Routes)
* collection cards
* form to add to list
* search sets by name 
* built checkbox
## MVP
* 3 Routes
    - Full List (possible button on home with route)
    - Add New Set 
    - Home
* GET
    - Full List (LegoList, useEffect)
* POST
    - Add New Set (LegoForm) 
* 5 Components
    - App
    - Home
    - NavBar
    - LegoForm 
    - LegoList
    - LegoSet
    - LegoDetails (to hide)
### Stretch Goals
* ability to delete set card (button on card, DELETE)
* ability to change from boxed to built and persist (PATCH)
* ability to search/filter by theme
* add public API to search for more sets