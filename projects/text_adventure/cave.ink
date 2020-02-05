
== TALK_TO_NPCs
    // mute, silent - write the personality of the npc 
    + [Talk to shady figure in the corner] 
    
        You motion to sit down. He nods in confirmation.
        ++ [Have you seen this? Show poster.]
            You show him the poster. He shakes his head.
        ++ [Ask about him]
            How do you do? you ask. He remains silent.
            // give the forest clue here 
        --
    // -
     -> END     
    
    
    + { not done_gnome} [Talk to solitary gnome]
        You approach the gnome and introduce yourself.
        ** [Have you seen this? Show poster.]
            Yes.
            *** Do you know the location of the village?
                Yes. On the otherside of the lake.
                // add picutere of map 
            **** How do I get there?
                Go through the forest, it is the fastest way. 
                ~ gathered_all_info = true
                ~ done_gnome = true 
        // move back with not divert, talking to gnome disapear?
        // * * ds 
        
        // i want to go back to prev options, not all the wat to start, so i guess gather is correct? need back button? 
        // or is knots the way? 
        
    -> TALK_TO_NPCs
    
    
    + [Talk to the mug cleaning innkeeper]
        whats new in town?
        Forst is faster, but 
        Stick to the road. bandits in the forest 
    -> END 
    
    
    + [Sit down and call the waitress over] you ask soemthing  
        You sit down and talk to 
    -
        
        
    + [Talk to chatty table of merry dwarfs] 
        the meryr becauyse drinkign despite this time of day 
        one oif them getting married, they found some 
        can i sit donw?
    -
    
    
    + { gathered_all_info } [Exit the inn] 
        You think you have enough information now. You could continue to talk to the people in the inn, or you could head outside.
    -> outside