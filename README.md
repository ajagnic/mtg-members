# Magic: The Gathering Club Member Hub
  Website to store local MTG players and their information. (7-14-2017)
##### By: Adrian Agnic

## Description
  Provides a central website to list local MTG players, their local ranking, deck configuration, and location. Allows users to display all members filtered by rank.

## Specs
Spec | Input | Output | Description
--- | --- | --- | ---
User can view list of all current members | 'Members' | *List returned | Displays basic list of member names
User can click members name for detail page | 'Adrian A.' | 'Rank: 1, Deck: BW' | Member detail page displays main information about that member
User can sort member list | 'Sort by Rank' | *List returned | Sorts member list by current ranking
User can view About page | 'About' | *Text returned | Displays info behind website development
Admin can edit all members | 'Edit Member' | 'AJ A.' | Updates that members info in database
Admin can add new member | 'Add' | 'Ally' | Adds new member to database
Admin can delete member | 'Delete' | 'Ally' | Deletes member from database

## Installation
* Go-to <a href="https://github.com/ajagnic/address-book">GitHub</a>
* Clone repository on to your machine (git clone www.example.code)
* Navigate to the project directory with a terminal and run "npm install"
* Do the same thing again, except with "bower install" 
* Install Node.js and TypeScript if not installed already
* Create 'api-keys.ts' file in src/app/
* Api-Keys should contain: 
  * export var masterFirebaseConfig = { apiKey: "XXXX", authDomain: "XXXX", databaseURL: "XXXX", projectId: "XXXX", storageBucket: "XXXX", messagingSenderId: "XXXX" }
  * Replace "XXXX" with your information
* Locate package.json file for angular commands.
* 'ng serve' will run the local server (local: 4200)
* Log Contributions

## Technologies
* HTML
* ANGULAR2
* TYPESCRIPT
* FIREBASE
* BOOTSTRAP
* CSS

## Known Bugs
  N/A

## License
Project protected under MIT License.
Copyright (c) 2017 Copyright Holder All Rights Reserved.
