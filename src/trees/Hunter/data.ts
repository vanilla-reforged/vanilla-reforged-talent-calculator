import { TalentData } from "../../TalentContext";
import { talentText, requireAll } from "../../utils";

const backgrounds = requireAll(
  require.context("../../assets/tree-backgrounds/hunter"),
);
const icons = requireAll(require.context("../../assets/icons/hunter"));

export const data: TalentData = {
  "Beast Mastery": {
    name: "Beast Mastery",
    background: backgrounds["beast-mastery"],
    icon: icons["ability_hunter_beasttaming"],
    talents: {
      "Thick Hide": {
        name: "Thick Hide",
        pos: "a1",
        icon: icons["inv_misc_pelt_bear_03"],
        maxRank: 3,
        reqPoints: 0,
        description: talentText`Increases the Armor rating of your pets by ${[
          6,
          12,
          18,
        ]}%.`,
      },
      "Predatory Precision": {
        name: "Predatory Precision",
        pos: "a2",
        icon: icons["inv_misc_monsterclaw_04"],
        maxRank: 5,
        reqPoints: 0,
        description: talentText`Improves your pet's chance to hit by ${[
          2,
          4,
          6,
          8,
          10,
        ]}%.`,
      },
      "Predatory Ferocity": {
        name: "Predatory Ferocity",
        pos: "a3",
        icon: icons["ability_druid_bash"],
        maxRank: 5,
        reqPoints: 0,
        description: talentText`Improves your pet's chance to get a critical strike by ${[
          3,
          6,
          9,
          12,
          15,
        ]}%.`,
      },
      "Pathfinding": {
        name: "Pathfinding",
        pos: "b1",
        icon: icons["ability_mount_jungletiger"],
        maxRank: 3,
        reqPoints: 5,
        description: talentText`Increases the speed bonus of your Aspect of the Cheetah and Aspect of the Pack by ${[
          2,
          4,
          6,
        ]}%.`,
      },
      "Improved Aspect of the Monkey": {
        name: "Improved Aspect of the Monkey",
        pos: "b2",
        icon: icons["ability_hunter_aspectofthemonkey"],
        maxRank: 5,
        reqPoints: 5,
        description: talentText`Increases the Dodge bonus of your Aspect of the Monkey by ${[
          2,
          4,
          6,
          8,
          10,
        ]}%.`,
      },
      "Endurance Training": {
        name: "Endurance Training",
        pos: "b3",
        icon: icons["spell_nature_reincarnation"],
        maxRank: 5,
        reqPoints: 5,
        description: talentText`Increases the maximum Health of your pet by ${[
          3,
          6,
          9,
          12,
          15,
        ]}%.`,
      },
      "Soulmate": {
        name: "Soulmate",
        pos: "c1",
        icon: icons["spell_nature_crystalball"],
        maxRank: 1,
        reqPoints: 10,
        description: talentText`Your next Revive Pet spell has its casting time reduced by 4 sec and its Mana cost reduced by 50%.  15 min cooldown`,
      },
      "Improved Revive Pet": {
        name: "Improved Revive Pet",
        pos: "c2",
        icon: icons["ability_hunter_beastsoothe"],
        maxRank: 3,
        reqPoints: 10,
        prereq: "Soulmate",
        arrows: [{ dir: "right", from: "c1", to: "c2" }],
        description: talentText`Reduces the casting time of your Revive Pet spell by ${[
          2,
          4,
          6,
        ]} sec, the Mana cost by ${[
          10,
          20,
          30,
        ]}% and increases the Health your pet returns with by an additional ${[
          10,
          20,
          30,
        ]}%.`,
      },
      "Improved Aspects": {
        name: "Improved Aspects",
        pos: "c3",
        icon: icons["spell_nature_wispsplode"],
        maxRank: 3,
        reqPoints: 10,
        description: talentText`Increases the effect of your Aspects by ${[
          10,
          20,
          30,
        ]}%.`,
      },
      "Bestial Swiftness": {
        name: "Bestial Swiftness",
        pos: "c4",
        icon: icons["ability_druid_dash"],
        maxRank: 3,
        reqPoints: 10,
        description: talentText`Increases the outdoor movement speed of your pet by ${[
          15,
          30,
          45,
        ]}%.`,
      },
      "Spirit Bond": {
        name: "Spirit Bond",
        pos: "d2",
        icon: icons["ability_druid_demoralizingroar"],
        maxRank: 2,
        reqPoints: 15,
        description: talentText`While your pet is active, you and your pet will regenerate ${[
          3,
          6,
        ]}% of total health every 10 sec.`,
      },
      "Frenzy": {
        name: "Frenzy",
        pos: "d3",
        icon: icons["inv_misc_monsterclaw_03"],
        maxRank: 3,
        reqPoints: 15,
        description: talentText`Gives your pet a ${[
          33,
          66,
          100,
        ]}% chance to gain a 30% attack speed increase for 8 sec after dealing a critical strike.`,
      },
      "Intimidation": {
        name: "Intimidation",
        pos: "e2",
        icon: icons["ability_devour"],
        maxRank: 1,
        reqPoints: 20,
        description: talentText`Command your pet to intimidate the target on the next successful melee attack, causing a high amount of threat and stunning the target for 3 sec.  25 sec cooldown`,
      },
      "Bestial Discipline": {
        name: "Bestial Discipline",
        pos: "e3",
        icon: icons["spell_nature_abolishmagic"],
        maxRank: 3,
        reqPoints: 20,
        description: talentText`Increase the Focus regeneration of your pet by ${[
          15,
          30,
          45,
        ]}%.`,
      },
      "Unleashed Fury": {
        name: "Unleashed Fury",
        pos: "f3",
        icon: icons["ability_bullrush"],
        maxRank: 5,
        reqPoints: 25,
        description: talentText`Increases the damage done by your pets by ${[
          6,
          12,
          18,
          24,
          30,
        ]}%.`,
      },
      "Bestial Wrath": {
        name: "Bestial Wrath",
        pos: "g2",
        icon: icons["ability_druid_ferociousbite"],
        maxRank: 1,
        reqPoints: 30,
        prereq: "Intimidation",
        arrows: [{ dir: "down", from: "e2", to: "g2" }],
        description: talentText`Send your pet into a rage causing 50% additional damage for 18 sec.  While enraged, the beast does not feel pity or remorse or fear and it cannot be stopped unless killed.  2 min cooldown`,
      },
    },
  },
  Marksmanship: {
    name: "Marksmanship",
    background: backgrounds["marksmanship"],
    icon: icons["ability_marksmanship"],
    talents: {
      "Improved Concussive Shot": {
        name: "Improved Concussive Shot",
        pos: "a1",
        icon: icons["spell_frost_stun"],
        maxRank: 5,
        reqPoints: 0,
        description: talentText`Gives your Concussive Shot a ${[
          4,
          8,
          12,
          16,
          20,
        ]}% chance to stun the target for 2 sec.`,
      },
      "Precision": {
        name: "Precision",
        pos: "a2",
        icon: icons["ability_marksmanship"],
        maxRank: 5,
        reqPoints: 0,
        description: talentText`Improves your chance to hit by ${[
          1,
          2,
          3,
          4,
          5,
        ]}%.`,
      },
      "Lethal Shots": {
        name: "Lethal Shots",
        pos: "a3",
        icon: icons["ability_searingarrow"],
        maxRank: 5,
        reqPoints: 0,
        description: talentText`Increases your critical strike chance with ranged weapons by ${[
          1,
          2,
          3,
          4,
          5,
        ]}%.`,
      },
      "Hawk Eye": {
        name: "Hawk Eye",
        pos: "b1",
        icon: icons["ability_townwatch"],
        maxRank: 2,
        reqPoints: 5,
        description: talentText`Increases the range of your ranged weapons by ${[
          10,
          20,
        ]}%.`,
      },
      "Improved Quick Shot": {
        name: "Improved Quick Shot",
        pos: "b2",
        icon: icons["ability_impalingbolt"],
        maxRank: 5,
        reqPoints: 5,
        description: talentText`Reduces the cooldown of your Quick Shot ability by ${[
          0.4,
          0.8,
          1.2,
          1.6,
          2,
        ]} sec.`,
      },
      "Improved Aspect of the Hawk": {
        name: "Improved Aspect of the Hawk",
        pos: "b4",
        icon: icons["spell_nature_ravenform"],
        maxRank: 5,
        reqPoints: 5,
        description: talentText`While Aspect of the Hawk is active, all normal melee and ranged attacks have a ${[
          1,
          2,
          3,
          4,
          5,
        ]}% chance of increasing melee and ranged attack speed by 30% for 12 sec.`,
      },
      "Trueshot Aura": {
        name: "Trueshot Aura",
        pos: "c1",
        icon: icons["ability_trueshot"],
        maxRank: 1,
        reqPoints: 10,
        description: talentText`Increases the attack power of party members within 45 yards by 2%.  Lasts 30 min.`,
      },
      "Efficiency": {
        name: "Efficiency",
        pos: "c2",
        icon: icons["spell_frost_wizardmark"],
        maxRank: 5,
        reqPoints: 10,
        description: talentText`Reduces the Mana cost of your Shot and Sting abilities by ${[
          10,
          20,
          30,
          40,
          50,
        ]}%.`,
      },
      "Improved Hunter's Mark": {
        name: "Improved Hunter's Mark",
        pos: "c4",
        icon: icons["ability_hunter_snipershot"],
        maxRank: 3,
        reqPoints: 10,
        description: talentText`Increases the Ranged Damage bonus of your Hunter's Mark spell by ${[
          1,
          2,
          3,
        ]}%`,
      },
      "Improved Rapid Fire": {
        name: "Improved Rapid Fire",
        pos: "d2",
        icon: icons["ability_hunter_runningshot"],
        maxRank: 2,
        reqPoints: 15,
        description: talentText`Increases the melee and ranged attack speed increase of your Rapid Fire ability by ${[
          10,
          20,
        ]}%.`,
      },
      "Mortal Shots": {
        name: "Mortal Shots",
        pos: "d3",
        icon: icons["ability_piercedamage"],
        maxRank: 3,
        reqPoints: 15,
        prereq: "Lethal Shots",
        arrows: [{ dir: "down", from: "a3", to: "d3" }],
        description: talentText`Increases the critical strike damage bonus of your ranged attacks by ${[
          10,
          20,
          30,
        ]}%.`,
      },
      "Steady Hands": {
        name: "Steady Hands",
        pos: "e2",
        icon: icons["ability_rogue_kidneyshot"],
        maxRank: 1,
        reqPoints: 20,
        description: talentText`When activated, increases the critical strike chance of your next Aimed Shot, Multi-Shot or Quick Shot by 100%.  2 min cooldown`,
      },
      "Barrage": {
        name: "Barrage",
        pos: "e3",
        icon: icons["ability_upgrademoonglaive"],
        maxRank: 3,
        reqPoints: 20,
        description: talentText`Increases the critical strike chance of your Multi-Shot, Quick Shot and Volley spells by ${[
          3,
          6,
          9,
        ]}%.`,
      },
      "Ranged Weapon Specialization": {
        name: "Ranged Weapon Specialization",
        pos: "f3",
        icon: icons["inv_weapon_rifle_06"],
        maxRank: 5,
        reqPoints: 25,
        description: talentText`Increases the damage you deal with ranged weapons by ${[
          2,
          4,
          6,
          8,
          10,
        ]}%.`,
      },
      "Aimed Shot": {
        name: "Aimed Shot",
        pos: "g2",
        icon: icons["inv_spear_07"],
        maxRank: 1,
        reqPoints: 30,
        prereq: "Steady Hands",
        arrows: [{ dir: "down", from: "e2", to: "g2" }],
        description: talentText`An aimed shot that deals 150% ranged weapon damage.  6 sec cooldown`,
      },
    },
  },
  Survival: {
    name: "Survival",
    background: backgrounds["survival"],
    icon: icons["ability_hunter_swiftstrike"],
    talents: {
      "Trap Mastery": {
        name: "Trap Mastery",
        pos: "a1",
        icon: icons["ability_ensnare"],
        maxRank: 3,
        reqPoints: 0,
        description: talentText`Decreases the chance enemies will resist trap effects by ${[
          5,
          10,
          16,
        ]}%.`,
      },
      "Heightened Senses": {
        name: "Heightened Senses",
        pos: "a2",
        icon: icons["ability_ambush"],
        maxRank: 5,
        reqPoints: 0,
        description: talentText`Reduces the chance you are hit by spells and ranged attacks by ${[
          1,
          2,
          3,
          4,
          5,
        ]}%.`,
      },
      "Savage Strikes": {
        name: "Savage Strikes",
        pos: "a3",
        icon: icons["ability_racial_bloodrage"],
        maxRank: 5,
        reqPoints: 0,
        description: talentText`Increases the critical strike chance of Raptor Strike and Mongoose Bite by ${[
          3,
          6,
          9,
          12,
          15,
        ]}%.`,
      },
      "Surefooted": {
        name: "Surefooted",
        pos: "b1",
        icon: icons["ability_kick"],
        maxRank: 3,
        reqPoints: 5,
        description: talentText`Increases hit chance by ${[
          1,
          2,
          3,
        ]}% and increases the chance movement impairing effects will be resisted by an additional ${[
          2,
          4,
          6,
        ]}%. `,
      },
      "Survivalist": {
        name: "Survivalist",
        pos: "b3",
        icon: icons["spell_shadow_twilight"],
        maxRank: 5,
        reqPoints: 5,
        description: talentText`Increases total health by ${[
          2,
          4,
          6,
          8,
          10,
        ]}%.`,
      },
      "Entrapment": {
        name: "Entrapment",
        pos: "b4",
        icon: icons["spell_nature_stranglevines"],
        maxRank: 5,
        reqPoints: 5,
        description: talentText`Gives your Immolation Trap, Frost Trap, and Explosive Trap a ${[
          5,
          10,
          15,
          20,
          25,
        ]}% chance to entrap the target, preventing them from moving for 5 sec.`,
      },
      "Improved Wing Clip": {
        name: "Improved Wing Clip",
        pos: "c1",
        icon: icons["ability_rogue_trip"],
        maxRank: 2,
        reqPoints: 10,
        description: talentText`Increases the movement speed reduction of your Wing Clip ability by an additional ${[
          5,
          10,
        ]}%.`,
      },
      "Deterrence": {
        name: "Deterrence",
        pos: "c2",
        icon: icons["ability_whirlwind"],
        maxRank: 1,
        reqPoints: 10,
        prereq: "Heightened Senses",
        arrows: [{ dir: "down", from: "a2", to: "c2" }],
        description: talentText`When activated, increases your Dodge and Parry chance by 25% for 10 sec.  2 min cooldown`,
      },
      "Clever Traps": {
        name: "Clever Traps",
        pos: "c3",
        icon: icons["spell_nature_timestop"],
        maxRank: 5,
        reqPoints: 10,
        description: talentText`Increases the duration of your Freezing and Frost trap's effects by ${[
          5,
          10,
          15,
          20,
          25,
        ]}% and the damage of your Steel and Explosive trap abilities by ${[8, 16, 24, 32, 40,]}%.`,
      },
      "Improved Feign Death": {
        name: "Improved Feign Death",
        pos: "c4",
        icon: icons["ability_rogue_feigndeath"],
        maxRank: 2,
        reqPoints: 10,
        description: talentText`Reduces the chance your Feign Death ability will be resisted by ${[
          5,
          10,
        ]}%.`,
      },
      "Improved Disengage": {
        name: "Improved Disengage",
        pos: "d2",
        icon: icons["ability_rogue_feint"],
        maxRank: 2,
        reqPoints: 15,
        description: talentText`Reduces the cooldown of your Disengage ability by ${[15, 30,]} sec.`,
      },
      "Steel Porcupine": {
        name: "Steel Porcupine",
        pos: "d3",
        icon: icons["spell_shadow_unholyfrenzy"],
        maxRank: 3,
        reqPoints: 15,
        description: talentText`Increases the damage of your Mongoose Bite and Raptor Strike Abilities by ${[3, 6, 9,]}%.`,
      },
      "Scatter Shot": {
        name: "Scatter Shot",
        pos: "e2",
        icon: icons["ability_golemstormbolt"],
        maxRank: 1,
        reqPoints: 20,
        description: talentText`A short range shot that deals 50% wepon damage and disorients the target for 4 sec.  Any damage caused will remove the effect.  Turns off your attack when used.  30 sec cooldown`,
      },
      "Killer Instinct": {
        name: "Killer Instinct",
        pos: "e3",
        icon: icons["spell_holy_blessingofstamina"],
        maxRank: 3,
        reqPoints: 20,
        description: talentText`Increases the damage done by your Survival abilities by ${[
          2,
          4,
          6,
        ]}%.`,
      },
      "Lightning Reflexes": {
        name: "Lightning Reflexes",
        pos: "f3",
        icon: icons["spell_nature_invisibilty"],
        maxRank: 5,
        reqPoints: 25,
        description: talentText`Increases your Agility by ${[
          4,
          8,
          12,
          16,
          20,
        ]}%.`,
      },
      "Stalk": {
        name: "Stalk",
        pos: "g2",
        icon: icons["ability_stealth"],
        maxRank: 1,
        reqPoints: 30,
        prereq: "Scatter Shot",
        arrows: [{ dir: "down", from: "e2", to: "g2" }],
        description: talentText`Allows the hunter to sneak around, but reduces your speed by 30%.  Lasts until cancelled.`,
      },
    },
  },
};
