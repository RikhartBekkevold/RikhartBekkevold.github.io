== setup_npc ==
    // ~ setupNPC(player_pt)
    On the outside you spot a{ally_race == "elf":n} {ally_race} in the distance.
-> desc_NPC

// === an or a ()
// === She or she 


    
    
== desc_NPC 
Last night you partnered with this {ally_race}, {ally_sex} name is {ally_name} and {ally_pronoun} seemed like a good fit for your party. As a {ally_class} {ally_pronoun} was just what you needed you thought to yourself. Besides, help was always more than welcome, life long experience as a mercenary had taught you this. You also knew that you needed help to fullfill the contract, anyway. A monster that could terrorize an entire village, should not be dealt with alone. 
 
* [Go closer]
You walked closer. Details now became visible. {ally_name} was {ally_height} - {ally_pronoun} was a {ally_race} after all. Your impression was that {ally_pronoun} seemed quite {shyness}, really. Nothing wrong with that. In battle {ally_pronoun} looked like the type that would { aggressiveness <= 10 and aggressiveness >= 5: charge in with no hesitation.} {aggressiveness <= 4: assess the situation first and not charge in recklessly.}


    Your new-found partner looked away from {ally_sex} conversation as you approached, and instead turned to you. 
    "Ready to leave?" {ally_pronoun} inquired. She seemed eager to get going. It was like she was reading your mind. 

-
* "Lets go. No time to waste." [] you replied.  
-> town_description

 // set variables, then look at then to determine gmae settings that yuou can make 
// the witcher story twist 
// journey takes time, because have to stop and do something first on the way 


// === attack() ===
   // if agressive 
    //    charge in 
    //if 

// it will display text, but only before the first divert. the rest will never 
// be pointed too, unless inside knot 

//if use function this might work? because you just return one line. 
// pluss a fucntion is reusable and I only need to change it in one place then

// bottom line. fucntions should handle logic. not text 

// assist or support 

//charge in, plan and keep her cool/head/wits about her/assess the situation/hold back , doing anything rash

// choices with clear advantage to both. playstyle. 
    
    

// cool that you will be presented different friend based on personality 

// since have website, can query the answer to test, or have my own test 
// then i can automatically get pt 

== outside ==
On the outside, waiting for you already is your group member. 

Change this part: instead of player selecting AI traits, this part should be automated based on the player personality # CLASS: red_text
Display the, result of this process, the generated NPC description here. # CLASS: red_text

* [Your group member is an elf]  
    ~ ally_name = "Aelinor"
    ~ ally_race = "elf" 
    ~ ally_sex = "her"
* [Your group member is a dwarf]
    ~ ally_name = "Bangrim"
    ~ ally_race = "dwarf" 
    ~ ally_sex = "his"
    
    
    
-

Since you knew you couldn't defeat the monster on your own, you had partnered with the {ally_race}. 
//Agreeing to split the reward. 

* The {ally_race} was wielding an axe
    ~ ally_weapon = "axe"
* The {ally_race} was wielding a bow 
  ~ ally_weapon = "bow"
* The {ally_race} was wielding a polearm 
  ~ ally_weapon = "polearm"
* The {ally_race} was wielding a sword 
    ~ ally_weapon = "sword"
-

* [The {ally_race} was female] 
    ~ ally_sex = "her"
    ~ ally_pronoun = "she"
    { 
        - ally_race == "dwarf":
            ~ ally_name = "Aelinor"
        - else: 
            ~ ally_name = "Dolina"
    }
    
* [The {ally_race} was male] 
    ~ ally_sex = "his"
    ~ ally_pronoun = "he"
    { 
        - ally_race == "dwarf":
            ~ ally_name = "Bangrim"
        - else: 
            ~ ally_name = "Tassarion"
    }
-

Your partner looked away from {ally_sex} conversation as you approached, and instead turned to you. 
"Ready to leave?" {ally_pronoun} inquired.
* "Lets go" you replied. 
-> town_description