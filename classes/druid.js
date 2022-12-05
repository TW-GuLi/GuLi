let druid = {};

druid["Trunk Data"] = {
	["Basic"]: {
		connections: [ "Spirit" ],
		x: 0,
		y: 0,
	},
	["Spirit"]: {
		connections: [ "Defensive" ],
		requiredPoints: 2,
		x: 5.146,
		y: 1132.94,
	},
	["Defensive"]: {
		connections: [ "Companion" ],
		requiredPoints: 6,
		x: -1248.81,
		y: 2232.505,
	},
	["Companion"]: {
		connections: [ "Wrath" ],
		requiredPoints: 11,
		x: 1251.46,
		y: 2231.245,
	},
	["Wrath"]: {
		connections: [ "Ultimate" ],
		requiredPoints: 16,
		x: -1242.16,
		y: 3763.334,
	},
	["Ultimate"]: {
		connections: [ "Capstone" ],
		requiredPoints: 23,
		x: 1240.835,
		y: 3765.088,
	},
	["Capstone"]: {
		requiredPoints: 33,
		x: 8.196,
		y: 4695.885,
	},
};

druid["Basic"] = {
	["Earthspike"]: {
		connections: [ "Basic", "Enhanced Earthspike" ],
		description: `{if:SF_15}{c_label}Cooldown:{/c_label} {c_resource}[{SF_16}|1|]{/c} seconds
{/if}{c_label}Generate Spirit:{/c_label} {c_resource}{SF_5}{/c_resource}
{if:ADVANCED_TOOLTIP}{c_label}Lucky Hit Chance: {/c}{c_resource}{Combat Effect Chance}%{/c}
{/if}Sunder the earth, impaling the first enemy hit for {c_number}{payload:DAMAGE}{/c} damage.`,
		id: 0,
		maxPoints: 5,
		x: -348.701,
		y: -67.625,
	},
	["Enhanced Earthspike"]: {
		connections: [ "Earthspike", "Wild Earthspike", "Fierce Earthspike" ],
		description: `{c_important}Earthspike{/c} has an {c_number}[{SF_11}*100|%|]{/c} chance to Stun for {c_number}[{buffduration:MOD_RANK_STUN}|1|]{/c} seconds.`,
		id: 1,
		maxPoints: 1,
		x: -677.445,
		y: -139.94,
	},
	["Wild Earthspike"]: {
		connections: [ "Enhanced Earthspike" ],
		description: `Summon a second {c_important}Earthspike{/c} when hitting an Immobilized or Stunned enemy.`,
		id: 2,
		maxPoints: 1,
		x: -804.45,
		y: -293.3,
	},
	["Fierce Earthspike"]: {
		connections: [ "Enhanced Earthspike" ],
		description: `{c_important}Fortify{/c} for {c_number}[{SF_13}*100|%|]{/c} of your Base Life {c_number}({fortified:MOD_A_FORTIFY}){/c} whenever {c_important}Earth Spike{/c} damages enemies who are Stunned, Immobilized, or Knocked Back.`,
		id: 3,
		maxPoints: 1,
		x: -1023.235,
		y: -145.735,
	},
	["Maul"]: {
		connections: [ "Basic", "Enhanced Maul" ],
		description: `{c_label}Generate Spirit:{/c_label} {c_resource}{SF_0}{/c_resource}
{if:ADVANCED_TOOLTIP}{c_label}Lucky Hit Chance: {/c}{c_resource}{Combat Effect Chance}%{/c}
{/if}Shapeshift into a Werebear and maul enemies in front of you, dealing {c_number}{payload:MELEE_PAYLOAD}{/c} damage.`,
		id: 4,
		maxPoints: 5,
		x: -262.904,
		y: 151.445,
	},
	["Enhanced Maul"]: {
		connections: [ "Maul", "Wild Maul", "Fierce Maul" ],
		description: `If an enemy is hit by {c_important}Maul{/c}, then {c_important}Fortify{/c} for {c_number}[{SF_2}*100|%|]{/c} Base Life {c_number}({fortified:FORTIFY_CASTER}){/c}.`,
		id: 5,
		maxPoints: 1,
		x: -513.505,
		y: 282.48,
	},
	["Wild Maul"]: {
		connections: [ "Enhanced Maul" ],
		description: `{c_important}Maul{/c} has a {c_number}[{SF_6}*100|%|]{/c} chance to Knock Down enemies for {c_number}{buffduration:MOD_B_KNOCKDOWN}{/c} seconds.`,
		id: 6,
		maxPoints: 1,
		x: -827.765,
		y: 318.3,
	},
	["Fierce Maul"]: {
		connections: [ "Enhanced Maul" ],
		description: `Increases the range and radius of {c_important}Maul{/c} by {c_number}[SF_3 *100|%|]{/c}.`,
		id: 7,
		maxPoints: 1,
		x: -578.085,
		y: 450.045,
	},
	["Wind Shear"]: {
		connections: [ "Basic", "Enhanced Wind Shear" ],
		description: `{c_label}Generate Spirit:{/c_label} {c_resource}{SF_5}{/c_resource}
{if:ADVANCED_TOOLTIP}{c_label}Lucky Hit Chance: {/c}{c_resource}{Combat Effect Chance}%{/c}
{/if}Conjure a piercing blade of wind, dealing {c_number}{Payload:DAMAGE}{/c} damage.`,
		id: 8,
		maxPoints: 5,
		x: -2.291,
		y: -199.935,
	},
	["Enhanced Wind Shear"]: {
		connections: [ "Wind Shear", "Fierce Wind Shear", "Wild Wind Shear" ],
		description: `{c_important}Wind Shear{/c} has a {c_number}[{SF_18}*100|%|]{/c} chance to make enemies {c_important}{u}Vulnerable{/u}{/c} for {c_number}{SF_17}{/c} seconds.`,
		id: 9,
		maxPoints: 1,
		x: 0.368,
		y: -368.37,
	},
	["Fierce Wind Shear"]: {
		connections: [ "Enhanced Wind Shear" ],
		description: `Each enemy hit by {c_important}Wind Shear{/c} increases your movement speed by {c_number}[{SF_6} * 100|%|]{/c} for {c_number}{buffduration:BUFF_MOVE_SPEED}{/c} seconds, up to {c_number}[{SF_6} * {SF_8} * 100|%|]{/c}.`,
		id: 10,
		maxPoints: 1,
		x: -126.703,
		y: -500.785,
	},
	["Wild Wind Shear"]: {
		connections: [ "Enhanced Wind Shear" ],
		description: `{c_important}Wind Shear{/c} grants {c_number}{SF_4}{/c} additional Spirit for each enemy hit beyond the first.`,
		id: 11,
		maxPoints: 1,
		x: 130.379,
		y: -501.09,
	},
	["Storm Strike"]: {
		connections: [ "Basic", "Enhanced Storm Strike" ],
		description: `{c_label}Generate Spirit:{/c_label} {c_resource}{SF_2}{/c_resource}
{if:ADVANCED_TOOLTIP}{c_label}Lucky Hit Chance: {/c}{c_resource}{Combat Effect Chance}%{/c}
{/if}Electricity gathers around your weapon, dealing {c_number}{payload:MELEE_DAMAGE}{/c} damage to your target and chaining to up to {c_number}{SF_3}{/c} surrounding enemies, dealing {c_number}[SF_4 *100|%|]{/c} less damage each time it chains.

Dealing damage with {c_important}Storm Strike{/c} reduces your damage taken by {c_number}[{SF_9}*100|%|]{/c} for {c_number}{buffduration:DAMAGE_REDUCTION}{/c} seconds.`,
		id: 12,
		maxPoints: 5,
		x: 346.71,
		y: -68.24,
	},
	["Enhanced Storm Strike"]: {
		connections: [ "Storm Strike", "Fierce Storm Strike", "Wild Storm Strike" ],
		description: `{c_important}Storm Strike{/c} has a {c_number}[{SF_10}*100|%|]{/c} chance to Immobilize all enemies hit for {c_number}[{buffduration:IMMOBILIZE}|1|]{/c} seconds.`,
		id: 13,
		maxPoints: 1,
		x: 671.83,
		y: -141.815,
	},
	["Fierce Storm Strike"]: {
		connections: [ "Enhanced Storm Strike" ],
		description: `{c_important}Storm Strike{/c} has a {c_number}[{SF_12} * 100|%|]{/c} chance to make enemies {c_important}{u}Vulnerable{/u}{/c} for {c_number}{SF_13}{/c} seconds.`,
		id: 14,
		maxPoints: 1,
		x: 812.63,
		y: -296.275,
	},
	["Wild Storm Strike"]: {
		connections: [ "Enhanced Storm Strike" ],
		description: `{c_important}Storm Strike{/c} chains to {c_number}[SF_7]{/c} additional targets.`,
		id: 15,
		maxPoints: 1,
		x: 1027.3,
		y: -150.99,
	},
	["Claw"]: {
		connections: [ "Basic", "Enhanced Claw" ],
		description: `{c_label}Generate Spirit:{/c_label} {c_resource}{SF_3}{/c_resource}
{if:ADVANCED_TOOLTIP}{c_label}Lucky Hit Chance: {/c}{c_resource}{Combat Effect Chance}%{/c}
{/if}Shapeshift into a Werewolf and claw at an enemy for {c_number}{payload:MELEE_DAMAGE}{/c} damage.`,
		id: 16,
		maxPoints: 5,
		x: 274.729,
		y: 154.92,
	},
	["Enhanced Claw"]: {
		connections: [ "Claw", "Fierce Claw", "Wild Claw" ],
		description: `{c_important}Claw's{/c} Attack Speed is increased by {c_number}+[{SF_12}*100|%|]{/c}.`,
		id: 17,
		maxPoints: 1,
		x: 528.355,
		y: 288.635,
	},
	["Fierce Claw"]: {
		connections: [ "Enhanced Claw" ],
		description: `{c_important}Claw{/c} poisons enemies for {c_number}{dot:POISON_DOT}{/c} over {c_important}{buffduration:POISON_DOT}{/c} seconds.`,
		id: 18,
		maxPoints: 1,
		x: 586.595,
		y: 458.08,
	},
	["Wild Claw"]: {
		connections: [ "Enhanced Claw" ],
		description: `{c_important}Claw{/c} has an additional {c_number}+[{SF_9}*100|%|]{/c} Critical Strike Chance and deals {c_number}x[{SF_10}*100|%|]{/c} increased Critical Strike Damage.`,
		id: 19,
		maxPoints: 1,
		x: 844.165,
		y: 323.69,
	},
};

druid["Spirit"] = {
	["Landslide"]: {
		connections: [ "Spirit", "Enhanced Landslide" ],
		description: `{c_label}Spirit Cost: {/c}{c_resource}{Resource Cost}{/c}
{if:ADVANCED_TOOLTIP}{c_label}Lucky Hit Chance: {/c}{c_resource}{Combat Effect Chance}%{/c}
{/if}Crush enemies between {c_number}3{/c} pillars of earth, dealing up to {c_number}{payload:TOOLTIP_DAMAGE}{/c} damage.`,
		id: 20,
		maxPoints: 5,
		x: -225.944,
		y: -166.79,
	},
	["Enhanced Landslide"]: {
		connections: [ "Landslide", "Raging Landslide", "Primal Landslide" ],
		description: `Enemies hit by all {c_number}3{/c} {c_important}Landslide{/c} pillars have a {c_number}[{SF_9}*100|%|]{/c} chance to be Immobilized for {c_number}{buffduration:IMMOBILIZE}{/c} seconds by the final hit.`,
		id: 21,
		maxPoints: 1,
		x: -405.12,
		y: -322.47,
	},
	["Raging Landslide"]: {
		connections: [ "Enhanced Landslide" ],
		description: `For {c_number}{buffduration:SKILL_RANK_COST_REDUCTION}{/c} seconds after {c_important}Landslide{/c} is cast, the Spirit cost is reduced by {c_number}{SF_11}{/c}.`,
		id: 22,
		maxPoints: 1,
		x: -453.53,
		y: -483.315,
	},
	["Primal Landslide"]: {
		connections: [ "Enhanced Landslide" ],
		description: `{c_important}Landslide{/c} has a {c_number}[{SF_8}*100|%|]{/c} increased Critical Strike Chance and deals {c_number}x[{SF_7}*100|%|]{/c} increased Critical Strike Damage against enemies who are Stunned, Immobilized or Knocked Back.`,
		id: 23,
		maxPoints: 1,
		x: -690.516,
		y: -360.81,
	},
	["Pulverize"]: {
		connections: [ "Spirit", "Enhanced Pulverize" ],
		description: `{c_label}Spirit Cost:{/c_label} {c_resource}{Resource Cost}{/c_resource}
{if:ADVANCED_TOOLTIP}{c_label}Lucky Hit Chance: {/c}{c_resource}{Combat Effect Chance}%{/c}
{/if}Shapeshift into a Werebear and slam the ground, dealing {c_number}{payload:DAMAGE}{/c} damage to surrounding enemies.`,
		id: 24,
		maxPoints: 5,
		x: -370.985,
		y: 43.955,
	},
	["Enhanced Pulverize"]: {
		connections: [ "Pulverize", "Primal Pulverize", "Raging Pulverize" ],
		description: `{c_important}Pulverize{/c} deals {c_number}x[{SF_13}*100|%|]{/c} increased bonus damage when hitting {c_number}{SF_14}{/c} or more enemies.`,
		id: 25,
		maxPoints: 1,
		x: -709.316,
		y: 76.73,
	},
	["Primal Pulverize"]: {
		connections: [ "Enhanced Pulverize" ],
		description: `Enemies hit with {c_important}Pulverize{/c} deal {c_number}[{SF_10}*100|%|]{/c} reduced damage for {c_number}{buffduration:MOD_DAMAGE_REDUCTION}{/c} seconds.`,
		id: 26,
		maxPoints: 1,
		x: -880.426,
		y: 214.1,
	},
	["Raging Pulverize"]: {
		connections: [ "Enhanced Pulverize" ],
		description: `{c_important}Pulverize{/c} has a {c_number}[{SF_11}*100|%|]{/c} chance to Immobilize all enemies hit for {c_number}{buffduration:IMMOBILIZE}{/c} seconds.`,
		id: 27,
		maxPoints: 1,
		x: -1043.241,
		y: 59.665,
	},
	["Tornado"]: {
		connections: [ "Spirit", "Enhanced Tornado" ],
		description: `{c_label}Spirit Cost: {/c}{c_resource}{Resource Cost}{/c}
{if:ADVANCED_TOOLTIP}{c_label}Lucky Hit Chance: {/c}{c_resource}{Combat Effect Chance}%{/c}
{/if}Conjure a swirling tornado that deals {c_number}{PAYLOAD:TOOLTIP_DAMAGE}{/c} damage.`,
		id: 28,
		maxPoints: 5,
		x: 256.877,
		y: -173.905,
	},
	["Enhanced Tornado"]: {
		connections: [ "Tornado", "Raging Tornado", "Primal Tornado" ],
		description: `Each time you cast {c_important}Tornado{/c}, you have a {c_number}[{SF_17}*100|%|]{/c} chance to spawn an additional {c_important}Tornado{/c}.`,
		id: 29,
		maxPoints: 1,
		x: 467.705,
		y: -314.8,
	},
	["Raging Tornado"]: {
		connections: [ "Enhanced Tornado" ],
		description: `Each time an enemy is damaged by a {c_important}Tornado{/c}, they take {c_number}x[{SF_19}*100|%|]{/c} increased damage from {c_important}Tornado{/c} for {c_number}{buffduration:MOD_STACKING_BONUS_DAMAGE_TAKEN}{/c} seconds, stacking up to {c_number}x[{SF_19} * {SF_20} * 100|%|]{/c} increased damage.`,
		id: 30,
		maxPoints: 1,
		x: 523.809,
		y: -473.39,
	},
	["Primal Tornado"]: {
		connections: [ "Enhanced Tornado" ],
		description: `Enemies damaged by {c_important}Tornado{/c} are Slowed by {c_number}[{SF_22}*100|%|]{/c} for {c_number}{buffduration:RANK_SLOW}{/c} seconds, stacking up to {c_number}[{SF_22}*{SF_23}*100|%|]{/c}.`,
		id: 31,
		maxPoints: 1,
		x: 793.079,
		y: -357,
	},
	["Shred"]: {
		connections: [ "Spirit", "Enhanced Shred" ],
		description: `{c_label}Spirit Cost: {/c}{c_resource}{Resource Cost}{/c}
{if:ADVANCED_TOOLTIP}{c_label}Lucky Hit Chance: {/c}{c_resource}{Combat Effect Chance}%{/c}
{/if}Shapeshift into a Werewolf and perform a 3-combo attack.

{icon:bullet}{c_important}1st Attack:{/c} Dash towards the target and deal {c_number}{payload:ATTACK_ONE}{/c} damage.
{icon:bullet}{c_important}2nd Attack:{/c} {if:Mod.UpgradeA}Dash towards the target and deal {else}Deal {/if}{c_number}{payload:ATTACK_TWO}{/c} damage.
{icon:bullet}{c_important}3rd Attack:{/c} Perform a larger finishing move dealing {c_number}{payload:ATTACK_THREE}{/c} damage {if:Mod.UpgradeB}and applying a potent poison dealing an additional {c_number}{dot:MOD_B_POISONDOT}{/c} damage over {c_number}{SF_7}{/c} seconds.{else}.{/if}{if:Mod.UpgradeA}

{c_important}Shred's{/c} 1st and 2nd attack gain a {c_number}[{SF_5}*100]%{/c} increased Critical Strike Chance bonus.{/if}`,
		id: 33,
		maxPoints: 5,
		x: 44.547,
		y: 225.17,
	},
	["Enhanced Shred"]: {
		connections: [ "Shred", "Raging Shred", "Primal Shred" ],
		description: `{c_important}Shred{/c} gains {c_number}[{SF_16}*100|%|]{/c} attack speed and heals for {c_number}[{SF_8}*100|%|]{/c} of your maximum Life if an enemy is struck.`,
		id: 34,
		maxPoints: 1,
		x: 77.78,
		y: 395.08,
	},
	["Raging Shred"]: {
		connections: [ "Enhanced Shred" ],
		description: `{c_important}Shred's{/c} third combo attack is larger and applies a potent poison to enemies hit dealing an additional {c_number}{dot:MOD_B_POISONDOT}{/c} damage over {c_number}{SF_7}{/c} seconds.`,
		id: 36,
		maxPoints: 1,
		x: -31.192,
		y: 569.605,
	},
	["Primal Shred"]: {
		connections: [ "Enhanced Shred" ],
		description: `{c_important}Shred's{/c} second combo attack also performs a dash. In addition, {c_important}Shred's{/c} Critical Strike Chance is increased by {c_number}+[{SF_5}*100]%{/c} for the first two combo attacks.`,
		id: 35,
		maxPoints: 1,
		x: 311.864,
		y: 543.51,
	},
	["Lightning Storm"]: {
		connections: [ "Spirit", "Enhanced Lightning Storm" ],
		description: `{c_label}Spirit Cost:{/c} {c_resource}{Resource Cost} per strike{/c}
{if:ADVANCED_TOOLTIP}{c_label}Lucky Hit Chance: {/c}{c_resource}{Combat Effect Chance}%{/c}
{/if}Conjure a growing lightning storm that deals {c_number}{payload:DAMAGE}{/c} damage per strike and increases the number of strikes the longer it is channeled up to a maximum of {c_number}[{SF_16}+1]{/c}.`,
		id: 37,
		maxPoints: 5,
		x: 451.305,
		y: 2.77,
	},
	["Enhanced Lightning Storm"]: {
		connections: [ "Lightning Storm", "Primal Lightning Storm", "Raging Lightning Storm" ],
		description: `The size of your {c_important}Lightning Storm{/c} is preserved for {c_number}{SF_10}{/c} seconds after channeling.`,
		id: 38,
		maxPoints: 1,
		x: 710.564,
		y: -30.53,
	},
	["Primal Lightning Storm"]: {
		connections: [ "Enhanced Lightning Storm" ],
		description: `{c_important}Lightning Storm{/c} has a {c_number}[{SF_8}*100|%|]{/c} chance to {c_important}Immobilize{/c} enemies hit for {c_number}{buffduration:IMMOBILIZE}{/c} seconds.`,
		id: 39,
		maxPoints: 1,
		x: 981.759,
		y: -150.685,
	},
	["Raging Lightning Storm"]: {
		connections: [ "Enhanced Lightning Storm" ],
		description: `{c_important}Lightning Storm{/c} gains {c_number}1{/c} additional lightning strike.`,
		id: 40,
		maxPoints: 1,
		x: 980.359,
		y: 60.06,
	},
	["Heart of the Wild"]: {
		connections: [ "Spirit", "Wild Impulses", "Abundance" ],
		description: `Maximum Spirit is increased by {c_number}{SF_0}{/c}.`,
		id: 42,
		maxPoints: 3,
		x: -519.321,
		y: -90.235,
	},
	["Wild Impulses"]: {
		connections: [ "Heart of the Wild" ],
		description: `Your {c_important}Core{/c} skills cost {c_number}x[{SF_0} * 100|%|]{/c} more Spirit but deal {c_number}x[{SF_1} * 100|%|]{/c} increased damage.`,
		id: 32,
		maxPoints: 3,
		x: -770.566,
		y: -237.475,
	},
	["Abundance"]: {
		connections: [ "Heart of the Wild" ],
		description: `{c_important}Basic{/c} skills generate {c_number}[{SF_1}*100|%|]{/c} more Spirit.`,
		id: 41,
		maxPoints: 3,
		x: -885.641,
		y: -102.775,
	},
	["Predatory Instinct"]: {
		connections: [ "Spirit", "Iron Fur", "Digitigrade Gait" ],
		description: `Critical Strike Chance against Close enemies is increased by {c_number}[{SF_1} * 100|%|]{/c}.`,
		id: 136,
		maxPoints: 3,
		x: 411.097,
		y: 186.195,
	},
	["Iron Fur"]: {
		connections: [ "Predatory Instinct" ],
		description: `While in Werebear form, damage reduction is increased by {c_number}[{SF_2} * 100|%|]{/c}.

This bonus persists for {c_number}{buffduration:BUFF_MITIGATION_TEMP}{/c} seconds after leaving Werebear form.`,
		id: 137,
		maxPoints: 3,
		x: 802.404,
		y: 185.94,
	},
	["Digitigrade Gait"]: {
		connections: [ "Predatory Instinct" ],
		description: `While in Werewolf form, your Movement Speed is increased by {c_number}[{SF_2} * 100|%|]{/c}.

This bonus persists for {c_number}{buffduration:BUFF_SPEED_TEMP}{/c} seconds after leaving Werewolf form.`,
		id: 138,
		maxPoints: 3,
		x: 595.059,
		y: 373.7,
	},
};

druid["Defensive"] = {
	["Earthen Bulwark"]: {
		connections: [ "Defensive", "Enhanced Earthen Bulwark" ],
		description: `{c_label}Cooldown: {/c}{c_resource}[{Cooldown Time}|1|]{/c}
{if:ADVANCED_TOOLTIP}{c_label}Lucky Hit Chance: {/c}{c_resource}{Combat Effect Chance}%{/c}
{/if}Rocks surround you for {c_number}{buffduration:BUFF_SHIELD}{/c} seconds, granting a {c_important}Barrier{/c} that absorbs {c_number}[{SF_1}*100|%|]{/c} of your Base Life {c_number}({shield:BUFF_SHIELD}){/c} in damage.`,
		id: 43,
		maxPoints: 5,
		x: -371.465,
		y: -166.005,
	},
	["Enhanced Earthen Bulwark"]: {
		connections: [ "Earthen Bulwark", "Innate Earthen Bulwark", "Preserving Earthen Bulwark" ],
		description: `{c_important}Earthen Bulwark{/c} makes you {c_important}Unstoppable{/c} while active.`,
		id: 44,
		maxPoints: 1,
		x: -614.835,
		y: -283.58,
	},
	["Innate Earthen Bulwark"]: {
		connections: [ "Enhanced Earthen Bulwark" ],
		description: `Upon expiration, {c_important}Earthen Bulwark{/c} shatters, dealing {c_number}[{SF_2} * 100|%|]{/c} of the remaining {c_important}Barrier{/c} amount to surrounding enemies.`,
		id: 45,
		maxPoints: 1,
		x: -906.825,
		y: -302.41,
	},
	["Preserving Earthen Bulwark"]: {
		connections: [ "Enhanced Earthen Bulwark" ],
		description: `Casting {c_important}Earthen Bulwark{/c} grants {c_number}[{SF_10}*100|%|]{/c} Base Life {c_number}({fortified:MOD_FORTIFY}){/c} as {c_important}Fortify{/c}.`,
		id: 46,
		maxPoints: 1,
		x: -683.695,
		y: -438.695,
	},
	["Debilitating Roar"]: {
		connections: [ "Defensive", "Enhanced Debilitating Roar" ],
		description: `{c_label}Cooldown: {/c}{c_resource}[{Cooldown Time}|1|]{/c}
Shapeshift into a Werebear and bellow a mighty roar, reducing damage dealt of Nearby enemies by {c_number}[{SF_2} * 100|%|]{/c} for {c_number}{buffduration:BUFF_DAMAGE_DEALT_REDUCTION}{/c} seconds.`,
		id: 47,
		maxPoints: 5,
		x: -374.945,
		y: 169.89,
	},
	["Enhanced Debilitating Roar"]: {
		connections: [ "Debilitating Roar", "Preserving Debilitating Roar", "Innate Debilitating Roar" ],
		description: `{c_important}Debilitating Roar{/c} also {c_important}Fortifies{/c} you for {c_number}[{SF_10}*100|%|]{/c} Base Life {c_number}({fortified:MOD_FORTIFY}){/c}.`,
		id: 48,
		maxPoints: 1,
		x: -604.84,
		y: 279.69,
	},
	["Preserving Debilitating Roar"]: {
		connections: [ "Enhanced Debilitating Roar" ],
		description: `{c_important}Debilitating Roar{/c} also heals you for {c_number}[{SF_8}*100|%|]{/c} of your maximum Life each second for its duration.`,
		id: 49,
		maxPoints: 1,
		x: -691.605,
		y: 443.5,
	},
	["Innate Debilitating Roar"]: {
		connections: [ "Enhanced Debilitating Roar" ],
		description: `{c_important}Debilitating Roar{/c} also slows enemies by {c_number}[{SF_9}*100|%|]{/c} for its duration.`,
		id: 50,
		maxPoints: 1,
		x: -918.365,
		y: 307.475,
	},
	["Ancestral Fortitude"]: {
		connections: [ "Defensive", "Vigilance" ],
		description: `Increase your non-physical resistances by {c_number}[{SF_1} * 100|%|]{/c}.`,
		id: 51,
		maxPoints: 3,
		x: -816.55,
		y: 1.025,
	},
	["Vigilance"]: {
		connections: [ "Ancestral Fortitude" ],
		description: `You take {c_number}[{SF_0} * 100|%|]{/c} reduced damage for {c_number}{buffduration:DAMAGE_REDUCTION}{/c} seconds after using a {c_important}Defensive{/c} skill.`,
		id: 52,
		maxPoints: 3,
		x: -1188.24,
		y: 0.39,
	},
	["Blood Howl"]: {
		connections: [ "Defensive", "Enhanced Blood Howl" ],
		description: `{c_label}Cooldown: {/c}{c_resource}[{Cooldown Time}|1|]{/c}{if:Mod.GrantSpirit}
{c_label}Generate Spirit:{/c_label} {c_resource}{SF_2}{/c_resource}{/if}
Shapeshift into a Werewolf and howl furiously, restoring {c_number}[{SF_0} * 100|1%|]{/c} Life.`,
		id: 53,
		maxPoints: 5,
		x: 0.085,
		y: 234.29,
	},
	["Enhanced Blood Howl"]: {
		connections: [ "Blood Howl", "Innate Blood Howl", "Preserving Blood Howl" ],
		description: `Kills reduce the cooldown of {c_important}Blood Howl{/c} by {c_number}{SF_5}{/c} second.`,
		id: 54,
		maxPoints: 1,
		x: 1.245,
		y: 400.21,
	},
	["Innate Blood Howl"]: {
		connections: [ "Enhanced Blood Howl" ],
		description: `{c_important}Blood Howl{/c} also generates {c_number}{SF_2}{/c} Spirit.`,
		id: 55,
		maxPoints: 1,
		x: -131.31,
		y: 545.905,
	},
	["Preserving Blood Howl"]: {
		connections: [ "Enhanced Blood Howl" ],
		description: `{c_important}Blood Howl{/c} also increases your Attack Speed by {c_number}[{SF_3}*100|%|]{/c} for {c_number}{buffduration:MOD_ATTACK_SPEED_BONUS}{/c} seconds.`,
		id: 56,
		maxPoints: 1,
		x: 135.885,
		y: 542.49,
	},
	["Cyclone Armor"]: {
		connections: [ "Defensive", "Enhanced Cyclone Armor" ],
		description: `{c_label}Cooldown:{/c} {c_resource}[{Cooldown Time}|1|]{/c}
{if:ADVANCED_TOOLTIP}{c_label}Lucky Hit Chance: {/c}{c_resource}{Combat Effect Chance}%{/c}
{/if}{c_label}Passive:{/c} Powerful winds surround you, granting {c_number}[{SF_0}*100|1%|]{/c} non-Physical damage reduction.  

{c_label}Active:{/c} The winds rapidly expand, Knocking Back enemies and dealing {c_number}{payload:KNOCKBACK}{/c} damage.`,
		id: 57,
		maxPoints: 5,
		x: -1.22,
		y: -265.385,
	},
	["Enhanced Cyclone Armor"]: {
		connections: [ "Cyclone Armor", "Preserving Cyclone Armor", "Innate Cyclone Armor" ],
		description: `Enemies who are Knocked Back by {c_important}Cyclone Armor{/c} are also Slowed by {c_number}[{SF_8}*100|%|]{/c} for {c_number}{buffduration:MOD_SLOW}{/c} seconds.`,
		id: 58,
		maxPoints: 1,
		x: 0.115,
		y: -425.535,
	},
	["Preserving Cyclone Armor"]: {
		connections: [ "Enhanced Cyclone Armor" ],
		description: `Every {c_number}{SF_6}{/c} seconds, {c_important}Cyclone Armor{/c} intensifies, reducing the next instance of non-Physical damage by an additional {c_number}[{SF_5}*100|%|]{/c}.`,
		id: 59,
		maxPoints: 1,
		x: -136.745,
		y: -576.38,
	},
	["Innate Cyclone Armor"]: {
		connections: [ "Enhanced Cyclone Armor" ],
		description: `Enemies Knocked Back by {c_important}Cyclone Armor{/c} become {c_important}Vulnerable{/c} for {c_number}2{/c} seconds.`,
		id: 60,
		maxPoints: 1,
		x: 126.12,
		y: -573.495,
	},
};

druid["Companion"] = {
	["Ravens"]: {
		connections: [ "Companion", "Enhanced Ravens" ],
		description: `{c_label}Cooldown: {/c}{c_resource}[{Cooldown Time}|1|]{/c}
{if:ADVANCED_TOOLTIP}{c_label}Lucky Hit Chance: {/c}{c_resource}{Combat_Effect_Chance_Script_Formula_Override:18}%{/c}
{/if}{if:Mod.PassiveAttacks}
{c_label}Passive:{/c} {c_number}{SF_1}{/c} Raven{if:SF_21}s{/if} fly above you and periodically attack your enemies for {c_number}{payload:TOOLTIP_DAMAGE}{/c} damage every {c_number}{SF_2}{/c} seconds.
{/if}{c_label}Active{/c}: The target area is swarmed with ravens, dealing {c_number}{payload:POOL_TOOLTIP_DAMAGE}{/c} damage over {c_number}{SF_4}{/c} seconds.`,
		id: 62,
		maxPoints: 5,
		x: -1.05,
		y: 231.07,
	},
	["Enhanced Ravens"]: {
		connections: [ "Ravens", "Brutal Ravens", "Ferocious Ravens" ],
		description: `{c_label}Passive:{/c} Ravens fly above you and periodically attack your enemies for {c_number}{payload:TOOLTIP_DAMAGE}{/c} damage every {c_number}{SF_2}{/c} seconds.`,
		id: 63,
		maxPoints: 1,
		x: -0.065,
		y: 380.99,
	},
	["Brutal Ravens"]: {
		connections: [ "Enhanced Ravens" ],
		description: `{c_number}{SF_14}{/c} additional {c_important}Ravens{/c} appear when they periodically attack enemies.`,
		id: 64,
		maxPoints: 1,
		x: -150.32,
		y: 549.535,
	},
	["Ferocious Ravens"]: {
		connections: [ "Enhanced Ravens" ],
		description: `Enemies inside the swarm of {c_important}Ravens{/c} when it is activated become {c_important}Vulnerable{/c} for {c_number}{SF_11}{/c} seconds.`,
		id: 65,
		maxPoints: 1,
		x: 132.97,
		y: 548.405,
	},
	["Call of the Wild"]: {
		connections: [ "Companion" ],
		description: `You deal {c_number}x[{SF_1}  * 100|%|]{/c} increased Critical Strike Damage against your {c_important}Wolves'{/c} focus target.

{c_important}Raven{/c} attacks deal {c_number}x[{SF_7} * 100|%|]{/c} increased damage to {c_important}Vulnerable{/c} enemies.

{c_important}Vine Creeper's{/c} poison duration is increased by {c_number}[{SF_5} * 100|%|]{/c}.`,
		id: 66,
		maxPoints: 3,
		x: 548.33,
		y: 313.155,
	},
	["Vine Creeper"]: {
		connections: [ "Companion", "Enhanced Vine Creeper" ],
		description: `{c_label}Cooldown: {/c}{c_resource}[{Cooldown Time}|1|]{/c}
{if:ADVANCED_TOOLTIP}{c_label}Lucky Hit Chance: {/c}{c_resource}{Combat_Effect_Chance_Script_Formula_Override:19}%{/c}
{/if}{c_label}Passive:{/c} A vine creeper periodically emerges from the ground every {c_number}{SF_0}{/c} seconds and poisons an enemy in the area for {c_number}{dot:TOOLTIP_PET_POISON}{/c} damage over {c_number}{buffduration:TOOLTIP_PET_POISON}{/c} seconds.

{c_label}Active:{/c} Vines strangle all surrounding enemies, Immobilizing them for {c_number}{buffduration:BUFF_STRANGLE}{/c} seconds and poisoning them for {c_number}{dot:ACTIVE_POISON}{/c} damage over {c_number}{buffduration:ACTIVE_POISON}{/c} seconds.`,
		id: 67,
		maxPoints: 5,
		x: -0.085,
		y: -233.405,
	},
	["Enhanced Vine Creeper"]: {
		connections: [ "Vine Creeper", "Ferocious Vine Creeper", "Brutal Vine Creeper" ],
		description: `{c_important}Vine Creeper's{/c} Immobilize duration is increased by {c_number}{SF_13}{/c} second.`,
		id: 68,
		maxPoints: 1,
		x: -1.25,
		y: -382.875,
	},
	["Ferocious Vine Creeper"]: {
		connections: [ "Enhanced Vine Creeper" ],
		description: `{c_important}Vine Creeper's{/c} active poison duration is increased by {c_number}{SF_14}{/c} seconds.`,
		id: 69,
		maxPoints: 1,
		x: -139.98,
		y: -563.965,
	},
	["Brutal Vine Creeper"]: {
		connections: [ "Enhanced Vine Creeper" ],
		description: `Your chance to Critically Strike is increased by {c_number}+[{SF_16}*100|%|]{/c} against enemies strangled by {c_important}Vine Creeper{/c}.`,
		id: 70,
		maxPoints: 1,
		x: 116.36,
		y: -566.07,
	},
	["Wolves"]: {
		connections: [ "Companion", "Enhanced Wolf Pack" ],
		description: `{c_label}Cooldown: {/c}{c_resource}[{Cooldown Time}|1|]{/c}
{if:ADVANCED_TOOLTIP}{c_label}Lucky Hit Chance: {/c}{c_resource}{Combat_Effect_Chance_Script_Formula_Override:16}%{/c}
{/if}{c_label}Passive:{/c} Summon {c_number}{SF_0}{/c} wolf companions that bite enemies for {c_number}{payload:TOOLTIP_DAMAGE}{/c} damage.

{c_label}Active{/c}: Direct the wolves to focus an enemy, leaping to them and striking for {c_number}{payload:TOOLTIP_DAMAGE_LEAP}{/c} damage.`,
		id: 71,
		maxPoints: 5,
		x: 438.495,
		y: 1.855,
	},
	["Enhanced Wolf Pack"]: {
		connections: [ "Wolves", "Ferocious Wolf Pack", "Brutal Wolf Pack" ],
		description: `{c_important}Wolves{/c} deal {c_number}x[{SF_13}*100|%|]{/c} increased damage to Immobilized, Stunned, Slowed, or poisoned enemies.`,
		id: 72,
		maxPoints: 1,
		x: 742.125,
		y: 2.585,
	},
	["Ferocious Wolf Pack"]: {
		connections: [ "Enhanced Wolf Pack" ],
		description: `You deal {c_number}x[{SF_12}*100|%|]{/c} increased damage to your {c_important}Wolves'{/c} focus target.`,
		id: 73,
		maxPoints: 1,
		x: 1030.955,
		y: -73.505,
	},
	["Brutal Wolf Pack"]: {
		connections: [ "Enhanced Wolf Pack" ],
		description: `Your {c_important}Wolves'{/c} first attack against a focused enemy makes them {c_important}Vulnerable{/c} for {c_number}{SF_11}{/c} seconds.`,
		id: 74,
		maxPoints: 1,
		x: 1032.485,
		y: 73.84,
	},
	["Nature's Reach"]: {
		connections: [ "Companion" ],
		description: `Deal {c_number}x[{SF_0} * 100|%|]{/c} increased damage to Distant enemies.  Double this bonus if they are also Slowed, Stunned, Immobilized, or Knocked Back.`,
		id: 75,
		maxPoints: 3,
		x: 542.1,
		y: -263.42,
	},
	["Clarity"]: {
		connections: [ "Companion" ],
		description: `Gain {c_number}{SF_0}{/c} Spirit when transforming into Human form.`,
		id: 76,
		maxPoints: 3,
		x: -535.33,
		y: -264.37,
	},
};

druid["Wrath"] = {
	["Elemental Exposure"]: {
		connections: [ "Charged Atmosphere", "Wrath", "Endless Tempest" ],
		description: `{c_label}Lucky Hit:{/c} Your {c_important}Storm{/c} skills have up to a {c_number}{SF_0}%{/c} chance to make enemies {c_important}Vulnerable{/c} for {c_number}[{SF_1}|1|]{/c} seconds.`,
		id: 80,
		maxPoints: 3,
		x: -283.195,
		y: -294.575,
	},
	["Charged Atmosphere"]: {
		connections: [ "Elemental Exposure", "Electric Shock", "Bad Omen" ],
		description: `Every {c_number}{SF_0}{/c} seconds, a {c_important}Lightning Strike{/c} hits a Nearby enemy dealing {c_number}{payload:DAMAGE_TOOLTIP}{/c} damage.`,
		id: 81,
		maxPoints: 3,
		x: -649.87,
		y: -377.85,
	},
	["Electric Shock"]: {
		connections: [ "Charged Atmosphere", "Bad Omen" ],
		description: `{c_label}Lucky Hit:{/c} Dealing Lightning damage to enemies has a {c_number}{SF_1}%{/c} chance to Immobilize them for {c_number}{buffduration:BUFF_IMMOBILIZE}{/c} seconds.

If the target is already Immobilized, the Lightning damage dealt to them is increased by {c_number}x[{SF_3} * 100|%|]{/c} instead.`,
		id: 82,
		maxPoints: 3,
		x: -979.275,
		y: -645.395,
	},
	["Bad Omen"]: {
		connections: [ "Charged Atmosphere", "Electric Shock", "Endless Tempest" ],
		description: `{c_label}Lucky Hit:{/c} Up to a {c_number}{SF_0}%{/c} chance when dealing damage to a Vulnerable, Immobilized or Stunned enemy that a {c_important}Lightning Strike{/c} also hits dealing {c_number}{payload:DAMAGE_TOOLTIP_ONLY}{/c} damage.`,
		id: 83,
		maxPoints: 3,
		x: -504.05,
		y: -698.569,
	},
	["Endless Tempest"]: {
		connections: [ "Elemental Exposure", "Bad Omen" ],
		description: `Increase the duration of {c_important}Hurricane{/c} and {c_important}Cataclysm{/c} by {c_number}[{SF_1} * 100|%|]{/c}.`,
		id: 84,
		maxPoints: 3,
		x: -257.265,
		y: -509.659,
	},
	["Boulder"]: {
		connections: [ "Wrath", "Enhanced Boulder" ],
		description: `{c_label}Cooldown: {/c}{c_resource}[{Cooldown Time}|1|]{/c}
{if:ADVANCED_TOOLTIP}{c_label}Lucky Hit Chance: {/c}{c_resource}{Combat Effect Chance}%{/c}
{/if}Unearth a large rolling boulder that Knocks Back and crushes enemies, dealing {c_number}{payload:IMPACT}{/c} damage with each hit.`,
		id: 85,
		maxPoints: 5,
		x: -415.96,
		y: -81.885,
	},
	["Enhanced Boulder"]: {
		connections: [ "Boulder", "Natural Boulder", "Savage Boulder" ],
		description: `Enemies are slowed by {c_number}[{SF_22}*100|%|]{/c} for {c_number}{buffduration:BUFF_MOD_SLOW}{/c} seconds after being hit with {c_important}Boulder{/c}.`,
		id: 86,
		maxPoints: 1,
		x: -787.38,
		y: -150.56,
	},
	["Natural Boulder"]: {
		connections: [ "Enhanced Boulder" ],
		description: `Your {c_important}Basic{/c} skills grant {c_number}[{SF_18}*100|%|]{/c} bonus Spirit while damaging enemies who are Knocked Back by {c_important}Boulder{/c}.`,
		id: 87,
		maxPoints: 1,
		x: -1043.1,
		y: -302.409,
	},
	["Savage Boulder"]: {
		connections: [ "Enhanced Boulder" ],
		description: `The first enemy damaged by {c_important}Boulder{/c} is made {c_important}Vulnerable{/c} for {c_number}{SF_19}{/c} seconds.`,
		id: 88,
		maxPoints: 1,
		x: -1165.425,
		y: -135.355,
	},
	["Trample"]: {
		connections: [ "Wrath", "Enhanced Trample" ],
		description: `{if:Mod.Spirit}{c_label}Generates Spirit:{/c} {c_resource}{SF_11}{/c}
{/if}{c_label}Cooldown: {/c}{c_resource}[{Cooldown Time}|1|]{/c}
{if:ADVANCED_TOOLTIP}{c_label}Lucky Hit Chance: {/c}{c_resource}{Combat Effect Chance}%{/c}
{/if}Shapeshift into a Werebear and charge forward, dealing {c_number}{payload:PAYLOAD_DAMAGE}{/c} damage and Knocking Back enemies.

Enemies who are Knocked Back into terrain take an additional {c_number}{payload:TERRAIN_IMPACT_DAMAGE}{/c} damage and are stunned for {c_number}{buffduration:TERRAIN_IMPACT}{/c} seconds.`,
		id: 89,
		maxPoints: 5,
		x: -283.24,
		y: 180.74,
	},
	["Enhanced Trample"]: {
		connections: [ "Trample", "Natural Trample", "Savage Trample" ],
		description: `You are {c_important}Unstoppable{/c} during {c_important}Trample{/c}.`,
		id: 90,
		maxPoints: 1,
		x: -483,
		y: 312.295,
	},
	["Natural Trample"]: {
		connections: [ "Enhanced Trample" ],
		description: `Casting {c_important}Trample{/c} grants {c_number}[{SF_10}*100|%|]{/c} Base Life {c_number}({fortified:MOD_FORTIFY}){/c} as {c_important}Fortify{/c}.`,
		id: 91,
		maxPoints: 1,
		x: -782.485,
		y: 380.895,
	},
	["Savage Trample"]: {
		connections: [ "Enhanced Trample" ],
		description: `Casting {c_important}Trample{/c} grants {c_number}{SF_11}{/c} Spirit.`,
		id: 92,
		maxPoints: 1,
		x: -557.04,
		y: 471.43,
	},
	["Crushing Earth"]: {
		connections: [ "Wrath", "Safeguard", "Stone Guard" ],
		description: `{c_important}Earth{/c} skills deal {c_number}x[{SF_1} * 100|%|]{/c} increased damage to Slowed, Stunned, Immobilized or Knocked Back enemies.`,
		id: 93,
		maxPoints: 3,
		x: -703.3,
		y: 97.49,
	},
	["Safeguard"]: {
		connections: [ "Crushing Earth" ],
		description: `Critical Strikes with {c_important}Earth{/c} skills {c_important}Fortify{/c} you for {c_number}[{SF_0}*100|%|]{/c} Base Life {c_number}({fortified:PAYLOAD_FORTIFY}){/c}.`,
		id: 94,
		maxPoints: 3,
		x: -1037.34,
		y: 275.51,
	},
	["Stone Guard"]: {
		connections: [ "Crushing Earth" ],
		description: `While {c_important}Fortified{/c} over [{SF_1}*100|%|] of your Maximum Life, your {c_important}Earth{/c} skills deal  {c_number}x[{SF_0} * 100|%|]{/c} increased damage.`,
		id: 95,
		maxPoints: 3,
		x: -1129.275,
		y: 79.23,
	},
	["Hurricane"]: {
		connections: [ "Wrath", "Enhanced Hurricane" ],
		description: `{c_label}Cooldown: {/c}{c_resource}[{Cooldown Time}|1|]{/c}
{if:ADVANCED_TOOLTIP}{c_label}Lucky Hit Chance: {/c}{c_resource}{Combat_Effect_Chance_Script_Formula_Override:18}%{/c}
{/if}Form a hurricane around you that deals {c_number}{payload:TOOLTIP_DAMAGE}{/c} damage to surrounding enemies over {c_number}{SF_4}{/c} seconds.`,
		id: 99,
		maxPoints: 5,
		x: 113.005,
		y: -268.023,
	},
	["Enhanced Hurricane"]: {
		connections: [ "Hurricane", "Natural Hurricane", "Savage Hurricane" ],
		description: `Enemies who are damaged by {c_important}Hurricane{/c} are Slowed by {c_number}[{SF_12}*100|%|]{/c} for {c_number}{buffduration:MOD_SLOW}{/c} seconds.`,
		id: 100,
		maxPoints: 1,
		x: 205.48,
		y: -454.768,
	},
	["Natural Hurricane"]: {
		connections: [ "Enhanced Hurricane" ],
		description: `{c_important}Hurricane{/c} has a {c_number}[{SF_9} * 100|%|]{/c} chance to make enemies {c_important}Vulnerable{/c} for {c_number}{SF_10}{/c} seconds.`,
		id: 101,
		maxPoints: 1,
		x: 123.565,
		y: -639.983,
	},
	["Savage Hurricane"]: {
		connections: [ "Enhanced Hurricane" ],
		description: `Enemies who are in {c_important}Hurricane's{/c} radius have their damage reduced by {c_number}[{SF_11}*100|%|]{/c}.`,
		id: 102,
		maxPoints: 1,
		x: 462.075,
		y: -597.113,
	},
	["Rabies"]: {
		connections: [ "Wrath", "Enhanced Rabies" ],
		description: `{c_label}Cooldown:{/c_label} {c_resource}[{Cooldown Time}|1|]{/c_resource}
{if:ADVANCED_TOOLTIP}{c_label}Lucky Hit Chance: {/c}{c_resource}{Combat_Effect_Chance_Script_Formula_Override:18}%{/c}
{/if}Shapeshift into a Werewolf and perform an infectious bite on the target dealing {c_number}{PAYLOAD:INITIAL_DAMAGE}{/c} damage, and an additional {c_number}{dot:BUFF_OHNORABIES}{/c} damage over {c_number}{buffduration:BUFF_OHNORABIES}{/c} seconds. 

Infected enemies spread {c_important}Rabies{/c} to other surrounding targets.`,
		id: 103,
		maxPoints: 5,
		x: 202.015,
		y: 186.695,
	},
	["Enhanced Rabies"]: {
		connections: [ "Rabies", "Natural Rabies", "Savage Rabies" ],
		description: `Once {c_important}Rabies{/c} infects {c_number}{SF_14}{/c} targets, it deals {c_number}x[{SF_15}*100|%|]{/c} increased Poison damage against all targets.`,
		id: 104,
		maxPoints: 1,
		x: 371.195,
		y: 333.44,
	},
	["Natural Rabies"]: {
		connections: [ "Enhanced Rabies" ],
		description: `The initial bite of {c_important}Rabies{/c} heals you for {c_number}[{SF_3}*100|%|]{/c} of your maximum Life.`,
		id: 105,
		maxPoints: 1,
		x: 392.865,
		y: 515.555,
	},
	["Savage Rabies"]: {
		connections: [ "Enhanced Rabies" ],
		description: `The initial bite of {c_important}Rabies{/c} deals {c_number}x[{SF_4}*100|%|]{/c} increased damage against enemies who are Immobilized or Stunned.`,
		id: 106,
		maxPoints: 1,
		x: 690.495,
		y: 442.976,
	},
	["Mending"]: {
		connections: [ "Wrath", "Provocation" ],
		description: `While in Werebear form, you receive {c_number}[{SF_0} * 100|%|]{/c} additional healing from all sources.`,
		id: 97,
		maxPoints: 3,
		x: -41.03,
		y: 309.375,
	},
	["Provocation"]: {
		connections: [ "Mending" ],
		description: `Your next {c_important}Werebear{/c} skill every {c_number}{SF_0}{/c} seconds is guaranteed to {c_important}Overpower{/c}.`,
		id: 98,
		maxPoints: 3,
		x: -99.02,
		y: 513.075,
	},
	["Toxic Claws"]: {
		connections: [ "Wrath", "Neurotoxin" ],
		description: `Critical strikes with {c_important}Werewolf{/c} skills deal {c_number}[{SF_0} * 100|%|]{/c} of their base damage as Poison damage over {buffduration:DEBUFF_POISON} seconds.`,
		id: 78,
		maxPoints: 3,
		x: 465.52,
		y: 84.516,
	},
	["Neurotoxin"]: {
		connections: [ "Toxic Claws" ],
		description: `Poisoned enemies are slowed by {c_number}[{SF_0}*100|%|]{/c}.`,
		id: 79,
		maxPoints: 3,
		x: 814.438,
		y: 147.582,
	},
};

druid["Ultimate"] = {
	["Grizzly Rage"]: {
		connections: [ "Ultimate", "Prime Grizzly Rage" ],
		description: `{c_label}Cooldown: {/c}{c_resource}[{Cooldown Time}|1|]{/c}
Shapeshift into {if:Mod.Upgrade1}an {c_important}Unstoppable{/c}{else}a{/if} Dire Werebear for {c_number}{buffduration:BUFF_MAIN_BEAR}{/c} seconds gaining {c_number}x[{SF_10}*100|%|]{/c} bonus damage and {c_number}x[{SF_11}*100|%|]{/c} damage reduction{/if}. Damage bonus is increased by {c_number}+[{SF_15}*100|%|]{/c} each second while in this form.

Kills extend the duration by {c_number}{SF_16}{/c} second up to {c_number}+{SF_17}{/c} additional seconds.{if:Mod.DELETEME}

Casting {c_important}Grizzly Rage{/c} causes enemies in the area to take {c_number}{payload:TOOLTIP_MOD_CAST_IMPACT}{/c} damage and be Slowed by {c_number}[{SF_8}*100|%|]{/c} for {c_number}{buffduration:CAST_SLOW}{/c} seconds.{/if}`,
		id: 107,
		maxPoints: 5,
		x: 430.055,
		y: 63.605,
	},
	["Prime Grizzly Rage"]: {
		connections: [ "Supreme Grizzly Rage", "Grizzly Rage" ],
		description: `You are {c_important}Unstoppable{/c} while {c_important}Grizzly Rage{/c} is active.`,
		id: 108,
		maxPoints: 1,
		x: 819.815,
		y: 96.38,
	},
	["Supreme Grizzly Rage"]: {
		connections: [ "Prime Grizzly Rage" ],
		description: `Gain {c_number}[{SF_2}*100|%|]{/c} Base Life {c_number}({fortified:MOD_2_FORTIFY_PER_SECOND}){/c} as {c_important}Fortify{/c} per second while {c_important}Grizzly Rage{/c} is active.`,
		id: 109,
		maxPoints: 1,
		x: 878.345,
		y: 266.63,
	},
	["Petrify"]: {
		connections: [ "Ultimate", "Prime Petrify" ],
		description: `{c_label}Cooldown: {/c}{c_resource}[{Cooldown Time}|1|]{/c}
Petrify all Nearby enemies, Stunning them for {c_number}{buffduration:BUFF_PETRIFIED}{/c} seconds. You deal {c_number}x[{SF_2}*100|%|]{/c} increased Critical Strike Damage to Petrified enemies.`,
		id: 110,
		maxPoints: 5,
		x: 209.315,
		y: -196.232,
	},
	["Prime Petrify"]: {
		connections: [ "Supreme Petrify", "Petrify" ],
		description: `{c_important}Petrify's{/c} duration is increased by {c_number}{SF_6}{/c} second.`,
		id: 111,
		maxPoints: 1,
		x: 368.4,
		y: -377.659,
	},
	["Supreme Petrify"]: {
		connections: [ "Prime Petrify" ],
		description: `Killing a {c_important}Petrified{/c} enemy grants {c_number}{SF_5}{/c} Spirit.`,
		id: 112,
		maxPoints: 1,
		x: 216,
		y: -520.98,
	},
	["Defensive Posture"]: {
		connections: [ "Ultimate", "Thick Hide", "Nature's Resolve" ],
		description: `Increases the amount of {c_important}Fortify{/c} you gain from all sources by {c_number}[{SF_0} * 100|%|]{/c}.`,
		id: 113,
		maxPoints: 3,
		x: 635.525,
		y: -116.355,
	},
	["Thick Hide"]: {
		connections: [ "Unrestrained", "Defensive Posture" ],
		description: `Whenever you are Stunned, Immobilized, or Knocked Down, {c_important}Fortify{/c} for {c_number}[{SF_0}*100|%|]{/c} Base Life {c_number}({fortified:PAYLOAD_FORTIFY}){/c}.`,
		id: 114,
		maxPoints: 3,
		x: 765.5,
		y: -322.625,
	},
	["Unrestrained"]: {
		connections: [ "Thick Hide", "Nature's Resolve" ],
		description: `Reduce the duration of control impairing effects by {c_number}[{SF_0} * 100|%|]{/c}.  Triple this effect while you are {c_important}Fortified{/c} for over {c_number}[{SF_2}*100|%|]{/c} of your maximum Life.`,
		id: 115,
		maxPoints: 3,
		x: 1124.05,
		y: -229.587,
	},
	["Nature's Resolve"]: {
		connections: [ "Unrestrained", "Defensive Posture" ],
		description: `{c_number}[{SF_0}*100|%|]{/c} chance when struck to {c_important}Fortify{/c} you for {c_number}[{SF_1}*100|%|]{/c} Base Life {c_number}({Fortified:FORTIFY_HEALTH}){/c}.`,
		id: 116,
		maxPoints: 3,
		x: 1015.865,
		y: -13.34,
	},
	["Quickshift"]: {
		connections: [ "Ultimate", "Natural Fortitude", "Heightened Senses" ],
		description: `When a {c_important}Shapeshifting{/c} skill transforms you into a different form, it deals {c_number}x[{SF_1} * 100|%|]{/c} increased damage.`,
		id: 117,
		maxPoints: 3,
		x: 344.6,
		y: 287.59,
	},
	["Natural Fortitude"]: {
		connections: [ "Quickshift" ],
		description: `Shapeshifting {c_important}Fortifies{/c} you for {c_number}[{SF_1}*100|%|]{/c} Base Life {c_number}({fortified:FORTIFY_CASTER}){/c}.`,
		id: 118,
		maxPoints: 3,
		x: 340.775,
		y: 457.657,
	},
	["Heightened Senses"]: {
		connections: [ "Quickshift" ],
		description: `Upon shapeshifting into a Werewolf or Werebear, gain {c_number}[{SF_0} * 100|%|]{/c} damage reduction against Elites for {c_number}{buffduration:BUFF_DAMAGE_REDUCTION}{/c} seconds.`,
		id: 119,
		maxPoints: 3,
		x: 649.085,
		y: 366.088,
	},
	["Lacerate"]: {
		connections: [ "Ultimate", "Prime Lacerate" ],
		description: `{c_label}Cooldown:{/c} {c_resource}[{Cooldown Time}|1|]{/c}
{if:ADVANCED_TOOLTIP}{c_label}Lucky Hit Chance: {/c}{c_resource}[{Combat Effect Chance}|%|]{/c}
{/if}Shapeshift into a Werewolf, become {c_important}Immune{/c} and quickly dash {c_number}{SF_6}{/c} times between enemies in the area dealing up to {c_number}{PAYLOAD:TOOLTIP_DAMAGE}{/c} damage.`,
		id: 120,
		maxPoints: 5,
		x: -5.075,
		y: 234.915,
	},
	["Prime Lacerate"]: {
		connections: [ "Supreme Lacerate", "Lacerate" ],
		description: `Each time {c_important}Lacerate{/c} deals a Critical Strike, heal for {c_number}[{SF_14}*100|%|]{/c} of your maximum Life.`,
		id: 121,
		maxPoints: 1,
		x: -192.17,
		y: 412.833,
	},
	["Supreme Lacerate"]: {
		connections: [ "Prime Lacerate" ],
		description: `{c_important}Lacerate's{/c} final strike deals {c_number}x[{SF_15}*100|%|]{/c} increased damage.`,
		id: 122,
		maxPoints: 1,
		x: 30.06,
		y: 540.783,
	},
	["Cataclysm"]: {
		connections: [ "Ultimate", "Prime Cataclysm" ],
		description: `{c_label}Cooldown: {/c}{c_resource}[{Cooldown Time}|1|]{/c}
{if:ADVANCED_TOOLTIP}{c_label}Lucky Hit Chance: {/c}{c_resource}{Combat_Effect_Chance_Script_Formula_Override:28}%{/c}
{/if}A massive storm follows you for {c_number}{buffduration:TORNADO_SPAWNING}{/c} seconds. Tornadoes knock back enemies, and lightning strikes wildly dealing {c_number}{payload:LIGHTNING_STRIKE}{/c} damage.`,
		id: 123,
		maxPoints: 5,
		x: -397.415,
		y: -109.56,
	},
	["Prime Cataclysm"]: {
		connections: [ "Supreme Cataclysm", "Cataclysm" ],
		description: `{c_important}Cataclysm's{/c} duration is increased by {c_number}{SF_23}{/c} seconds.`,
		id: 124,
		maxPoints: 1,
		x: -793.645,
		y: -256.893,
	},
	["Supreme Cataclysm"]: {
		connections: [ "Prime Cataclysm" ],
		description: `Lightning strikes from {c_important}Cataclysm{/c} make enemies {c_important}Vulnerable{/c} for {c_number}2{/c} seconds.`,
		id: 125,
		maxPoints: 1,
		x: -819.245,
		y: -418.923,
	},
	["Defiance"]: {
		connections: [ "Ultimate", "Circle of Life", "Natural Disaster" ],
		description: `{c_important}Nature Magic{/c} skills deal {c_number}x[{SF_0}*100|%|]{/c} increased damage to Elites.`,
		id: 126,
		maxPoints: 3,
		x: -184.37,
		y: -290.31,
	},
	["Circle of Life"]: {
		connections: [ "Defiance", "Resonance" ],
		description: `{c_important}Nature Magic{/c} skills that consume Spirit restore {c_number}[{SF_1} * 100|%|]{/c} of your maximum Life.`,
		id: 127,
		maxPoints: 3,
		x: -505.765,
		y: -446.596,
	},
	["Resonance"]: {
		connections: [ "Natural Disaster", "Circle of Life" ],
		description: `{c_important}Nature Magic{/c} skills deal {c_number}x[{SF_1} * 100|%|]{/c} increased damage. Triple this bonus if an {c_important}Earth{/c} skill is the next skill cast after a {c_important}Storm{/c} skill, or a  {c_important}Storm{/c} skill is the next skill cast after an  {c_important}Earth{/c} skill.`,
		id: 128,
		maxPoints: 3,
		x: -392.905,
		y: -653.792,
	},
	["Natural Disaster"]: {
		connections: [ "Defiance", "Resonance" ],
		description: `Your {c_important}Earth{/c} skills deal {c_number}x[{SF_1}*100|%|]{/c} increased damage to {c_important}Vulnerable{/c} enemies.

Your {c_important}Storm{/c} skills deal {c_number}x[{SF_4}*100|%|]{/c} increased damage to enemies that are Stunned, Immobilized, or Knocked Back.`,
		id: 129,
		maxPoints: 3,
		x: -103.945,
		y: -508.076,
	},
};

druid["Capstone"] = {
	["Nature's Fury"]: {
		connections: [ "Capstone" ],
		description: `Casting an {c_important}Earth{/c} skill has a {c_number}{SF_0}%{/c} chance to trigger a free {c_important}Storm{/c} skill of the same category. 

In addition, casting a {c_important}Storm{/c} skill has a {c_number}{SF_0}%{/c} chance to trigger a free {c_important}Earth{/c} skill of the same category.`,
		id: 130,
		maxPoints: 1,
		x: 559.134,
		y: 367.52,
	},
	["Earthen Might"]: {
		connections: [ "Capstone" ],
		description: `{c_label}Lucky Hit:{/c} Damaging enemies with {c_important}Earth{/c} skills has up to a {c_number}{SF_0}%{/c} chance to grant Earthen Might.

This chance is increased by {c_number}{SF_3}%{/c} for Critical Strikes, and is further increased by {c_number}{SF_4}%{/c} if the target is Stunned, Immobilized, or Knocked Back. 

Earthen Might restores all of your Spirit & grants you {c_number}[{SF_1} * 100|%|]{/c} Critical Strike Chance for {c_number}{buffduration:CRIT_CHANCE_BONUS}{/c} seconds.`,
		id: 131,
		maxPoints: 1,
		x: 186.284,
		y: 368.005,
	},
	["Lupine Ferocity"]: {
		connections: [ "Capstone" ],
		description: `Every 6th {c_important}Werewolf{/c} skill hit Critically Strikes and deals {c_number}x[{SF_0}*100|%|]{/c} increased damage.`,
		id: 132,
		maxPoints: 1,
		x: -191.047,
		y: 366.455,
	},
	["Bestial Rampage"]: {
		connections: [ "Capstone" ],
		description: `After being a Werewolf for {c_number}{buffduration:TIMER_WOLF}{/c} seconds, gain {c_number}[{SF_1} * 100|%|]{/c} Attack Speed for {c_number}{buffduration:BUFF_ATTACK_SPEED}{/c} seconds. 

After being a Werebear for {c_number}{buffduration:TIMER_BEAR}{/c} seconds, deal {c_number}x[{SF_2} * 100|%|]{/c} increased damage for {c_number}{buffduration:BUFF_ATTACK_DAMAGE}{/c} seconds.`,
		id: 133,
		maxPoints: 1,
		x: -567.981,
		y: 365.85,
	},
	["Perfect Storm"]: {
		connections: [ "Capstone" ],
		description: `Your {c_important}Storm{/c} skills grant {c_number}{SF_4}{/c} Spirit and deal {c_number}x[{SF_1} * 100|%|]{/c} increased damage when damaging a {c_important}Vulnerable{/c}, immobilized or slowed enemy.`,
		id: 134,
		maxPoints: 1,
		x: 932.943,
		y: 367.865,
	},
	["Ursine Strength"]: {
		connections: [ "Capstone" ],
		description: `Gain {c_number}[{SF_0} * 100|%|]{/c} additional maximum Life while in Werebear form and for {c_number}{buffduration:BONUS_MAX_HEALTH}{/c} seconds after leaving Werebear form.

While {c_important}Healthy{/c}, deal {c_number}x[{SF_1} * 100|%|]{/c} increased damage.`,
		id: 135,
		maxPoints: 1,
		x: -943.646,
		y: 367.035,
	},
};

export { druid };