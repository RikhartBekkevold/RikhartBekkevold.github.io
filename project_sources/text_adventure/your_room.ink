== your_room_1
VIR DORUHL, THE NORTHERN KINGDOMS # CLASS: test 

You wake up abruptly and jolt yourself into a sitting position. Another nightmare of a monster chasing you. You've had too many of these nightmares lately; you think to yourself.
Next to your bed on the night stand, lies a piece of parchment. You pick it up and read it for the umpteenth time. 

*  [Read]  
-> your_room_2  

// die  = enter fight with too little health
// the vampires kills you
// you never find out about the vamipres, and that the village 
// was using the best to kill travelers 
// get reward 
// dont get reward. didnt collect head. 
// interject thought into the reading process? 

== your_room_2
It reads: 

"Word has been received by a messenger of a monster terrorizing the villagers of Mournstead, a village in the Southern Kingdoms. With the waging war, the army cannot afford to dispose of the problem personally. Any mercenary willing to dispatch of the problem in its stead will be rewarded with 300 gold pieces upon completion of the task. Due to its remoteness the state of the village is currently unknown, therefore, the urgency of the task must be stressed shall the villagers life be saved."



//A beast has been terrorizing the village of Mournstead, killing the farmers sheep and attacking villagers. To investigate and dispatch of the problem a reward of 300 gold is herby offered. Bring the head of the beast, in identifiable condition, as proof.
* [Fold]  -> your_room_3  



     the state of hurry replaces the lack of details? although need it to show why you partnered. thats the unidentiefed state part? 
       
       ""Must hurry, the state of the village is unknown. time matters."
       ""we recieve word from a messenger of a monster or beast. unidentified. the elderman has sent the messanger. the elderman is the last to die?
        "you better hurry then. no time to loose. it could mean the death of many if you delayed."

// tiemly reminders of hurrying.. and what can happen if you are to slow. 
// "looks like you where to slow." you realise. if only you had made better decisions.  

== your_room_3
You roll your newest contract back up. As a mercenary, contracts like these are how you make your living.
You had accepted the contract because of the good pay, twice of what was usually offered. The contract had stressed the importance of reaching the village as fast as possible, it was a matter of life or death for the villagers. No time to waste then, you thought. 

*  [Stand up] -> gear_choices 


== gear_choices
You shake the morning grogginess off and stand up from bed to get dressed. 


 * [You put on your leather armor] 
    //..leather armor.
    ~ player_gear = "leather armor"
 * [You put on your plate armor]
    //..plate armor.
    ~ player_gear = "plate armor"
 * [You put on your chainmail]
    //..plate armor.
    ~ player_gear = "chainmail"
 -
-> weapon_choices

== weapon_choices
You can hear the merry talk of the inn below you. You arrived here late last night. You dress yourself in your {player_gear}. Before you head downstairs you also grab your..  
* [Axe]
    ~ player_weapon = "axe" 
    .. {player_weapon} and
    * * ..head downstairs 
    -> the_inn 

* [Sword] 
    ~ player_weapon = "sword" 
   .. {player_weapon} and
   * * ..head downstairs 
   -> the_inn 
   
* [Polearm] 
    ~ player_weapon = "polearm" 
    .. {player_weapon} and 
    * * ..head downstairs 
    -> the_inn 

* [Dagger]
    ~ player_weapon = "dagger" 
    .. {player_weapon} and 
    * * ..head downstairs
    -> the_inn 


// clear here? so fresh start on "the inn"?
// go for next? so that you can better control text amount? 
// remove text align center on options 
// can create the variable now, then dont have to replace value 
// one option = next/progress story


better describe the settings. the dusty road etc. create an image of the scene. 



Some details that dont match - something wierd in the contract 
trap when reach monster 
somethign wierd if you stay in inn  
the villagers drinking animal blood from nerby forest as repalcement 
dead travelers aswell 

personal struggle. personal motivation. 

Last night you arrived that the inn. 
you have been hired to slay the monsters. no contract. 
prove your worth for lady? make money to marry? to buy house and retire. 

The troops are station in anticipation of a possible war,
so they rely on merchanaries like you to take care of it. 

you didnt want to do it, but the price was too good. you could retire with this. you are worried though. it's too much?  








Despite the words, you know this declaration, although simple, means more to you than the 200 gold. It offers you a chance to restore you honor, and your reputation. And for this reason, successfully slaying the beast matters more to you than some earthly gold.  

you have a burning desire
you stayed here after arriving last night?
make it feel like what yoyu choose will determine the end? 
during battle, read the variable to decide the pronoun and the battle tactics? 
weapons are for battle, therefore fits in the battle tactics section 
the importance of making choices ambiguous - all attractive to some 
the choice shouldnt be leading. should be about the players actual preference.
dont need to explain why its important to you? just make sure it is 
restore ytour honor and reputation - these contract means more to you than the gold, you know this. 
when choosing go into mem/variable, not branching
impress the importance of the journey to the player. "you have to do this"

npcs informs you of this?
forest or road - faster safer - give good reasosn for both, argue well for both, makes it hard
to - make good, retional case for both. make you reall 

not important to make player take a stand on issues 
it more fun when they just choose cool things 
"intervene?" 

write about something you know
easier to fall back to something 
read withcer books for language tips
humor
myself passionate and angry
this format/standard rpg tasks and choices makes it more applicalbe to rpghs? generalizxale valid
iterate - rewrite
keep it simple, add detail later 
dividing is the key to clearity and order 
they can't decide my life how much they try. only I can. 
mystery. make squest clear, but have some qustions open? make the player wonder?


talk about the design. you are mixd
more about the design, then the coding since mixd - different prototype versons?

make choices hard 
make choices represent player personality/preference

fun = 
picking up items, getting stronger, getting answers to questions

they call me samael
personality, character - "he rapped out"

choose who to talk to 
choose how to get there - path  
choose the order of things 
choose which class to be 
choose the gear and weapon, preference basically, class/plkaystlye preference
other rpg choices you would make 

the dwarf theme is something they are familiar with 


third wall
humor
varied language



THE TOWN OF Vir Doruhl, year 1202 
following trail with the clues you got .. you choose who to talk to, you choose who to ally, you choose which weapong and armor to pick up (aka class). feks "you put on the leather, after all, its best to be agile." you choose to buy items. you choose to talk to ppl whhich makes you notice things later. you choose who to side with in the on going conflict in the city: 

kings visiting? 

