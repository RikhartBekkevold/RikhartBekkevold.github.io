// STORY STATE 
VAR forest_clue             = false
VAR found_boat_clue         = false
VAR found_village_location  = false
VAR takenCarriage            = false

// WORLD STATE 
VAR time = 23 
VAR days_passed = 0     

// PLAYER
VAR player_pt           = "Openness" 
VAR player_gold         = 100
VAR player_weapon       = "axe"
VAR player_gear         = "leather armor"

// inventory 
VAR health_potions      = 0
VAR strength_potions    = 0 
VAR bandages            = 0 

VAR player_health       = 5
VAR player_stamina      = 10  
  
// NPC - default npc
// without pt - baseline 
VAR ally_race       = "dwarf"       // gnome, goblin, elf, dwarf, human 
VAR ally_class      = "hunter"      // mage, hunter, warrior, priest
VAR ally_weapon     = "bow"    

VAR ally_name       = "Dolina"
VAR ally_sex        = "her"
VAR ally_pronoun    = "she"

// combat stats 
VAR ally_health     = 10
VAR ally_stamina    = 10

// personality 
VAR aggressiveness  = 4             // 0 defensive, 10 aggressive
VAR introvertedness = "extroverted"  
VAR shyness         = "shy"

// visual appearance
VAR ally_height     = "fairly short"


VAR current_location = -> gate
VAR current_epilogue = -> ending_1

// diplomating faction  reverend
// someone says something and you choose the reply. which either shows how opinion, or whether you want this or that to happen 
// quick path vs slow path
// you can decide to be evil or not? how you treat others in dialog

//"Do you think we can trust him?"
//"Probaly not"
//"Maybe not, but lets try anyway, whats the worst that can happen"
//"Yes, of course"

//every events need to build on the story, have a purpose story wise 

//Dolina does...
//Dolina says 



//Can you get there in time? 
//The longer, more likely they dead? 
//Can you get there with full health? 


-> forest_exit

INCLUDE your_room.ink
INCLUDE the_inn.ink
INCLUDE npc_setup.ink
INCLUDE the_town.ink
INCLUDE the_path.ink
INCLUDE the_village.ink
INCLUDE the_battle.ink
INCLUDE endings.ink
INCLUDE functions.ink
INCLUDE vendors.ink



//-> END // is this why styling didnt work? 
