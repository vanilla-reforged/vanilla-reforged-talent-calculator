import { areReqPointsMet, TalentData } from "../../TalentContext";
import { talentText, requireAll } from "../../utils";

const backgrounds = requireAll(
  require.context("../../assets/tree-backgrounds/warlock"),
);
const icons = requireAll(require.context("../../assets/icons/warlock"));

export const data: TalentData = {
  Affliction: {
    name: "Affliction",
    background: backgrounds["affliction"],
    icon: icons["spell_shadow_deathcoil"],
    talents: {
      "Improved Drain Soul": {
        name: "Improved Drain Soul",
        pos: "a1",
        icon: icons["spell_shadow_haunting"],
        maxRank: 2,
        reqPoints: 0,
        description: talentText`Gives you a ${[
          50,
          100,
        ]}% chance to get a 100% increase to your Mana regeneration for 10 sec if the target is killed by you while you drain its soul.  For the duration, your Mana will regenerate at a 50% rate while casting.`,
      },
      "Suppression": {
        name: "Suppression",
        pos: "a2",
        icon: icons["spell_shadow_unsummonbuilding"],
        maxRank: 5,
        reqPoints: 0,
        description: talentText`Improves your chance to hit with Affliction spells by ${[
          1,
          2,
          3,
          4,
          5,
        ]}%.`,
      },
      "Misery": {
        name: "Misery",
        pos: "a3",
        icon: icons["spell_shadow_gathershadows"],
        maxRank: 5,
        reqPoints: 0,
        description: talentText`Gives your Corruption, Curse of Agony, Drain Life and Drain Mana spells a ${[
          2,
          4,
          6,
          8,
          10,
        ]}% chance to stun the target for 2 sec.`,
      },
      "Grim Reach": {
        name: "Grim Reach",
        pos: "b1",
        icon: icons["spell_shadow_callofbone"],
        maxRank: 2,
        reqPoints: 5,
        description: talentText`Increases the range of your Affliction spells by ${[
          10,
          20,
        ]}%.`,
      },
      "Improved Fear": {
        name: "Improved Fear",
        pos: "b2",
        icon: icons["spell_shadow_possession"],
        maxRank: 5,
        reqPoints: 5,
        description: talentText`Reduces the casting time of your Howl of Terror and Fear spells by ${[
          0.1,
          0.2,
          0.3,
          0.4,
          0.5
        ]} sec.`,
      },
      "Improved Corruption": {
        name: "Improved Corruption",
        pos: "b3",
        icon: icons["spell_shadow_abominationexplosion"],
        maxRank: 5,
        reqPoints: 5,
        description: talentText`Reduces the casting time of your Corruption spell by ${[
          0.4,
          0.8,
          1.2,
          1.6,
          2,
        ]} sec.`,
      },
      "Curse of Exhaustion": {
        name: "Curse of Exhaustion",
        pos: "c1",
        icon: icons["spell_shadow_grimward"],
        maxRank: 1,
        reqPoints: 10,
        description: talentText`Reduces the target's movement speed by 30% for 12 sec.  Only one Curse per Warlock can be active on any one target.`,
      },
      "Calamity": {
        name: "Calamity",
        pos: "c2",
        icon: icons["spell_shadow_manaburn"],
        maxRank: 5,
        reqPoints: 10,
        description: talentText`Reduces the mana cost of your Affliction spells by ${[
          5,
          10,
          15,
          20,
          25,
        ]}% and reduces the threat caused by your Affliction spells by ${[
          5,
          10,
          15,
          20,
          25,
        ]}%.`,
      },
      "Fel Concentration": {
        name: "Fel Concentration",
        pos: "c3",
        icon: icons["spell_shadow_fingerofdeath"],
        maxRank: 3,
        reqPoints: 10,
        description: talentText`Gives you a ${[
          35,
          70,
          100,
        ]}% chance to resist interruption caused by damage while casting the Drain Life, Drain Mana, or Drain Soul spell.`,
      },
      "Improved Curse of Agony": {
        name: "Improved Curse of Agony",
        pos: "c4",
        icon: icons["spell_shadow_curseofsargeras"],
        maxRank: 3,
        reqPoints: 10,
        description: talentText`Increases the damage done by your Curse of Agony spell by ${[
          5,
          10,
          15,
        ]}%.`,
      },
      "Improved Life Tap": {
        name: "Improved Life Tap",
        pos: "d2",
        icon: icons["spell_shadow_burningspirit"],
        maxRank: 2,
        reqPoints: 15,
        description: talentText`Increases the amount of Mana awarded by your Life Tap spell by ${[
          10,
          20,
        ]}%.`,
      },
      "Improved Drain Life": {
        name: "Improved Drain Life",
        pos: "d3",
        icon: icons["spell_shadow_lifedrain02"],
        maxRank: 3,
        reqPoints: 15,
        prereq: "Fel Concentration",
        arrows: [{ dir: "down", from: "c3", to: "d3" }],
        description: talentText`Increases the Health drained by your Drain Life spell by ${[
          5,
          10,
          15,
        ]}%.`,
      },
      "Amplify Curse": {
        name: "Amplify Curse",
        pos: "e2",
        icon: icons["spell_shadow_contagion"],
        maxRank: 1,
        reqPoints: 20,
        description: talentText`Increases the effect of your next Curse of Agony by 100% or your next Curse of Exhaustion by 20%.  Lasts 30 sec.  2 min cooldown`,
      },
      "Blight": {
        name: "Blight",
        pos: "e3",
        icon: icons["spell_shadow_requiem"],
        maxRank: 3,
        reqPoints: 20,
        description: talentText`Increases the damage done by your Corruption, Drain Life and Shadow Bolt spells by ${[
          2,
          4,
          6,
        ]}%.`,
      },
      "Shadow Mastery": {
        name: "Shadow Mastery",
        pos: "f3",
        icon: icons["spell_shadow_shadetruesight"],
        maxRank: 5,
        reqPoints: 25,
        description: talentText`Increases the damage dealt or life drained by your Shadow spells by ${[
          2,
          4,
          6,
          8,
          10,
        ]}%.`,
      },
      "Nightfall": {
        name: "Nightfall",
        pos: "g2",
        icon: icons["spell_shadow_twilight"],
        maxRank: 1,
        reqPoints: 30,
        prereq: "Amplify Curse",
        arrows: [{ dir: "down", from: "e2", to: "g2" }],
        description: talentText`Gives your Corruption and Drain Life spells a 10% chance to reduce the casting time of your next Shadow Bolt spell by 100%.`,
      },
    },
  },
  "Demonology": {
    name: "Demonology",
    background: backgrounds["demonology"],
    icon: icons["spell_shadow_metamorphosis"],
    talents: {
      "Improved Demon Skin": {
        name: "Improved Demon Skin",
        pos: "a1",
        icon: icons["spell_shadow_demon_armor"],
        maxRank: 3,
        reqPoints: 0,
        description: talentText`Increases the effects of your Demon Skin spell by ${[
          4,
          10,
          15,
        ]}%.`,
      },
      "Demonic Precision": {
        name: "Demonic Precision",
        pos: "a2",
        icon: icons["inv_misc_monsterclaw_04"],
        maxRank: 5,
        reqPoints: 0,
        description: talentText`Improves your summoned demon's chance to hit by ${[
          2,
          4,
          6,
          8,
          10,
        ]}%.`,
      },
      "Demonic Ferocity": {
        name: "Demonic Ferocity",
        pos: "a3",
        icon: icons["ability_druid_bash"],
        maxRank: 5,
        reqPoints: 0,
        description: talentText`Improves your summoned demon's chance to get a critical strike by ${[
          3,
          6,
          9,
          12,
          15,
        ]}%.`,
      },
      "Motivation by Threat": {
        name: "Motivation by Threat",
        pos: "b2",
        icon: icons["spell_shadow_summonimp"],
        maxRank: 5,
        reqPoints: 5,
        description: talentText`Reduces the casting time of your Imp's Firebolt spell by ${[
          0.1,
          0.2,
          0.3,
          0.4,
          0.5,
        ]} sec, the cooldown of your Succubus' Lash of Pain and your Felhunters Shadow Charge spells by ${[
          1,
          2,
          3,
          4,
          5,
        ]} sec and reduces the cooldown of Voidwalker's Torment spell by ${[
          0.4,
          0.8,
          1.2,
          1.6,
          2,
        ]} sec`,
      },
      "Fel Endurance": {
        name: "Fel Endurance",
        pos: "b3",
        icon: icons["spell_shadow_antishadow"],
        maxRank: 5,
        reqPoints: 5,
        description: talentText`Increases the maximum Health and Mana of your summoned demon by ${[
          3,
          6,
          9,
          12,
          15,
        ]}%.`,
      },
      "Fel Domination": {
        name: "Fel Domination",
        pos: "c1",
        icon: icons["spell_nature_removecurse"],
        maxRank: 1,
        reqPoints: 10,
        description: talentText`Your next Demon Summoning spell has its casting time reduced by 4 sec and its mana cost reduced by 50%.  15 min cooldown`,
      },
      "Master Summoner": {
        name: "Master Summoner",
        pos: "c2",
        icon: icons["spell_shadow_impphaseshift"],
        maxRank: 3,
        reqPoints: 10,
        prereq: "Fel Domination",
        arrows: [{ dir: "right", from: "c1", to: "c2" }],
        description: talentText`Reduces the casting time of your demon summoning spells by ${[
          2,
          4,
          6,
        ]} sec and the Mana cost by ${[
          10,
          20,
          30
        ]}%.`,
      },
      "Demonic Embrace": {
        name: "Demonic Embrace",
        pos: "c3",
        icon: icons["spell_shadow_metamorphosis"],
        maxRank: 5,
        reqPoints: 10,
        description: talentText`Increases your total Stamina by ${[
          3,
          6,
          9,
          12,
          15,
        ]}% but reduces your total Spirit by ${[
          1,
          2,
          3,
          4,
          5,
        ]}%.`,
      },
      "Fel Swiftness": {
        name: "Fel Swiftness",
        pos: "c4",
        icon: icons["ability_druid_dash"],
        maxRank: 3,
        reqPoints: 10,
        description: talentText`Increases the outdoor movement speed of your summoned demon by ${[
          15,
          30,
          45,
        ]}%.`,
      },
      "Improved Enslave Demon": {
        name: "Improved Enslave Demon",
        pos: "d2",
        icon: icons["spell_shadow_enslavedemon"],
        maxRank: 3,
        reqPoints: 15,
        description: talentText`Reduces the Attack Speed and Casting Speed penalty of your Enslave Demon spell by ${[
          5,
          10,
          15,
        ]}% and reduces the resist chance by ${[
          5,
          10,
          15,
        ]}%.`,
      },
      "Demonic Command": {
        name: "Demonic Commands",
        pos: "d3",
        icon: icons["spell_shadow_shadowworddominate"],
        maxRank: 3,
        reqPoints: 15,
        description: talentText`Increases the damage and duration of your summoned demon's abilities by ${[
          10,
          20,
          30,
        ]}%.`,
      },
      "Fear of Consequences": {
        name: "Fear of Consequences",
        pos: "e1",
        icon: icons["spell_shadow_improvedvampiricembrace"],
        maxRank: 3,
        reqPoints: 20,
        description: talentText`Increases the damage done by your summoned demon by ${[
          3,
          6,
          9,
        ]}%.`,
      },
      "Soul Link": {
        name: "Soul Link",
        pos: "e2",
        icon: icons["spell_shadow_gathershadows"],
        maxRank: 1,
        reqPoints: 20,
        description: talentText`When active, 20% of all damage taken by the caster is taken by your Imp, Voidwalker, Succubus, or Felhunter demon instead.  In addition, both the demon and master will inflict 1% more damage.  Lasts as long as the demon is active.`,
      },
      "Master Demonologist": {
        name: "Master Demonologist",
        pos: "f3",
        icon: icons["spell_shadow_shadowpact"],
        maxRank: 5,
        reqPoints: 25,
        prereq: "Demonic Command",
        arrows: [{ dir: "down", from: "d3", to: "f3" }],
        description: talentText`Grants both the Warlock and the summoned demon an effect as long as the demon is active.\n\nImp - Reduces threat caused by ${[
          4,
          8,
          12,
          16,
          20,
        ]}%.\n\nVoidwalker - Reduces physical damage taken by ${[
          2,
          4,
          6,
          8,
          10,
        ]}%.\n\nSuccubus - Increases all damage caused by ${[
          2,
          4,
          6,
          8,
          10,
        ]}%.\n\nFelhunter - Increases all resistances by ${[
          0.2,
          0.4,
          0.6,
          0.8,
          1,
        ]} per level.`,
      },
      "Demonic Sacrifice": {
        name: "Demonic Sacrifice",
        pos: "g2",
        icon: icons["spell_shadow_psychicscream"],
        maxRank: 1,
        reqPoints: 30,
        prereq: "Soul Link",
        arrows: [{ dir: "down", from: "e2", to: "g2" }],
        description: talentText`When activated, sacrifices your summoned demon to grant you an effect that lasts 30 min.\n\nImp: Increases your Fire damage by 15%.\n\nVoidwalker: Restores 3% of your total Health every 4 sec.\n\nSuccubus: Increases your Shadow damage by 15%.\n\nFelhunter: Restores 2% of total Mana every 4 sec.`,
      },
    },
  },
  "Destruction": {
    name: "Destruction",
    background: backgrounds["destruction"],
    icon: icons["spell_shadow_rainoffire"],
    talents: {
      "Aftermath": {
        name: "Aftermath",
        pos: "a1",
        icon: icons["spell_fire_fire"],
        maxRank: 5,
        reqPoints: 0,
        description: talentText`Gives your Destruction spells a ${[
          3,
          6,
          9,
          12,
          15,
        ]}% chance to daze the target for 5 sec.`,
      },
      "Seek and Destroy": {
        name: "Seek and Destroy",
        pos: "a2",
        icon: icons["spell_fire_flare"],
        maxRank: 5,
        reqPoints: 0,
        description: talentText`Improves your chance to hit with Destruction spells by ${[
          1,
          2,
          3,
          4,
          5,
        ]}%.`,
      },
      "Devastation": {
        name: "Devastation",
        pos: "a3",
        icon: icons["spell_fire_flameshock"],
        maxRank: 5,
        reqPoints: 0,
        description: talentText`Improves your chance to get a critical strike with Destruction spells by ${[
          1,
          2,
          3,
          4,
          5,
        ]}%.`,
      },
      "Destructive Reach": {
        name: "Destructive Reach",
        pos: "b1",
        icon: icons["spell_shadow_corpseexplode"],
        maxRank: 2,
        reqPoints: 5,
        description: talentText`Increases the range of your Destruction spells by ${[
          10,
          20,
        ]}%.`,
      },
      "Bane": {
        name: "Bane",
        pos: "b2",
        icon: icons["spell_shadow_deathpact"],
        maxRank: 5,
        reqPoints: 5,
        description: talentText`Reduces the casting time of your Immolate, Searing Pain and Shadow Bolt spells by ${[
          0.1,
          0.2,
          0.3,
          0.4,
          0.5,
        ]} sec and your Soul Fire spell by ${[
          0.4,
          0.8,
          1.2,
          1.6,
          2
        ]} sec.`,
      },
            "Improved Immolate": {
        name: "Improved Immolate",
        pos: "b3",
        icon: icons["spell_fire_immolation"],
        maxRank: 3,
        reqPoints: 5,
        description: talentText`Increases the initial damage done by your Immolate spell by ${[
          5,
          10,
          15,
        ]}%.`,
      },
      "Shadowburn": {
        name: "Shadowburn",
        pos: "c1",
        icon: icons["spell_shadow_scourgebuild"],
        maxRank: 1,
        reqPoints: 10,
        description: talentText`Instantly blasts the target for 87 Fire damage.  If the target dies within 5 sec of Shadowburn, and yields experience or honor, the caster gains a Soul Shard.  15 sec cooldown`,
      },
      "Improved Shadowburn": {
        name: "Improved Shadowburn",
        pos: "c2",
        icon: icons["spell_shadow_scourgebuild"],
        maxRank: 3,
        reqPoints: 10,
        prereq: "Shadowburn",
        arrows: [{ dir: "right", from: "c1", to: "c2" }],
        description: talentText`Reduces the cooldown of your Shadowburn spell by ${[
          1,
          2,
          3,
        ]} sec.`,
      },
      "Cataclysm": {
        name: "Cataclysm",
        pos: "c3",
        icon: icons["spell_fire_windsofwoe"],
        maxRank: 5,
        reqPoints: 10,
        description: talentText`Reduces the mana cost of your Destruction spells by ${[
          5,
          10,
          15,
          20,
          25,
        ]}% and reduces the threat caused by your Destruction spells by ${[
          5,
          10,
          15,
          20,
          25,
        ]}%.`,
      },
      "Intensity": {
        name: "Intensity",
        pos: "c4",
        icon: icons["spell_fire_lavaspawn"],
        maxRank: 2,
        reqPoints: 10,
        description: talentText`Gives you a ${[
          35,
          70,
        ]}% chance to resist interruption caused by damage while casting any Destruction spell.`,
      },
      "Pyroclasm": {
        name: "Pyroclasm",
        pos: "d2",
        icon: icons["spell_fire_volcano"],
        maxRank: 2,
        reqPoints: 15,
        description: talentText`Gives your Rain of Fire, Hellfire, and Soul Fire spells a ${[
          13,
          26,
        ]}% chance to stun the target for 3 sec.`,
      },
      "Improved Searing Pain": {
        name: "Improved Searing Pain",
        pos: "d3",
        icon: icons["spell_fire_soulburn"],
        maxRank: 3,
        reqPoints: 15,
        description: talentText`Your Searing Pain critical strikes increase Fire damage dealt by ${[
          4,
          8,
          12,
        ]}% for 5 sec.`,
      },
      "Ruin": {
        name: "Ruin",
        pos: "e2",
        icon: icons["spell_shadow_shadowwordpain"],
        maxRank: 1,
        reqPoints: 20,
        description: talentText`Increases the critical strike damage bonus of your Destruction spells by 100%.`,
      },
      "Scorched Earth": {
        name: "Scorched Earth",
        pos: "e3",
        icon: icons["spell_fire_fire"],
        maxRank: 3,
        reqPoints: 20,
        description: talentText`Increases the damage done by your Hellfire, Searing Pain and Soul Fire spells by ${[
          2,
          4,
          6,
        ]}%.`,
      },
      "Emberstorm": {
        name: "Emberstorm",
        pos: "f3",
        icon: icons["spell_fire_selfdestruct"],
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
      "Conflagrate": {
        name: "Conflagrate",
        pos: "g2",
        icon: icons["spell_fire_fireball"],
        maxRank: 1,
        reqPoints: 30,
        prereq: "Ruin",
        arrows: [{ dir: "down", from: "e2", to: "g2" }],
        description: talentText`Ignites a target that is already afflicted by Immolate, dealing 240 Fire damage and consuming the Immolate spell.  10 sec cooldown`,
      },
    },
  },
};
