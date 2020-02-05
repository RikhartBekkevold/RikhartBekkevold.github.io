== the_path
    //+ {forest_clue} [Go through the forest] -> forest_path 
    + [Take the road south] -> road_path
    //+ [Take a boat across the lake] -> boat_path

== road_path
    You occasionally meet other travelers. Mostly merchants passing you on their way to Vir Doruhl with their goods. The road passes through several small villages on the way.
    
    //* [Enter town] 
    //     ** [Buy stuff] 
     //       ~ current_location = -> road_path
      //  -> vendors
    
    
    //* [Continue journey]
    ~ days_passed++
    The sun sets and your party of two decide to set up camp. You invite one of the traveling merchants to join you - the more the merrier you reason.
    
        You introduce yourself and {ally_name}. He introduces himself as Bartholomew. 
       
        You sit around the campfire chatting when the traveler brings out a bottle of something. 
        "Do you want some?" he offers.
        ~ temp answered_yes = false
        * "Sure!" [] you reply.
            ~ answered_yes = true
            You taste it, its good. 
        * "No thanks, I'm good"[] you answer.
        * "You first!" [] you say.
            "Suspicion, or curtesy?" he smirks. He takes a sip and then offers the bottle to you again. 
                ** [Drink]
                    You take a sip. 
                    ~ answered_yes = true
                ** [Deny]
                    You deny. He looks slightly annoyed, but doesn't push it.
                --
        -
        
        {answered_yes == true: You pass the bottle to {ally_name}.} {answered_yes == false: He offers some to {ally_name} instead.} She takes a sip. 
        You sit and talk for a while longer.  
        
        * [Go to bed] 
            You are all tired and eventually decide to go to bed for the night. 
        ** [Next morning]
        
              The next day {answered_yes == true: you wake up. Head hurting. } {answered_yes == false: you wake up feeling refreshed.} You pack up camp and set out on the road again. Your guest the way you came. You, the way he came. 
          
        
            You walk {answered_yes == true: slowly, weighted down by your throbbing head.} {answered_yes == false: fast, rejuvenated by a good night sleep.}
            
            { 
                - answered_yes == true: 
                    ~ days_passed++
                - else: 
                    ~ days_passed += 2 
            }
            
             
            By the time you reach the next village, a small fishing village called Port Isaac, {days_passed} more days have passed. {answered_yes: You shouldn't have drunk from that bottle, you begrudgingly admitted to yourself.}
            *** [Enter village]
                PORT ISAAC, THE NORTHERN KINGDOMS # CLASS: test 
    // insert title of village and nr of days passed here? atleast in last town. PORT ISAAC, THE NORTHERN KINGDOMS # CLASS: test 
        // {day_passed} since leaving Vir Doruhl #CLASS: subheading

                The "port" part of the name was ironic. There was no port in sight, although there used to be. They kept the name after the decline of the town into just a small fishing village, the port long gone. The inhabitants where poor, utilizing mostly fishing as a means of survival. 
                
                // insert vendors here? 
                // stay and rest? you waste a day. 
            It's late, the sun is setting. 
            "Should we stay and rest until the morning, or go now?" {ally_name} asks you.
        
            **** "No time to loose. Let's hurry on."[] you reply. 
                 
            **** "We should stay and rest. We need to refill our energy." 
                You have {player_gold} gold. 
                ***** [Rent a room at the local inn (50 gold)]
                    { 
                        - player_gold < 50:
                            You don't have enough money to rent a room. 
                        - else:
                            ~ days_passed++
                            ~ player_gold -= 50
                            You rent a room for the night. You now have {player_gold} gold left.
                            A day passes. The next morning you feel rested.   
                    }  
                ***** [Camp outside the village]
                    ~ days_passed++
                    ~ player_health--
                    You sleep outside on the hard ground.
                    A day passes. The next morning you don't feel very rested.
                -----
            ----
           
            **** [Go to the boats]
                You walk through the village. It doesn't take you long, the village is small, to reach the lake on the other side.   
            
            ***** [Talk to a fisherman]. You talk to a fisherman currently docked. -> boat_path
 
//TODO make sure player can afford boat 
== boat_path    // meet a sea monster?
    You ask if he can take you across the lake. He agrees to do so for a fee{not found_boat_clue:.} { found_boat_clue: - just as the gnome had told you; the fisherman asks for 50 gold to take you across. You point out that the price normally is 25 gold as the gnome said to do. He budges and agrees to 25. }
        ~ temp price = 0
        {found_boat_clue: 
            ~ price = 25
        } 
        {not found_boat_clue: 
            ~ price = 50
        }
    + [Pay boat fee ({price} gold)]
    
        {
           - player_gold >= 0: // set to price when i know player can afford - can only buy one health potion? + to *?
                ~ player_gold -= 25
                You pay the fee, you have {player_gold} gold left. 
                {found_boat_clue: The gnome saved you some money. You are thankful to him. The saved money can come in handy later.}
                 You let the fisherman take you across the quiet lake. Thankfully, it's an uneventful journey.
                
           
           // make sure always have enough gold. or sneak onboard.
           //- else: 
        //        You don't have enough gold to pay.
          //      You need to find another way.  
        //        -> the_path
                // barter? 
                
        }
        
             
     
       
       
        //You get in the boat, and the fisherman starts rowing.
        //** [Next] 
         //   Halfway across you hear a sound. Suddenly the boat rocks. A tentacle extends out of the water.    
        //-- 
    //+ [Deny] You prefer to save your gold for later. -> the_path
    -
    * [Jump out of boat]
        You climb out of the boat. In front of you a dark forest stretches wide.
    -
    * [Enter forest]
        
               // on the otherside of the lake, you go throuhg forest. on a bad forest path. The remoteness of Mournstead is starting to show. You hope you haven't wasted to much time, and that the villagers are still okay. 
    
-> forest_path
       
       
     


== forest_path
    You take the path through the forest. It's dark and slow to walk. The road is narrow and bumpy.
    Suddenly you are ambushed. A group attacks from behind some nearby trees. You can see the shady figure from the inn amongst them. Figures. This is why you didn't like the glimt in his eyes when you talked to him - you unwillingly told him where you where going.
    What now?
        * (flee) [Flee]
            You run away successfully, but sustain minor injuries in the process. This will without doubt slow you down moving forwards. 
             ~ player_health--
             ~ days_passed++
        * [Fight]
            ~ days_passed += 3
            You stand your ground and fight. You win, but not without major injuries. This will slow you down on your journey, no doubt. You do, however, pick up a strength potion as you rummage through the satchels of your ambushers. The ambushers where also wielding daggers. 
                ~ strength_potions++
                ~ player_health -= 3
                 
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
        * { bandages > 0 } [Use bandage to heal?] 
            You used the bandage and feel better.
            ~ days_passed--
        * { health_potions > 0 } [Use health potion to heal?]
            ~ days_passed++
            You used the health potion and feel better.
        * { bandages > 0 or health_potions > 0 } [Save for later]
            You elected to save { health_potions: your potion } { bandages: and bandage} for later.
        * { bandages == 0 and health_potions == 0 } [Continue journey] 
            If you only you had some bandages or a health potion to heal your injuries with. You'll walk slower with these injuries. You do not, however, have either.  
            // look up fallback option here...
        -       
    You press forward on your journey.
    * [Walk on]
        ~ days_passed++
    -> forest_exit


== forest_exit
 You eventually get out of the forest, leaving the darkness of the dense trees and bushes behind. 
 
 On the road you meet a carriage going your way. You could hitch a ride, but it would cost you. These gnomes refuses to do anything for free unfortunately. 

 
    * [Walk on] 
        ~ days_passed += 2
        You walk on for two more days before you reach the village of Whitebridge. It's a tiresome journey. 
        -> whitebridge
    * [Take the carriage (50 gold)]
    
     { 
        - canAfford(50):
            ~ days_passed++
            Taking the carriage is fast. A two day walk is shortened to one day.  
            -> monster_attacks
        - else: 
             ~ days_passed += 2
            You can't afford to pay, so you have to walk instead. You walk on for two more days before you reach the village of Whitebridge.  
            -> whitebridge
     }


    // in the village, you hear of 3 ways to get to next village 
    // when presented with many good different interesting options, that when it gets fun

 
    //barter(price)   
    //yourgold - price 
 
    // help someone earlier, thief guy feks, and he will make you save time later?
    
    // must feel you are in control 
   
 
     //Need to know the fishermen to go onboard..
// passing the border to southern kingdoms 
 // balance the days 
 // go through length and if you need to add more. like vendors. 
 // the mountain pass 
 


   
 == monster_attacks
    A few bumpy hours into the ride, bandits emerge and attacks the carriage. You've had enough of ambushes at this point. You and {ally_name} jump down to protect the carriage. The gnomes are not built for fighting. Your {player_gear} keeps you { mobility() }. You charge in with your {player_weapon}. With a few swift blows you take down two of the bandits. {ally_name} provides assistance from the back with her {ally_weapon} and takes down the last bandit. The gang meets its end at your teamwork. 
    
    One of the bandits grazed you slightly. { heal() } You get back on the carriage and recieve the gnomes thanks and praises. 
    Your commpay carries on and by the end of the day you arrive safely at Whitebridge. 
    
    
    //Agree begrudginly
    //Hell no!
    // use dialog option to transition 

    * [Dismount the carriage] 
        -> dismount_carriage
            

    
    // choose between cheap inn or not - level of rest? get robbed? 
    // crafting 
    
    //friends 
    //isAFriend(person)
    
    // copying vendors are fine - although now i have variable
    // argue to save the money, barter 
    // can have different small fight that happen differently
    // its much harder to mix in choices in the fight
    // just explain what both do, and make sure dolina is helpful
    // empathize sections make it seem like time is passing? 
    // sleep and buy and path to take? as choices only? 
    // good dialog = what they say is not what they are talking about 
    // made cities and specific paths between
     // empathioze how you are getting closer..
     // festival in one of the towns
 
 
 -> mountain_pass
   
    
 
 == dismount_carriage 
      "We are stopping her. So from here on out you need to carry on alone." one of the gnomes tells you.
        
        * [Thank them]//, you say. Despite having to pay, (and save them from bandits), they still got you here. 
            You thank them and walk off to find somewhere to spend the night. To reach your destination you know that you need to go through a mountain pass. Doing so at night seems suicidal.
        * [Bid farewell]
            You bid them farewell and walk off to find somewhere to spend the night. To reach your destination you know that you need to go through a mountain pass. Doing so at night seems suicidal. //No need to thank someone for the ride you you had to pay for.
        -
 -> whitebridge
 
 == whitebridge 
  THE VILLAGE OF WHITEBRIDGE, SOUTHERN KINGDOMS # CLASS: test 
        It's night when you arrive. {days_passed} days has passed since you left Vir Doruhl.
       
        { canAfford(25): 
            ~ player_gold -= 25
            You sleep at the inn. It costs 25 gold. You now have {player_gold} gold left.  
        } 
        { not canAfford(25): You set up camp outside the village. You don't have enough gold to stay at an inn. } 
        
        The next morning you carry on with your journey, one giant obstacle is still in your way. A treacherous mountain pass. 
        
        * [Set out for the mountain pass]
        
-> mountain_pass
 
== mountain_pass
    Midday you reach the mountain pass. You start the ascent. {ally_name} is panting behind you as you ascend. 
    You reach the top. In the distance, far below, you see your goal. The village of Mournstead. From high above the village looks idyllic and peaceful. Nothing looks out of the ordinary from here. You start the slow descent. So close now...
    * [Hurry on]
 -> the_village
 

 
 
 
 
 
 
== ask_bonfire_guy  

    + [Ask him a question] 
        You ask him a question. 
        ++ "Where are you headed?" [] you ask. 
            "Vir Doruhl for now. Then north to Hinerum when i've traded all I can there." 
            "Vir Doruhl is a charming town." you say.  
            {ally_name} nods in agreement.
            (Find ways to show personality in dialog) # CLASS: red_text
        -> ask_bonfire_guy 
    
    //+ [Listen to Bartholomew tell a story from his travels]
    //    He tells you an incredibly awesome story.
    //-> ask
    
    + [Go to bed] 
        You are all tired and decide to go to bed for the night. 
        ++ [Next morning]
            You wake at sunrise and immedately pack up the camp and set out again for the road. Your guest the way you came. You, the way he came. 
            By the time you reach Mournstead the sun has set again. 
            +++ [Enter village] -> the_village
    
     
     
    // * Ask {ally_name} a question 
     


  you are really tired and need an inn 
    mountain pass 
    You decide to stay for the night. Before you carry on. 
    
    to get to the village you need to pass a mountan. its in the valley on the other side. 
    lucky charm etc 
    
    buy something 
    You can sell this in the next village for much more. They don't have it there. 
        "Why don't you do it then?" 
        Buy 
        Dont 
        
    Sell him the item    


























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



NPC model:
    weapon: bow 
    hair color: 
    height: 
    weight: 
    race: 
    traits: timid, etc, shy
    which stats would each PT prefer? what type of character? 
    replace the select process with the description of npc
    change variables. not story. the story then must work for all variables. all types of weapons etc. easy control.



//You meet a merchant and the three of you set up camp for the night. 
    //pick up object/look at
    // ask for clue? 
    //At night, you set up camp.  
    // You talk to some of these     
    // you pick up, you die - story about dying. restart with more this time?
    
    


next changed to move on? 

You weak legs do not allow to do that move 
You tried to cut, but your current health is {currentHealth(player_health)} so your swing is weak and the {player_weapon} won't cut very deep. 

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