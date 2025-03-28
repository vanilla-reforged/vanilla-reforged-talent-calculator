import { TalentData } from "../../TalentContext";
import { talentText, requireAll } from "../../utils";

const backgrounds = requireAll(
  require.context("../../assets/tree-backgrounds/mage"),
);
const icons = requireAll(require.context("../../assets/icons/mage"));

export const data: TalentData = {
  Arcane: {
    name: "Arcane",
    background: backgrounds["arcane"],
    icon: icons["spell_holy_magicalsentry"],
    talents: {
      "Arcane Resilience": {
        name: "Arcane Resilience",
        pos: "a1",
        icon: icons["spell_arcane_arcaneresilience"],
        maxRank: 3,
        reqPoints: 0,
        description: talentText`Increases your armor by an amount equal to ${[
          25,
          50,
          75,
        ]}% of your Intellect.`,
      },
      "Arcane Focus": {
        name: "Arcane Focus",
        pos: "a2",
        icon: icons["spell_holy_dispelmagic"],
        maxRank: 5,
        reqPoints: 0,
        description: talentText`Increases your chance to hit with Arcane spells by ${[
          1,
          2,
          3,
          4,
          5,
        ]}%.`,
      },
      "Arcane Wrath": {
        name: "Arcane Wrath",
        pos: "a3",
        icon: icons["spell_holy_devotion"],
        maxRank: 5,
        reqPoints: 0,
        description: talentText`Increases your chance to get a critical strike with Arcane spells by ${[
          1,
          2,
          3,
          4,
          5,
        ]}%.`,
      },
      "Improved Evocation": {
        name: "Improved Evocation",
        pos: "b2",
        icon: icons["spell_nature_purge"],
        maxRank: 5,
        reqPoints: 5,
        description: talentText`Reduces the cooldown of your Evocation spell by ${[
          1,
          2,
          3,
          4,
          5,
        ]} min.`,
      },
      "Improved Blink": {
        name: "Improved Blink",
        pos: "b3",
        icon: icons["spell_arcane_blink"],
        maxRank: 5,
        reqPoints: 5,
        description: talentText`Reduces the cooldown of your Blink spell by ${[
          1,
          2,
          3,
          4,
          5,
        ]} sec.`,
      },
      "Arcane Concentration": {
        name: "Arcane Concentration",
        pos: "c1",
        icon: icons["spell_shadow_manaburn"],
        maxRank: 1,
        reqPoints: 10,
        description: talentText`Gives you a ${[
          10,
        ]}% chance of entering a Clearcasting state after any of your damage spells hit a target.  The Clearcasting state reduces the mana cost of your next damage spell by 100%.`,
      },
      "Arcane Reach": {
        name: "Arcane Reach",
        pos: "b1",
        icon: icons["spell_nature_abolishmagic"],
        maxRank: 2,
        reqPoints: 5,
        description: talentText`Increases the range of your Arcane spells by ${[
          10,
          20,
        ]}% and gives them a ${[
          15,
          30,
        ]}% chance to resist dispel effects.`,
      },
      "Arcane Mind": {
        name: "Arcane Mind",
        pos: "c2",
        icon: icons["spell_shadow_charm"],
        maxRank: 5,
        reqPoints: 10,
        description: talentText`Reduces the mana cost of your Arcane spells by ${[
          5,
          10,
          15,
          20,
          25,
        ]}% and reduces the threat caused by your Arcane spells by ${[
          5,
          10,
          15,
          20,
          25,
        ]}%.`,
      },
      "Improved Arcane Explosion": {
        name: "Improved Arcane Explosion",
        pos: "c3",
        icon: icons["spell_nature_wispsplode"],
        maxRank: 3,
        reqPoints: 10,
        description: talentText`Increases the critical strike chance of your Arcane Explosion spell by an additional ${[
          5,
          10,
          15,
        ]}%.`,
      },
      "Arcane Meditation": {
        name: "Arcane Meditation",
        pos: "c4",
        icon: icons["spell_shadow_siphonmana"],
        maxRank: 2,
        reqPoints: 10,
        description: talentText`Allows ${[
          10,
          20,
        ]}% of your Mana regeneration to continue while casting.`,
      },
      "Improved Counterspell": {
        name: "Improved Counterspell",
        pos: "d2",
        icon: icons["spell_frost_iceshock"],
        maxRank: 2,
        reqPoints: 15,
        description: talentText`Gives your Counterspell a ${[
          50,
          100,
        ]}% chance to silence the target for 3 sec.`,
      },
      "Improved Mana Shield": {
        name: "Improved Mana Shield",
        pos: "d3",
        icon: icons["spell_shadow_detectlesserinvisibility"],
        maxRank: 3,
        reqPoints: 15,
        description: talentText`Decreases the mana lost per point of damage taken when your Mana Shield is active by ${[
          20,
          40,
          60,
        ]}%.`,
      },
      "Arcane Burst": {
        name: "Arcane Burst",
        pos: "e2",
        icon: icons["spell_arcane_starfire"],
        maxRank: 1,
        reqPoints: 20,
        description: talentText`All of your Arcane spell critical strikes grace you with an Arcane Burst, reducing the casting time of your next Fireball, Frostbolt or Pyroblast spell by 0.5 sec.  Stacks up to 3 times.`,
      },
      "Magic Absorption": {
        name: "Magic Absorption",
        pos: "e3",
        icon: icons["spell_nature_astralrecalgroup"],
        maxRank: 3,
        reqPoints: 20,
        description: talentText`Increases all of your resistances by ${[
          4,
          8,
          12,
        ]} and causes all spells you fully resist to restore ${[
          2,
          4,
          6,
        ]}% of your total Mana.  1 sec cooldown`,
      },
      "Arcane Instability": {
        name: "Arcane Instability",
        pos: "f3",
        icon: icons["spell_shadow_teleport"],
        maxRank: 5,
        reqPoints: 25,
        description: talentText`Increases the damage done by your Arcane spells by ${[
          2,
          4,
          6,
          8,
          10,
        ]}%.`,
      },
      "Arcane Power": {
        name: "Arcane Power",
        pos: "g2",
        icon: icons["spell_nature_lightning"],
        maxRank: 1,
        reqPoints: 30,
        prereq: "Arcane Burst",
        arrows: [{ dir: "down", from: "e2", to: "g2" }],
        description: talentText`When activated, your spells deal 30% more damage while costing 30% more mana for 15 sec.  2 min cooldown`,
      },
    },
  },
  Fire: {
    name: "Fire",
    background: backgrounds["fire"],
    icon: icons["spell_fire_firebolt02"],
    talents: {
      "Impact": {
        name: "Impact",
        pos: "a1",
        icon: icons["spell_fire_meteorstorm"],
        maxRank: 5,
        reqPoints: 0,
        description: talentText`Gives your Fire spells a ${[
          2,
          4,
          6,
          8,
          10,
        ]}% chance to stun the target for 2 sec.`,
      },
      "Fiery Focus": {
        name: "Fiery Focus",
        pos: "a2",
        icon: icons["spell_fire_firebolt"],
        maxRank: 5,
        reqPoints: 0,
        description: talentText`Increases your chance to hit with Fire spells by ${[
          1,
          2,
          3,
          4,
          5,
        ]}%.`,
      },
      "Fiery Wrath": {
        name: "Fiery Wrath",
        pos: "a3",
        icon: icons["spell_fire_lavaspawn"],
        maxRank: 5,
        reqPoints: 0,
        description: talentText`Increases your chance to get a critical strike with Fire spells by ${[
          1,
          2,
          3,
          4,
          5,
        ]}%.`,
      },
      "Flame Throwing": {
        name: "Flame Throwing",
        pos: "b1",
        icon: icons["spell_fire_flare"],
        maxRank: 2,
        reqPoints: 5,
        description: talentText`Increases the range of your Fire spells by ${[
          10,
          20,
        ]}% and gives them a ${[
          15,
          30,
        ]}% chance to resist dispel effects.`,
      },
      "Improved Fireball": {
        name: "Improved Fireball",
        pos: "b2",
        icon: icons["spell_fire_firebolt02"],
        maxRank: 5,
        reqPoints: 5,
        description: talentText`Reduces the casting time of your Fireball spell by ${[
          0.1,
          0.2,
          0.3,
          0.4,
          0.5,
        ]} sec.`,
      },
      "Improved Fire Blast": {
        name: "Improved Fire Blast",
        pos: "b3",
        icon: icons["spell_fire_fireball"],
        maxRank: 3,
        reqPoints: 5,
        description: talentText`Reduces the cooldown of your Fire Blast spell by ${[
          0.5,
          1,
          1.5,
        ]} sec.`,
      },
      "Pyroblast": {
        name: "Pyroblast",
        pos: "c1",
        icon: icons["spell_fire_fireball02"],
        maxRank: 1,
        reqPoints: 10,
        description: talentText`Hurls an immense fiery boulder that causes 140 Fire damage and an additional 52 Fire damage over 12 sec.`,
      },
      "Master of Flame": {
        name: "Master of Flame",
        pos: "c2",
        icon: icons["spell_fire_flameshock"],
        maxRank: 5,
        reqPoints: 10,
        description: talentText`Reduces the mana cost of your Fire spells by ${[
          5,
          10,
          15,
          20,
          25,
        ]}% and reduces the threat caused by your Fire spells by ${[
          5,
          10,
          15,
          20,
          25,
        ]}%.`,
      },
      "Improved Flamestrike": {
        name: "Improved Flamestrike",
        pos: "c3",
        icon: icons["spell_fire_selfdestruct"],
        maxRank: 3,
        reqPoints: 10,
        description: talentText`Increases the critical strike chance of your Flamestrike spell by ${[
          5,
          10,
          15,
        ]}%.`,
      },
      "Burning Soul": {
        name: "Burning Soul",
        pos: "c4",
        icon: icons["spell_fire_fire"],
        maxRank: 2,
        reqPoints: 10,
        description: talentText`Gives you a ${[
          35,
          70,
        ]}% chance to resist interruption caused by damage while casting any Fire spell.`,
      },
      "Master of Elements": {
        name: "Master of Elements",
        pos: "d2",
        icon: icons["spell_fire_masterofelements"],
        maxRank: 2,
        reqPoints: 15,
        description: talentText`Your Fire and Frost spell critical strikes will refund ${[
          10,
          20,
        ]}% of their base mana cost.`,
      },
      "Ignite": {
        name: "Ignite",
        pos: "d3",
        icon: icons["spell_fire_incinerate"],
        maxRank: 3,
        reqPoints: 15,
        description: talentText`Your Fire spell critical strikes cause the target to burn for an additional ${[
          4,
          8,
          12,
        ]}% of your spell's damage.`,
      },
      "Blast Wave": {
        name: "Blast Wave",
        pos: "e2",
        icon: icons["spell_holy_excorcism_02"],
        maxRank: 1,
        reqPoints: 20,
        description: talentText`A wave of flame radiates outward from the caster, damaging all enemies caught within the blast for 153 Fire damage, and dazing them for 6 sec.  45 sec cooldown`,
      },
      "Ashmaker": {
        name: "Ashmaker",
        pos: "e3",
        icon: icons["spell_nature_wispheal"],
        maxRank: 3,
        reqPoints: 20,
        description: talentText`Increases the damage done by your Fireball, Fire Blast and Pyroblast spells by ${[
          2,
          4,
          6,
        ]}%.`,
      },
      "Fire Power": {
        name: "Fire Power",
        pos: "f3",
        icon: icons["spell_fire_immolation"],
        maxRank: 5,
        reqPoints: 25,
        description: talentText`Increases the damage done by your Fire spells by ${[
          2,
          4,
          6,
          8,
          10,
        ]}%.`,
      },
      "Combustion": {
        name: "Combustion",
        pos: "g2",
        icon: icons["spell_fire_sealoffire"],
        maxRank: 1,
        reqPoints: 30,
        prereq: "Blast Wave",
        arrows: [{ dir: "down", from: "e2", to: "g2" }],
        description: talentText`When activated, this spell causes each of your Fire spell hits to improve your chance to get a critical strike with Fire spells by 10% until you have caused 3 critical strikes with Fire spells.  2 min cooldown`,
      },
    },
  },
  Frost: {
    name: "Frost",
    background: backgrounds["frost"],
    icon: icons["spell_frost_frostbolt02"],
    talents: {
      "Improved Frost Armor": {
        name: "Improved Frost Armor",
        pos: "a1",
        icon: icons["spell_frost_frostarmor02"],
        maxRank: 3,
        reqPoints: 0,
        description: talentText`Increases the Armor bonus given by your Frost Armor spell by ${[
          5,
          10,
          15,
        ]}% and increases the duration of its chill effect by ${[
          1,
          2,
          3,
        ]} sec.`,
      },
      "Frozen Focus": {
        name: "Frozen Focus",
        pos: "a2",
        icon: icons["spell_ice_magicdamage"],
        maxRank: 5,
        reqPoints: 0,
        description: talentText`Increases your chance to hit with Frost spells by ${[
          1,
          2,
          3,
          4,
          5,
        ]}%.`,
      },
      "Frozen Wrath": {
        name: "Frozen Wrath",
        pos: "a3",
        icon: icons["spell_frost_frostbolt"],
        maxRank: 5,
        reqPoints: 0,
        description: talentText`Increases your chance to get a critical strike with Frost spells by ${[
          1,
          2,
          3,
          4,
          5,
        ]}%.`,
      },
      "Frostbite": {
        name: "Frostbite",
        pos: "a4",
        icon: icons["spell_frost_frostarmor"],
        maxRank: 5,
        reqPoints: 0,
        description: talentText`Gives your Chill effects a ${[
          2,
          4,
          6,
          8,
          10,
        ]}% chance to freeze the target for 5 sec.`,
      },
      "Arctic Reach": {
        name: "Arctic Reach",
        pos: "b1",
        icon: icons["spell_shadow_darkritual"],
        maxRank: 2,
        reqPoints: 5,
        description: talentText`Increases the range of your Frost spells by ${[
          10,
          20,
        ]}% and gives them a ${[
          15,
          30,
        ]}% chance to resist dispel effects.`,
      },
      "Improved Frostbolt": {
        name: "Improved Frostbolt",
        pos: "b2",
        icon: icons["spell_frost_frostbolt02"],
        maxRank: 5,
        reqPoints: 5,
        description: talentText`Reduces the casting time of your Frostbolt spell by ${[
          0.1,
          0.2,
          0.3,
          0.4,
          0.5,
        ]} sec.`,
      },
      "Improved Frost Nova": {
        name: "Improved Frost Nova",
        pos: "b3",
        icon: icons["spell_frost_freezingbreath"],
        maxRank: 3,
        reqPoints: 5,
        description: talentText`Reduces the cooldown of your Frost Nova spell by ${[
          2,
          4,
          6,
        ]} sec.`,
      },
      "Ice Block": {
        name: "Ice Block",
        pos: "c1",
        icon: icons["spell_frost_frost"],
        maxRank: 1,
        reqPoints: 10,
        description: talentText`You become encased in a block of ice, protecting you from all physical attacks and spells for 10 sec, but during that time you cannot, move or cast spells.  5 min cooldown`,
      },
      "Frost Channeling": {
        name: "Frost Channeling",
        pos: "c2",
        icon: icons["spell_frost_stun"],
        maxRank: 5,
        reqPoints: 10,
        description: talentText`Reduces the mana cost of your Frost spells by ${[
          5,
          10,
          15,
          20,
          25,
        ]}% and reduces the threat caused by your Frost spells by ${[
          5,
          10,
          15,
          20,
          25,
        ]}%.`,
      },
      "Frozen Soul": {
        name: "Frozen Soul",
        pos: "c3",
        icon: icons["spell_frost_wisp"],
        maxRank: 2,
        reqPoints: 10,
        description: talentText`Gives you a ${[
          35,
          70,
        ]}% chance to resist interruption caused by damage while casting any Frost spell.`,
      },
      "Improved Blizzard": {
        name: "Improved Blizzard",
        pos: "d2",
        icon: icons["spell_frost_icestorm"],
        maxRank: 3,
        reqPoints: 15,
        description: talentText`Adds a chill effect to your Blizzard spell.  This effect lowers the target's movement speed by ${[
          25,
          50,
        ]}%.  Lasts 2 sec.`,
      },
      "Improved Cone of Cold": {
        name: "Improved Cone of Cold",
        pos: "d3",
        icon: icons["spell_frost_glacier"],
        maxRank: 3,
        reqPoints: 15,
        description: talentText`Increases the damage done by your Cone of Cold spell by ${[
          10,
          20,
          30,
        ]}%.`,
      },
      "Ice Shards": {
        name: "Ice Shards",
        pos: "e2",
        icon: icons["spell_frost_iceshard"],
        maxRank: 1,
        reqPoints: 20,
        description: talentText`Increases the critical strike damage bonus of your Frost spells by ${[
          100,
        ]}%.`,
      },
      "Shatter": {
        name: "Shatter",
        pos: "e3",
        icon: icons["spell_frost_frostshock"],
        maxRank: 3,
        reqPoints: 20,
        description: talentText`Increases the critical strike chance of all your spells against frozen targets by ${[
          10,
          20,
          30,
        ]}%.`,
      },
      "Winter's Chill": {
        name: "Winter's Chill",
        pos: "f3",
        icon: icons["spell_frost_chillingblast"],
        maxRank: 5,
        reqPoints: 25,
        description: talentText`Increases the damage done by your Frost spells by ${[
          2,
          4,
          6,
          8,
          10,
        ]}%.`,
      },
      "Sphere of Frost": {
        name: "Sphere of Frost",
        pos: "g2",
        icon: icons["spell_frost_wizardmark"],
        maxRank: 1,
        reqPoints: 30,
        prereq: "Ice Shards",
        arrows: [{ dir: "down", from: "e2", to: "g2" }],
        description: talentText`Conjure a Sphere of Frost, dealing 276 Frost damage to all enemies within the area and freezing them for 8 sec.`,
      },
    },
  },
};