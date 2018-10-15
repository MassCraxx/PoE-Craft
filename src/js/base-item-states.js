import * as MOD from './all-mods.js';

export const AssassinsGarb = {
    baseName: "Assassin's Garb",
    baseItem: "BodyDEX",
    iconFile: "BodyDEX/AssassinsGarb.png",
    defenseStats: [["Evasion Rating:", 737]],
    levelRequirements: [["Requires Level", 68], [183, "Dexterity"]],
    possibleAffixes: [
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
        {Name: MOD.STUN_BLOCK},
        {Name: MOD.DODGE}
    ]
};

export const SorcererGloves = {
    baseName: "Sorcerer Gloves",
    baseItem: "GloveES",
    iconFile: "GloveES/SorcererGloves.png",
    defenseStats: [["Energy Shield:", 47]],
    levelRequirements: [["Requires Level", 69], [97, "Intelligence"]],
    possibleAffixes: [
        // Prefix
        // {Name: MOD.ADD_PHYS_ATK},
        // {Name: MOD.ADD_COLD_ATK},
        // {Name: MOD.ADD_FIRE_ATK},
        // {Name: MOD.ADD_LIGHT_ATK},
        {Name: MOD.MANA},
        // {Name: MOD.SHIELD_INC},
        // {Name: MOD.SHIELD_STUN_HYBRID},
        {Name: MOD.SHIELD_FLAT},
        // {Name: MOD.SHIELD_LIFE_HYBRID},
        {Name: MOD.LIFE, Tiers: 9},
        // {Name: MOD.RARITY_PREF},
        // {Name: MOD.LIFE_LEECH},
        // {Name: MOD.MANA_LEECH},

        // Suffix
        // {Name: MOD.ACCURACY},
        // {Name: MOD.ATK_SPEED},
        {Name: MOD.DEX},
        {Name: MOD.INT},
        // {Name: MOD.LIFE_GAIN_OH},
        // {Name: MOD.LIFE_GAIN_OK},
        // {Name: MOD.MANA_GAIN_OK},
        {Name: MOD.LIFE_REG, Tiers: 7},
        {Name: MOD.ELE_RES_COLD},
        {Name: MOD.ELE_RES_FIRE},
        {Name: MOD.ELE_RES_LIGHT},
        {Name: MOD.ELE_RES_CHAOS},
        {Name: MOD.REDUCED_ATTR},
        // {Name: MOD.RARITY_SUF},
    ]
};