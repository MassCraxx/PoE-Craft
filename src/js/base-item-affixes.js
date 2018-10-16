import * as MOD from './all-mods.js';

export const baseAffixes = {
    // Body Armour
    "BodySTR":[
        // Prefix
        {Name: MOD.LIFE},
        {Name: MOD.ARMOUR_FLAT},
        {Name: MOD.ARMOUR_STUN_HYBRID},
        {Name: MOD.ARMOUR_INC},
        {Name: MOD.ARMOUR_LIFE_HYBRID},
        {Name: MOD.REFLECT_PHYS},
        // Suffix
        {Name: MOD.STR},
        {Name: MOD.LIFE_REG},
        {Name: MOD.ELE_RES_COLD},
        {Name: MOD.ELE_RES_FIRE},
        {Name: MOD.ELE_RES_LIGHT},
        {Name: MOD.ELE_RES_CHAOS},
        {Name: MOD.REDUCED_ATTR},
        {Name: MOD.STUN_BLOCK_RECOV},
        {Name: MOD.PHYS_RED}
    ],

    "BodyDEX": [
        // Prefix
        {Name: MOD.LIFE},
        {Name: MOD.EVASION_FLAT},
        {Name: MOD.EVASION_STUN_HYBRID},
        {Name: MOD.EVASION_INC},
        {Name: MOD.EVASION_LIFE_HYBRID},
        {Name: MOD.REFLECT_PHYS},
        // Suffix
        {Name: MOD.DEX},
        {Name: MOD.LIFE_REG},
        {Name: MOD.ELE_RES_COLD},
        {Name: MOD.ELE_RES_FIRE},
        {Name: MOD.ELE_RES_LIGHT},
        {Name: MOD.ELE_RES_CHAOS},
        {Name: MOD.REDUCED_ATTR},
        {Name: MOD.STUN_BLOCK_RECOV},
        {Name: MOD.DODGE}
    ],

    "BodyINT": [
        // Prefix
        {Name: MOD.LIFE},
        {Name: MOD.MANA},
        {Name: MOD.SHIELD_INC},
        {Name: MOD.SHIELD_FLAT},
        {Name: MOD.SHIELD_STUN_HYBRID},
        {Name: MOD.SHIELD_LIFE_HYBRID},
        {Name: MOD.REFLECT_PHYS},
        // Suffix
        {Name: MOD.INT},
        {Name: MOD.LIFE_REG},
        {Name: MOD.ELE_RES_COLD},
        {Name: MOD.ELE_RES_FIRE},
        {Name: MOD.ELE_RES_LIGHT},
        {Name: MOD.ELE_RES_CHAOS},
        {Name: MOD.REDUCED_ATTR},
        {Name: MOD.STUN_BLOCK_RECOV},
        {Name: MOD.SHIELD_REGEN}
    ],

    // Gloves
        "GlovesINT": [
        // Prefix
        {Name: MOD.ATK_FLAT_PHYS, Tiers: 4},
        {Name: MOD.ATK_FLAT_COLD, Tiers: 5},
        {Name: MOD.ATK_FLAT_FIRE, Tiers: 4},
        {Name: MOD.ATK_FLAT_LIGHT, Tiers: 4},
        {Name: MOD.MANA},
        {Name: MOD.SHIELD_INC, Tiers: 7},
        {Name: MOD.SHIELD_STUN_HYBRID},
        {Name: MOD.SHIELD_FLAT, Tiers: 7},
        {Name: MOD.SHIELD_LIFE_HYBRID, Tiers: 2},
        {Name: MOD.LIFE, Tiers: 9},
        {Name: MOD.RARITY_PREF},
        {Name: MOD.LIFE_LEECH},
        {Name: MOD.MANA_LEECH},

        // Suffix
        {Name: MOD.ACCURACY},
        {Name: MOD.ATK_SPEED},
        {Name: MOD.DEX},
        {Name: MOD.INT},
        {Name: MOD.LIFE_GAIN_OH},
        {Name: MOD.LIFE_GAIN_OK},
        {Name: MOD.MANA_GAIN_OK},
        {Name: MOD.LIFE_REG, Tiers: 7},
        {Name: MOD.ELE_RES_COLD},
        {Name: MOD.ELE_RES_FIRE},
        {Name: MOD.ELE_RES_LIGHT},
        {Name: MOD.ELE_RES_CHAOS},
        {Name: MOD.REDUCED_ATTR},
        {Name: MOD.RARITY_SUFF},
    ]
};