import { TalentData } from "../../TalentContext";
import { talentText, requireAll } from "../../utils";

const backgrounds = requireAll(
  require.context("../../assets/tree-backgrounds/paladin"),
);
const icons = requireAll(require.context("../../assets/icons/paladin"));

export const data: TalentData = {
  Holy: {
    name: "Holy",
    background: backgrounds["holy"],
    icon: icons["spell_holy_holybolt"],
    talents: {
      "Divine Wrath": {
        name: "Divine Wrath",
        pos: "a1",
        icon: icons["spell_holy_holyprotection"],
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
      "Silent Resolve": {
        name: "Silent Resolve",
        pos: "a2",
        icon: icons["spell_nature_manaregentotem"],
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
      "Spell Warding": {
        name: "Spell Warding",
        pos: "a3",
        icon: icons["spell_holy_spellwarding"],
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
      "Quick Prayer": {
        name: "Quick Prayer",
        pos: "b2",
        icon: icons["spell_holy_dizzy"],
        maxRank: 5,
        reqPoints: 5,
        description: talentText`Reduces the casting time of your Healing spells by ${[
          0.1,
          0.2,
          0.3,
          0.4,
          0.5,
        ]} sec.`,
      },
      "Faithful Preparation": {
        name: "Faithful Preparation",
        pos: "b3",
        icon: icons["spell_holy_layonhands"],
        maxRank: 5,
        reqPoints: 5,
        description: talentText`Reduces the cooldown of your Divine Intervention and Lay on Hands spells by ${[
          6,
          12,
          18,
          24,
          30,
        ]} min.`,
      },
      "Surge of Faith": {
        name: "Surge of Faith",
        pos: "c1",
        icon: icons["inv_misc_gem_pearl_04"],
        maxRank: 1,
        reqPoints: 10,
        description: talentText`When activated, reduces the Mana cost of your next spell by 100%.  2 min cooldown`,
      },
      "Healing Light": {
        name: "Healing Light",
        pos: "c2",
        icon: icons["spell_holy_holybolt"],
        maxRank: 5,
        reqPoints: 10,
        description: talentText`Increases the amount healed by your Holy Light and Flash of Light spells by ${[
          2,
          4,
          6,
          8,
          10,
        ]}%.`,
      },
      "Improved Cleanse": {
        name: "Improved Cleanse",
        pos: "c3",
        icon: icons["spell_holy_renew"],
        maxRank: 3,
        reqPoints: 10,
        description: talentText`Reduces the mana cost of your Cleanse and Purify spells by ${[
          6,
          12,
          18,
        ]}%.`,
      },
      "Spiritual Focus": {
        name: "Spiritual Focus",
        pos: "c4",
        icon: icons["spell_arcane_blink"],
        maxRank: 2,
        reqPoints: 10,
        description: talentText`Gives you a ${[
          35,
          70,
        ]}% chance to resist interruption caused by damage while casting any healing spell.`,
      },
      "Revelation": {
        name: "Revelation",
        pos: "d2",
        icon: icons["spell_holy_power"],
        maxRank: 2,
        reqPoints: 15,
        description: talentText`Increase your target's armor value by ${[
          10,
          20,
        ]}% for 15 sec after getting a critical effect from one of your healing spells.`,
      },
      "Illumination": {
        name: "Illumination",
        pos: "d3",
        icon: icons["spell_holy_greaterheal"],
        maxRank: 3,
        reqPoints: 15,
        description: talentText`Gives you a ${[
          33,
          66,
          100,
        ]}% chance to gain Mana equal to the base cost of the spell, after getting a critical effect from one of your healing spells.`,
      },
      "Divine Favor": {
        name: "Divine Favor",
        pos: "e2",
        icon: icons["spell_holy_heal"],
        maxRank: 1,
        reqPoints: 20,
        description: talentText`When activated, increases the critical strike chance of your next Flash of Light, Holy Light, or Holy Shock spell by 100%.  2 min cooldown`,
      },
      "Lasting Judgement": {
        name: "Lasting Judgement",
        pos: "e3",
        icon: icons["spell_holy_healingaura"],
        maxRank: 3,
        reqPoints: 20,
        description: talentText`Increases the duration of your Judgement of Light and Judgement of Wisdom spells by ${[
          15,
          30,
          45,
        ]} sec.`,
      },
      "Spiritual Healing": {
        name: "Spiritual Healing",
        pos: "f3",
        icon: icons["spell_nature_moonglow"],
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
      "Holy Shock": {
        name: "Holy Shock",
        pos: "g2",
        icon: icons["spell_holy_searinglight"],
        maxRank: 1,
        reqPoints: 30,
        prereq: "Divine Favor",
        arrows: [{ dir: "down", from: "e2", to: "g2" }],
        description: talentText`Blasts the target with Holy energy, causing 184 Holy damage to an enemy, or healing an ally for 184.  10 sec cooldown`,
      },
    },
  },
  Protection: {
    name: "Protection",
    background: backgrounds["protection"],
    icon: icons["spell_holy_devotionaura"],
    talents: {
      "Improved Devotion Aura": {
        name: "Improved Devotion Aura",
        pos: "a1",
        icon: icons["spell_holy_devotionaura"],
        maxRank: 3,
        reqPoints: 0,
        description: talentText`Increases the armor bonus of your Devotion Aura by ${[
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
      "Divine Focus": {
        name: "Divine Focus",
        pos: "a3",
        icon: icons["spell_holy_unyieldingfaith"],
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
      "Improved Righteous Fury": {
        name: "Improved Righteous Fury",
        pos: "a4",
        icon: icons["spell_holy_sealoffury"],
        maxRank: 5,
        reqPoints: 0,
        description: talentText`Increases the amount of threat generated by your Righteous Fury spell by ${[
          5,
          10,
          15,
          20,
          25,
        ]}%.`,
      },
      "Improved Blessing of Freedom": {
        name: "Improved Blessing of Freedom",
        pos: "b1",
        icon: icons["spell_holy_sealofvalor"],
        maxRank: 2,
        reqPoints: 5,
        description: talentText`Increases the duration of your Blessing of Freedom spell by ${[
          3,
          6,
        ]} sec.`,
      },
      "Divine Endurance": {
        name: "Divine Endurance",
        pos: "b3",
        icon: icons["spell_holy_restoration"],
        maxRank: 3,
        reqPoints: 5,
        description: talentText`Increases the duration of your Blessing of Protection, Divine Protection and Divine Shield spells ${[
          1,
          2,
          3,
        ]} sec.`,
      },
      "Improved Hammer of Justice": {
        name: "Improved Hammer of Justice",
        pos: "b4",
        icon: icons["spell_holy_sealofmight"],
        maxRank: 3,
        reqPoints: 5,
        description: talentText`Reduces the cooldown of your Hammer of Justice spell by ${[
          6,
          12,
          18,
        ]} sec.`,
      },
      "Sanctuary": {
        name: "Sanctuary",
        pos: "c1",
        icon: icons["spell_nature_lightningshield"],
        maxRank: 1,
        reqPoints: 10,
        description: talentText`Places a Blessing on the Paladin, reducing damage received from all sources by up to 10 for 30 min.  In addition, when the Paladin blocks a melee attack the attacker will take 14 Holy damage.`,
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
      "Divine Preparation": {
        name: "Divine Preparation",
        pos: "c3",
        icon: icons["spell_holy_divineintervention"],
        maxRank: 3,
        reqPoints: 10,
        prereq: "Divine Endurance",
        arrows: [{ dir: "down", from: "b3", to: "c3" }],
        description: talentText`Reduces the cooldown of your Blessing of Protection, Divine Protection and Divine Shield spells by ${[
          30,
          60,
          90,
        ]} sec.`,
      },
      "Combat Prayers": {
        name: "Combat Prayers",
        pos: "c4",
        icon: icons["spell_holy_sealofsalvation"],
        maxRank: 3,
        reqPoints: 10,
        description: talentText`Reduces the cooldown of your Consecration and Exorcism spells by ${[
          0.5,
          1,
          1.5,
        ]} sec.`,
      },
      "Reckoning": {
        name: "Reckoning",
        pos: "d2",
        icon: icons["spell_holy_blessingofstrength"],
        maxRank: 2,
        reqPoints: 15,
        description: talentText`Gives you a ${[
          10,
          20,
        ]}% chance to gain an extra attack after blocking an attack.`,
      },
      "Improved Seal of Righteousness": {
        name: "Improved Seal of Righteousness",
        pos: "d3",
        icon: icons["ability_thunderbolt"],
        maxRank: 3,
        reqPoints: 15,
        description: talentText`Increases the damage done by your Seal of Righteousness spell by ${[
          5,
          10,
          15,
        ]}%.`,
      },
      "Crusader's Charge": {
        name: "Crusader's Charge",
        pos: "e2",
        icon: icons["spell_holy_vindication"],
        maxRank: 1,
        reqPoints: 20,
        description: talentText`Causes you to Charge an enemy, stunning the target for 3 sec.  18 sec cooldown`,
      },
      "Force of Faith": {
        name: "Force of Faith",
        pos: "e3",
        icon: icons["spell_nature_slowingtotem"],
        maxRank: 3,
        reqPoints: 20,
        description: talentText`Increases damage and healing done by magical spells and effects by up to ${[
          10,
          20,
          30,
        ]}.`,
      },
      "One-Handed Weapon Specialization": {
        name: "One-Handed Weapon Specialization",
        pos: "f3",
        icon: icons["inv_sword_20"],
        maxRank: 5,
        reqPoints: 25,
        description: talentText`Increases the damage you deal with one-handed melee weapons by ${[
          4,
          8,
          12,
          16,
          20,
        ]}%.`,
      },
      "Holy Shield": {
        name: "Holy Shield",
        pos: "g2",
        icon: icons["classic_spell_holy_blessingofprotection"],
        maxRank: 1,
        reqPoints: 30,
        prereq: "Crusader's Charge",
        arrows: [{ dir: "down", from: "e2", to: "g2" }],
        description: talentText`Increases chance to block by 30% for 10 sec, and deals 65 Holy damage for each attack blocked while active.  In Addition each Block generates 1% of your total mana.  Damage caused by Holy Shield causes 20% additional threat.  Each block expends a charge.  4 charges.  10 sec cooldown`,
      },
    },
  },
  Retribution: {
    name: "Retribution",
    background: backgrounds["retribution"],
    icon: icons["spell_holy_auraoflight"],
    talents: {
      "Punishment": {
        name: "Punishment",
        pos: "a1",
        icon: icons["spell_frost_stun"],
        maxRank: 5,
        reqPoints: 0,
        description: talentText`Gives your Judgement spell a ${[
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
      "Conviction": {
        name: "Conviction",
        pos: "a3",
        icon: icons["spell_holy_retributionaura"],
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
      "Pursuit of Justice": {
        name: "Pursuit of Justice",
        pos: "b1",
        icon: icons["spell_holy_persuitofjustice"],
        maxRank: 2,
        reqPoints: 5,
        description: talentText`Increases movement and mounted movement speed by ${[
          5,
          10,
        ]}%.  This does not stack with other movement speed increasing effects.`,
      },
      "Improved Judgement": {
        name: "Improved Judgement",
        pos: "b2",
        icon: icons["spell_holy_righteousfury"],
        maxRank: 3,
        reqPoints: 5,
        description: talentText`Decreases the cooldown of your Judgement spell by ${[
          0.5,
          1,
          1.5,
        ]} sec.`,
      }, 
      "Improved Retribution Aura": {
        name: "Improved Retribution Aura",
        pos: "b3",
        icon: icons["spell_holy_auraoflight"],
        maxRank: 3,
        reqPoints: 5,
        description: talentText`Increases the damage done by your Retribution Aura spell by ${[
          5,
          10,
          15,
        ]}%.`,
      },
      "Seal of Command": {
        name: "Seal of Command",
        pos: "c1",
        icon: icons["ability_warrior_innerrage"],
        maxRank: 1,
        reqPoints: 10,
        description: talentText`Gives the Paladin a chance to deal Holy damage equal to 70% of normal weapon damage.  Only one Seal can be active on the Paladin at any one time.  Lasts 30 sec.\n\nUnleashing this Seal's energy will judge an enemy, instantly causing 90 Holy damage, 137 if the target is stunned or incapacitated.`,
      },
      "Benediction": {
        name: "Benediction",
        pos: "c2",
        icon: icons["spell_frost_windwalkon"],
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
      "Holy Wrath": {
        name: "Holy Wrath",
        pos: "c3",
        icon: icons["spell_holy_excorcism"],
        maxRank: 5,
        reqPoints: 10,
        description: talentText`Increases the damage done by your Consecration and Exorcism spells by ${[
          2,
          4,
          6,
          8,
          10,
        ]}%.`,
      },
      "Eye for an Eye": {
        name: "Eye for an Eye",
        pos: "c4",
        icon: icons["spell_holy_eyeforaneye"],
        maxRank: 2,
        reqPoints: 10,
        description: talentText`All spell criticals against you cause ${[
          15,
          30,
        ]}% of the damage taken to the caster as well.  The damage caused by Eye for an Eye will not exceed 50% of the Paladin's total health.`,
      },
      "Improved Rebuke": {
        name: "Improved Rebuke",
        pos: "d2",
        icon: icons["inv_gauntlets_04"],
        maxRank: 2,
        reqPoints: 15,
        description: talentText`Gives your Rebuke spell a ${[
          50,
          100,
        ]}% chance to silence the target for 2 sec.`,
      },
      "Sanctity": {
        name: "Sanctity",
        pos: "d3",
        icon: icons["spell_holy_holysmite"],
        maxRank: 3,
        reqPoints: 15,
        description: talentText`Increases the holy damage you deal by ${[
          5,
          10,
          15,
        ]}%.`,
      },
      "Repentance": {
        name: "Repentance",
        pos: "e2",
        icon: icons["spell_holy_prayerofhealing"],
        maxRank: 1,
        reqPoints: 20,
        description: talentText`Puts the enemy target in a state of meditation, incapacitating them for up to 6 sec.  Any damage caused will awaken the target.  Only works against Humanoids.  45 sec cooldown`,
      },
      "Justice": {
        name: "Justice",
        pos: "e3",
        icon: icons["spell_holy_mindvision"],
        maxRank: 3,
        reqPoints: 20,
        description: talentText`Your Judgement spell has a ${[
          33,
          66,
          100,
        ]}% chance to increase the damage done by your party by 1% for 12 sec.  Stacks up to 3 times.`,
      },
      "Vengeance": {
        name: "Vengeance",
        pos: "f3",
        icon: icons["ability_racial_avatar"],
        maxRank: 5,
        reqPoints: 25,
        description: talentText`Your critical strikes increase the physical and holy damage you deal by ${[
          3,
          6,
          9,
          12,
          15,
        ]}% for 8 sec.`,
      },
      "Crusader Strike": {
        name: "Crusader Strike",
        pos: "g2",
        icon: icons["ability_meleedamage"],
        maxRank: 1,
        reqPoints: 30,
        prereq: "Repentance",
        arrows: [{ dir: "down", from: "e2", to: "g2" }],
        description: talentText`Gives you an extra attack and generates 3% of your total mana.  In addition, the next 2 sources of Holy damage dealt to the target are increased by 20%.  Lasts 12 sec.  10 sec cooldown`,
      },
    },
  },
};
