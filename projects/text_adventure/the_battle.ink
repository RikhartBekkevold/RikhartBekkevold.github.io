== the_battle
The Giant of Mournstead # CLASS: test 
    
Your party of two set foot in the direction of west, towards the cave.
        After an hour you reach the goal. You crouch behind a large rock. 
You peak over the edge of the boulder, {ally_name} likewise, and assess the situation. 

In front of you, a few yards away, stands /*or sleep*/ a huge creature. It becomes instantly clear to you why the reward was so unusually high. You have never seen a more threatening monster. It is hideous, large and with hands the size of buckets. Around its feet lay several dead goats. The remnants of its breakfast, no doubt. And, no doubt, taken from the village. 
You feel your knees weaken, but you tell yourself to get a grip. No turning back now.  
    * [Continue] 
-> monster_1


== monster_1
Both you and {ally_name} stand and stare for a second, before regaining your senses.  
"So, whats the plan?" {ally_name} asks, noticeably shaken at whats in front of {ally_sex}.
* [Start the fight] -> fight_start

== fight_start
    The size of the monster is undeniable. Your head is about as far off the ground as the knees of the monster. You can only reach the legs.  


    * [You charge in to attack the left leg] 
        You attack the left leg with your {player_weapon}. Landing a few blows. {ally_name} attacks the right leg from a distance.
    * [You charge in to attack the right leg] 
        You attack the right leg with your {player_weapon}. Landing a few blows. {ally_name} attacks the left leg from a distance.
        -
        
    The monster grabs a nearby rock and throws it at {ally_name}, clearly bothered by the flurry of arrows from {ally_sex} distant attack, {ally_pronoun} dodges the attack with ease and resumes. // or defense
    
    // distance, close, defensive, attacking 
    //{ally_name} continues to attack 
     
    The monster turns its attention to you and strikes back at you with a quick swing of its enourmous hammer.           
           
    // there isnt a sense that she changes the outcome... 
    // must see that the world is changing and that the players action changes the world - even if just for fun
            
    * [Parry] 
         ~ player_health--
        You parry. The blow was powerful. Your arm hurts.  
        The parry allows you a chance to counter attack. You seize the opportunity and manage to land a successful blow deep in its leg. 
    * [Dodge] 
        You dodge successfully.
        The monster's weapon is buried in the ground from the force of the impact. You seize the opportunity and manage to land a successful blow.  
    -
    
    {ally_name} continues to launch attacks from the distance.
    * [Continue to fight]
        The repeated blows and attacks from both of you finally brings the monster to its knees. 
        ** [Stab throat]
            You take advantage of the lowered body to plunge your {player_weapon} into its throat with all your strength. The monster fell over with a wheezing sound.
        ** [Stab heart]
            You take advantage of the lowered body to plunge your {player_weapon} into its heart.
                You miss the heart. What now? 
                    *** [Try again]
                        This time you hit. The monster sigh and falls over.
                    *** [Stab chest instead]
                        You plunge your weapon into its chest instead. The first strike hit the chest, this second strike, now with more force does too. The strikes combined does significant damage. The monster sighs and falls over.  
                    ---
        ** [Plunge chest]
            You take advantage of the lowered body to plunge your {player_weapon} into its chest with all your strength. You back off. The monster looks fine at first, but then it sighs and falls over.
        --
        Dead. 
    -
    

    // weapon is based on agressiveness? otherwise i cant make her charge inn? 
    
    //[Recruit for later]
* [Collect head]
    Panting, you walk over to each other. Tired, but happy.   
-> fight_end


== fight_end
    
    It's over. You are victorious. 
    Still panting, you remember that you need to collect the head to recieve your reward.  
    You collect the head of the monster with difficulty, the neck is thick to cut through, but you manage. 
    You both take a breather, but afterwards you walk back to the village { current_epilogue == -> ending_1 or current_epilogue == -> ending_2: to inform the residents of your victory.} {current_epilogue == -> ending_3: although there is no one to inform of your victory.}
    * [Return to village] 
        Later that day you and {ally_name} part ways. You need to go back up north, while {ally_pronoun} is southbound.
    -
    * [Epilogue]
-> epilogue














//   {
        //- aggressiveness < 5:
        //    {ally_name} lets you attack first. 
      //  - else: 
    //        {ally_name} charges into battle.
  //  }    

// Depeding on how the PT the ally fight differently. 
    // It should be a combination of PT difference and player action  
    // the game should select the character based on pt? so character select? 
    // you do not choose what both do. you choose what _you_ do. so not tactics.
    // look at rpg battles
    // look at story writing tips. text adventure. 
   
    //TODO  ask for her name earlier in story 
   
    
    // automated NPC differences 
    /*char creation 
        convos - how she answers your questions 
        how she helps you 
    battle action */
    
    
    // different endings 
    // Ask question and the NPC can answer either moody, helpful, defensive etc. 
  
    
    // when you hurt 
    //{ally_name} come to your aid - healing you? bandages   
    //{ally_name} continue fighting 
    
    
    //{ally_name} fights from the back
    //{ally_name} are aggressive 
    //{ally_name} defends you  
    //{ally_name} are defensive 
    //{ally_name} 
    //{ally_name}

    // make this repeated cycle where the monster has HP? and eventually you can tell the monster is beeing worn down? 
    // have battles, events, and convoes that repeat in the middle? 


    NPC model: 
    race 
    class 



the villagers are the monster? vampires. mystery. the note just says 
something bigger for me? the fight teches me a lesson? to forgive and move on? apologize?
a locket around my neck? a girl? 


decide tactic here
distraction
attack from distance 
the npc is supposed to help. situations where it can help
mosnter traits that make it possible to create situations for chocie

"the monster has been terrorizing the villager stealing goats, and is considered a threat to the local wildlife, and must therefore be dispatched of."



war blocaked, etc 
norse dungeons skyrim

monster stats: 
low intelligence
high strength 
sluggish, slow 
attack = 
defense =
no magic 


the gnome told you  

the dwarfs expert 
falls info, they choose 

the name was: 

choose tactic: depends on weapon you have and if elf or dwarf? 
attack one leg each



ask about the monster earlier 
knowing this will let you predict attacks  


mid fight: 
if potion, use potion 


diplsay info in text, puzzle, choose the correct one? 
attack 
run away

the feeling right before the fight - how does your partner act?
desc the monster 
different weapons means different battles dagger_battle sword_tactic

if() ally race is this do this battle 
if ally race is this do the other one 


when desc your actions use right weapon - you swing you {player_weapon}
rapid fire boss fight? select what to attack etc? swing sword or block? like in a pattern?
shield
cant parry with an axe 
fight tactis with weapon
questions - mystery of the world
repeating content - loops for more, easy, gameplay
write "standard sections"/answers 


"Bangrim offers to"
"Bangrim _does_.."
the battle "ifs" is depending on the result of the PT test instead? 



You meet monsters 
you fight. there is outcome. 

continue travel 

repeat fight 

   
    You are hurt. 
        Use health potion 
    
    there is prob even more limitations in a murder mystery? for NPC involvement
    
    
    
    Strike 
    Parry 

    the looking for clues on the way - witcher style 
    skyrim? 
    sense of how much time has passed - 2 days later 




ripost 
parry
counterstrike 
trip over with wire trap 


weakspot - reveal from village? 
inn is just to find out where? 


 if dark .. more tactics availiable 
 
 Ambush? Sneak attack? 

because of the wounds. You feel tired and battle less good 




you are after the monster..
you know you can do alone.. dont say why
they dont know 
you get there, there is mystery. they know it matters to You
when you fight it, you die, and all is revealed. or the locklet it has in pocekt, matches your from 
your daughter then you are chasing a man instead




