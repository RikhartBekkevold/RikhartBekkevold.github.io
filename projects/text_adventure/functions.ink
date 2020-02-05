=== function heal() ===
    {
        - health_potions < 0:
            ~ return "You use a health potion to heal. You have {health_potions} left." 
       // - bandages < 0:
         //   ~ return "You use a bandage to heal."
        - else: 
            ~ return "Unfortunately, you don't have anything to heal yourself with."
            
    }
    
=== function mobility() ===
    {
    
        - player_gear == "leather armor": 
           ~ return "light on your feet"
        - else:    
          ~ return "well protected" 
          
    }
    
//=== randomCreature() ===
    
buy()


=== function canAfford(amount) === 
    { 
        - player_gold >= amount:
            ~ return true
            //~ player_gold -= amount
    }        
        
    // calling the function would just write the sentence..


// transform arg num to string representation of health 
=== function currentHealth(h) ===
    { 
        - h > 5:
            ~ return "healthy"
        - h > 5:
            ~ return "weak"
        - h > 0:
            ~ return "injured"
        - else:
            ~ return "dead"
    } 
    
    
=== function currentTime(t) ===
    {
        - t < 7:
            ~ return "sunrise"
        - t < 12:
            ~ return "morning"
        - t < 18:
            ~ return "afternoon"
        - t < 22:
            ~ return "evening"
        - t < 25:
            ~ return "sunset"
        - else: 
            ~ return "not a valid time"
    }
    

=== function setRaceStats(race) ===
   { 
        - race == "elf":
            ~ ally_height = "fairly tall"
            // tie sex and name to race, for simplicities sake 
            ~ ally_sex = "her"
            ~ ally_pronoun = "she"
            ~ ally_name = "Aelinor"
        
        - race == "dwarf":
            ~ ally_height = "fairly short"
            ~ ally_sex = "his"
            ~ ally_pronoun = "he"
            ~ ally_name = "Bangrim"
            
         - race == "human":
            ~ ally_height = "of average height"
            ~ ally_sex = "his"
            ~ ally_pronoun = "he"
            ~ ally_name = "Percival"
            
         - race == "gnome":
            ~ ally_height = "very short"
            ~ ally_sex = "her"
            ~ ally_pronoun = "she"
            ~ ally_name = "Dotina"
        
         - race == "orc":
            ~ ally_height = "of average height"
            ~ ally_sex = "his"
            ~ ally_pronoun = "he"
            ~ ally_name = "Grommok"
            
    }


// call at game start with player personality as argument 
=== function setupNPC(pt) ===
    {
        - pt == "Openness": 
            ~ ally_race = "dwarf"
            ~ setRaceStats(ally_race)
            
            
        - pt == "Neuroticism": 
            ~ ally_race = "dwarf"
           ~ setRaceStats(ally_race)
        
        
        - pt == "Extraversion":
            ~ ally_race = "dwarf"
            ~ setRaceStats(ally_race)
        
        
        - pt == "Agreeableness": 
            ~ ally_race = "dwarf"
            ~ setRaceStats(ally_race)
            
            
        - pt == "Conscientiousness": 
            ~ ally_race = "elf"
            ~ setRaceStats(ally_race)
            
            // class and weapon decides how they can behave within the game context, so set the class and weapon to fit how you want the npc to act, although it is likely related  
            //certain types have also shown preference for certain classes? and races
            ~ ally_class = "hunter" 
            ~ ally_weapon = "bow"
    }







// initatis a random event 
=== function fight() === 
  dsasd

    //return different text based on input 

 dasd based on v ariables for 
    what shuld happend when player attack? 
    mini game? 


// makes story more readable 
== function attack() ==
   
     
    { player_weapon == "axe":
        You attack 
        - else: 
            You stay back.
    }


    