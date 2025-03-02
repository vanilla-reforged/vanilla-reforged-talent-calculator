import { TalentData } from "../../TalentContext";
import { talentText, requireAll } from "../../utils";

const backgrounds = requireAll(
  require.context("../../assets/tree-backgrounds/shaman"),
);
const icons = requireAll(require.context("../../assets/icons/shaman"));

export const data: TalentData = {
  Elemental: {
    name: "Elemental",
    background: backgrounds["elemental"],
    icon: icons["spell_nature_lightning"],
    talents: {
      "Electrifying": {
        name: "Electrifying",
        pos: "a1",
        icon: icons["spell_frost_stun"],
        maxRank: 5,
        reqPoints: 0,
        description: talentText`Gives your Elemental Spells a ${[
          2,
          4,
          6,
          8,
          10,
        ]}% chance to stun the target for 2 sec.`,
      },
      "Storm's Guidance": {
        name: "Storm's Guidance",
        pos: "a2",
        icon: icons["spell_nature_tranquility"],
        maxRank: 5,
        reqPoints: 0,
        description: talentText`Increases your chance to hit with spells by ${[
          1,
          2,
          3,
          4,
          5,
        ]}%.`,
      },
      "Storm's Wrath": {
        name: "Storm's Wrath",
        pos: "a3",
        icon: icons["spell_nature_callstorm"],
        maxRank: 5,
        reqPoints: 0,
        description: talentText`Increases your chance to get a critical strike with spells by ${[
          1,
          2,
          3,
          4,
          5,
        ]}%.`,
      },
      "Storm Reach": {
        name: "Storm Reach",
        pos: "b1",
        icon: icons["spell_nature_stormreach"],
        maxRank: 2,
        reqPoints: 5,
        description: talentText`Increases the range of your Elemental and Restoration spells by ${[
          10,
          20,
        ]}%.`,
      },
      "Lightning Mastery": {
        name: "Lightning Mastery",
        pos: "b2",
        icon: icons["spell_lightning_lightningbolt01"],
        maxRank: 5,
        reqPoints: 5,
        description: talentText`Reduces the casting time of your Lightning Bolt and Chain Lightning spells by ${[
          0.1,
          0.2,
          0.3,
          0.4,
          0.5,
        ]} sec.`,
      },
      "Reverberation": {
        name: "Reverberation",
        pos: "b3",
        icon: icons["spell_frost_frostward"],
        maxRank: 3,
        reqPoints: 5,
        description: talentText`Reduces the cooldown of your Shock spells by ${[
          0.5,
          1,
          1.5,
        ]} sec.`,
      },
      "Eye of the Storm": {
        name: "Eye of the Storm",
        pos: "b4",
        icon: icons["spell_nature_eyeofthestorm"],
        maxRank: 2,
        reqPoints: 5,
        description: talentText`Gives you a ${[
          50,
          100,
        ]}% chance to resist interruption caused by damage while casting any spell for 6 sec, after beeing the victim of a critical strike.`,
      }, 
      "Elemental Focus": {
        name: "Elemental Focus",
        pos: "c1",
        icon: icons["spell_shadow_manaburn"],
        maxRank: 1,
        reqPoints: 10,
        description: talentText`Gives you a 10% chance of entering a Clearcasting state after any damage spell hits a target.  The Clearcasting state reduces the mana cost of your next damage spell by 100%.`,
      },
      "Convection": {
        name: "Convection",
        pos: "c2",
        icon: icons["spell_nature_wispsplode"],
        maxRank: 5,
        reqPoints: 10,
        description: talentText`Reduces the Mana cost of your offensive spells by ${[
          10,
          20,
          30,
          40,
          50,
        ]}%.`,
      },
      "Elemental Devastation": {
        name: "Elemental Devastation",
        pos: "c3",
        icon: icons["classic_spell_fire_elementaldevastation"],
        maxRank: 3,
        reqPoints: 10,
        prereq: "Reverberation",
        arrows: [{ dir: "down", from: "b3", to: "c3" }],
        description: talentText`Increases your chance to get a critical strike by ${[
          5,
          10,
          15,
        ]}% for 10 sec, after getting a critical strike with a spell.`,
      },
      "Improved Fire Totems": {
        name: "Improved Fire Totems",
        pos: "d2",
        icon: icons["spell_fire_sealoffire"],
        maxRank: 2,
        reqPoints: 15,
        description: talentText`Reduces the delay before your Fire Nova Totem activates by ${[
          1,
          2,
        ]} sec and decreases the threat generated by your Magma Totem by ${[
          25,
          50,
        ]}%.`,
      },
      "Call of Flame": {
        name: "Call of Flame",
        pos: "d3",
        icon: icons["spell_fire_immolation"],
        maxRank: 3,
        reqPoints: 15,
        description: talentText`Increases the damage done by your Fire Totems by ${[
          5,
          10,
          15,
        ]}%.`,
      },
      "Elemental Fury": {
        name: "Elemental Fury",
        pos: "e2",
        icon: icons["spell_fire_volcano"],
        maxRank: 1,
        reqPoints: 20,
        description: talentText`Increases the critical strike damage bonus of your Elemental spells and Fire Totems by 100%.`,
      },
      "Stormcaller": {
        name: "Stormcaller",
        pos: "e3",
        icon: icons["spell_nature_earthbind"],
        maxRank: 3,
        reqPoints: 20,
        description: talentText`Increases the damage done by your Chain Lightning, Lightning Bolt and Shock spells by ${[
          2,
          4,
          6,
        ]}%.`,
      },
      "Concussion": {
        name: "Concussion",
        pos: "f3",
        icon: icons["spell_fire_fireball"],
        maxRank: 5,
        reqPoints: 25,
        description: talentText`Increases the damage done by your Elemental spells by ${[
          2,
          4,
          6,
          8,
          10,
        ]}%.`,
      },
      "Lightning Storm": {
        name: "Lightning Storm",
        pos: "g2",
        icon: icons["spell_nature_wispheal"],
        maxRank: 1,
        reqPoints: 30,
        prereq: "Elemental Fury",
        arrows: [{ dir: "down", from: "e2", to: "g2" }],
        description: talentText`Call down a Thunderstorm, damaging all enemies caught within the blast for 276 Nature damage, and dazing them for 8 sec.  30 sec cooldown`,
      },
    },
  },
  Enhancement: {
    name: "Enhancement",
    background: backgrounds["enhancement"],
    icon: icons["spell_nature_lightningshield"],
    talents: {
      "Improved Stoneskin Totem": {
        name: "Improved Stoneskin Totem",
        pos: "a1",
        icon: icons["spell_nature_stoneskintotem"],
        maxRank: 3,
        reqPoints: 0,
        description: talentText`Increases the armor bonus of your Stoneskin Totem by ${[
          1,
          2,
          3,
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
        ]}% and increases the amount blocked by ${[
          3,
          6,
          9,
          12,
          15,
        ]}%.`,
      },
      "Precision": {
        name: "Precision",
        pos: "a3",
        icon: icons["ability_marksmanship"],
        maxRank: 5,
        reqPoints: 0,
        description: talentText`Increases your chance to hit by ${[
          1,
          2,
          3,
          4,
          5,
        ]}%.`,
      },
      "Thundering Strikes": {
        name: "Thundering Strikes",
        pos: "a4",
        icon: icons["ability_thunderbolt"],
        maxRank: 5,
        reqPoints: 0,
        description: talentText`Increases your chance to get a critical strike by ${[
          1,
          2,
          3,
          4,
          5,
        ]}%.`,
      },
      "Improved Ghost Wolf": {
        name: "Improved Ghost Wolf",
        pos: "b1",
        icon: icons["spell_nature_spiritwolf"],
        maxRank: 3,
        reqPoints: 5,
        description: talentText`Reduces the casting time of your Ghost Wolf spell by ${[
          1,
          2,
          3,
        ]} sec.`,
      },
      "Earth's Grasp": {
        name: "Earth's Grasp",
        pos: "b3",
        icon: icons["spell_nature_stoneclawtotem"],
        maxRank: 3,
        reqPoints: 5,
        description: talentText`Reduces the cooldown of your Grounding Totem by ${[
          1,
          2,
          3,
        ]} sec and increases the radius of your Earthbind Totem by ${[
          10,
          20,
          30,
        ]}%.`,
      },
      "Improved Lightning Shield": {
        name: "Improved Lightning Shield",
        pos: "b4",
        icon: icons["spell_nature_lightningshield"],
        maxRank: 3,
        reqPoints: 5,
        description: talentText`Increases the damage done by your Lightning Shield spell by ${[
          15,
          30,
          45,
        ]}%.`,
      },
      "Elemental Blessing": {
        name: "Elemental Blessing",
        pos: "c1",
        icon: icons["spell_nature_nullward"],
        maxRank: 1,
        reqPoints: 10,
        description: talentText`Places an Elemental Blessing on the Shaman, reducing damage received from all sources by up to 10 for 30 min.  In addition, when the Shaman blocks a melee attack the attacker will take 14 Nature damage.`,
      },
      "Redoubt": {
        name: "Redoubt",
        pos: "c2",
        icon: icons["inv_shield_06"],
        maxRank: 3,
        reqPoints: 10,
        prereq: "Shield Specialization",
        arrows: [{ dir: "down", from: "a2", to: "c2" }],
        description: talentText`Increases the amount of damage absorbed by your shield by ${[
          10,
          20,
          30,
        ]}%.`,
      },
      "Enhanced Totems": {
        name: "Enhanced Totems",
        pos: "c3",
        icon: icons["spell_nature_earthbindtotem"],
        maxRank: 5,
        reqPoints: 10,
        description: talentText`Increases the duration of your Totems by ${[
          10,
          20,
          30,
          40,
          50,
        ]}%.`,
      },
      "Improved Weapon Totems": {
        name: "Improved Weapon Totems",
        pos: "d2",
        icon: icons["spell_fire_enchantweapon"],
        maxRank: 2,
        reqPoints: 15,
        description: talentText`Increases the melee attack power bonus of your Windfury Totem by ${[
          5,
          10,
        ]}% and increases the spell damage bonus of your Windcaller Totem by ${[
          5,
          10,
        ]}%.`,
      },
      "Elemental Weapons": {
        name: "Elemental Weapons",
        pos: "d3",
        icon: icons["spell_fire_flametounge"],
        maxRank: 3,
        reqPoints: 15,
        description: talentText`Increases the melee attack power bonus of your Rockbiter Weapon by ${[
          5,
          10,
          15,
        ]}%, your Windfury Weapon effect by ${[
          5,
          10,
          15,
        ]}% and increases the spell damage bonus of your Windcaller Weapon by ${[
          5,
          10,
          15,
        ]}%.`,
      },
      "Plate Mail": {
        name: "Plate Mail",
        pos: "e2",
        icon: icons["inv_chest_plate02"],
        maxRank: 1,
        reqPoints: 20,
        description: talentText`Allows you to wear Plate Mail armor.`,
      },
      "Thunderstruck": {
        name: "Thunderstruck",
        pos: "e3",
        icon: icons["spell_nature_purge"],
        maxRank: 3,
        reqPoints: 20,
        description: talentText`Your Shock spells have a ${[
          33,
          66,
          100,
        ]}% chance to increase the damage done by your party by 1% for 15 sec.  Stacks up to 3 times.`,
      },
      "Flurry": {
        name: "Flurry",
        pos: "f3",
        icon: icons["ability_ghoulfrenzy"],
        maxRank: 5,
        reqPoints: 25,
        description: talentText`Increases your attack speed by ${[
          5,
          10,
          15,
          20,
          25,
        ]}% for your next 3 swings after dealing a melee critical strike.`,
      },
      "Stormstrike": {
        name: "Stormstrike",
        pos: "g2",
        icon: icons["spell_holy_sealofmight"],
        maxRank: 1,
        reqPoints: 30,
        prereq: "Plate Mail",
        arrows: [{ dir: "down", from: "e2", to: "g2" }],
        description: talentText`Gives you an extra attack and generates 3% of your total mana.  In addition, the next 2 sources of Nature damage dealt to the target are increased by 20%.  Lasts 12 sec.  10 sec cooldown`,
      },
    },
  },
  Restoration: {
    name: "Restoration",
    background: backgrounds["restoration"],
    icon: icons["spell_nature_magicimmunity"],
    talents: {
      "Tidal Mastery": {
        name: "Tidal Mastery",
        pos: "a1",
        icon: icons["spell_nature_tranquility"],
        maxRank: 5,
        reqPoints: 0,
        description: talentText`Increases your chance to get a critical strike with spells by ${[
          1,
          2,
          3,
          4,
          5,
        ]}%.`,
      },
      "Grace": {
        name: "Grace",
        pos: "a2",
        icon: icons["spell_nature_healingtouch"],
        maxRank: 5,
        reqPoints: 0,
        description: talentText`Reduces the threat caused by your spells by ${[
          5,
          10,
          15,
          20,
          25,
        ]}% and gives them a ${[
          6,
          12,
          18,
          24,
          30,
        ]}% chance to resist dispel effects.`,
      },
      "Elemental Warding": {
        name: "Elemental Warding",
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
      "Totemic Focus": {
        name: "Totemic Focus",
        pos: "b2",
        icon: icons["spell_nature_moonglow"],
        maxRank: 5,
        reqPoints: 5,
        description: talentText`Reduces the Mana cost of your totems by ${[
          5,
          10,
          15,
          20,
          25,
        ]}%.`,
      },
      "Improved Healing Waves": {
        name: "Improved Healing Waves",
        pos: "b3",
        icon: icons["spell_nature_healingwavelesser"],
        maxRank: 5,
        reqPoints: 5,
        description: talentText`Reduces the casting time of your Healing Wave and Lesser Healing Wave spells by ${[
          0.1,
          0.2,
          0.3,
          0.4,
          0.5,
        ]} sec.`,
      },
      "Shamanistic Focus": {
        name: "Shamanistic Focus",
        pos: "c1",
        icon: icons["spell_nature_sentinal"],
        maxRank: 1,
        reqPoints: 10,
        description: talentText`When activated, reduces the Mana cost of your next spell by 100%.`,
      },
      "Tidal Focus": {
        name: "Tidal Focus",
        pos: "c2",
        icon: icons["spell_frost_manarecharge"],
        maxRank: 5,
        reqPoints: 10,
        description: talentText`Increases the amount healed by your Healing Wave and Lesser Healing Wave spells by ${[
          2,
          4,
          6,
          8,
          10,
        ]}%.`,
      },
      "Restorative Totems": {
        name: "Restorative Totems",
        pos: "c3",
        icon: icons["spell_nature_manaregentotem"],
        maxRank: 3,
        reqPoints: 10,
        description: talentText`Increases the effect of your Mana Spring and Healing Stream totems by ${[
          5,
          10,
          15,
        ]}%.`,
      },
      "Healing Focus": {
        name: "Healing Focus",
        pos: "c4",
        icon: icons["spell_nature_protectionformnature"],
        maxRank: 2,
        reqPoints: 10,
        description: talentText`Gives you a ${[
          35,
          70,
        ]}% chance to resist interruption caused by damage while casting any healing spell.`,
      },
      "Ancestral Healing": {
        name: "Ancestral Healing",
        pos: "d2",
        icon: icons["spell_nature_undyingstrength"],
        maxRank: 2,
        reqPoints: 15,
        description: talentText`Increases your target's armor value by ${[
          10,
          20,
        ]}% for 15 sec after getting a critical effect from one of your healing spells.`,
      },
      "Improved Reincarnation": {
        name: "Improved Reincarnation",
        pos: "d3",
        icon: icons["spell_nature_reincarnation"],
        maxRank: 3,
        reqPoints: 15,
        description: talentText`Reduces the cooldown of your Reincarnation spell by ${[
          6,
          12,
          18,
        ]} min and increases the amount of health and mana you reincarnate with by ${[
          10,
          20,
          30,
        ]}%.`,
      },
      "Nature's Swiftness": {
        name: "Nature's Swiftness",
        pos: "e2",
        icon: icons["spell_nature_ravenform"],
        maxRank: 1,
        reqPoints: 20,
        description: talentText`When activated, your next Nature spell becomes an instant cast spell.  2 min cooldown`,
      },
      "Healing Way": {
        name: "Healing Way",
        pos: "e3",
        icon: icons["classic_spell_nature_healingway"],
        maxRank: 3,
        reqPoints: 20,
        description: talentText`Your Healing Wave spells have ${[
          33,
          66,
          100,
        ]}% chance to increase the effect of subsequent Healing Wave spells on that target by 6% for 15 sec.  This effect will stack up to 3 times.`,
      },
      "Purification": {
        name: "Purification",
        pos: "f3",
        icon: icons["spell_frost_wizardmark"],
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
      "Mana Tide Totem": {
        name: "Mana Tide Totem",
        pos: "g2",
        icon: icons["spell_frost_summonwaterelemental"],
        maxRank: 1,
        reqPoints: 30,
        prereq: "Nature's Swiftness",
        arrows: [{ dir: "down", from: "e2", to: "g2" }],
        description: talentText`Summons a Mana Tide Totem with 5 health at the feet of the caster for 12 sec that restores 170 mana every 3 sec to group members within 20 yards.  5 min cooldown`,
      },
    },
  },
};
