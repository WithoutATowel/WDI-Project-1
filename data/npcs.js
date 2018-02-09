// location is stored as [y index, x index]

// STEPS for adding an NPC:
// 1. Add the npc object to the appropriate map here
// 2. Add the npc's to the map data file
// 3. 

var allNPCs = {
    pallet : [
        { 
            name : "Jane",
            location : [9, 5], 
            background : "img/npcs/pallet/60.png", // 16px wide, 18px tall
            facing : "right", 
            trainer : false, 
            dialog : "What year is it? WHAT YEAR IS IT?!" 
        },
        { 
            name : "John",
            location : [16, 11],
            background : "img/npcs/pallet/61.png", 
            facing : "down", 
            trainer : false, 
            dialog : "GET IT OFF OF ME! IT BURNS!" 
        }
    ],
    ashHouse1 : [
        {
            name : "Mom",
            location : [5, 6], 
            background : "img/npcs/ashHouse1/60.png", 
            facing : "down", 
            trainer : false, 
            dialog : "Mom: You gotta eat! Who do you think you are?",
            healer : true
        }
    ],
    rivalHouse : [
        {
            name : "rivalSister",
            location : [4, 3], 
            background : "img/npcs/rivalHouse/60.png", // 18px wide, 19px tall
            facing : "right", 
            trainer : false, 
            dialog : "Why are you in my house? Mad creepy, bro."
        }
    ],
    oakLab : [
        {
            name : "nerdDude1",
            location : [11, 3], 
            background : "img/npcs/oakLab/60.png", // 18px wide, 19px tall
            facing : "left", 
            trainer : false, 
            dialog : "60 percent of the time it works every time."
        },
        {
            name : "nerdDude2",
            location : [10, 9], 
            background : "img/npcs/oakLab/60.png", // 18px wide, 19px tall
            facing : "left", 
            trainer : false, 
            dialog : "Why does Ted always get the ladies?"
        },
        {
            name : "nerdGirl",
            location : [11, 2], 
            background : "img/npcs/oakLab/61.png", // 18px wide, 19px tall
            facing : "down", 
            trainer : false, 
            dialog : "Do you have pizza bagels? I'm so stoned right now."
        },
        {
            name : "profOak",
            location : [3, 6], 
            background : "img/npcs/oakLab/62.png", // 18px wide, 19px tall
            facing : "down", 
            trainer : false, 
            dialog : "Prof Oak: It's dangerous to go alone! Take a Pokemon."
        }
    ],
    route1 : [
        {
            name : "Doug",
            location : [26, 4],
            background : "img/npcs/route1/60.png",
            facing : "down",
            trainer : true,
            dialog : "How is this different from dog fighting? Hahaha!",
            defeated : false
        },
        {
            name : "Bert",
            location : [14, 14],
            background : "img/npcs/route1/61.png",
            facing : "left",
            trainer : true,
            dialog : "You don't stand a chance!",
            defeated : false
        },
        {
            name : "Mom",
            location : [3, 8], 
            background : "img/npcs/route1/62.png", 
            facing : "right", 
            trainer : false, 
            dialog : "Mom: Wait, how did I get here?",
            healer : true
        }
    ],
    finalFourLair : [
        {
            name : "DeVito",
            location : [2, 4],
            background : "img/npcs/finalFourLair/60.png",
            facing : "down",
            trainer : true,
            dialog : "Alright, let's do this...",
            finalFour : true,
            defeated : false
        },
        {
            name : "Dee",
            location : [2, 5],
            background : "img/npcs/finalFourLair/61.png",
            facing : "down",
            trainer : true,
            dialog : "What? Did you say something?",
            finalFour : true,
            defeated : false
        },
        {
            name : "Knuckles",
            location : [2, 6], 
            background : "img/npcs/finalFourLair/62.png", 
            facing : "down", 
            trainer : true, 
            dialog : "Don't touch my hair, dude.",
            finalFour : true,
            defeated : false
        },
        {
            name : "Walter",
            location : [2, 7], 
            background : "img/npcs/finalFourLair/63.png", 
            facing : "down", 
            trainer : true, 
            dialog : "Say.  My.  Name.",
            finalFour : true,
            defeated : false
        }
    ]
}









