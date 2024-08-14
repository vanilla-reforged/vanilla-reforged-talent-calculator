import { TalentData } from "../../TalentContext";
import { talentText, requireAll } from "../../utils";

const backgrounds = requireAll(
  require.context("../../assets/tree-backgrounds/druid"),
);
const icons = requireAll(require.context("../../assets/icons/druid"));

export const data: TalentData = {
  Balance: {
    name: "Balance",
    background: backgrounds["balance"],
    icon: icons["spell_nature_naturesblessing"],
    talents: {
      "Nature's Grasp": {
        name: "Nature's Guidance",
        pos: "a1",
        icon: icons["spell_nature_natureswrath"],
        maxRank: 1,
        reqPoints: 0,
        description: talentText`While active, any time an enemy strikes the caster they have a 35% chance to become afflicted by Entangling Roots (Rank 1).  Only useable outdoors.  1 charge.  Lasts 45 sec.  1 min cooldown`,
      },
      "Improved Nature's Grasp": {
        name: "Nature's Guidance",
        pos: "a2",
        icon: icons["spell_nature_natureswrath"],
        maxRank: 4,
        reqPoints: 0,
        prereq: "Nature's Grasp",
        arrows: [{ dir: "right", from: "a1", to: "a2" }],
        description: talentText`Increases the chance for your Nature's Grasp to entangle an enemy by ${[
          15,
          30,
          45,
          65,
        ]}%.`,
      },
      "Nature's Guidance": {
        name: "Nature's Guidance",
        pos: "a3",
        icon: icons["spell_nature_natureresistancetotem"],
        maxRank: 5,
        reqPoints: 0,
        description: talentText`Improves your chance to hit with spells by ${[
          1,
          2,
          3,
          4,
          5,
        ]}%.`,
      },
      "Nature's Wrath": {
        name: "Nature's Wrath",
        pos: "a4",
        icon: icons["spell_nature_naturesblessing"],
        maxRank: 5,
        reqPoints: 0,
        description: talentText`Improves your chance to get a critical strike with spells by ${[
          1,
          2,
          3,
          4,
          5,
        ]}%.`,
      },
      "Nature's Speed": {
        name: "Nature's Speed",
        pos: "b2",
        icon: icons["spell_nature_abolishmagic"],
        maxRank: 5,
        reqPoints: 5,
        description: talentText`Reduces the casting time of your Starfire and Wrath spells by ${[
          0.1,
          0.2,
          0.3,
          0.4,
          0.5,
        ]} sec.`,
      },
      "Improved Thorns": {
        name: "Improved Thorns",
        pos: "b3",
        icon: icons["spell_nature_thorns"],
        maxRank: 3,
        reqPoints: 5,
        description: talentText`Increases damage caused by your Thorns spell by ${[
          10,
          20,
          30,
        ]}%.`,
      },
      "Nature's Reach": {
        name: "Nature's Reach",
        pos: "b4",
        icon: icons["spell_nature_naturetouchgrow"],
        maxRank: 2,
        reqPoints: 5,
        description: talentText`Increases the range of your Balance spells by ${[
          10,
          20,
        ]}%.`,
      },
      "Improved Entangling Roots": {
        name: "Improved Entangling Roots",
        pos: "c1",
        icon: icons["spell_nature_stranglevines"],
        maxRank: 3,
        reqPoints: 10,
        prereq: "Nature's Grasp",
        arrows: [{ dir: "down", from: "a1", to: "c1" }],
        description: talentText`Reduces the casting time of your Entangling Roots spell by ${[
          0.3,
          0.6,
          0.9,
        ]} sec.`,
      },
      "Moonglow": {
        name: "Moonglow",
        pos: "c2",
        icon: icons["spell_nature_sentinal"],
        maxRank: 5,
        reqPoints: 10,
        description: talentText`Reduce the Mana cost of your offensive spells by ${[
          10,
          20,
          30,
          40,
          50,
        ]}%.`,
      },
      "Insect Swarm": {
        name: "Insect Swarm",
        pos: "c3",
        icon: icons["spell_nature_insectswarm"],
        maxRank: 1,
        reqPoints: 10,
        description: talentText`The enemy target is swarmed by insects, decreasing their chance to hit by 2% and causing 60 Nature damage over 12 sec.`,
      },
      "Balanced Soul": {
        name: "Balanced Soul",
        pos: "c4",
        icon: icons["spell_nature_naturetouchdecay"],
        maxRank: 2,
        reqPoints: 10,
        description: talentText`Gives you a ${[
          35,
          70,
        ]}% chance to avoid interruption caused by damage while casting any Balance spell.`,
      },
      "Improved Moonfire": {
        name: "Improved Moonfire",
        pos: "d2",
        icon: icons["spell_nature_starfall"],
        maxRank: 2,
        reqPoints: 15,
        description: talentText`Increases the damage and critical strike chance of your Moonfire spell by ${[
          5,
          10,
        ]}%.`,
      },
      "Improved Insect Swarm": {
        name: "Improved Insect Swarm",
        pos: "d3",
        icon: icons["spell_nature_insectswarm"],
        maxRank: 3,
        reqPoints: 15,
        prereq: "Insect Swarm",
        arrows: [{ dir: "down", from: "c3", to: "d3" }],
        description: talentText`Increases the duration of your Insect Swarm spell by ${[
          2,
          4,
          6,
        ]} sec.`,
      },
      "Vengeance": {
        name: "Vengeance",
        pos: "e2",
        icon: icons["spell_nature_purge"],
        maxRank: 1,
        reqPoints: 20,
        description: talentText`Increases the critical strike damage bonus of your Balance spells by 100%.`,
      },
      "Perfectly Balanced": {
        name: "Perfectly Balanced",
        pos: "e3",
        icon: icons["spell_shadow_teleport"],
        maxRank: 3,
        reqPoints: 20,
        description: talentText`Your Insect Swarm, Moonfire, Starfire and Wrath spells have a ${[
          5,
          10,
          15,
        ]}% chance to restore 3% of total Mana to the members of your party.`,
      },
      "Moonfury": {
        name: "Moonfury",
        pos: "f3",
        icon: icons["spell_nature_moonglow"],
        maxRank: 5,
        reqPoints: 25,
        description: talentText`Increases the damage done by your Balance spells by ${[
          2,
          4,
          6,
          8,
          10,
        ]}%`,
      },
      "Moonkin Form": {
        name: "Moonkin Form",
        pos: "g2",
        icon: icons["spell_nature_forceofnature"],
        maxRank: 1,
        reqPoints: 30,
        prereq: "Vengeance",
        arrows: [{ dir: "down", from: "e2", to: "g2" }],
        description: talentText`Transforms the Druid into Moonkin Form.  While in this form the armor contribution from items is increased by 360% and your offensive spell criticals grace you with the blessing of nature, reducing the casting time of your next spell by 0.5 sec.  The Moonkin can only cast Balance spells while shapeshifted.  \n\nThe act of shapeshifting frees the caster of Polymorph and Movement Impairing effects.`,
      },
    },
  },
  "Feral Combat": {
    name: "Feral Combat",
    background: backgrounds["feral"],
    icon: icons["ability_racial_bearform"],
    talents: {
      "Thick Hide": {
        name: "Thick Hide",
        pos: "a1",
        icon: icons["inv_misc_pelt_bear_03"],
        maxRank: 3,
        reqPoints: 0,
        description: talentText`Increases your Armor contribution from items by ${[
          2,
          4,
          6,
        ]}%.`,
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
      "Sharpened Claws": {
        name: "Sharpened Claws",
        pos: "a3",
        icon: icons["inv_misc_monsterclaw_04"],
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
      "Feral Instinct": {
        name: "Feral Instinct",
        pos: "a4",
        icon: icons["ability_ambush"],
        maxRank: 5,
        reqPoints: 0,
        description: talentText`Increases threat caused in Bear and Dire Bear Form by ${[
          3,
          6,
          9,
          12,
          15,
        ]}%.`,
      },
      "Improved Enrage": {
        name: "Improved Enrage",
        pos: "b1",
        icon: icons["ability_druid_enrage"],
        maxRank: 2,
        reqPoints: 5,
        description: talentText`The Enrage ability now instantly generates ${[
          5,
          10,
        ]} Rage.`,
      },
      "Natural Shapeshifter": {
        name: "Natural Shapeshifter",
        pos: "b2",
        icon: icons["spell_nature_wispsplode"],
        maxRank: 3,
        reqPoints: 5,
        description: talentText`Reduces the mana cost of all shapeshifting by ${[
          10,
          20,
          30,
        ]}%.`,
      },
      "Protective Instincts": {
        name: "Protective Instincts",
        pos: "b3",
        icon: icons["ability_druid_demoralizingroar"],
        maxRank: 5,
        reqPoints: 5,
        description: talentText`Increases the Attack Power reduction of your Demoralizing Roar by ${[
          1,
          2,
          3,
          4,
          5,
        ]}% and reduces the Rage cost of your Maul, and Swipe abilities by ${[
          1,
          2,
          3,
          4,
          5,
        ]}.`,
      },
    "Faerie Fire (Feral)": {
      name: "Faerie Fire (Feral)",
      pos: "c1",
      icon: icons["spell_nature_faeriefire"],
      maxRank: 1,
      reqPoints: 10,
      description: talentText`Decrease the armor of the target by 5% for 40 sec.  While affected, the target cannot stealth or turn invisible.`,
    },
    "Ferocity": {
      name: "Ferocity",
      pos: "c2",
      icon: icons["ability_hunter_pet_hyena"],
      maxRank: 5,
      reqPoints: 10,
      description: talentText`Reduces the Energy cost of your Claw and Shred abilities by ${[
        1,
        2,
        3,
        4,
        5,
      ]} and increases the damage caused by your Ferocious Bite ability by ${[
        3,
        6,
        9,
        12,
        15,
      ]}%.`,
    },
    "Feline Swiftness": {
      name: "Feline Swiftness",
      pos: "c4",
      icon: icons["spell_nature_spiritwolf"],
      maxRank: 2,
      reqPoints: 10,
      description: talentText`Increases your outdoor movement speed while in Cat Form by ${[
        15,
        30,
      ]}% and increases your chance to dodge an attack while in Cat Form by ${[
        2,
        4,
      ]}%.`,
    },
    "Blood Frenzy": {
      name: "Blood Frenzy",
      pos: "d2",
      icon: icons["ability_ghoulfrenzy"],
      maxRank: 2,
      reqPoints: 15,
      prereq: "Ferocity",
      arrows: [{ dir: "down", from: "c2", to: "d2" }],
      description: talentText`Increases the damage done by your Claw and Shred abilities by ${[
        3,
        6,
      ]}% and your critical strikes from Cat Form abilities that add combo points have a ${[
        50,
        100,
      ]}% chance to add an additional combo point.`,
    },
    "Primal Fury": {
      name: "Primal Fury",
      pos: "d3",
      icon: icons["ability_racial_cannibalize"],
      maxRank: 3,
      reqPoints: 15,
      prereq: "Protective Instincts",
      arrows: [{ dir: "down", from: "b3", to: "d3" }],
      description: talentText`Gives you ${[
        33,
        66,
        100,
      ]}% chance to gain an additional 5 Rage anytime you get a critical strike while in Bear and Dire Bear Form.  In addition increases the damage caused by your Maul and Swipe abilities by ${[
        2,
        4,
        6,
      ]}% and increases the stun duration of your Bash ability by ${[
        0.5,
        1,
        1.5,
      ]} sec.`,
    },
      "Feral Charge": {
        name: "Feral Charge",
        pos: "e2",
        icon: icons["ability_hunter_pet_bear"],
        maxRank: 1,
        reqPoints: 20,
        description: talentText`Causes you to charge an enemy, stunning the target for 3 sec.  18 sec cooldown`,
      },
      "Eye of the Tiger": {
        name: "Eye of the Tiger",
        pos: "e3",
        icon: icons["ability_hunter_pet_cat"],
        maxRank: 3,
        reqPoints: 20,
        description: talentText`Your Claw, Shred, Maul and Swipe abilities have a ${[
          5,
          10,
          15,
        ]}% chance to grant 10 Energy or Rage to the members of your party.`,
      },
      "Natural Weapons": {
        name: "Natural Weapons",
        pos: "f3",
        icon: icons["inv_staff_01"],
        maxRank: 5,
        reqPoints: 25,
        description: talentText`Increases the physical damage you deal by ${[
          2,
          4,
          6,
          8,
          10,
        ]}%.`,
      },
      "Heart of the Wild": {
        name: "Heart of the Wild",
        pos: "g2",
        icon: icons["spell_holy_blessingofagility"],
        maxRank: 1,
        reqPoints: 30,
        prereq: "Feral Charge",
        arrows: [{ dir: "down", from: "e2", to: "g2" }],
        description: talentText`Increases your Intellect by 35%.  In addition, while in Bear or Dire Bear Form your Stamina is increased by 35% and while in Cat Form your Agility is increased by 35%.`,
      },
    },
  },
  Restoration: {
    name: "Restoration",
    background: backgrounds["restoration"],
    icon: icons["spell_nature_healingtouch"],
    talents: {
      "Improved Rejuvenation": {
        name: "Improved Rejuvenation",
        pos: "a1",
        icon: icons["spell_nature_rejuvenation"],
        maxRank: 3,
        reqPoints: 0,
        description: talentText`Increases the effect of your Rejuvenation spell by ${[
          5,
          10,
          15,
        ]}%.`,
      },
      "Subtlety": {
        name: "Subtlety",
        pos: "a2",
        icon: icons["ability_eyeoftheowl"],
        maxRank: 5,
        reqPoints: 0,
        description: talentText`Reduces the threat caused by your spells by ${[
          5,
          10,
          15,
          20,
          25,
        ]}%.`,
      },
      "Druidal Warding": {
        name: "Druidal Warding",
        pos: "a3",
        icon: icons["spell_nature_spiritarmor"],
        maxRank: 5,
        reqPoints: 0,
        description: talentText`Reduces all spell damage taken by ${[
          2,
          4,
          6,
          8,
          10,
        ]}%.`,
      },
      "Improved Regrowth": {
        name: "Improved Regrowth",
        pos: "b1",
        icon: icons["spell_nature_resistnature"],
        maxRank: 3,
        reqPoints: 5,
        description: talentText`Increases the critical effect chance of your Regrowth spell by ${[
          5,
          10,
          15,
        ]}%.`,
      },
      "Improved Healing Touch": {
        name: "Improved Healing Touch",
        pos: "b2",
        icon: icons["spell_nature_healingtouch"],
        maxRank: 5,
        reqPoints: 5,
        description: talentText`Reduces the cast time of your Healing Touch spell by ${[
          0.1,
          0.2,
          0.3,
          0.4,
          0.5,
        ]} sec.`,
      },
      "Furor": {
        name: "Furor",
        pos: "b3",
        icon: icons["spell_holy_blessingofstamina"],
        maxRank: 5,
        reqPoints: 5,
        description: talentText`Gives you a ${[
          20,
          40,
          60,
          80,
          100,
        ]}% chance to gain 10 Rage when you shapeshift into Bear and Dire Bear Form or 40 Energy when you shapeshift into Cat Form.`,
      },
      "Omen of Clarity": {
        name: "Omen of Clarity",
        pos: "c1",
        icon: icons["spell_nature_crystalball"],
        maxRank: 1,
        reqPoints: 10,
        description: talentText`Imbues the druid with natural energy. Each of the Druid's melee attacks has a chance of causing the caster to enter a Clearcasting state.  The Clearcasting state reduces the Mana, Rage, or Energy cost of your next damage or healing spell or offensive ability by 100%.  Lasts 10 min.`,
      },
      "Reflection": {
        name: "Reflection",
        pos: "c2",
        icon: icons["spell_frost_windwalkon"],
        maxRank: 2,
        reqPoints: 10,
        description: talentText`Allows ${[
          10,
          20,
        ]}% of your Mana regeneration to continue while casting.`,
      },
      "Tranquil Spirit": {
        name: "Tranquil Spirit",
        pos: "c3",
        icon: icons["spell_holy_elunesgrace"],
        maxRank: 5,
        reqPoints: 10,
        description: talentText`Reduces the mana cost of your Healing Touch and Tranquility spells by ${[
          3,
          6,
          9,
          12,
          15,
        ]}%.`,
      },
      "Healing Focus": {
        name: "Healing Focus",
        pos: "c4",
        icon: icons["spell_nature_healingwavegreater"],
        maxRank: 2,
        reqPoints: 10,
        description: talentText`Gives you a ${[
          35,
          70,
        ]}% chance to avoid interruption caused by damage while casting any healing spell.`,
      },
      "Natural Fortitude": {
        name: "Natural Fortitude",
        pos: "d1",
        icon: icons["spell_nature_undyingstrength"],
        maxRank: 2,
        reqPoints: 15,
        description: talentText`Increase your target's armor value by ${[
          10,
          20,
        ]}% for 15 sec after getting a critical effect from one of your healing spells.`,
      },
      "Improved Rebirth": {
        name: "Improved Rebirth",
        pos: "d2",
        icon: icons["spell_nature_reincarnation"],
        maxRank: 3,
        reqPoints: 15,
        description: talentText`Reduces the cooldown of your Rebirth spell by ${[
          3,
          6,
          9,
        ]} min.`,
      },
      "Nature's Swiftness": {
        name: "Nature's Swiftness",
        pos: "e2",
        icon: icons["spell_nature_ravenform"],
        maxRank: 1,
        reqPoints: 20,
        description: talentText`When activated, your next Nature spell becomes an instant cast spell.  2 min cooldown`,
      },
      "Tranquil Mind": {
        name: "Tranquil Mind",
        pos: "e3",
        icon: icons["spell_nature_tranquility"],
        maxRank: 3,
        reqPoints: 20,
        prereq: "Tranquil Spirit",
        arrows: [{ dir: "down", from: "c3", to: "e3" }],
        description: talentText`Reduces the cooldown of your Tranquility spell by ${[
          50,
          100,
          150,
        ]} sec and the cooldown of your Innervate spell by ${[
          100,
          200,
          300,
        ]} sec.`,
      },
      "Gift of Nature": {
        name: "Gift of Nature",
        pos: "f3",
        icon: icons["spell_nature_protectionformnature"],
        maxRank: 5,
        reqPoints: 25,
        description: talentText`Increases the amount healed by your healing spells by ${[
          2,
          4,
          6,
          8,
          10,
        ]}%.`,
      },
      "Swiftmend": {
        name: "Swiftmend",
        pos: "g2",
        icon: icons["inv_relics_idolofrejuvenation"],
        maxRank: 1,
        reqPoints: 30,
        prereq: "Nature's Swiftness",
        arrows: [{ dir: "down", from: "e2", to: "g2" }],
        description: talentText`Consumes a Rejuvenation or Regrowth effect on a friendly target to instantly heal them an amount equal to 12 sec of Rejuvenation or 18 sec of Regrowth.`,
      },
    },
  },
};