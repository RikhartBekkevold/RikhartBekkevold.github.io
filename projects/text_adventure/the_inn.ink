== the_inn 
THE INN # CLASS: test 

You look around, taking in the sights of the room. It is filled with people in the early morning hours. 

The inn is bustling with noise and movemement. Some people are sitting quietly, looking tired, having their breakfast. Others are merrily playing cards or talking to each other. A chatty bunch of dwarfs are sitting at a table close to you. In the corner across the room a solitary hooded figure sipping on a mug. The innkeeper, behind his table, is cleaning a similar looking mug. The meek looking waitress is serving a gnome sitting by himself.  
-> INFO

== INFO
Before you leave the inn, you decide that you better ask around for some information first. Besides, you need to figure out the location of the village mentioned in your contract before you leave. Perhaps someone in the inn would know. 
(Ask around to learn the location of the village.)  //# CLASS: misson_color  
-> NPCs


== NPCs 
    + [Talk to the shady figure in the corner] 
        You walk over and introduce your self. -> shady_figure
    + [Talk to the solitary gnome] 
        You walk over and introduce your self. -> gnome
    + [Talk to the innkeeper]
        The innkeeper is polishing a mug as you approach. -> innkeeper
    + [Call waitress over]
        You call the waitress over. She finishes what she is doing and comes over. -> waitress
    + [Go over to the chatty dwarfs]
        You walk over to the dwarfs table. They are laughing as you approach. Clearly in a good mood. -> dwarfs
    + { found_village_location } [Exit the inn]  
        You leave the inn, and its noise behind. 
        -> setup_npc
// can have the exit options from start, just change the content, from Cant exit yet -> NPC, to can leave -> outside

== shady_figure
    * [Ask about him] 
        You ask about him. He remains silent.  -> shady_figure
    * [Ask about the village] 
       You ask about the village in the contract. He tells you to follow the main road south. 
       // # CLASS: misson_color 
       You don't quite like the expression he has in his eyes.  
        ~ forest_clue = true
        ~ found_village_location = true
        -> shady_figure
    * [Ask about the monster]
       He remains silent. Well, this is pointless.. -> shady_figure
    + [Leave]
    -
-> NPCs

== gnome
    * "What brings you here?" [] you ask.  
        He tells you he is here to look for work. He seem to not want to elaborate. -> gnome
    * [Ask about the village] 
        You ask about the village in your contract.
        He tells you that travelers normally follow the road south. 
        // # CLASS: misson_color  
        "When you reach the fishing village of Port Issac you need to take a boat across. Beware though, sometimes the fishermen try to trick travelers. If he says it will cost you 50 gold, point out that the price normally is 25 gold." he kindly advices you. 
        ~ found_village_location = true
        ~ found_boat_clue = true
    -> gnome 
    + [Leave] 
    -
-> NPCs

== innkeeper
    * [Ask about the monster]
        You ask about the monster that has been terrorizing Mournstead. 
        "I'm just a simple innkeeper. I don't know anything about monster slaying." he replies.
        Better ask someone who have some more fighting experience you think, it was silly to ask an innkeeper in hindsight. 
        -> innkeeper
     + [Leave] 
    -
-> NPCs

== waitress
    * [Ask about the village] 
        You ask about the village in your contract.
        "Just follow the road south out of town." she explains.
        ~ found_village_location = true
    -> waitress
    * [Ask about the monster]
        You ask about the monster that has been terrorizing Mournstead. 
        She hasn't heard anything. 
        "I don't get out very often" she says. "I spend most of my time here working, not chatting with the customers."  
    + [Leave] 
    -  
-> NPCs

== dwarfs
    * "What are you guys so happy about?" you ask. 
        They explain one of the dwarfs are getting married. They are celebrating. -> dwarfs  
    * "Do you guys know the way to Mournstead?"[] you ask.  
        Unfortunatly no. They say they have never heard of it. -> dwarfs
    + [Leave] 
    -
-> NPCs





