import { TalentData } from "../../TalentContext";
import { talentText, requireAll } from "../../utils";

const backgrounds = requireAll(
  require.context("../../assets/tree-backgrounds/priest"),
);
const icons = requireAll(require.context("../../assets/icons/priest"));

export const data: TalentData = {
  Discipline: {
    name: "Discipline",
    background: backgrounds["discipline"],
    icon: icons["spell_holy_wordfortitude"],
    talents: {
      "Improved Inner Fire": {
        name: "Improved Inner Fire",
        pos: "a1",
        icon: icons["spell_holy_innerfire"],
        maxRank: 3,
        reqPoints: 0,
        description: talentText`Increases the Armor bonus of your Inner Fire spell by ${[
          5,
          10,
          15,
        ]}%.`,
      },
      "Divine Focus": {
        name: "Divine Focus",
        pos: "a2",
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
      "Divine Wrath": {
        name: "Divine Wrath",
        pos: "a3",
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
      "Holy Reach": {
        name: "Holy Reach",
        pos: "b1",
        icon: icons["spell_holy_purify"],
        maxRank: 2,
        reqPoints: 5,
        description: talentText`Increases the range of your Holy spells by ${[
          10,
          20,
        ]}%.`,
      },
      "Divine Fury": {
        name: "Divine Fury",
        pos: "b2",
        icon: icons["spell_holy_sealofwrath"],
        maxRank: 5,
        reqPoints: 5,
        description: talentText`Reduces the casting time of your Smite and Holy Fire spells by ${[
          0.1,
          0.2,
          0.3,
          0.4,
          0.5,
        ]} sec.`,
      },
      "Improved Weakened Soul": {
        name: "Improved Weakened Soul",
        pos: "b3",
        icon: icons["spell_holy_ashestoashes"],
        maxRank: 3,
        reqPoints: 5,
        description: talentText`Decreases the duration of your Power Word: Shield's Weakened Soul effect by ${[
          1,
          2,
          3,
        ]} sec.`,
      },
      "Martyrdom": {
        name: "Martyrdom",
        pos: "b4",
        icon: icons["spell_nature_tranquility"],
        maxRank: 2,
        reqPoints: 5,
        description: talentText`Gives you a ${[
          50,
          100,
        ]}% chance to resist interruption caused by damage while casting any spell for 6 sec, after beeing the victim of a critical strike.`,
      },
      "Holy Nova": {
        name: "Holy Nova",
        pos: "c1",
        icon: icons["spell_holy_holynova"],
        maxRank: 1,
        reqPoints: 10,
        description: talentText`Causes an explosion of holy light around the caster, causing 28 Holy damageto all enemy targets within 10 yards and healing all party members within 10 yards for 52.  These effects cause no threat.`,
      },
      "Mental Agility": {
        name: "Mental Agility",
        pos: "c2",
        icon: icons["ability_hibernation"],
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
      "Improved Power Word: Shield": {
        name: "Improved Power Word: Shield",
        pos: "c3",
        icon: icons["spell_holy_powerwordshield"],
        maxRank: 3,
        reqPoints: 10,
        prereq: "Improved Weakened Soul",
        arrows: [{ dir: "down", from: "b3", to: "c3" }],
        description: talentText`Increases damage absorbed by your Power Word: Shield spell by ${[
          10,
          20,
          30,
        ]}%.`,
      },
      "Meditation": {
        name: "Meditation",
        pos: "c4",
        icon: icons["spell_nature_sleep"],
        maxRank: 2,
        reqPoints: 10,
        description: talentText`Allows ${[
          10,
          20,
        ]}% of your Mana regeneration to continue while casting.`,
      },
      "Spiritual Guidance": {
        name: "Spiritual Guidance",
        pos: "d2",
        icon: icons["spell_holy_spiritualguidence"],
        maxRank: 2,
        reqPoints: 15,
        description: talentText`Increases spell damage and healing by up to ${[
          15,
          30,
        ]}% of your total Spirit.`,
      },
      "Searing Light": {
        name: "Searing Light",
        pos: "d3",
        icon: icons["spell_holy_searinglightpriest"],
        maxRank: 3,
        reqPoints: 15,
        description: talentText`Increases the damage done by your Smite and Holy Fire spells by ${[
          5,
          10,
          15,
        ]}%.`,
      },
      "Crusade": {
        name: "Crusade",
        pos: "e2",
        icon: icons["spell_holy_holysmite"],
        maxRank: 1,
        reqPoints: 20,
        description: talentText`Increases the critical strike damage bonus of your Holy Fire and Smite spells by 100%.`,
      },
      "Burst of Light": {
        name: "Burst of Light",
        pos: "e3",
        icon: icons["spell_holy_holybolt"],
        maxRank: 3,
        reqPoints: 20,
        description: talentText`Gives your offensive spells a ${[
          2,
          4,
          6,
        ]}% chance to reduce the casting time of your next Holy Fire or Smite Spell spell by 100%.`,
      },
      "Force of Will": {
        name: "Force of Will",
        pos: "f3",
        icon: icons["spell_nature_slowingtotem"],
        maxRank: 5,
        reqPoints: 25,
        description: talentText`Increases the damage done by your Holy spells by ${[
          2,
          4,
          6,
          8,
          10,
        ]}%.`,
      },
      "Power Infusion": {
        name: "Power Infusion",
        pos: "g2",
        icon: icons["spell_holy_powerinfusion"],
        maxRank: 1,
        reqPoints: 30,
        prereq: "Crusade",
        arrows: [{ dir: "down", from: "e2", to: "g2" }],
        description: talentText`Infuses the target with power, increasing their spell damage and healing by 20% for 15 sec.  2 min cooldown`,
      },
    },
  },
  Holy: {
    name: "Holy",
    background: backgrounds["holy"],
    icon: icons["spell_holy_holybolt"],
    talents: {
      "Improved Renew": {
        name: "Improved Renew",
        pos: "a1",
        icon: icons["spell_holy_renew"],
        maxRank: 3,
        reqPoints: 0,
        description: talentText`Increases the amount healed by your Renew spell by ${[
          5,
          10,
          15,
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
      "Improved Heal": {
        name: "Improved Heal",
        pos: "b1",
        icon: icons["spell_holy_heal02"],
        maxRank: 3,
        reqPoints: 5,
        description: talentText`Increases the critical effect chance of your Heal spell by ${[
          5,
          10,
          15,
        ]}%.`,
      },
      "Divine Grace": {
        name: "Divine Grace",
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
      "Improved Desperate Prayer": {
        name: "Improved Desperate Prayer",
        pos: "b3",
        icon: icons["spell_holy_restoration"],
        maxRank: 5,
        reqPoints: 5,
        description: talentText`Reduces the cooldown of your Desperate Prayer spell by ${[
          12,
          24,
          36,
          48,
          60,
        ]} sec.`,
      },
      "Inner Focus": {
        name: "Inner Focus",
        pos: "c1",
        icon: icons["spell_frost_windwalkon"],
        maxRank: 1,
        reqPoints: 10,
        description: talentText`When activated, reduces the Mana cost of your next spell by 100%.  2 min cooldown`,
      },
      "Improved Healing": {
        name: "Improved Healing",
        pos: "c2",
        icon: icons["spell_holy_greaterheal"],
        maxRank: 5,
        reqPoints: 10,
        description: talentText`Reduces the Mana cost of your Lesser Heal and Greater Heal spells by ${[
          3,
          6,
          9,
          12,
          15,
        ]}%.`,
      },
      "Blessed Recovery": {
        name: "Blessed Recovery",
        pos: "c3",
        icon: icons["spell_holy_blessedrecovery"],
        maxRank: 2,
        reqPoints: 10,
        prereq: "Improved Desperate Prayer",
        arrows: [{ dir: "down", from: "b3", to: "c3" }],
        description: talentText`Heals ${[
          50,
          100,
        ]}% of the damage taken over 6 sec, after being the victim of a critical strike.`,
      },
      "Healing Focus": {
        name: "Healing Focus",
        pos: "c4",
        icon: icons["spell_holy_healingfocus"],
        maxRank: 2,
        reqPoints: 10,
        description: talentText`Gives you a ${[
          35,
          70,
        ]}% chance to resist interruption caused by damage while casting any healing spell.`,
      },
      "Inspiration": {
        name: "Inspiration",
        pos: "d2",
        icon: icons["spell_holy_power"],
        maxRank: 2,
        reqPoints: 15,
        description: talentText`Increase your target's armor value by ${[
          10,
          20,
        ]}% for 15 sec after getting a critical effect from one of your healing spells.`,
      },
      "Divine Mind": {
        name: "Divine Mind",
        pos: "d3",
        icon: icons["spell_holy_dispelmagic"],
        maxRank: 3,
        reqPoints: 15,
        description: talentText`Reduces the mana cost of your Abolish Disease, Cure Disease and Dispel Magic spells by ${[
          12,
          24,
          36,
        ]}%.`,
      },
      "Burst of Faith": {
        name: "Burst of Faith",
        pos: "e2",
        icon: icons["spell_holy_summonlightwell"],
        maxRank: 1,
        reqPoints: 20,
        description: talentText`When activated, your next Holy spell becomes an instant cast spell.  2 min cooldown`,
      },
      "Improved Prayer of Healing": {
        name: "Improved Prayer of Healing",
        pos: "e3",
        icon: icons["spell_holy_prayerofhealing02"],
        maxRank: 3,
        reqPoints: 20,
        description: talentText`Reduces the Mana cost of your Prayer of Healing spell by ${[
          10,
          20,
          30,
        ]}%.`,
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
      "Spirit of Redemption": {
        name: "Spirit of Redemption",
        pos: "g2",
        icon: icons["inv_enchant_essenceeternallarge"],
        maxRank: 1,
        reqPoints: 30,
        prereq: "Burst of Faith",
        arrows: [{ dir: "down", from: "e2", to: "g2" }],
        description: talentText`Become the Spirit of Redemption, increasing your Healing by 10% and reducing Physical damage done to you by 10%.`,
      },
    },
  },
  Shadow: {
    name: "Shadow",
    background: backgrounds["shadow"],
    icon: icons["spell_shadow_shadowwordpain"],
    talents: {
      "Spirit Tap": {
        name: "Spirit Tap",
        pos: "a1",
        icon: icons["spell_shadow_requiem"],
        maxRank: 2,
        reqPoints: 0,
        description: talentText`Gives you a ${[
          50,
          100,
        ]}% chance to gain a 100% bonus to your Spirit after killing a target that yields experience.  For the duration, your Mana will regenerate at a 50% rate while casting.  Lasts 15 sec.`,
      },
      "Shadow Focus": {
        name: "Shadow Focus",
        pos: "a2",
        icon: icons["spell_shadow_burningspirit"],
        maxRank: 5,
        reqPoints: 0,
        description: talentText`Improves your chance to hit with Shadow spells by ${[
          1,
          2,
          3,
          4,
          5,
        ]}%.`,
      },
      "Blackout": {
        name: "Blackout",
        pos: "a3",
        icon: icons["spell_shadow_gathershadows"],
        maxRank: 5,
        reqPoints: 0,
        description: talentText`Gives your Shadow damage spells a ${[
          2,
          4,
          6,
          8,
          10,
        ]}% chance to stun the target for 2 sec.`,
      },
      "Shadow Reach": {
        name: "Shadow Reach",
        pos: "b1",
        icon: icons["spell_shadow_chilltouch"],
        maxRank: 2,
        reqPoints: 5,
        description: talentText`Increases the range of your Shadow spells by ${[
          10,
          20,
        ]}%.`,
      },
      "Warping Shadows": {
        name: "Warping Shadows",
        pos: "b2",
        icon: icons["spell_shadow_siphonmana"],
        maxRank: 5,
        reqPoints: 5,
        description: talentText`Reduces the casting time of your Mind Blast and Mind Control spells by ${[
          0.1,
          0.2,
          0.3,
          0.4,
          0.5,
        ]} sec.`,
      },
      "Shadow Steps": {
        name: "Shadow Steps",
        pos: "b3",
        icon: icons["ability_rogue_feint"],
        maxRank: 3,
        reqPoints: 5,
        description: talentText`Increases movement and mounted movement speed by ${[
          5,
          10,
          15,
        ]}%.  This does not stack with other movement speed increasing effects.`,
      },
      "Improved Psychic Scream": {
        name: "Improved Psychic Scream",
        pos: "b4",
        icon: icons["spell_shadow_psychicscream"],
        maxRank: 3,
        reqPoints: 5,
        description: talentText`Reduces the cooldown of your Psychic Scream spell by ${[
          2,
          4,
          6,
        ]} sec.`,
      },
      "Vampiric Embrace": {
        name: "Vampiric Embrace",
        pos: "c1",
        icon: icons["spell_shadow_unsummonbuilding"],
        maxRank: 1,
        reqPoints: 10,
        description: talentText`Afflicts your target with Shadow energy that causes all party members to be healed for 20% of any Shadow spell damage you deal for 1 min.  10 sec cooldown`,
      },
      "Improved Vampiric Embrace": {
        name: "Improved Vampiric Embrace",
        pos: "c2",
        icon: icons["spell_shadow_unsummonbuilding"],
        maxRank: 2,
        reqPoints: 10,
        prereq: "Vampiric Embrace",
        arrows: [{ dir: "right", from: "c1", to: "c2" }],
        description: talentText`Increases the percentage healed by Vampiric Embrace by an additional ${[
          5,
          10,
        ]}%.`,
      },
      "Improved Mind Blast": {
        name: "Improved Mind Blast",
        pos: "c3",
        icon: icons["spell_shadow_unholyfrenzy"],
        maxRank: 5,
        reqPoints: 10,
        description: talentText`Reduces the cooldown of your Mind Blast spell by ${[
          0.5,
          1.0,
          1.5,
          2.0,
          2.5,
        ]} sec.`,
      },
      "Improved Shadowguard": {
        name: "Improved Shadowguard",
        pos: "c4",
        icon: icons["spell_nature_lightningshield"],
        maxRank: 3,
        reqPoints: 10,
        description: talentText`Increases the damage done by your Shadowguard spell by ${[
          15,
          30,
          45,
        ]}%.`,
      },
      "Improved Fade": {
        name: "Improved Fade",
        pos: "d2",
        icon: icons["spell_magic_lesserinvisibilty"],
        maxRank: 2,
        reqPoints: 15,
        description: talentText`Decreases the cooldown of your Fade ability by ${[
          15,
          30,
        ]} sec.`,
      },
      "Improved Shadow Word: Pain": {
        name: "Improved Shadow Word: Pain",
        pos: "d3",
        icon: icons["spell_shadow_shadowwordpain"],
        maxRank: 3,
        reqPoints: 15,
        description: talentText`Increases the duration of your Shadow Word: Pain spell by ${[
          3,
          6,
          9,
        ]} sec.`,
      },
      "Silence": {
        name: "Silence",
        pos: "e2",
        icon: icons["spell_shadow_impphaseshift"],
        maxRank: 1,
        reqPoints: 20,
        description: talentText`Silences the target, preventing them from casting spells for 5 sec.  35 sec cooldown`,
      },
      "Shadow Weaving": {
        name: "Shadow Weaving",
        pos: "e3",
        icon: icons["spell_shadow_blackplague"],
        maxRank: 3,
        reqPoints: 20,
        description: talentText`Your Shadow damage spells have a ${[
          33,
          66,
          100,
        ]}% chance to cause your target to be vulnerable to Shadow damage.  This vulnerability increases the Shadow damage dealt to your target by 3% and lasts 15 sec.  Stacks up to 5 times.`,
      },
      "Darkness": {
        name: "Darkness",
        pos: "f3",
        icon: icons["spell_shadow_twilight"],
        maxRank: 5,
        reqPoints: 25,
        description: talentText`Increases the damage done by your Shadow spells by ${[
          2,
          4,
          6,
          8,
          10,
        ]}%.`,
      },
      "Shadowform": {
        name: "Shadowform",
        pos: "g2",
        icon: icons["spell_shadow_shadowform"],
        maxRank: 1,
        reqPoints: 30,
        prereq: "Silence",
        arrows: [{ dir: "down", from: "e2", to: "g2" }],
        description: talentText`Assume a Shadowform, increasing your Shadow damage by 10% and reducing Physical damage done to you by 10%.  However, you may not cast Holy spells while in this form.`,
      },
    },
  },
};
