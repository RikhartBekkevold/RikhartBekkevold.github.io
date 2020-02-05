== the_village
THE VILLAGE OF MOURNSTEAD, THE SOUTHERN KINGDOMS #CLASS: test 
    ~ days_passed++
     By the time you reach Mournstead the sun has set again. {days_passed} days has passed since you set out from Vir Doruhl. You hope that you are not too late.
     
     As you are getting closer you can see that the village is clearly a poor village, it mostly seems to be farmers that live here. In the background there are a few sheep grazing. All the buildings have been reinforced with wooden planks. It is clear that the villagers have been trying to keep something from entering their houses.
     
    {
        - days_passed >= 10 and days_passed < 100:
            There is an earie quiteness as you walk in between the houses.
            * [Search for people] -> everyone_is_dead
        -  days_passed >= 7 and days_passed <= 9:
            There is no one around except an old man hurrying across the street. You talk to the sole villager.
            * [Talk to old man] -> old_man
        -  days_passed > 0 and days_passed < 7:
            There are a few people around with gloomy faces. When they see you they react with smiles. Maybe the {player_weapon} on your back, and {ally_weapon} on {ally_name}s, is what sparks the reaction.
            * [Talk to villagers] -> villagers
    }
   
   
== villagers
     ~ current_epilogue = -> ending_1
     You address the villagers. 
   * "Whats with the wooden planks?" [] you ask.
        "A terrible monster has been terrorizing us. We have managed to hold on, but wouldn't have for much longer. Each day, the monster gets more aggressive as it get hungrier. Now it doesn't only attack at night anymore." one villager, a young woman, tells you.  
            She continues. "Some have fled, but the rest of us have remained. All of the little that we have is in this town - our entire lives. We couldnt run away from it." They all nod.  
            "We sent a messenger and all we could hope for was to hold out until help arrived." she finishes.
            ** "Thats why we are here!" [] you say reassuringly.
            //** DOnt care bitches
            --
            ** Where is the monster now? [] you ask. 
                "Up behind the hill." one of the villagers point. 
                "Better go immediately. If we wait the monster will return to the village later. It will be harder to fight it with others around." {ally_name} says. 
                *** [Go]
            --
 -> the_battle
   
  
== old_man
    ~ current_epilogue = -> ending_2
    //* [Ask the man for vendors] 
    * "Where is everyone?" [] you ask the old man.  
        Most are all dead, or run away. There is only me and a handful left.
        -> old_man
    * [Show him your contract]
        You ask about the monster you are hunting. You unfold your contract and show it to him. He reads, afterwards which he nods understandingly. He then points to the west, and what looks like a cave, although it is hard to tell from this distance. -> old_man
    * ->  
    - 
    
    * [Follow the monsters trail]
-> the_battle


== everyone_is_dead
    ~ current_epilogue = -> ending_3
    The village is completely empty. Not a soul around. It seems you didn't get here in time. Perhaps they died. Perhaps they where forced to flee and leave their living behind to save their lives.
    
    Whatever the reason, its clear the village has been completely abandoned. At the edge of the village you pick up on the foot tracks of the monster. You can't save the villagers, if only you hadn't wasted so much time, but you can atleast take care of the source of the problem. Once, and for all.
    * [Follow the monsters tracks]

-> the_battle

// when i can see how diff pt act. it will be easier to design NPC. which can absolutely be done within the confines of this story/game design. 

//make stanard functions? for talking to NPC? and battle.
//back at where you left off    
    
    
   