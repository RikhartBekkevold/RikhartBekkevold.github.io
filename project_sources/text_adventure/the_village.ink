== the_village
THE VILLAGE OF MOURNSTEAD #CLASS: test 
    // the reason why MOURNSTEAD was on the same line is because the divert was not on the line below
    // At time_of_day 
    You arrive at the quaint little village of Mournstead. Several of the windows have been bared. There is almost no sound. 
    There is no one around except an old man hurrying across the street. You talk to the sole villager. 
-> old_man

== old_man
    //* [Ask the man for vendors] 
    * [Ask the man where everyone is] 
        You ask where all the other residents are. 
        "Inside" the man answers. 
        "With the current monster roaming about, it's not safe outside at night" he finishes. -> old_man
    * [Ask about the monsters location]
    
        The elderly man points towards the west, at a cave far in the distance. -> old_man
    * ->  // this gets triggered when no options left? when all options exhausted, move on..
    - // loop here?  it only works once because no fall back=?
    
    // - after each would create the same result? 
    
    // if + dont need fall back... but with * i do? so it know what to do when list is over? because error is after last 
    // option is done?
    
    // its not good to divert at end, because its infinte loop? fallback must always be - or lead to new knot?
    
    // one goes back, the others move on? 
    // find out where monster last seen from NPC to move on. mark it with some red or something? "mission"
    
It's late, the sun is setting. 
"Should we stay and rest until the morning, or go now in the dark?" {ally_name} asks you.
    * [Move on]
        You decide it's best to move now. Maybe the darkness can be used to your advantage.   
        ~ time_of_day = "night" 
    * [Stay and Rest] 
        ** [Rent a room at the local inn (50 gold)]
            { 
                - player_gold < 50:
                    You don't have enough money to rent a room. 
                - else:
                    ~ player_gold -= 50
                    You rent a room for the night. You now have {player_gold} gold left.
                    The next morning you feel rested.  
            }  
        ** [Sleep outside] 
            You sleep outside on the hard ground.
            The next morning you don't feel very rested.  
        --
        // something after move on 
    -
     Your party of two set foot in the direction of west, towards the cave.
     After an hour you reach the goal. You crouch behind a rock. 
    * [Last chapter]
-> the_battle





make stanard functions? for talking to NPC? and battle.

//back at where you left off    
    
    
   