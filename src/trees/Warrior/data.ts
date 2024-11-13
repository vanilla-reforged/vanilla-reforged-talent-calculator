import { areReqPointsMet, TalentData } from "../../TalentContext";
import { talentText, requireAll } from "../../utils";

const backgrounds = requireAll(
  require.context("../../assets/tree-backgrounds/warrior"),
);
const icons = requireAll(require.context("../../assets/icons/warrior"));

export const data: TalentData = {
  Arms: {
    name: "Arms",
    background: backgrounds["arms"],
    icon: icons["ability_rogue_eviscerate"],
    talents: {
      "Tactical Mastery": {
        name: "Tactical Mastery",
        pos: "a2",
        icon: icons["spell_nature_enchantarmor"],
        maxRank: 5,
        reqPoints: 0,
        description: talentText`You retain up to ${[
          5,
          10,
          15,
          20,
          25,
        ]} of your rage points when you change stances.`,
      },
      "Improved Charge": {
        name: "Improved Charge",
        pos: "a3",
        icon: icons["ability_warrior_charge"],
        maxRank: 5,
        reqPoints: 0,
        description: talentText`Increases the amount of rage generated by your Charge ability by ${[
          2,
          4,
          6,
          8,
          10,
        ]}.`,
      },
      "Improved Hamstring": {
        name: "Improved Hamstring",
        pos: "b1",
        icon: icons["ability_shockwave"],
        maxRank: 5,
        reqPoints: 5,
        description: talentText`Gives your Hamstring ability a ${[
          5,
          10,
          15,
          20,
          25,
        ]}% chance to immobilize the target for 5 sec and reduces the rage cost of your Hamstring ability by ${[
          1,
          2,
          3,
          4,
          5,
        ]}.`,
      },
      "Prepared for Battle": {
        name: "Prepared for Battle",
        pos: "b2",
        icon: icons["spell_holy_devotion"],
        maxRank: 5,
        reqPoints: 5,
        description: talentText`Reduces the cooldown of your Recklessness, Retaliation and Shield Wall abilities by ${[
          3,
          6,
          9,
          12,
          15,
        ]} min.`,
      },
      "Improved Heroic Strike": {
        name: "Improved Heroic Strike",
        pos: "b3",
        icon: icons["ability_rogue_ambush"],
        maxRank: 5,
        reqPoints: 5,
        description: talentText`Reduces the Rage cost of your Heroic Strike ability by ${[
          1,
          2,
          3,
          4,
          5,
        ]}.`,
      },
      "Improved Overpower": {
        name: "Improved Overpower",
        pos: "c1",
        icon: icons["inv_sword_05"],
        maxRank: 2,
        reqPoints: 10,
        description: talentText`Improves your chance to get a critical strike with your Overpower ability by ${[
          25,
          50,
        ]}%.`,
      },
      "Anger Management": {
        name: "Anger Management",
        pos: "c2",
        icon: icons["spell_holy_blessingofstamina"],
        maxRank: 1,
        reqPoints: 10,
        description: talentText`Increases the time required for your rage to decay while out of combat by 30%.`,
      },
      "Improved Shouts": {
        name: "Improved Battle Shout",
        pos: "c3",
        icon: icons["ability_warrior_battleshout"],
        maxRank: 5,
        reqPoints: 10,
        description: talentText`Increases the melee attack power bonus of your Battle Shout by ${[
          1,
          2,
          3,
          4,
          5,
        ]}%, the melee attack power reduction of your Demoralizing Shout by ${[
          -1,
          -2,
          -3,
          -4,
          -5,
        ]}% and the duration of your Battle Shout and Demoralizing Shout by ${[
          10,
          20,
          30,
          40,
          50,
        ]}%.`,
      },
      "Improved Execute": {
        name: "Improved Execute",
        pos: "c4",
        icon: icons["inv_sword_48"],
        maxRank: 3,
        reqPoints: 10,
        description: talentText`Reduces the Rage cost of your Execute ability by ${[
          2,
          4,
          6,
        ]}.`,
      },
      "Improved Pummel": {
        name: "Improved Pummel",
        pos: "d2",
        icon: icons["inv_gauntlets_04"],
        maxRank: 2,
        reqPoints: 15,
        description: talentText`Gives your Pummel ability a ${[
          50,
          100,
        ]}% chance to silence the target for 2 sec.`,
      },
      "Deep Wounds": {
        name: "Deep Wounds",
        pos: "d3",
        icon: icons["ability_backstab"],
        maxRank: 3,
        reqPoints: 15,
        description: talentText`Increases the critical strike damage bonus of your Bloodthirst, Cleave, Execute, Heroic Strike, Mortal Strike and Overpower abilities by ${[
          10,
          20,
          30,
        ]}%.`,
      },
      "Sweeping Strikes": {
        name: "Sweeping Strikes",
        pos: "e2",
        icon: icons["ability_rogue_slicedice"],
        maxRank: 1,
        reqPoints: 20,
        description: talentText`Your next 5 melee attacks strike an additional nearby opponent.  30 sec cooldown`,
      },
      "Two-Handed Weapon Specialization": {
        name: "Two-Handed Weapon Specialization",
        pos: "e3",
        icon: icons["inv_axe_09"],
        maxRank: 3,
        reqPoints: 20,
        description: talentText`Increases the damage you deal with two-handed melee weapons by ${[
          2,
          4,
          6,
        ]}%.`,
      },
      "Weapon Mastery": {
        name: "Weapon Mastery",
        pos: "f3",
        icon: icons["inv_sword_27"],
        maxRank: 5,
        reqPoints: 25,
        description: talentText`Gives you a ${[
          1,
          2,
          3,
          4,
          5,
        ]}% chance to get an extra attack on the same target after dealing damage.`,
      },
      "Mortal Strike": {
        name: "Mortal Strike",
        pos: "g2",
        icon: icons["ability_warrior_savageblow"],
        maxRank: 1,
        reqPoints: 30,
        prereq: "Sweeping Strikes",
        arrows: [{ dir: "down", from: "e2", to: "g2" }],
        description: talentText`A vicious strike that deals 130% weapon damage.  6 sec cooldown`,
      },
    },
  },
  Fury: {
    name: "Fury",
    background: backgrounds["fury"],
    icon: icons["ability_warrior_innerrage"],
    talents: {
      "Blood Craze": {
        name: "Blood Craze",
        pos: "a1",
        icon: icons["spell_shadow_summonimp"],
        maxRank: 5,
        reqPoints: 0,
        description: talentText`Regenerates ${[
          1,
          2,
          3,
          4,
          5,
        ]}% of your total Health over 2 sec after being the victim of a critical strike.`,
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
      "Cruelty": {
        name: "Cruelty",
        pos: "a3",
        icon: icons["ability_rogue_eviscerate"],
        maxRank: 5,
        reqPoints: 0,
        description: talentText`Improves your chance to get a critical strike by ${[
          1,
          2,
          3,
          4,
          5,
        ]}%.`,
      },
      "Pent up Rage": {
        name: "Pent up Rage",
        pos: "b2",
        icon: icons["spell_nature_purge"],
        maxRank: 5,
        reqPoints: 5,
        description: talentText`Reduces the cooldown of your Intimidating Shout and Slam abilities by ${[
          18,
          36,
          54,
          72,
          90,
        ]} sec.`,
      },
      "Unbridled Wrath": {
        name: "Unbridled Wrath",
        pos: "b3",
        icon: icons["spell_nature_stoneclawtotem"],
        maxRank: 5,
        reqPoints: 5,
        description: talentText`Gives you a ${[
          8,
          16,
          24,
          32,
          40,
        ]}% chance to generate an additional Rage point when you deal melee damage with a weapon.`,
      },
      "Piercing Howl": {
        name: "Piercing Howl",
        pos: "c1",
        icon: icons["spell_shadow_deathscream"],
        maxRank: 1,
        reqPoints: 10,
        description: talentText`Causes all enemies near the warrior to be dazed, reducing movement speed by 50% for 6 sec.`,
      },
      "Dual Wield Specialization": {
        name: "Dual Wield Specialization",
        pos: "c2",
        icon: icons["ability_dualwield"],
        maxRank: 5,
        reqPoints: 10,
        description: talentText`Increases the damage done by your offhand weapon by ${[
          10,
          20,
          30,
          40,
          50,
        ]}%.`,
      },
      "Improved Cleave": {
        name: "Improved Cleave",
        pos: "c3",
        icon: icons["ability_warrior_cleave"],
        maxRank: 3,
        reqPoints: 10,
        description: talentText`Increases the damage done by your Cleave ability by ${[
          1,
          2,
          3,
        ]}% and reduces its rage cost by ${[
          1,
          2,
          3,
        ]}.`,
      },
      "Improved Whirlwind": {
        name: "Improved Whirlwind",
        pos: "c4",
        icon: icons["ability_whirlwind"],
        maxRank: 2,
        reqPoints: 10,
        description: talentText`Reduces the Rage cost of your Whirlwind ability by ${[
          2,
          4,
        ]}.`,
      },
      "Improved Intercept": {
        name: "Improved Intercept",
        pos: "d2",
        icon: icons["ability_rogue_sprint"],
        maxRank: 2,
        reqPoints: 15,
        description: talentText`Reduces the cooldown of your Intercept ability by ${[
          7,
          14,
        ]} sec.`,
      },
      "Enrage": {
        name: "Enrage",
        pos: "d3",
        icon: icons["spell_shadow_unholyfrenzy"],
        maxRank: 3,
        reqPoints: 15,
        description: talentText`Gives you a ${[
          10,
          20,
          30,
        ]}% melee damage bonus for 12 sec up to a maximum of 12 swings after being the victim of a critical strike.`,
      },
      "Improved Berserker Rage": {
        name: "Improved Berserker Rage",
        pos: "e1",
        icon: icons["spell_nature_ancestralguardian"],
        maxRank: 3,
        reqPoints: 20,
        description: talentText`The Berserker Rage ability will generate ${[
          5,
          10,
          15,
        ]} rage when used.`,
      },
      "Death Wish": {
        name: "Death Wish",
        pos: "e2",
        icon: icons["spell_shadow_deathpact"],
        maxRank: 1,
        reqPoints: 20,
        description: talentText`When activated, increases your physical damage by 10%, but lowers your armor and all resistances by 10%.  Lasts 20 sec.  2 min cooldown`,
      },
      "Flurry": {
        name: "Flurry",
        pos: "f3",
        icon: icons["ability_ghoulfrenzy"],
        maxRank: 5,
        reqPoints: 25,
        prereq: "Enrage",
        arrows: [{ dir: "down", from: "d3", to: "f3" }],
        description: talentText`Increases your attack speed by ${[
          5,
          10,
          15,
          20,
          25,
        ]}% for your next 3 swings after dealing a melee critical strike.`,
      },
      "Bloodthirst": {
        name: "Bloodthirst",
        pos: "g2",
        icon: icons["spell_nature_bloodlust"],
        maxRank: 1,
        reqPoints: 30,
        prereq: "Death Wish",
        arrows: [{ dir: "down", from: "e2", to: "g2" }],
        description: talentText`Instantly attack the target causing damage equal to 45% of your attack power.  In addition, the next 5 successful melee attacks will restore 10 health.  This effect lasts 8 sec.  6 sec cooldown`,
      },
    },
  },
  Protection: {
    name: "Protection",
    background: backgrounds["protection"],
    icon: icons["inv_shield_06"],
    talents: {
      "Anticipation": {
        name: "Anticipation",
        pos: "a1",
        icon: icons["spell_nature_mirrorimage"],
        maxRank: 5,
        reqPoints: 0,
        description: talentText`Increases your Dodge chance by ${[
          1,
          2,
          3,
          4,
          5,
        ]}%.`,
      },
      "Shield Specialization": {
        name: "Shield Specialization",
        pos: "a2",
        icon: icons["inv_shield_06"],
        maxRank: 5,
        reqPoints: 0,
        description: talentText`Increases your chance to block attacks with a shield by ${[
          1,
          2,
          3,
          4,
          5,
        ]}% and has a ${[
          20,
          40,
          60,
          80,
          100,
        ]}% chance to generate 1 Rage when a block occurs.`,
      },
      "Defiance": {
        name: "Defiance",
        pos: "a3",
        icon: icons["ability_warrior_innerrage"],
        maxRank: 5,
        reqPoints: 0,
        description: talentText`Increases the threat generated by your attacks by ${[
          3,
          6,
          9,
          12,
          15,
        ]}% while in Defensive Stance.`,
      },
      "Improved Bloodrage": {
        name: "Improved Bloodrage",
        pos: "b1",
        icon: icons["ability_racial_bloodrage"],
        maxRank: 2,
        reqPoints: 5,
        description: talentText`Increases the instant Rage generated by your Bloodrage ability by ${[
          5,
          10,
        ]}.`,
      },
      "Improved Thunder Clap": {
        name: "Improved Thunder Clap",
        pos: "b3",
        icon: icons["ability_thunderclap"],
        maxRank: 5,
        reqPoints: 5,
        description: talentText`Reduces the Rage cost of your Thunder Clap ability by ${[
          2,
          4,
          6,
          8,
          10,
        ]}.`,
      },
      "Improved Sunder Armor": {
        name: "Improved Sunder Armor",
        pos: "b4",
        icon: icons["ability_warrior_sunder"],
        maxRank: 3,
        reqPoints: 5,
        description: talentText`Reduces the Rage cost of your Sunder Armor ability by ${[
          2,
          4,
          6,
        ]}.`,
      },
      "Last Stand": {
        name: "Last Stand",
        pos: "c1",
        icon: icons["spell_holy_ashestoashes"],
        maxRank: 1,
        reqPoints: 10,
        prereq: "Improved Bloodrage",
        arrows: [{ dir: "down", from: "b1", to: "c1" }],
        description: talentText`When activated, this ability temporarily grants you 30% of your maximum hit points for 20 sec.  After the effect expires, the hit points are lost.  10 min cooldown`,
      },
      "Improved Shield Block": {
        name: "Improved Shield Block",
        pos: "c2",
        icon: icons["ability_defend"],
        maxRank: 3,
        reqPoints: 10,
        prereq: "Shield Specialization",
        arrows: [{ dir: "down", from: "a2", to: "c2" }],
        description: talentText`Allows your Shield Block ability to block an additional attack and increases the duration by ${[
          0.5,
          1,
          2,
        ]} sec.`,
      },
      "Colourful Language": {
        name: "Colorful Language",
        pos: "c3",
        icon: icons["ability_warrior_warcry"],
        maxRank: 5,
        reqPoints: 10,
        description: talentText`Reduces the cooldown of your Challenging Shout abilitiy by ${[
          60,
          120,
          180,
          240,
          300,
        ]} sec and the cooldown of your Mocking Blow abilitiy by ${[
          12,
          24,
          36,
          48,
          60,
        ]} sec.`,
      },
      "Improved Revenge": {
        name: "Improved Revenge",
        pos: "c4",
        icon: icons["ability_warrior_revenge"],
        maxRank: 2,
        reqPoints: 10,
        description: talentText`Improves your chance to get a critical strike with your Revenge ability by ${[
          25,
          50,
        ]}%.`,
      },
      "Improved Shield Bash": {
        name: "Improved Shield Bash",
        pos: "d2",
        icon: icons["ability_warrior_shieldbash"],
        maxRank: 2,
        reqPoints: 15,
        description: talentText`Gives your Shield Bash ability a ${[
          50,
          100,
        ]}% chance to silence the target for 2 sec.`,
      },
      "Primal Fury": {
        name: "Primal Fury",
        pos: "d3",
        icon: icons["ability_racial_cannibalize"],
        maxRank: 3,
        reqPoints: 15,
        description: talentText`Gives you ${[
          33,
          66,
          100,
        ]}% chance to gain an additional 5 Rage anytime you get a critical strike.`,
      },
      "Concussion Blow": {
        name: "Concussion Blow",
        pos: "e2",
        icon: icons["ability_thunderbolt"],
        maxRank: 1,
        reqPoints: 20,
        description: talentText`Stuns the opponent for 5 sec.  45 sec cooldown`,
      },
      "Improved Shield Wall": {
        name: "Improved Shield Wall",
        pos: "e3",
        icon: icons["ability_warrior_shieldwall"],
        maxRank: 3,
        reqPoints: 20,
        description: talentText`Increases the duration of your Shield Wall ability by ${[
          2,
          4,
          6,
        ]} sec.`,
      },
      "One-Handed Specialization": {
        name: "One-Handed Specialization",
        pos: "f3",
        icon: icons["inv_sword_20"],
        maxRank: 5,
        reqPoints: 25,
        description: talentText`Increases the damage you deal with One-Handed Melee weapons by ${[
          5,
          10,
          15,
          20,
          25,
        ]}%.`,
      },
      "Shield Slam": {
        name: "Shield Slam",
        pos: "g2",
        icon: icons["inv_shield_05"],
        maxRank: 1,
        reqPoints: 30,
        prereq: "Concussion Blow",
        arrows: [{ dir: "down", from: "e2", to: "g2" }],
        description: talentText`Slam the target with your shield, causing 224 damage, modified by your shield block value, and dispelling 1 magic effect on the target.  Also causes a high amount of threat.  6 sec cooldown`,
      },
    },
  },
};
