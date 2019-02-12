== town_description  
As you where making your way through the town towards the gate, you looked around. 
The town of Vir Doruhl was an ancient dwarf town that was situated up against a mountain wall, where the dwarfs had been mining for centuries, and was indeed the original reasons for its construction. Most of the buildings near the mountain wall was made of stone, but the buildings further away was made of wood. 
    You ask {ally_sex} for {ally_sex} name, which you forgot yesterday. 
    "{ally_name}" {ally_pronoun} answers.
    You tell {ally_sex} yours. 
    Now that you are formally introduced the talk flows more easily. 
    * [Continue]
-> desc_surroundings


== desc_surroundings
You reach the towns trade district. You walk through it. On each side there are vendors selling a variety of goods and items. Some with makeshift wooden roofs, and tables. Others in proper buildings with fancy signs.  
-> vendors

== vendors 
    + [Talk to the potions vendor] 
       The potions vendor a middle aged man, looked at you as you approached.  
       -> potions_vendor 
    // if text is here, intro stuff about vendor, it wont repeat when buying, only be presented once
    + [Enter the clothing store] 
    -> cloth_vendor
    + [Talk to the blacksmith] 
        The blacksmith, covered in soot, welcomed you as you came closer. 
        -> blacksmith
    //+ Buy fish from the stall -> blacksmith 
    // buy bombs 
    + [Exit the trade district and go to the front gate]
-> gate

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
                You bought a health potion.  -> potions_vendor // You now have {player_gold} gold left.
            - else: 
                You don't have enough to buy more. 
        }
    + [Buy a bandage (-5 gold)]
        { 
            - player_gold >= 5:
                ~ player_gold = player_gold - 5 
                You bought a bandage.  -> potions_vendor
            -else: 
                You don't have enough gold to buy more. -> potions_vendor
        }
    + [Buy a strength potion (- 10)]
        { 
            - player_gold >= 10:
                ~ player_gold = player_gold - 10 
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
    + [Sharpen your weapon (-10 gold)]
        { 
            - player_gold >= 10:
                ~ player_gold -= 10
                The blacksmith sharpened your weapon. It now does more damage. 
                -> blacksmith // You now have {player_gold} gold left.
            - else: 
                You don't have enough gold to buy more. 
                -> blacksmith
        }
    + [Sharpen {ally_name}'s weapon (-10 gold)]
        { 
            - player_gold >= 10:
                ~ player_gold = player_gold - 5 
                The blacksmith sharpened {ally_name}'s weapon. It now does more damage.  
                -> blacksmith
            - else: 
                You don't have enough gold to buy more. 
                -> blacksmith
        }
    + [Back]
    -
-> vendors

== cloth_vendor 
    You try to enter the store, but on the door hangs a sign that says: "Out of town." You turn your back to the store.  
-> vendors



// pointing to knot work. as long as not the last divert. and as long as there is alwyas one option left, when all is gone.
// last can be avoided with the use of +, or fallback, or atleast one *

//The design allows for NPC to accompany you. both in dialog actions it changes. 

== gate
    You hurry on. No reason to delay the journey any longer! 
    You eventully reach the gate.
    //You walked on and eventually reached the gate.
    + [Go back to the trade district] 
        On second thought. Maybe it's best not to rush it. 
        You walk back the way you came, and soon enough find yourself back with the merchants. 
        -> vendors
    + [Exit gate and start the journey] 
        You walk through the huge gate and find yourself on the outside. In front of you: three possible paths to take. 
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


EXIT GATE 
You reach the gate and exit. Leaving the bustle of the town behind. 





roach and roche





variable for remebering axe etc 
if(var == 'axe')
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