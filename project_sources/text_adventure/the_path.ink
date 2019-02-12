== the_path
    + {forest_clue} [Go through the forest] -> forest_path 
    + [Take the road] -> road_path
    + [Take a boat across the lake] -> boat_path

== road_path
    You take the road. The road is safe. Occasionally you meet other travelers. Mostly merchants passing you on their way to Vir Doruhl with their goods. The road passes through several small villages on the way to Mournstead and thus takes a bit longer than going through the forest would have.
    
    You meet a merchant and the three of you set up camp for the night. 
    
    
    ask for clue? 
    At night, you set up camp.  
    You talk to some of these     
    
    
 By the time you reach Mournstead the sun has set. 
     * [Next chapter]
-> the_village 

== forest_path
    You take the path through the forest.
    You meet an ambush. A group attacks from behind some trees. You can see the shady figure from the inn amongst them. Figures. How could you fall for such an obvious trap?  
    What now?
        * [Flee]
            You run away successfully, but sustain minor injuries.
        * [Fight]
            You stand your ground and fight. You win, but not without major injuries. You do, however, pick up a strength potion as you rummage through the satchels of your ambushers. The ambushers where also wielding daggers. 
                * * [Replace your {player_weapon } with a dagger instead? (you can't carry both)]
                    You replace your {player_weapon} with a dagger instead.
                     ~ player_weapon = "dagger"
                * * [Replace {ally_name}'s {ally_weapon} with a dagger instead? ({ally_name} can't carry both)]
                    {ally_name} replaces {ally_sex} {ally_weapon} with a dagger instead.   
                    ~ ally_weapon  = "dagger"
                * * [Keep current weapon]
                    You both keep the weapons that you have, {player_weapon}'s and {ally_weapon}'s are better, anyway.
                --
        -
        * { bandage } Use bandage to heal? 
            You used the bandage and feel better.
        * { potion } Use health potion to heal? 
            You used the health potion and feel better.
        * { bandage or potion } Save for later
            You elected to save { potion: your potion } { bandage: and bandage} for later.
        * { not bandage and not potion } [Continue] 
            If you only you had some bandages or a health potion to heal your injuries with. You do not, however.  
            // look up fallback option here...
        -       
    You press forward on your journey.
    * [Next chapter]
    -> the_village

== boat_path    // meet a sea monster?
    You talk to a fisherman. You ask if he can take you across the lake. He agrees to do so for a fee { found_boat_path: , just as the gnome had told you. }
    + [Pay boat fee (-50 gold)]
    
        {
           - player_gold >= 50:
                ~ player_gold -= 50
                You pay the fee, you have {player_gold} gold left. 
                You let the fisherman take you across the lake.
                -> the_village
           - else: 
                You don't have enough gold to pay.
                You need to find another way.  
                -> the_path
                // barter? 
        }
    
       
        //You get in the boat, and the fisherman starts rowing.
        //** [Next] 
         //   Halfway across you hear a sound. Suddenly the boat rocks. A tentacle extends out of the water.    
        //-- 
    + [Deny] You prefer to save your gold for later. -> the_path
    -
    * [Next chapter]
-> the_village


the intro is like character select - should you choose partner? - trad. rpg

make it clear that decisions now will affect what you can do later. 

rpg, npc both dialog, and playstlye and help or not

reading takes time 
making decisions that are hard, takes time 
iterated content takes time 
replayability takes time 

what makes hard choice: 
obvious flaw with both - equllity 
ambiguity 

ask for where the village. not the monster is 

//== fight
  //  bhmbbnma
  // repeatedly slash until the health is at bottom 
  // reward for fighting? 

==  bonfire 

    She asks PT if you

    Describe some behviour as default 
    Dont need to be dialog, can be all action 
    
    She _acts_ wierd 
    Several sections where she acts in specific ways throughout? 
    The battle is done according to PT? how is it related to char selection at start? 

    Depending on the PT the ally say different things
    Has to help in different ways. Not say different things. 
    So you encounter a problem and she helps you or acts in specific ways.


    You decide to set up camp for the night. There is still more go and you are both tired.  
    
        You ask where {ally_pronoun} is from
        You ask what she is doing around these parts 
        You kick her in the nuts
            No reaction. She is a female after all.
        Ask {ally_sex} about her homeland
            She tells you she is from X and that 
            ** Ask for an interesting story from her homeland
        Go to bed
        
        show the player concrete evidence that their choose change the world. makes them more willing to consider 
        their choices and ask questions 
        have the one mystery throughout - a story reason to press on 
        - and twist at the end? or unhappy ending? 
        
-> END


== desc_from_pt
    Describe her. in acordance to PT
    Describe some behviour as default 
    
    // replace the sections where you make her according to yourself, with auto from PT - like the rpg where you 
    // could select your partner 
    // use this to prove how some PT select different chars? 
    
-> END




next changed to move on? 

You weak legs do not allow to do that move 
You tried to cut, but your current health is {player_current_health} so your swing is weak and the {player_weapon} won't cut very deep. 

generic, repeating fights in the middle? so can use battling? to extend journey. 
more convo with partner 
camping and bonfire convo?
need name before its used


// use bandages on self or partner?

don quinte ... you night in shining armor, but twiest is your not? how others treat you reveal this? 

// [Next chapter]? #clear?

//next
  //  you moved on or no text
//-



// loop and get rid of dialog options, but not npcs  
// if returned, change the initation 

search 

what you answer her, she will renemember
find a lotioh bottle, finds a coin

Search the ground?
You find noithing (luck++`?). You find 5 coins.


there needs to be a qustion in players head that want to be answered by playing the gmae/story. the ending has a twist. or the answer. if twist it needs to be "obiovus the outcome", as journey goes along 