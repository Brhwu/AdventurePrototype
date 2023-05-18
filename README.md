A simple adventure game by Brandon Hwu based on a simple adventure game engine by [Adam Smith](https://github.com/rndmcnlly).

Code requirements:
- **4+ scenes based on `AdventureScene`**: Room, Flip, Spicy, Star
- **2+ scenes *not* based on `AdventureScene`**: Intro, Outro
- **2+ methods or other enhancement added to the adventure game engine to simplify my scenes**:
    - Enhancement 1: There are collectables in each room that can be displayed at the final room.
    - Enhancement 2: Some interactables make a new object or add a new item to the inventory.

Experience requirements:
- **4+ locations in the game world**: Room, Flip, Spicy, Star
- **2+ interactive objects in most scenes**: In the second room (the flip room) there is the flip and the Pain and Suffering which can both be collected and used later on.  In the third room (the spicy room) there is the bucket and the weird figure which can both be collected and used later on.
- **Many objects have `pointerover` messages**: The bed in the first room (your room) and the cow in the third room (the spicy room) have flavor text.  
- **Many objects have `pointerdown` effects**: The bed in the first room (your room) has a message popup when you click on it.  The Pain and Suffering in the second room (the flip room) is collected when clicked on.
- **Some objects are themselves animated**: The door in the first room (your room) slides from the bottom after the button is placed.  The guy in the second room (the flip room) flips out when given the flip.

Asset sources:
- For all my assets I made them using Krita.

Code sources:
- `adventure.js` and `index.html` were created for this project [Adam Smith](https://github.com/rndmcnlly) and edited by me.
- `game.js` was sketched by [Adam Smith](https://github.com/rndmcnlly) and rewritten by me.