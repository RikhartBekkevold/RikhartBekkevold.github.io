== the_inn 
CHAPTER 1 - THE INN # CLASS: test 

You look around, taking in the sights of the room. It is a typical inn. It is filled with people. 

The inn is bustling with noise and movemement. Some people are sitting quitly, looking tired, having their breakfast. Others are merrily playing cards or talking to each other. A chatty bunch of dwarfs are sitting at a table close to you. In the corner across the room a solitary hooded figure sipped on a mug. The innkeeper, behind his table, is cleaning a similar looking mug. The meek looking waitress is serving a gnome sitting by himself.  
-> INFO

== INFO
Before you leave the inn, on your way to look for the beast, you figured that you better ask around for some information. It never hurt to gather information first. Besides, you need to figure out the exacat location of the village mentioned in your contract before you leave. Perhaps someone in the inn would know. 
    // mission: find the location of the village
-> NPCs


== NPCs 
    + [Talk to the shady figure in the corner] 
        You walk over and introduce your self. -> shady_figure
    + [Talk to solitary gnome] 
        You walk over and introduce your self. -> gnome
    + [Talk to the innkeeper]
        The innkeeper is polishing a mug as you approach. -> innkeeper
    + [Call waitress over]
        She finishes what she is doing, and comes over. -> waitress
    + [Go over to the chatty dwarfs]
        The dwarfs are laughing as you approach. They are a merry bunch. -> dwarfs
    + { found_village_location } [Exit the inn] 
        You leave the inn, and its noise behind. 
        -> outside


== shady_figure
    * [Ask about him] 
        You ask about him. He remains silent.  -> shady_figure
    * [Ask about the village] 
       You ask about the village in the contract. He tells you the location. He says the quickest way is through the forest. 
        ~ forest_clue = true
       He remains silent. -> shady_figure
    * [Ask about the monster]
       He remains silent. Well, this is useless.. -> shady_figure
    + [Leave]
    -
-> NPCs

== gnome
    * [Ask about him] 
        He tells you he is here to look for work. -> gnome
    * [Ask about the village] 
        You ask about the village in your contract.
        He tells you that the village is on the other side of the lake outside town, normally travelers follow the road south.
        "If you talk to the fishermen, they will sometimes agree to take you across for a fee." he tips you.
        ~ found_village_location = true
        ~ found_boat_path = true
        // feeback about you finding out these things? 
    -> gnome 
    * [Ask about the monster]
        He has never heard of it. -> gnome
    + [Leave] 
    -
-> NPCs

== innkeeper
    * [You ask for any rumors] -> innkeeper
    * [Ask about the village] 
        You ask about the village in your contract.
        He tells you that the village is on the other side of the lake outside town, normally travelers follow the road south.
        "If you talk to the fishermen, they will sometimes agree to take you across for a fee." he tips you.
        ~ found_village_location = true
        ~ found_boat_path = true
    -> innkeeper
    * [Ask about the monster]
        He has never heard of it. -> innkeeper
     + [Leave] 
    -
-> NPCs

== waitress
    * [Ask about her]
        You ignore everything she says. -> waitress
    * [Ask about the village] 
        You ask about the village in your contract.
        "Just follow the road south. It's not far. 2 days travel" she explains.
        ~ found_village_location = true
    -> waitress
    * [Ask about the monster]
        She has never heard of it. You would be better of asking a traveler probably.  
    + [Leave] 
    -
-> NPCs

== dwarfs
    * What are you guys so happy about? 
        They explain one of the dwarfs are getting married. They are celebrating. -> dwarfs  
    * [Ask about the village] 
        You ask about the village in your contract.
        They say they don't know where it is. -> dwarfs
    + [Leave] 
    -
-> NPCs


== outside ==
On the outside, waiting for you already is your group member. 

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
"Lets go" you replied. 
* [Continue] 
-> town_description


















respons to event. respons to dialog. 
one picture in body bg for each chapter - the village etc - immersive? 

ink as dialog engine for unity 3d game

Ask about him - different questions - choice to question about thier background?
    you never told me where you are from
    ask for name 
    why did you choose to join me? 
    Ready  init next chapter, the town 


you wake up and knows you need to go to mournstead? 
You asks if he knows how to get to Mournstead.


heard_first_battle_clue 
heard_battle_clue in trade district when talking.. or intervening


