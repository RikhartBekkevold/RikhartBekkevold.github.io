VAR gathered_all_info = false
VAR how_many_you_talked_to = 0 
VAR done_gnome = false
VAR forest_clue = false

VAR player_gold = 100

VAR player_weapon = "axe"
VAR player_gear = "leather"

VAR ally_race = "Dwarf"
VAR ally_name  = "Aelinor"
VAR ally_sex = "her"
VAR ally_pronoun = "she"
VAR ally_weapon = "bow"    

VAR agility = 0
VAR strength = 0
VAR inventory = 0

VAR potion = false 
VAR bandage = false
VAR player_current_health = "healthy"

VAR time_of_day = "day"

VAR found_boat_path = false
VAR found_village_location = false



INCLUDE your_room.ink
INCLUDE the_inn.ink
INCLUDE the_town.ink
//INCLUDE the _outskirts.ink
INCLUDE the_path.ink
INCLUDE the_village.ink
INCLUDE the_battle.ink
INCLUDE endings.ink

-> END

// stats at the end of the game, who you talked to. array? possible. list maybe.
// list of NPCs list of inventory items etc, equipment 