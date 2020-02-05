== town_description 
As you where making your way through the town towards the gate, you looked around. 
The town of Vir Doruhl was an ancient dwarf town that was situated up against a mountain wall, where the dwarfs had been mining for centuries, and was the reason for the towns construction. Most of the buildings closest to the mountain wall was made of stone taken from this very same mountain. Some of the newer buildings, however, was made of wood. The town was modern and thriving economically as the town had become a center for trade as well as mining.  
    
    You and {ally_name} talked about this and that, as you made your way towards the city gates. 
    * [Enter the trade district]
-> desc_surroundings


// intervene - reward? show moral alignment? something happens later? benefit later? 

== thief 
As you walk along the crowded streets. You see someone trying to pickpocket an unsuspcting victim. 
    * [Ignore] 
        You didn't want to get involved. Was it the right thing to do? you wonder.  
    * [Warn] 
        You shout "thief!".
        The dwarf turns around. The thief vanishes into the crowd. Taking advantage of the crowded street. In seconds he is out of view.
        The dwarf comes over and thanks you. 
            "No problem anyone would have done that", you say humbly. 
            "I deserve a reward gnome"
        The dwarf thanks you
        He gives you a small reward - 5 gold. Relief makes happy. 
        This might come in handy for later" you think.
    -
    //rent inn, but dont have money 
    // when stay at bonfire, day must pass, and when stay at in  "Day 3"
    // you get a small gold reward? no morality here. 
    // 
-> END

// illness 

// when you reach the town, and are hurt because you didnt use potion, you should 
// be forced to stay at inn? 
// use strength potion before battle? how does it affect the battle? 

== desc_surroundings
You reached the towns trade district. On each side there where vendors selling a variety of goods and items. Some under makeshift wooden roofs. Others in proper buildings with fancy signs.  
-> vendors


== vendors 
    + [Talk to the potions vendor] 
       {potions_vendor == 0: The potions vendor, a middle aged man, looked at you as you approached.} 
       -> potions_vendor 
    // if text is here, intro stuff about vendor, it wont repeat when buying, only be presented once
    + {current_location == -> gate} [Enter the clothing store] 
    -> cloth_vendor
    + [Talk to the blacksmith] 
        The blacksmith, covered in soot, welcomed you as you came closer. 
        -> blacksmith
    //+ Buy fish from the stall -> blacksmith 
    // buy bombs 
    + {current_location == -> gate} [Go to the front gate] -> current_location
    + {current_location == -> road_path} [Continue your travels]
      
-> current_location


    
    

// add a number for how many of each item you have 
// look at functions
// count  
// if gold <= 10 dont buy
// some way to earn money? selling?
//"you should atleast buy some food for the journey first. cant move without it"
// different story for each path. makes it a make it your own path.

== potions_vendor 
// add the potion to inventory or variable 
(You currently have {player_gold} gold left.)
    + [Buy a health potion (-10 gold)]
        { 
            - player_gold >= 10:
                ~ player_gold -= 10
                ~ health_potions++
                You bought a health potion.  -> potions_vendor // You now have {player_gold} gold left.
            - else: 
                You don't have enough to buy more. 
        }
    + [Buy a bandage (-5 gold)]
        { 
            - player_gold >= 5:
                ~ player_gold = player_gold - 5
                ~ bandages++
                You bought a bandage.  -> potions_vendor
            -else: 
                You don't have enough gold to buy more. -> potions_vendor
        }
    + [Buy a strength potion (- 10)]
        { 
            - player_gold >= 10:
                ~ player_gold = player_gold - 10
                 ~ strength_potions++
                You bought a strength potion.  -> potions_vendor
             -else: 
                You don't have enough gold to buy more. -> potions_vendor
        }
    + [Back]
    -
-> vendors


== blacksmith 
// add the potion to inventory or variable 
(You currently have {player_gold} gold left.)
    * [Sharpen your weapon (-10 gold)]
        { 
            - player_gold >= 10:
                ~ player_gold -= 10
                The blacksmith sharpened your weapon. //It now does more damage. 
                -> blacksmith // You now have {player_gold} gold left.
            - else: 
                You don't have enough gold to buy more. 
                -> blacksmith
        }
    * [Sharpen {ally_name}'s weapon (-10 gold)]
        { 
            - player_gold >= 10:
                ~ player_gold = player_gold - 5 
                The blacksmith sharpened {ally_name}'s weapon. //It now does more damage.  
                -> blacksmith
            - else: 
                You don't have enough gold to buy more. 
                -> blacksmith
        }
    + [Back]
    -
-> vendors



// the brilliance of the time is that decisions matter.. its quite brilliant...
// learn/steal from better. things that works. 

// pointing to knot work. as long as not the last divert. and as long as there is alwyas one option left, when all is gone.
// last can be avoided with the use of +, or fallback, or atleast one *

//The design allows for NPC to accompany you. both in dialog actions it changes. 

== gate
    You hurry on. No reason to delay the journey any longer! 
    You eventually reach the towns front gate.
    //You walked on and eventually reached the gate.
    + [Go back to the trade district] 
        On second thought. Maybe it's best not to rush it. 
        You walk back the way you came, and soon enough find yourself back with the merchants. 
        -> vendors
    + [Exit gate and start the travels] 
        You walk through the huge gate and find yourself on the outside. You remember what they told you back at the inn and your party of two take the road leading south.
        //In front of you: {forest_clue: three} {not forest_clue: two} possible paths to take. 
    //* Start journey? Or go back to buy more?
-> the_path


view counts is imp, because you need to change dialog.  
local variables 
exhaust dialog 
write down the impoirtnat one/goal? 
if viewd a knot, better than variables? save variables for other things? 
// how to go back and forth to town etc? 


go back and forth between "zones" aka chapters

// loop or back button?
// can achive it all with only knots and diverts

VENDORS 
vendor 1
"Do you want to buy something?" (you have "var" money) 

        buy this (10 gold) - might be handy for later 
        buy a potion (10 gold) - might come in handy later 
        buy that 
        leave - save money for something else

if buy, remember it for later 
variable - add to mem

vendor 2
get your weapong reinforced 
vendor 3

metaphorical journey 

you know its a trap 
the way the npc answers your questions about themsvles 
the way the partner fights with you ... dont make the init chocie about how they fight, just if you like dwarfs over elfs
can add npc behaviour in the already created story/journey after





roach and roche




lock picking 
stats? inventory? looping? open world? 
deal with a trap on the way 
scene setting, desc tips
they play it out in their mind an dnot screen. the choices and actions are the same. 

choose between 3 vendors? only time for one? 
buy things -- more move on - more open ended? 

write the vendors here, what you buy as you are moving towards the gates. 
you also see and comment on things here, buildings you pass
maybe some crimes going down - interrupt? 
you talk to the dwarf (or elf) about your adventure.