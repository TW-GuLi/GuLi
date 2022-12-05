let barbarian = {};

barbarian["Trunk Data"] = {
	["Basic"]: {
		connections: [ "Core" ],
		x: 0,
		y: 0,
	},
	["Core"]: {
		connections: [ "Defensive" ],
		requiredPoints: 2,
		x: 1.903,
		y: 1066.03,
	},
	["Defensive"]: {
		connections: [ "Brawling" ],
		requiredPoints: 6,
		x: -1021.147,
		y: 1999.455,
	},
	["Brawling"]: {
		connections: [ "Weapon Mastery" ],
		requiredPoints: 11,
		x: -1025.572,
		y: 3130.94,
	},
	["Weapon Mastery"]: {
		connections: [ "Ultimate" ],
		requiredPoints: 16,
		x: 1027.208,
		y: 3133.185,
	},
	["Ultimate"]: {
		connections: [ "Capstone" ],
		requiredPoints: 23,
		x: 3.547,
		y: 4231.671,
	},
	["Capstone"]: {
		requiredPoints: 33,
		x: 4.294,
		y: 4833.735,
	},
};

barbarian["Basic"] = {
	["Bash"]: {
		connections: [ "Basic", "Enhanced Bash" ],
		description: `{c_label}Generate Fury:{/c_label} {c_resource}{Script Formula 0}{/c_resource}
{if:ADVANCED_TOOLTIP}{c_label}Lucky Hit Chance: {/c}{c_resource}{Combat Effect Chance}%{/c}
{/if}Bash the enemy with your weapon, dealing {c_number}{payload:MELEE_PAYLOAD}{/c} damage. After bashing enemies {c_number}[{SF_2} - 1]{/c} times, your next {c_important}Bash{/c} will Stun for {c_number}{buffduration:STUN}{/c} seconds, this increases to {c_number}[{SF_9}]{/c} seconds if using a Two-Handed weapon.`,
		id: 0,
		maxPoints: 5,
		x: -297.919,
		y: -147.065,
	},
	["Enhanced Bash"]: {
		connections: [ "Bash", "Battle Bash", "Combat Bash" ],
		description: `Damaging a Stunned enemy with {c_important}Bash{/c} grants you {c_number}[{SF_12} * 100|%|]{/c} Base Life {c_number}({fortified:FORTIFY_CASTER}){/c} as {c_important}Fortify{/c}. Double this amount when using a Two-Handed weapon.`,
		id: 1,
		maxPoints: 1,
		x: -534.132,
		y: -273.13,
	},
	["Battle Bash"]: {
		connections: [ "Enhanced Bash" ],
		description: `Damaging a Stunned enemy with {c_important}Bash{/c} generates an additional {c_number}[SF_4]{/c} Fury, or {c_number}[{SF_4} + {SF_8}]{/c} Fury if using a Two-Handed weapon.`,
		id: 2,
		maxPoints: 1,
		x: -804.282,
		y: -298.615,
	},
	["Combat Bash"]: {
		connections: [ "Enhanced Bash" ],
		description: `After {c_important}Critically Striking{/c} {c_number}[{SF_13}]{/c} times with {c_important}Bash{/c} using a Two-Handed weapon your next {c_Important}Core{/c} or {c_important}Weapon Mastery{/c} skill will {c_important}Overpower{/c}.`,
		id: 3,
		maxPoints: 1,
		x: -613.512,
		y: -419.785,
	},
	["Lunging Strike"]: {
		connections: [ "Basic", "Enhanced Lunging Strike" ],
		description: `{c_label}Generate Fury:{/c_label} {c_resource}{SF_3}{/c_resource}
{if:ADVANCED_TOOLTIP}{c_label}Lucky Hit Chance: {/c}{c_resource}{Combat Effect Chance}%{/c}
{/if}Lunge forward and strike an enemy for {c_number}{payload:DAMAGE}{/c} damage.`,
		id: 4,
		maxPoints: 5,
		x: -280.465,
		y: 154.03,
	},
	["Enhanced Lunging Strike"]: {
		connections: [ "Lunging Strike", "Combat Lunging Strike", "Battle Lunging Strike" ],
		description: `{c_important}Lunging Strike{/c} deals {c_number}x[{SF_15}*100|%|]{/c} increased damage and Heals you for {c_number}[{SF_16}*100|%|]{/c} Maximum Life {c_number}([PlayerHealthMax() * SF_16]){/c} when it damages a {c_important}Healthy{/c} enemy.`,
		id: 5,
		maxPoints: 1,
		x: -517.912,
		y: 283.305,
	},
	["Combat Lunging Strike"]: {
		connections: [ "Enhanced Lunging Strike" ],
		description: `Critical Strikes with {c_important}Lunging Strike{/c} grant you {c_important}Berserking{/c} for {c_number}[{SF_9}|1|]{/c} seconds.`,
		id: 6,
		maxPoints: 1,
		x: -797.217,
		y: 315.345,
	},
	["Battle Lunging Strike"]: {
		connections: [ "Enhanced Lunging Strike" ],
		description: `Lunging Strike also inflicts {c_number}{dot:BLEEDING}{/c} Bleeding damage over {c_number}{buffduration:BLEEDING}{/c} seconds.`,
		id: 7,
		maxPoints: 1,
		x: -571.827,
		y: 426.19,
	},
	["Frenzy"]: {
		connections: [ "Basic", "Enhanced Frenzy" ],
		description: `{c_label}Generate Fury:{/c_label} {c_resource}{SF_0}{/c_resource}
{if:ADVANCED_TOOLTIP}{c_label}Lucky Hit Chance: {/c}{c_resource}{Combat Effect Chance}%{/c}
{/if}Unleash a rapid flurry of blows, dealing {c_number}{payload:TOOLTIP_DAMAGE}{/c} damage with each pair of hits. 

If Frenzy hits an enemy, its Attack Speed is increased by {c_number}+[{SF_1}*100|%|]{/c} for {c_number}{buffduration:ATTACK_SPEED_INCREASE}{/c} seconds, up to {c_number}+[{SF_1} * {SF_3} * 100|%|]{/c}.`,
		id: 8,
		maxPoints: 5,
		x: 295.291,
		y: 155.45,
	},
	["Enhanced Frenzy"]: {
		connections: [ "Frenzy", "Battle Frenzy", "Combat Frenzy" ],
		description: `While {c_important}Frenzy{/c} is granting {c_number}+[{SF_1} * 3 * 100|%|]{/c} bonus Attack Speed, it also generates {c_number}1{/c} additional Fury.`,
		id: 9,
		maxPoints: 1,
		x: 541.243,
		y: 295.12,
	},
	["Battle Frenzy"]: {
		connections: [ "Enhanced Frenzy" ],
		description: `While {c_important}Berserking{/c}, your other skills gain {c_number}[{SF_13}*100}|%|]{/c} Attack Speed for each stack of Frenzy you have.`,
		id: 10,
		maxPoints: 1,
		x: 640.298,
		y: 431.52,
	},
	["Combat Frenzy"]: {
		connections: [ "Enhanced Frenzy" ],
		description: `You gain {c_number}x[{SF_15}*100|%|]{/c} Damage Reduction for each stack of {c_important}Frenzy{/c} you currently have.`,
		id: 11,
		maxPoints: 1,
		x: 829.408,
		y: 308.185,
	},
	["Flay"]: {
		connections: [ "Basic", "Enhanced Flay" ],
		description: `{c_label}Generate Fury:{/c_label} {c_resource}{SF_2}{/c_resource}
{if:ADVANCED_TOOLTIP}{c_label}Lucky Hit Chance: {/c}{c_resource}{Combat_Effect_Chance_Script_Formula_Override:14}%{/c}
{/if}Flay the enemy, dealing {c_number}{payload:DAMAGE}{/c} damage. Inflicts {c_number}{dot:BLEEDING}{/c} Bleeding damage over {c_number}{buffduration:BLEEDING}{/c} seconds.`,
		id: 12,
		maxPoints: 5,
		x: 291.231,
		y: -150.545,
	},
	["Enhanced Flay"]: {
		connections: [ "Flay", "Battle Flay", "Combat Flay" ],
		description: `When {c_important}Flay{/c} deals direct damage to an enemy, they take {c_number}x[{SF_10}*100|%|]{/c} increased Bleeding damage for the next {c_number}{buffduration:AMPLIFY_BLEED_DEBUFF}{/c} seconds.`,
		id: 13,
		maxPoints: 1,
		x: 549.073,
		y: -289.98,
	},
	["Battle Flay"]: {
		connections: [ "Enhanced Flay" ],
		description: `{c_important}Flay{/c} has a {c_number}[{SF_9}*100|%|]{/c} chance to make the enemy {c_important}Vulnerable{/c} for {c_number}2{/c} seconds. Double this chance when using a Two-Handed weapon.`,
		id: 14,
		maxPoints: 1,
		x: 604.228,
		y: -437.075,
	},
	["Combat Flay"]: {
		connections: [ "Enhanced Flay" ],
		description: `When {c_important}Flay{/c} deals direct damage you gain {c_number}[{SF_19} * 100]%{/c} damage reduction and {c_number}[{SF_21}]{/c} Thorns for {c_number}[{SF_17}]{/c} seconds.  This stacks up to {c_number}[{SF_12}]{/c} times.`,
		id: 15,
		maxPoints: 1,
		x: 839.658,
		y: -320.87,
	},
};

barbarian["Core"] = {
	["Hammer of the Ancients"]: {
		connections: [ "Core", "Enhanced Hammer of the Ancients" ],
		description: `{c_label}Fury Cost:{/c_label} {c_resource}{Resource Cost}{/c_resource}
{if:ADVANCED_TOOLTIP}{c_label}Lucky Hit Chance: {/c}{c_resource}{Combat Effect Chance}%{/c}
{/if}Slam your hammer down with the fury of the Ancients, dealing {c_number}{payload:DAMAGE}{/c} damage to a concentrated area.`,
		id: 16,
		maxPoints: 5,
		x: -314.782,
		y: -203.49,
	},
	["Enhanced Hammer of the Ancients"]: {
		connections: [ "Hammer of the Ancients", "Violent Hammer of the Ancients", "Furious Hammer of the Ancients" ],
		description: `Gain {c_number}[{SF_9} * 100]%{/c} more Fury for {c_number}[SF_17]{/c} seconds for each enemy damaged by {c_important}Hammer of the Ancients{/c} stacking up to {c_number}[SF_8]{/c} times.`,
		id: 17,
		maxPoints: 1,
		x: -531.275,
		y: -352.21,
	},
	["Violent Hammer of the Ancients"]: {
		connections: [ "Enhanced Hammer of the Ancients" ],
		description: `After {c_important}Overpowering{/c} with {c_important}Hammer of the Ancients{/c} you deal {c_number}[{SF_18} * 100]%{/c} more damage for {c_number}{buffduration:UPGRADE_BONUS_DAMAGE}{/c} seconds.`,
		id: 18,
		maxPoints: 1,
		x: -779.56,
		y: -413.6,
	},
	["Furious Hammer of the Ancients"]: {
		connections: [ "Enhanced Hammer of the Ancients" ],
		description: `{c_important}Hammer of the Ancients{/c} deals {c_number}[{SF_12} * 100]%{/c} additional damage for each point of Fury you had when using it.`,
		id: 19,
		maxPoints: 1,
		x: -552.235,
		y: -498.525,
	},
	["Upheaval"]: {
		connections: [ "Core", "Enhanced Upheaval" ],
		description: `{c_label}Fury Cost:{/c_label} {c_resource}{Resource Cost}{/c_resource}
{if:ADVANCED_TOOLTIP}{c_label}Lucky Hit Chance: {/c}{c_resource}{Combat Effect Chance}%{/c}
{/if}Tear into the ground with your weapon and fling debris forward, dealing {c_number}{payload:SLAM_DAMAGE}{/c} damage.`,
		id: 20,
		maxPoints: 5,
		x: -404.749,
		y: 65.115,
	},
	["Enhanced Upheaval"]: {
		connections: [ "Upheaval", "Violent Upheaval", "Furious Upheaval" ],
		description: `{c_important}Upheaval{/c} has a {c_number}[{SF_7}  * 100|%|]{/c} chance to Stun all enemies it damages for {c_number}[{SF_8}|1|]{/c} seconds.`,
		id: 21,
		maxPoints: 1,
		x: -736.93,
		y: 112.495,
	},
	["Violent Upheaval"]: {
		connections: [ "Enhanced Upheaval" ],
		description: `If {c_important}Upheaval{/c} deals damage to {c_number}[{SF_18}]{/c} or more enemies you gain {c_important}Berserking{/c} for {c_number}{SF_9}{/c} seconds, or {c_number}{SF_11}{/c} seconds if it deals damage to {c_number}{SF_10}{/c} or more enemies.`,
		id: 22,
		maxPoints: 1,
		x: -1039.995,
		y: 90.585,
	},
	["Furious Upheaval"]: {
		connections: [ "Enhanced Upheaval" ],
		description: `Dealing direct damage to an enemy with a Skill that is not {c_important}Upheaval{/c} causes your next cast of {c_important}Upheaval{/c} to deal {c_number}x[{SF_12}  * 100|%|]{/c} increased damage, stacking up to {c_number}{SF_13}{/c} times.`,
		id: 23,
		maxPoints: 1,
		x: -934.745,
		y: 232.075,
	},
	["Double Swing"]: {
		connections: [ "Core", "Enhanced Double Swing" ],
		description: `{c_label}Fury Cost:{/c_label} {c_resource}{Resource Cost}{/c_resource}
{if:ADVANCED_TOOLTIP}{c_label}Lucky Hit Chance: {/c}{c_resource}{Combat Effect Chance}%{/c}
{/if}Sweep your weapons from opposite directions, dealing {c_number}{payload:DAMAGE}{/c} damage with each weapon. Enemies caught in the center are damaged by both.`,
		id: 24,
		maxPoints: 5,
		x: 77.926,
		y: 208.37,
	},
	["Enhanced Double Swing"]: {
		connections: [ "Double Swing", "Furious Double Swing", "Violent Double Swing" ],
		description: `If {c_important}Double Swing{/c} damages a Stunned or Knocked Down enemy, gain {c_number}{SF_8}{/c} Fury.`,
		id: 25,
		maxPoints: 1,
		x: 145.457,
		y: 376.64,
	},
	["Furious Double Swing"]: {
		connections: [ "Enhanced Double Swing" ],
		description: `Casting {c_important}Double Swing{/c} while {c_important}Berserking{/c} grants {c_number}{SF_9}{/c} additional seconds of {c_important}Berserking{/c}.`,
		id: 26,
		maxPoints: 1,
		x: 103.505,
		y: 509.21,
	},
	["Violent Double Swing"]: {
		connections: [ "Enhanced Double Swing" ],
		description: `Hitting an enemy with both hits of {c_important}Double Swing{/c} makes them {c_important}Vulnerable{/c} for {c_number}[{SF_6}]{/c} second.`,
		id: 27,
		maxPoints: 1,
		x: 359.004,
		y: 454.195,
	},
	["Pressure Point"]: {
		connections: [ "Core" ],
		description: `{c_label}Lucky Hit:{/c} Your {c_important}Core{/c} skills have up to a {c_number}{SF_0}%{/c} chance to make enemies {c_important}Vulnerable{/c} for {c_number}2{/c} seconds.`,
		id: 28,
		maxPoints: 3,
		x: -756.09,
		y: -117.275,
	},
	["Rend"]: {
		connections: [ "Core", "Enhanced Rend" ],
		description: `{c_label}Fury Cost:{/c_label} {c_resource}{Resource Cost}{/c_resource}
{if:ADVANCED_TOOLTIP}{c_label}Lucky Hit Chance: {/c}{c_resource}{Combat_Effect_Chance_Script_Formula_Override:15}%{/c}
{/if}Cleave enemies in front of you, dealing {c_number}{payload:MELEE_PAYLOAD}{/c} damage and inflicting {c_number}{dot:BLEEDING}{/c} Bleeding damage over {c_number}{buffduration:BLEEDING}{/c} seconds.`,
		id: 29,
		maxPoints: 5,
		x: 256.089,
		y: -201.51,
	},
	["Enhanced Rend"]: {
		connections: [ "Rend", "Violent Rend", "Furious Rend" ],
		description: `Dealing direct damage with {c_important}Rend{/c} extends the duration of {c_important}Vulnerable{/c} on enemies by {c_number}{SF_5}{/c} seconds.`,
		id: 30,
		maxPoints: 1,
		x: 455.858,
		y: -352.25,
	},
	["Violent Rend"]: {
		connections: [ "Enhanced Rend" ],
		description: `{c_important}Rend{/c} deals {c_number}x[{SF_9}*100|%|]{/c} increased Bleeding damage to enemies that are already Bleeding.`,
		id: 31,
		maxPoints: 1,
		x: 462.361,
		y: -500.135,
	},
	["Furious Rend"]: {
		connections: [ "Enhanced Rend" ],
		description: `Direct damage with {c_important}Rend{/c} grants {c_number}{SF_8}{/c} Fury per enemy hit, up to a maximum of {c_number}{SF_7}{/c} Fury.`,
		id: 32,
		maxPoints: 1,
		x: 694.21,
		y: -415.125,
	},
	["Whirlwind"]: {
		connections: [ "Core", "Enhanced Whirlwind" ],
		description: `{c_label}Fury Cost:{/c_label} {c_resource}{Resource Cost} per second{/c_resource}
{if:ADVANCED_TOOLTIP}{c_label}Lucky Hit Chance: {/c}{c_resource}{Combat Effect Chance}%{/c}
{/if}Rapidly attack surrounding enemies for {c_number}{payload:DAMAGE}{/c} damage.`,
		id: 33,
		maxPoints: 5,
		x: 468.01,
		y: 2.835,
	},
	["Enhanced Whirlwind"]: {
		connections: [ "Whirlwind", "Furious Whirlwind", "Violent Whirlwind" ],
		description: `Gain {c_number}{SF_10}{/c} Fury each time {c_important}Whirlwind{/c} deals direct damage to an enemy, or {c_number}{SF_12}{/c} Fury against Elite enemies.`,
		id: 34,
		maxPoints: 1,
		x: 811.475,
		y: 5.54,
	},
	["Furious Whirlwind"]: {
		connections: [ "Enhanced Whirlwind" ],
		description: `While using a Slashing weapon, {c_important}Whirlwind{/c} also inflicts {c_number}{Dot:DEBUFF_BLEED}{/c} Bleeding damage over {c_number}{SF_15}{/c} seconds.`,
		id: 35,
		maxPoints: 1,
		x: 1019.47,
		y: 79.94,
	},
	["Violent Whirlwind"]: {
		connections: [ "Enhanced Whirlwind" ],
		description: `After using {c_important}Whirlwind{/c} for {c_number}{SF_14}{/c} seconds, {c_important}Whirlwind{/c} deals {c_number}x[{SF_13}* 100|%|]{/c} increased damage until it is cancelled.`,
		id: 36,
		maxPoints: 1,
		x: 1026.415,
		y: -63.565,
	},
	["Endless Fury"]: {
		connections: [ "Core" ],
		description: `{c_important}Basic{/c} skills generate {c_number}x[{Script Formula 0}*100|%|]{/c} more Fury when using Two-Handed weapons.`,
		id: 37,
		maxPoints: 3,
		x: 537.505,
		y: 210.405,
	},
};

barbarian["Defensive"] = {
	["Challenging Shout"]: {
		connections: [ "Defensive", "Enhanced Challenging Shout" ],
		description: `{c_label}Cooldown:{/c_label} {c_resource}[{Cooldown Time}|1|]{/c_resource} seconds
Taunt Nearby enemies and gain {c_number}x[{SF_11} * 100|%|]{/c} Damage Reduction for {c_number}{buffduration:BUFF_TAUNT}{/c} seconds.`,
		id: 38,
		maxPoints: 5,
		x: -352.93,
		y: -191.54,
	},
	["Enhanced Challenging Shout"]: {
		connections: [ "Challenging Shout", "Strategic Challenging Shout", "Tactical Challenging Shout" ],
		description: `While {c_important}Challenging Shout{/c} is active, gain {c_number}x[{SF_17} *100|%|]{/c} bonus Maximum Life.`,
		id: 39,
		maxPoints: 1,
		x: -595.095,
		y: -328.055,
	},
	["Strategic Challenging Shout"]: {
		connections: [ "Enhanced Challenging Shout" ],
		description: `While {c_important}Challenging Shout{/c} is active, gain Thorns equal to {c_number}+[{SF_12} * 100|%|]{/c} of your Maximum Life.`,
		id: 40,
		maxPoints: 1,
		x: -681.82,
		y: -477.185,
	},
	["Tactical Challenging Shout"]: {
		connections: [ "Enhanced Challenging Shout" ],
		description: `While {c_important}Challenging Shout{/c} is active you gain {c_number}{SF_4}{/c} Fury each time you take damage.`,
		id: 41,
		maxPoints: 1,
		x: -891.53,
		y: -358.345,
	},
	["Iron Skin"]: {
		connections: [ "Defensive", "Enhanced Iron Skin" ],
		description: `{c_label}Cooldown: {/c}{c_resource}[{Cooldown Time}|1|]{/c} seconds
Steel yourself, gaining a Barrier that absorbs {c_number}[{SF_0}*100|%|]{/c} of your missing Life for {c_number}{buffduration:BARRIER}{/c} seconds.`,
		id: 42,
		maxPoints: 5,
		x: -340.565,
		y: 180.695,
	},
	["Enhanced Iron Skin"]: {
		connections: [ "Iron Skin", "Tactical Iron Skin", "Strategic Iron Skin" ],
		description: `{c_important}Iron Skin{/c} absorbs {c_number}+[{SF_3} * 100|%|]{/c} more Missing Life.`,
		id: 43,
		maxPoints: 1,
		x: -560.645,
		y: 317.12,
	},
	["Tactical Iron Skin"]: {
		connections: [ "Enhanced Iron Skin" ],
		description: `While {c_important}Iron Skin{/c} is active, restore Life equal to {c_number}[{SF_7} * 100|%|]{/c} of the Barrier's original amount per second.`,
		id: 44,
		maxPoints: 1,
		x: -879.405,
		y: 366.965,
	},
	["Strategic Iron Skin"]: {
		connections: [ "Enhanced Iron Skin" ],
		description: `{c_important}Iron Skin{/c} also grants {c_number}[{SF_8}*100|%|]{/c} Base Life {c_number}({fortified:PAYLOAD_FORTIFY_BASE}){/c} as {c_important}Fortify{/c}. Double this amount if cast while below {c_number}[{SF_9}*100|%|]{/c} Life.`,
		id: 45,
		maxPoints: 1,
		x: -628.23,
		y: 481.575,
	},
	["Outburst"]: {
		connections: [ "Defensive", "Tough as Nails" ],
		description: `Gain {c_number}{SF_1}{/c} Thorns. Also gain {c_number}{SF_4}{/c} Thorns for each {c_number}{SF_5}{/c} bonus Maximum Life you have.`,
		id: 46,
		maxPoints: 3,
		x: -523.995,
		y: -2.145,
	},
	["Tough as Nails"]: {
		connections: [ "Outburst" ],
		description: `Increase your Thorns by {c_number}+[{SF_0}*100|%|]{/c}.`,
		id: 47,
		maxPoints: 3,
		x: -871.425,
		y: -1.78,
	},
	["Ground Stomp"]: {
		connections: [ "Defensive", "Enhanced Ground Stomp" ],
		description: `{c_label}Cooldown:{/c_label} {c_resource}[{Cooldown Time}|1|]{/c_resource} seconds
{if:ADVANCED_TOOLTIP}{c_label}Lucky Hit Chance: {/c}{c_resource}{Combat Effect Chance}%{/c}
{/if}Smash the ground, dealing {c_number}{payload:STOMP}{/c} damage and Stunning surrounding enemies for {c_number}{buffduration:STUN}{/c_number} seconds.`,
		id: 48,
		maxPoints: 5,
		x: -1.45,
		y: -233.72,
	},
	["Enhanced Ground Stomp"]: {
		connections: [ "Ground Stomp", "Tactical Ground Stomp", "Strategic Ground Stomp" ],
		description: `Increase {c_important}Ground Stomp’s{/c} duration by {c_number}{SF_11}{/c} second.`,
		id: 49,
		maxPoints: 1,
		x: -3.54,
		y: -391.82,
	},
	["Tactical Ground Stomp"]: {
		connections: [ "Enhanced Ground Stomp" ],
		description: `{c_important}Ground Stomp{/c} generates {c_number}{SF_0}{/c} Fury.`,
		id: 50,
		maxPoints: 1,
		x: -159.695,
		y: -536.35,
	},
	["Strategic Ground Stomp"]: {
		connections: [ "Enhanced Ground Stomp" ],
		description: `Reduce the Cooldown of your {c_important}Ultimate{/c} skill by {c_number}{SF_12}{/c} second for each enemy damaged by {c_important}Ground Stomp{/c}.`,
		id: 51,
		maxPoints: 1,
		x: 146.68,
		y: -537.22,
	},
	["Rallying Cry"]: {
		connections: [ "Defensive", "Enhanced Rallying Cry" ],
		description: `{c_label}Cooldown:{/c_label} {c_resource}[{Cooldown Time}|1|]{/c_resource} seconds
Bellow a rallying cry, granting allies {c_number}+[{SF_4}*100|%|]{/c} increased Movement Speed, and {c_number}x[{SF_7} * 100|%|]{/c} increased Resource Generation for {c_number}{buffduration:RESOURCE_GAIN}{/c} seconds.`,
		id: 52,
		maxPoints: 5,
		x: 346.595,
		y: 186.035,
	},
	["Enhanced Rallying Cry"]: {
		connections: [ "Rallying Cry", "Strategic Rallying Cry", "Tactical Rallying Cry" ],
		description: `{c_important}Rallying Cry{/c} grants {c_important}Unstoppable{/c} while active.`,
		id: 53,
		maxPoints: 1,
		x: 615.412,
		y: 336.77,
	},
	["Strategic Rallying Cry"]: {
		connections: [ "Enhanced Rallying Cry" ],
		description: `{c_important}Rallying Cry{/c} grants {c_number}[{SF_14}*100|%|]{/c} Base Life {c_number}({fortified:MOD_FORTIFY_BASE}){/c} as {c_important}Fortify{/c}. While Rallying Cry is active, you gain an additional {c_number}[{SF_15}*100|%|]{/c} Base Life {c_number}({fortified:MOD_FORTIFY_PERHIT}){/c} as {c_important}Fortify{/c} each time you take or deal direct damage.`,
		id: 54,
		maxPoints: 1,
		x: 706.577,
		y: 510.305,
	},
	["Tactical Rallying Cry"]: {
		connections: [ "Enhanced Rallying Cry" ],
		description: `{c_important}Rallying Cry{/c} grants {c_number}{SF_13}{/c} Fury. You gain {c_number}+[{SF_8} * 100|%|]{/c} increased Resource Generation from {c_important}Rallying Cry{/c}`,
		id: 55,
		maxPoints: 1,
		x: 937.688,
		y: 394.765,
	},
	["Imposing Presence "]: {
		connections: [ "Defensive", "Martial Vigor" ],
		description: `Gain {c_number}x[{SF_0}*100|%|]{/c} additional Maximum Life.`,
		id: 56,
		maxPoints: 3,
		x: 499.955,
		y: -0.505,
	},
	["Martial Vigor"]: {
		connections: [ "Imposing Presence " ],
		description: `Damage Reduction against Elites is increased by {c_number}x[({SF_0}*sLevel)*100|%|]{/c}.`,
		id: 57,
		maxPoints: 3,
		x: 869.192,
		y: 0.69,
	},
};

barbarian["Brawling"] = {
	["Charge"]: {
		connections: [ "Brawling", "Enhanced Charge" ],
		description: `{c_label}Cooldown: {/c}{c_resource}[{Cooldown Time}|1|]{/c} seconds
{if:ADVANCED_TOOLTIP}{c_label}Lucky Hit Chance: {/c}{c_resource}{Combat Effect Chance}%{/c}
{/if}Become {c_important}Unstoppable{/c} and rush forward, pushing enemies with you then swinging through them for {c_number}{payload:SWING}{/c} damage and Knocking them Back.`,
		id: 58,
		maxPoints: 5,
		x: -281.935,
		y: 182.909,
	},
	["Enhanced Charge"]: {
		connections: [ "Charge", "Power Charge", "Mighty Charge" ],
		description: `Enemies who are Knocked Back into terrain by {c_important}Charge{/c} take {c_number}{payload:TOOLTIP_IMPACT_WALL}{/c} damage and are Stunned for {c_number}{SF_11}{/c} seconds.`,
		id: 59,
		maxPoints: 1,
		x: -520.55,
		y: 327.459,
	},
	["Power Charge"]: {
		connections: [ "Enhanced Charge" ],
		description: `Reduce {c_important}Charge's{/c} Cooldown by {c_number}{SF_13}{/c} seconds if it Knocks Back an enemy into terrain.`,
		id: 60,
		maxPoints: 1,
		x: -764.505,
		y: 388.421,
	},
	["Mighty Charge"]: {
		connections: [ "Enhanced Charge" ],
		description: `Damaging enemies with {c_important}Charge{/c} makes them {c_important}Vulnerable{/c} for {c_number}[SF_18]{/c} seconds.`,
		id: 61,
		maxPoints: 1,
		x: -545.135,
		y: 471.464,
	},
	["War Cry"]: {
		connections: [ "Brawling", "Enhanced War Cry" ],
		description: `{c_label}Cooldown:{/c_label} {c_resource}[{Cooldown Time}|1|]{/c_resource} seconds
Bellow a mighty war cry. You and Nearby allies deal {c_number}x[{SF_1}*100|%|]{/c} increased damage for {c_number}{buffduration:INCREASED_DAMAGE}{/c} seconds.`,
		id: 62,
		maxPoints: 5,
		x: -233.835,
		y: -208.505,
	},
	["Enhanced War Cry"]: {
		connections: [ "War Cry", "Power War Cry", "Mighty War Cry" ],
		description: `{c_important}War Cry{/c} grants you {c_important}Berserking{/c} for {c_number}{SF_10}{/c} seconds.`,
		id: 63,
		maxPoints: 1,
		x: -396.14,
		y: -350.13,
	},
	["Power War Cry"]: {
		connections: [ "Enhanced War Cry" ],
		description: `If at least {c_number}{SF_12}{/c} enemies are nearby when {c_important}War Cry{/c} is cast, its damage bonus is increased by {c_number}[{SF_9} *100|%|]{/c}.`,
		id: 64,
		maxPoints: 1,
		x: -660.65,
		y: -395.7,
	},
	["Mighty War Cry"]: {
		connections: [ "Enhanced War Cry" ],
		description: `{c_important}War Cry{/c} grants {c_number}[{SF_15}*100|%|]{/c} Base Life {c_number}({fortified:MOD_FORTIFY_BASE}){/c} as {c_important}Fortify{/c}.`,
		id: 65,
		maxPoints: 1,
		x: -462.62,
		y: -487.765,
	},
	["Booming Voice"]: {
		connections: [ "Brawling", "Raid Leader ", "Guttural Yell" ],
		description: `{c_important}Shout{/c} skill durations are increased by {c_number}x[{SF_0}*100|%|]{/c}.`,
		id: 66,
		maxPoints: 3,
		x: -536.805,
		y: -0.565,
	},
	["Raid Leader "]: {
		connections: [ "Booming Voice" ],
		description: `Your {c_important}Shouts{/c} also Heal allies for {c_number}[{SF_0}*100|%|]{/c} of their Maximum Life per second.`,
		id: 67,
		maxPoints: 3,
		x: -887.65,
		y: -76.885,
	},
	["Guttural Yell"]: {
		connections: [ "Booming Voice" ],
		description: `Your {c_important}Shout{/c} Skills cause enemies to deal {c_number}x[{SF_2} * 100|%|]{/c} less damage for {c_number}{SF_0}{/c} seconds.`,
		id: 68,
		maxPoints: 3,
		x: -879.855,
		y: 102.01,
	},
	["Leap"]: {
		connections: [ "Brawling", "Enhanced Leap" ],
		description: `{c_label}Cooldown: {/c}{c_resource}[{Cooldown Time}|1|]{/c} seconds
{if:ADVANCED_TOOLTIP}{c_label}Lucky Hit Chance: {/c}{c_resource}{Combat Effect Chance}%{/c}
{/if}Leap forward and then slam down, dealing {c_number}{payload:LANDING}{/c} damage and Knocking Back surrounding enemies on impact.`,
		id: 69,
		maxPoints: 5,
		x: 268.76,
		y: 178.719,
	},
	["Enhanced Leap"]: {
		connections: [ "Leap", "Mighty Leap", "Power Leap" ],
		description: `If {c_important}Leap{/c} doesn't damage any enemies, its Cooldown is reduced by {c_number}{SF_12}{/c} seconds.`,
		id: 70,
		maxPoints: 1,
		x: 513.765,
		y: 326.899,
	},
	["Mighty Leap"]: {
		connections: [ "Enhanced Leap" ],
		description: `Enemies damaged by {c_important}Leap{/c} are Slowed by {c_number}[{SF_16}*100|%|]{/c} for {c_number}{buffduration:UPGRADEB_SLOW}{/c} seconds.`,
		id: 71,
		maxPoints: 1,
		x: 787.476,
		y: 357.779,
	},
	["Power Leap"]: {
		connections: [ "Enhanced Leap" ],
		description: `If {c_important}Leap{/c} damages at least one enemy, gain {c_number}{SF_11}{/c} Fury.`,
		id: 72,
		maxPoints: 1,
		x: 615.906,
		y: 458.297,
	},
	["Kick"]: {
		connections: [ "Enhanced Kick", "Brawling" ],
		description: `{c_label}Charges:{/c} {c_resource}{SF_4}{/c}
{c_label}Charge Cooldown:{/c_label} {c_resource}[{Recharge Time}|1|]{/c_resource} seconds
{if:ADVANCED_TOOLTIP}{c_label}Lucky Hit Chance: {/c}{c_resource}{Combat Effect Chance}%{/c}
{/if}Throw a powerful kick that deals {c_number}{payload:KICK_UPFRONT_DAMAGE}{/c} damage and Knocks Back enemies in front of you. Enemies who are Knocked Back into terrain take an additional {c_number}{payload:IMPACT_TERRAIN}{/c} damage and are Stunned for {c_number}{buffduration:IMPACTED_TERRAIN}{/c} seconds.`,
		id: 73,
		maxPoints: 5,
		x: 214.57,
		y: -209.195,
	},
	["Enhanced Kick"]: {
		connections: [ "Kick", "Mighty Kick", "Power Kick" ],
		description: `{c_important}Kick{/c} makes enemies it damages {c_important}Vulnerable{/c} for {c_number}{SF_17}{/c} seconds.`,
		id: 74,
		maxPoints: 1,
		x: 358.05,
		y: -349.61,
	},
	["Mighty Kick"]: {
		connections: [ "Enhanced Kick" ],
		description: `{c_important}Kicked{/c} enemies deal {c_number}{payload:TOOLTIP_IMPACT_MOD}{/c} damage to enemies they collide with while being Knocked Back. Enemies damaged this way are Knocked Down for {c_number}{SF_5}{/c} seconds.`,
		id: 75,
		maxPoints: 1,
		x: 396.34,
		y: -487.3,
	},
	["Power Kick"]: {
		connections: [ "Enhanced Kick" ],
		description: `If {c_important}Kick{/c} damages an enemy, it consumes all of your Fury and deals an additional {c_number}{payload:UPGRADEA_TOOLTIP}{/c} damage per {c_number}{SF_22}{/c} Fury spent. {c_important}Kick{/c} no longer Knocks Back enemies.`,
		id: 76,
		maxPoints: 1,
		x: 660.106,
		y: -393.24,
	},
	["Aggressive Resistance"]: {
		connections: [ "Prolific Fury", "Battle Frenzy", "Brawling" ],
		description: `Gain {c_number}[{SF_0}*100|%|]{/c} Damage Reduction while {c_important}Berserking{/c}.`,
		id: 77,
		maxPoints: 3,
		x: -0.385,
		y: 314.173,
	},
	["Prolific Fury"]: {
		connections: [ "Aggressive Resistance" ],
		description: `While {c_important}Berserking{/c}, Fury Generation is increased by {c_number}x[{SF_0} * 100|%|]{/c}.`,
		id: 78,
		maxPoints: 3,
		x: 165.21,
		y: 513.014,
	},
	["Battle Frenzy"]: {
		connections: [ "Aggressive Resistance" ],
		description: `When a {c_important}Brawling{/c} Skill damages at least one enemy, gain {c_important}Berserking{/c} for {c_number}{SF_0}{/c} |4second.:seconds.`,
		id: 79,
		maxPoints: 3,
		x: -166.53,
		y: 511.82,
	},
	["Swiftness"]: {
		connections: [ "Brawling", "Quick Impulses" ],
		description: `Movement Speed is increased by {c_number}+[{Script Formula 0}*sLevel*100|%|]{/c}.`,
		id: 80,
		maxPoints: 3,
		x: 604.811,
		y: -113.28,
	},
	["Quick Impulses"]: {
		connections: [ "Swiftness" ],
		description: `Reduce the duration of Control Impairing Effects by {c_number}x[{SF_0}*100|%|]{/c}.`,
		id: 81,
		maxPoints: 3,
		x: 951.192,
		y: -180.78,
	},
};

barbarian["Weapon Mastery"] = {
	["Steel Grasp"]: {
		connections: [ "Weapon Mastery", "Enhanced Steel Grasp" ],
		description: `{c_label}Charges:{/c} {c_resource}{SF_9}{/c}
{c_label}Charge Cooldown:{/c_label} {c_resource}[{Recharge Time}|1|]{/c_resource} seconds
{if:ADVANCED_TOOLTIP}{c_label}Lucky Hit Chance: {/c}{c_resource}{Combat Effect Chance}%{/c}
{/if}Throw out a trio of chains that deal {c_number}{payload:DAMAGE}{/c} damage and Pull In enemies.`,
		id: 82,
		maxPoints: 5,
		x: 333.535,
		y: 169.019,
	},
	["Enhanced Steel Grasp"]: {
		connections: [ "Steel Grasp", "Warrior's Steel Grasp", "Fighter's Steel Grasp" ],
		description: `{c_important}Steel Grasp{/c} also makes enemies {c_important}Vulnerable{/c} for {c_number}[{SF_6}|1|]{/c} seconds.`,
		id: 83,
		maxPoints: 1,
		x: 561.555,
		y: 293.289,
	},
	["Warrior's Steel Grasp"]: {
		connections: [ "Enhanced Steel Grasp" ],
		description: `{c_important}Steel Grasp{/c} gains {c_number}{SF_10}{/c} additional Charge.`,
		id: 84,
		maxPoints: 1,
		x: 606.385,
		y: 458.861,
	},
	["Fighter's Steel Grasp"]: {
		connections: [ "Enhanced Steel Grasp" ],
		description: `If {c_important}Steel Grasp{/c} damages an enemy, gain {c_important}Berserking{/c} for {c_number}{SF_7}{/c} seconds.`,
		id: 85,
		maxPoints: 1,
		x: 884.795,
		y: 366.914,
	},
	["Thick Skin"]: {
		connections: [ "Weapon Mastery", "Counteroffensive ", "Defensive Posture" ],
		description: `Each time you take direct damage gain {c_number}[{SF_0}*100|1%|]{/c} Base Life {c_number}({fortified:FORTIFY}){/c} as {c_important}Fortify{/c}.`,
		id: 86,
		maxPoints: 3,
		x: 0.225,
		y: 334.476,
	},
	["Counteroffensive "]: {
		connections: [ "Thick Skin" ],
		description: `While {c_important}Fortified{/c} for over {c_number}[{SF_1}*100|%|]{/c} of your Maximum Life, you deal {c_number}x[{SF_0}*100|%|]{/c} increased damage.`,
		id: 87,
		maxPoints: 3,
		x: 166.395,
		y: 533.625,
	},
	["Defensive Posture"]: {
		connections: [ "Thick Skin" ],
		description: `Increase the Damage Reduction gained while you are {c_important}Fortified{/c} by an additional {c_number}+[{SF_0}*100|%|]{/c}.`,
		id: 88,
		maxPoints: 3,
		x: -157.31,
		y: 535.218,
	},
	["Death Blow"]: {
		connections: [ "Weapon Mastery", "Enhanced Death Blow" ],
		description: `{if:SF_8}{c_label}Charges:{/c} {c_resource}{SF_10}{/c}
{c_label}Charge Cooldown:{/c_label} {c_resource}[{Recharge Time}|1|]{/c} seconds
{/if}{if:SF_9}{c_label}Cooldown:{/c_label} {c_resource}[{Cooldown Time}|1|]{/c_resource} seconds
{/if}{if:ADVANCED_TOOLTIP}{c_label}Lucky Hit Chance: {/c}{c_resource}{Combat Effect Chance}%{/c}
{/if}Attempt a killing strike, dealing {c_number}{payload:EXECUTE_IMPACT}{/c} damage to enemies in front of you.

{if:SF_9}If this kills an enemy, the Cooldown is reset.{/if}{if:SF_8}If this kills an enemy, a Charge is refunded.{/if}`,
		id: 89,
		maxPoints: 5,
		x: -325.565,
		y: -166.535,
	},
	["Enhanced Death Blow"]: {
		connections: [ "Death Blow", "Warrior's Death Blow", "Fighter's Death Blow" ],
		description: `{c_important}Death Blow{/c} deals {c_number}x[{SF_12} * 100|%|]{/c} increased damage to bosses.`,
		id: 90,
		maxPoints: 1,
		x: -568.68,
		y: -305.265,
	},
	["Warrior's Death Blow"]: {
		connections: [ "Enhanced Death Blow" ],
		description: `If {c_important}Death Blow{/c} damages at least one enemy, gain {c_important}Berserking{/c} for {c_number}{SF_16}{/c} seconds.`,
		id: 91,
		maxPoints: 1,
		x: -865.527,
		y: -366.715,
	},
	["Fighter's Death Blow"]: {
		connections: [ "Enhanced Death Blow" ],
		description: `If {c_important}Death Blow{/c} damages at least one enemy, gain {c_number}{SF_15}{/c} Fury.`,
		id: 92,
		maxPoints: 1,
		x: -648.16,
		y: -468.705,
	},
	["Pit Fighter"]: {
		connections: [ "Weapon Mastery", "Slaying Strike", "No Mercy" ],
		description: `You deal {c_number}x[{SF_3} * 100|%|]{/c} increased damage to Close enemies and gain {c_number}[{SF_1} * 100|%|]{/c} Distant Damage Reduction.`,
		id: 93,
		maxPoints: 3,
		x: -2.05,
		y: -332.97,
	},
	["Slaying Strike"]: {
		connections: [ "Pit Fighter", "Expose Vulnerability" ],
		description: `You deal {c_number}x[{SF_1}*100|%|]{/c} increased damage against {c_important}Injured{/c} enemies.`,
		id: 94,
		maxPoints: 3,
		x: 158.41,
		y: -504.97,
	},
	["Expose Vulnerability"]: {
		connections: [ "No Mercy", "Slaying Strike" ],
		description: `Dealing direct damage with a {c_important}Weapon Mastery{/c} skill causes your next {c_important}Core{/c} Skill to make enemies {c_important}Vulnerable{/c} for {c_number}[{SF_0}|1|]{/c} seconds.`,
		id: 95,
		maxPoints: 3,
		x: 2.605,
		y: -667.29,
	},
	["No Mercy"]: {
		connections: [ "Expose Vulnerability", "Pit Fighter" ],
		description: `You deal {c_number}x[{SF_0}*sLevel*100|%|]{/c} increased damage against Immobilized, Stunned, or Slowed enemies.`,
		id: 96,
		maxPoints: 3,
		x: -150.43,
		y: -504.285,
	},
	["Rupture"]: {
		connections: [ "Enhanced Rupture", "Weapon Mastery" ],
		description: `{if:SF_13}{c_label}Cooldown:{/c_label} {c_resource}[{Cooldown Time}|1|]{/c} seconds
{/if}{if:SF_14}{c_label}Charges:{/c} {c_resource}{SF_15}{/c}
{c_label}Charge Cooldown:{/c_label} {c_resource}[{Recharge Time}|1|]{/c} seconds
{/if}{if:ADVANCED_TOOLTIP}{c_label}Lucky Hit Chance: {/c}{c_resource}{Combat Effect Chance}%{/c}
{/if}Skewer enemies in front of you, dealing {c_number}{payload:DAMAGE}{/c} damage, then rip your weapon out, damaging enemies for their total Bleeding amount and removing all Bleeding damage from them.`,
		id: 97,
		maxPoints: 5,
		x: 327.83,
		y: -166.52,
	},
	["Enhanced Rupture"]: {
		connections: [ "Rupture", "Fighter's Rupture", "Warrior's Rupture" ],
		description: `If an enemy dies while being skewered by {c_important}Rupture{/c}, then reset its Cooldown. Enemies who survive take {c_number}x[{SF_26}*100|%|]{/c} increased Bleeding damage for the next {c_number}{buffduration:AMPLIFY_BLEED_DEBUFF}{/c} seconds.`,
		id: 98,
		maxPoints: 1,
		x: 552.76,
		y: -304.595,
	},
	["Fighter's Rupture"]: {
		connections: [ "Enhanced Rupture" ],
		description: `Enemies killed by {c_important}Rupture{/c} Heal you for {c_number}[{SF_21}*100|%|]{/c} of your Maximum Life.`,
		id: 99,
		maxPoints: 1,
		x: 880.23,
		y: -365.865,
	},
	["Warrior's Rupture"]: {
		connections: [ "Enhanced Rupture" ],
		description: `Killing enemies with {c_important}Rupture{/c} increases your Attack Speed by {c_number}+[{SF_23} * 100|%|]{/c} for{c_number}{buffduration:ATTACK_SPEED}{/c} seconds.`,
		id: 100,
		maxPoints: 1,
		x: 585.94,
		y: -469.18,
	},
	["Hamstring"]: {
		connections: [ "Cut to the Bone", "Weapon Mastery" ],
		description: `Your Bleeding effects Slow enemies by {c_number}[{SF_0}*100|%|]{/c}.`,
		id: 101,
		maxPoints: 3,
		x: 632.795,
		y: 0.03,
	},
	["Cut to the Bone"]: {
		connections: [ "Hamstring" ],
		description: `Your Bleeding effects deal {c_number}x[{SF_0} *100|%|]{/c} increased damage to {c_important}Vulnerable{/c} enemies.`,
		id: 102,
		maxPoints: 3,
		x: 1008.41,
		y: -0.025,
	},
};

barbarian["Ultimate"] = {
	["Call of the Ancients"]: {
		connections: [ "Ultimate", "Prime Call of the Ancients" ],
		description: `{c_label}Cooldown:{/c_label} {c_resource}[{Cooldown Time}|1|]{/c_resource} seconds
{if:ADVANCED_TOOLTIP}{c_label}Lucky Hit Chance: {/c}{c_resource}{Combat Effect Chance}%{/c}
{/if}Call upon 3 Ancients to aid you in battle for {c_number}{SF_0}{/c} seconds.

Korlic leaps at enemies, dealing {c_number}{payload:LEAP_TOOLTIP}{/c} damage and swings his weapons in a frenzy, dealing {c_number}{payload:FRENZY_TOOLTIP}{/c} damage per hit.

Talic spins in a whirlwind rapidly attacking enemies for {c_number}{payload:WHIRLWIND_TOOLTIP}{/c} damage.

Madawc upheaves the ground, dealing {c_number}{payload:UPHEAVAL_TOOLTIP}{/c} damage.`,
		id: 103,
		maxPoints: 5,
		x: -51.582,
		y: -242.094,
	},
	["Prime Call of the Ancients"]: {
		connections: [ "Supreme Call of the Ancients", "Call of the Ancients" ],
		description: `While {c_important}Call of the Ancients{/c} is active, gain {c_number}+[{SF_13}*100|%|]{/c} bonus Attack Speed and {c_number}x[{SF_14}*100|%|]{/c} increased damage.`,
		id: 104,
		maxPoints: 1,
		x: 112.66,
		y: -397.525,
	},
	["Supreme Call of the Ancients"]: {
		connections: [ "Prime Call of the Ancients" ],
		description: `Each of the Ancients gains additional power:

{c_label}Korlic:{/c} You gain {c_number}10{/c} Fury each time Korlic damages an enemy with {c_important}Frenzy{/c}.
{c_label}Talic:{/c} Enemies are Slowed by {c_number}[{SF_16}*100|%|]{/c} for {c_number}{SF_17}{/c} second when damaged by his {c_important}Whirlwind{/c}.
{c_label}Madawc:{/c} {c_number}[{SF_18}*100|%|]{/c} chance to Stun enemies for {c_number}{SF_19}{/c} seconds when using his {c_important}Upheaval{/c}.`,
		id: 105,
		maxPoints: 1,
		x: -18.609,
		y: -547.138,
	},
	["Iron Maelstrom"]: {
		connections: [ "Ultimate", "Prime Iron Maelstrom" ],
		description: `{c_label}Cooldown:{/c_label} {c_resource}[{Cooldown Time}|1|]{/c_resource} seconds
{if:ADVANCED_TOOLTIP}{c_label}Lucky Hit Chance: {/c}{c_resource}{Combat_Effect_Chance_Script_Formula_Override:14}%{/c}
{/if}Activate to attach a chain to your Two-Handed Bludgeoning weapon and slam the ground, dealing {c_number}{payload:DAMAGE}{/c} damage and Stunning them for {c_number}{buffduration:STUN}{/c} seconds.

Reactivate a second time to attach a chain to your Two-Handed Slashing weapon and swipe it in front of you, dealing {c_number}{payload:TOOLTIP_DAMAGE_SLASH}{/c} damage and {c_number}{dot:TOOLTIP_DAMAGE_SLASH_BLEED}{/c} Bleeding damage over {c_number}{buffduration:TOOLTIP_DAMAGE_SLASH_BLEED}{/c} seconds.

Reactivate a final time to attach a chain to your Dual Wield weapons and swing them around you, dealing {c_number}{payload:TOOLTIP_DAMAGE_DUALWIELDING}{/c} damage per hit.`,
		id: 106,
		maxPoints: 5,
		x: -409.819,
		y: -8.495,
	},
	["Prime Iron Maelstrom"]: {
		connections: [ "Supreme Iron Maelstrom", "Iron Maelstrom" ],
		description: `{c_important}Iron Maelstrom{/c} gains {c_number}+[{SF_10}*100|%|]{/c} increased Critical Strike Chance and deals {c_number}x[{SF_11}*100|%|]{/c} increased Critical Strike Damage`,
		id: 107,
		maxPoints: 1,
		x: -714.379,
		y: -29.264,
	},
	["Supreme Iron Maelstrom"]: {
		connections: [ "Prime Iron Maelstrom" ],
		description: `Dealing direct damage to an enemy after swapping weapons reduces {c_important}Iron Maelstrom's{/c} Cooldown by {c_number}{SF_12}{/c} second.`,
		id: 108,
		maxPoints: 1,
		x: -954.889,
		y: 30.87,
	},
	["Duelist"]: {
		connections: [ "Ultimate" ],
		description: `Attack Speed is increased by {c_number}+[{Script Formula 0}*100|%|]{/c} while using One-Handed weapons.`,
		id: 109,
		maxPoints: 3,
		x: -496.302,
		y: -261.705,
	},
	["Wrath of the Berserker"]: {
		connections: [ "Ultimate", "Supreme Wrath of the Berserker" ],
		description: `{c_label}Cooldown:{/c_label} {c_resource}[{Cooldown Time}|1|]{/c_resource} seconds
{if:ADVANCED_TOOLTIP}{c_label}Lucky Hit Chance: {/c}{c_resource}{Combat Effect Chance}%{/c}
{/if}Gain {c_important}Berserking{/c} and {c_important}Unstoppable{/c} for {c_number}{SF_13}{/c} seconds.  For the next {c_number}{buffduration:BUFF_MAIN}{/c} seconds, dealing direct damage with {c_important}Basic{/c} Skills grants {c_important}Berserking{/c} for {c_number}{SF_12}{/c} seconds.`,
		id: 110,
		maxPoints: 5,
		x: 293.361,
		y: 168.865,
	},
	["Supreme Wrath of the Berserker"]: {
		connections: [ "Prime Wrath of the Berserker", "Wrath of the Berserker" ],
		description: `While {c_important}Wrath of the Berserker{/c} is active, gain {c_number}+[{SF_3} * 100|%|]{/c} increased Movement Speed and increase Fury Generation by {c_number}x[{SF_14} * 100|%|]{/c}`,
		id: 111,
		maxPoints: 1,
		x: 438.829,
		y: 328.334,
	},
	["Prime Wrath of the Berserker"]: {
		connections: [ "Supreme Wrath of the Berserker" ],
		description: `While {c_important}Wrath of the Berserker{/c} is active, every {c_number}{SF_5}{/c} Fury you spend increases {c_important}Berserk's{/c} damage bonus by {c_number}x[{SF_6}*100|%|]{/c}`,
		id: 112,
		maxPoints: 1,
		x: 623.391,
		y: 426.139,
	},
	["Tempered Fury"]: {
		connections: [ "Ultimate", "Invigorating Fury", "Furious Impulse" ],
		description: `Increase your Maximum Fury by {c_number}{SF_0}{/c}.`,
		id: 113,
		maxPoints: 3,
		x: -490.702,
		y: 263.36,
	},
	["Invigorating Fury"]: {
		connections: [ "Tempered Fury" ],
		description: `Heals you for {c_number}[{SF_0}*100|%|]{/c} of your Maximum Life for each {c_number}{SF_1}{/c} Fury spent.`,
		id: 114,
		maxPoints: 3,
		x: -560.269,
		y: 457.204,
	},
	["Furious Impulse"]: {
		connections: [ "Tempered Fury" ],
		description: `Each time you swap weapons, gain {c_number}{SF_0}{/c} Fury.`,
		id: 115,
		maxPoints: 3,
		x: -869.834,
		y: 330.929,
	},
	["Wallop"]: {
		connections: [ "Ultimate", "Brute Force", "Concussion" ],
		description: `Your Skills using Bludgeoning weapons deal {c_number}x[{SF_0}*100|%|]{/c} increased damage if the enemy is Stunned or {c_important}Vulnerable{/c}.`,
		id: 116,
		maxPoints: 3,
		x: 517.506,
		y: -164.641,
	},
	["Brute Force"]: {
		connections: [ "Wallop", "Heavy Handed" ],
		description: `Your {c_important}Overpower{/c} deals {c_number}x[{SF_0}*100|%|]{/c} increased damage when using a Two-Handed weapon`,
		id: 117,
		maxPoints: 3,
		x: 960.611,
		y: -108.571,
	},
	["Heavy Handed"]: {
		connections: [ "Ultimate", "Brute Force" ],
		description: `While using Two-Handed weapons you deal {c_number}x[{SF_0}*100|%|]{/c} increased Critical Strike Damage.`,
		id: 118,
		maxPoints: 3,
		x: 638.816,
		y: 39.155,
	},
	["Concussion"]: {
		connections: [ "Wallop" ],
		description: `{c_label}Lucky Hit:{/c} Skills using Bludgeoning weapons have up to a {c_number}{SF_0}%{/c} chance to Stun enemies for {c_number}{buffduration:STUN}{/c} seconds, or up to a {c_number}{SF_1}%{/c} chance when using a Two-Handed Bludgeoning weapon.`,
		id: 119,
		maxPoints: 3,
		x: 821.771,
		y: -332.793,
	},
};

barbarian["Capstone"] = {
	["Unconstrained"]: {
		connections: [ "Capstone" ],
		description: `Increase {c_important}Berserk's{/c} maximum duration by {c_number}{SF_1}{/c} seconds and increase its damage bonus by {c_number}x[{SF_0}*100|%|]{/c}.`,
		id: 120,
		maxPoints: 1,
		x: -562.656,
		y: 314.67,
	},
	["Gushing Wounds"]: {
		connections: [ "Capstone" ],
		description: `Killing a Bleeding enemy creates an explosion that inflicts {c_number}{dot:BLEEDING}{/c} Bleeding damage over {c_number}{SF_3}{/c} seconds.`,
		id: 121,
		maxPoints: 1,
		x: 559.849,
		y: 314.985,
	},
	["Unbridled Rage"]: {
		connections: [ "Capstone" ],
		description: `{c_important}Core{/c} Skills deal {c_number}x[{SF_1}*100|%|]{/c} increased damage, but cost {c_number}x[{SF_0}*-1*100|%|]{/c} more.`,
		id: 122,
		maxPoints: 1,
		x: 186.229,
		y: 314.52,
	},
	["Walking Arsenal"]: {
		connections: [ "Capstone" ],
		description: `Dealing direct damage with a Two-Handed Bludgeoning, Two-Handed Slashing, or Dual Wielded weapons grants {c_number}x[{SF_0}*100|%|]{/c} increased damage for {c_number}{buffduration:BUFF_BLUNT_DAMAGE}{/c} seconds.

While all three damage bonuses are active, you gain an additional {c_number}x[{SF_7}*100|%|]{/c} increased damage.`,
		id: 123,
		maxPoints: 1,
		x: -188.068,
		y: 312.95,
	},
};

export { barbarian };