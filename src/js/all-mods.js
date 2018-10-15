// Prefixes
export const LIFE = "Life";
export const MANA = "Mana";

export const EVASION_FLAT = "Flat Evasion";
export const EVASION_INC = "%Evasion";
export const EVASION_STUN_HYBRID = "Hybrid %Evasion/%StunBlock";
export const EVASION_LIFE_HYBRID = "Hybrid Flat Evasion/Life";

export const SHIELD_FLAT = "Flat Energy Shield";
export const SHIELD_INC = "%Energy Shield";
export const SHIELD_STUN_HYBRID = "Hybrid %Energy Shield/%StunBlock";
export const SHIELD_LIFE_HYBRID = "Hybrid Flat Energy Shield/Life";

export const REFLECT_PHYS = "Physical Reflect";

export const STR = "Strength";
export const DEX = "Dexterity";
export const INT = "Intelligence";

// Suffixes
export const LIFE_REG = "Life Regen";

export const ELE_RES_FIRE = "Fire Resistance";
export const ELE_RES_COLD = "Cold Resistance";
export const ELE_RES_LIGHT = "Lightning Resistance";
export const ELE_RES_CHAOS = "Chaos Resistance";

export const REDUCED_ATTR = "Reduced Attribute Reqs";
export const STUN_BLOCK = "%StunBlock";
export const DODGE = "%Dodge";

export const baseAffixes = {
    "Life" : [{
        "Name": "Life", "Stat": "Life", "Type": "Prefix", "Nature": "Natural", "Weight": 1000, "Tiers":
            {
                1: {range: [120, 129], text: "Prime", weight: 1000, ilvl: 86},
                2: {range: [110, 119], text: "Rapturous", weight: 1000, ilvl: 81},
                3: {range: [100, 109], text: "Vigorous", weight: 1000, ilvl: 73},
                4: {range: [90, 99], text: "Fecund", weight: 1000, ilvl: 64},
                5: {range: [80, 89], text: "Athlete\'s", weight: 1000, ilvl: 54},
                6: {range: [70, 79], text: "Virile", weight: 1000, ilvl: 44},
                7: {range: [60, 69], text: "Rotund", weight: 1000, ilvl: 36},
                8: {range: [50, 59], text: "Robust", weight: 1000, ilvl: 30},
                9: {range: [40, 49], text: "Stout", weight: 1000, ilvl: 24},
                10: {range: [30, 39], text: "Stalwart", weight: 1000, ilvl: 18},
                11: {range: [20, 29], text: "Sanguine", weight: 1000, ilvl: 11},
                12: {range: [10, 19], text: "Healthy", weight: 1000, ilvl: 5},
                13: {range: [3, 9], text: "Hale", weight: 1000, ilvl: 1}
            },
        "Text": ["+", " To Maximum Life"]
    }],
    "Mana": [{
        "Name": "Mana", "Stat": "Mana", "Type": "Prefix", "Nature": "Natural", "Weight": 1000, "Tiers":
            {
                1: {tier: 1, range: [69, 73], text: "Zaffre", weight: 1000, ilvl: 81},
                2: {tier: 2, range: [65, 68], text: "Blue", weight: 1000, ilvl: 75},
                3: {tier: 3, range: [60, 64], text: "Mazarine", weight: 1000, ilvl: 69},
                4: {tier: 4, range: [55, 59], text: "Chalybeous", weight: 1000, ilvl: 60},
                5: {tier: 5, range: [50, 54], text: "Gentian", weight: 1000, ilvl: 51},
                6: {tier: 6, range: [45, 49], text: "Opalescent", weight: 1000, ilvl: 42},
                7: {tier: 7, range: [40, 44], text: "Aqua", weight: 1000, ilvl: 35},
                8: {tier: 8, range: [35, 39], text: "Cerulean", weight: 1000, ilvl: 29},
                9: {tier: 9, range: [30, 34], text: "Sapphire", weight: 1000, ilvl: 23},
                10: {tier: 10, range: [25, 29], text: "Azure", weight: 1000, ilvl: 17},
                11: {tier: 11, range: [20, 24], text: "Cobalt", weight: 1000, ilvl: 11},
                12: {tier: 12, range: [15, 19], text: "Beryl", weight: 1000, ilvl: 1}
            },
        "Text": ["+", " To Maximum Mana"]
    }],

    "Flat Evasion": [{
        "Name": "Flat Evasion", "Stat": "Flat Evasion", "Nature": "Natural", "Type": "Prefix", "Weight": 1000, "Tiers":
            {
                1: {tier: 1, range: [323, 400], text: "Phased", weight: 1000, ilvl: 70},
                2: {tier: 2, range: [139, 322], text: "Blurred", weight: 1000, ilvl: 56},
                3: {tier: 3, range: [61, 138], text: "Fleet", weight: 1000, ilvl: 42},
                4: {tier: 4, range: [36, 60], text: "Acrobat\'s", weight: 1000, ilvl: 29},
                5: {tier: 5, range: [11, 35], text: "Dancer\'s", weight: 1000, ilvl: 18},
                6: {tier: 6, range: [3, 10], text: "Agile", weight: 1000, ilvl: 1}
            },
        "Text": ["+", " To Evasion Rating"]
    }],
    "Hybrid %Evasion/%StunBlock": [{
        "Name": "Hybrid %Evasion/%StunBlock",
        "Stat": "Hybrid %Evasion",
        "Nature": "Natural",
        "Type": "Prefix",
        "Weight": 1000,
        "Tiers":
            {
                1: {tier: 1, range: [39, 42], text: "Hummingbird\'s", weight: 1000, ilvl: 78},
                2: {tier: 2, range: [33, 38], text: "Dragonfly\'s", weight: 1000, ilvl: 60},
                3: {tier: 3, range: [27, 32], text: "Wasp\'s", weight: 1000, ilvl: 44},
                4: {tier: 4, range: [21, 26], text: "Butterfly\'s", weight: 1000, ilvl: 30},
                5: {tier: 5, range: [14, 20], text: "Moth\'s", weight: 1000, ilvl: 19},
                6: {tier: 6, range: [6, 13], text: "Mosquito\'s", weight: 1000, ilvl: 2}
            },
        "Text": ["", "% Increased Evasion Rating"]
    },
        {
            "Name": "Hybrid %Evasion/%StunBlock",
            "Stat": "Hybrid %StunBlock",
            "Nature": "Natural",
            "Type": "Prefix",
            "Weight": 1000,
            "Tiers":
                {
                    1: {tier: 1, range: [16, 17], weight: 1000, ilvl: 78},
                    2: {tier: 2, range: [14, 15], weight: 1000, ilvl: 60},
                    3: {tier: 3, range: [12, 13], weight: 1000, ilvl: 44},
                    4: {tier: 4, range: [10, 11], weight: 1000, ilvl: 30},
                    5: {tier: 5, range: [8, 9], weight: 1000, ilvl: 19},
                    6: {tier: 6, range: [6, 7], weight: 1000, ilvl: 2}
                },
            "Text": ["", "% Increased Stun And Block Recovery"]
        }],
    "%Evasion": [{
        "Name": "%Evasion", "Stat": "%Evasion", "Nature": "Natural", "Type": "Prefix", "Weight": 1000, "Tiers":
            {
                1: {tier: 1, range: [92, 100], text: "Mirage\'s", weight: 1000, ilvl: 84},
                2: {tier: 2, range: [80, 91], text: "Nightmare\'s", weight: 1000, ilvl: 72},
                3: {tier: 3, range: [68, 79], text: "Phantasm\'s", weight: 1000, ilvl: 60},
                4: {tier: 4, range: [56, 67], text: "Wraith\'s", weight: 1000, ilvl: 44},
                5: {tier: 5, range: [43, 55], text: "Spectre\'s", weight: 1000, ilvl: 30},
                6: {tier: 6, range: [27, 42], text: "Ghost\'s", weight: 1000, ilvl: 19},
                7: {tier: 7, range: [15, 26], text: "Shade\'s", weight: 1000, ilvl: 3}
            },
        "Text": ["", "% Increased Evasion Rating"]
    }],

    "Flat Energy Shield": [{
        "Name": "Flat Energy Shield",
        "Stat": "Flat Energy Shield",
        "Nature": "Natural",
        "Type": "Prefix",
        "Weight": 1000,
        "Tiers":
            {
                1: {tier: 1, range: [91, 100], text: "Resplendent", weight: 1000, ilvl: 75},
                2: {tier: 2, range: [77, 90], text: "Incandescent", weight: 1000, ilvl: 69},
                3: {tier: 3, range: [62, 76], text: "Scintillating", weight: 1000, ilvl: 60},
                4: {tier: 4, range: [50, 61], text: "Blazing", weight: 1000, ilvl: 51},
                5: {tier: 5, range: [39, 49], text: "Seething", weight: 1000, ilvl: 43},
                6: {tier: 6, range: [31, 38], text: "Pulsing", weight: 1000, ilvl: 35},
                7: {tier: 6, range: [24, 30], text: "Radiating", weight: 1000, ilvl: 29},
                8: {tier: 6, range: [17, 23], text: "Glowing", weight: 1000, ilvl: 23},
                9: {tier: 6, range: [12, 16], text: "Glittering", weight: 1000, ilvl: 17},
                10: {tier: 6, range: [6, 11], text: "Glimmering", weight: 1000, ilvl: 11},
                11: {tier: 6, range: [3, 5], text: "Shining", weight: 1000, ilvl: 3}
            },
        "Text": ["+", " To maximum Energy Shield"]
    }],

    "Physical Reflect": [{
        "Name": "Physical Reflect",
        "Stat": "Physical Reflect",
        "Nature": "Natural",
        "Type": "Prefix",
        "Weight": 1000,
        "Tiers":
            {
                1: {tier: 1, range: [25, 50], text: "Jagged", weight: 1000, ilvl: 35},
                2: {tier: 2, range: [11, 24], text: "Barbed", weight: 1000, ilvl: 20},
                3: {tier: 3, range: [5, 10], text: "Spiny", weight: 1000, ilvl: 10},
                4: {tier: 4, range: [1, 4], text: "Thorny", weight: 1000, ilvl: 1}
            },
        "Text": ["Reflects ", " Physical Damage To Melee Attackers"]
    }],
    "Hybrid Flat Evasion/Life": [{
        "Name": "Hybrid Flat Evasion/Life",
        "Stat": "Hybrid Flat Evasion",
        "Nature": "Natural",
        "Type": "Prefix",
        "Weight": 1000,
        "Tiers":
            {
                1: {tier: 1, range: [96, 120], text: "Ibex\'s", weight: 500, ilvl: 46},
                2: {tier: 2, range: [43, 95], text: "Ram\'s", weight: 1000, ilvl: 30},
                3: {tier: 3, range: [21, 42], text: "Fawn\'s", weight: 1000, ilvl: 46},
                4: {tier: 4, range: [14, 20], text: "Flea\'s", weight: 1000, ilvl: 30}
            },
        "Text": ["+", " To Evasion Rating"]
    },
        {
            "Name": "Hybrid Flat Evasion/Life",
            "Stat": "Hybrid Life",
            "Nature": "Natural",
            "Type": "Prefix",
            "Weight": 1000,
            "Tiers":
                {
                    1: {tier: 1, range: [34, 38], weight: 1000, ilvl: 46},
                    2: {tier: 2, range: [29, 33], weight: 1000, ilvl: 30},
                    3: {tier: 3, range: [24, 28], weight: 1000, ilvl: 46},
                    4: {tier: 4, range: [18, 23], weight: 1000, ilvl: 30}
                },
            "Text": ["+", " To Maximum Life"]
        }],
    "Dexterity": [{
        "Name": "Dexterity", "Stat": "Dexterity", "Nature": "Natural", "Type": "Suffix", "Weight": 1000, "Tiers":
            {
                1: {tier: 1, range: [56, 60], text: "Of The Blur", weight: 1000, ilvl: 82},
                2: {tier: 2, range: [51, 55], text: "Of The Wind", weight: 1000, ilvl: 82},
                3: {tier: 3, range: [43, 50], text: "Of The Phantasm", weight: 1000, ilvl: 74},
                4: {tier: 4, range: [38, 42], text: "Of The Jaguar", weight: 1000, ilvl: 66},
                5: {tier: 5, range: [33, 37], text: "Of The Leopard", weight: 1000, ilvl: 55},
                6: {tier: 6, range: [28, 32], text: "Of The Panther", weight: 1000, ilvl: 44},
                7: {tier: 7, range: [23, 27], text: "Of The Falcon", weight: 1000, ilvl: 33},
                8: {tier: 8, range: [18, 22], text: "Of The Fox", weight: 1000, ilvl: 22},
                9: {tier: 9, range: [13, 17], text: "Of The Lynx", weight: 1000, ilvl: 11},
                10: {tier: 10, range: [8, 12], text: "Of The Mongoose", weight: 1000, ilvl: 1}
            },
        "Text": ["+", " To Dexterity"]
    }],
    "Intelligence": [{
        "Name": "Intelligence", "Stat": "Intelligence", "Nature": "Natural", "Type": "Suffix", "Weight": 1000, "Tiers":
            {
                1: {tier: 1, range: [51, 55], text: "Of The Genius", weight: 1000, ilvl: 82},
                2: {tier: 2, range: [43, 50], text: "Of The Virtuoso", weight: 1000, ilvl: 74},
                3: {tier: 3, range: [38, 42], text: "Of The Savant", weight: 1000, ilvl: 66},
                4: {tier: 4, range: [33, 37], text: "Of The Sage", weight: 1000, ilvl: 55},
                5: {tier: 5, range: [28, 32], text: "Of The Philosopher", weight: 1000, ilvl: 44},
                6: {tier: 6, range: [23, 27], text: "Of The Augur", weight: 1000, ilvl: 33},
                7: {tier: 7, range: [18, 22], text: "Of The Prodigy", weight: 1000, ilvl: 22},
                8: {tier: 8, range: [13, 17], text: "Of The Student", weight: 1000, ilvl: 11},
                9: {tier: 9, range: [8, 12], text: "Of The Pupil", weight: 1000, ilvl: 1}
            },
        "Text": ["+", " To Dexterity"]
    }],
    "Life Regen": [{
        "Name": "Life Regen", "Stat": "Life Regen", "Nature": "Natural", "Type": "Suffix", "Weight": 1000, "Tiers":
            {
                1: {tier: 1, range: [2001, 2500], text: "Of The Phoenix", weight: 1000, ilvl: 78},
                2: {tier: 2, range: [1601, 2000], text: "Of The Ryslatha", weight: 1000, ilvl: 59},
                3: {tier: 3, range: [1301, 1600], text: "Of The Troll", weight: 1000, ilvl: 44},
                4: {tier: 4, range: [1001, 1300], text: "Of The Hydra", weight: 1000, ilvl: 30},
                5: {tier: 5, range: [701, 1000], text: "Of The Starfish", weight: 1000, ilvl: 18},
                6: {tier: 6, range: [401, 701], text: "Of The Flatworm", weight: 1000, ilvl: 1},
                7: {tier: 7, range: [201, 400], text: "Of The Lizard", weight: 1000, ilvl: 1},
                8: {tier: 8, range: [100, 200], text: "Of The Newt", weight: 1000, ilvl: 1}
            },
        "Text": ["", " Life Regenerated Per Second"]
    }],
    "Cold Resistance": [{
        "Name": "Cold Resistance",
        "Stat": "Cold Resistance",
        "Nature": "Natural",
        "Type": "Suffix",
        "Weight": 1000,
        "Tiers":
            {
                1: {tier: 1, range: [46, 48], text: "Of Haast", weight: 1000, ilvl: 84},
                2: {tier: 2, range: [42, 45], text: "Of The Ice", weight: 1000, ilvl: 72},
                3: {tier: 3, range: [36, 41], text: "Of The Polar Bear", weight: 1000, ilvl: 60},
                4: {tier: 4, range: [30, 35], text: "Of The Walrus", weight: 1000, ilvl: 50},
                5: {tier: 5, range: [24, 29], text: "Of The Yeti", weight: 1000, ilvl: 38},
                6: {tier: 6, range: [18, 23], text: "Of The Penguin", weight: 1000, ilvl: 26},
                7: {tier: 7, range: [12, 17], text: "Of The Seal", weight: 1000, ilvl: 14},
                8: {tier: 8, range: [6, 11], text: "Of The Inuit", weight: 1000, ilvl: 1}
            },
        "Text": ["+", "% To Cold Resistance"]
    }],
    "Fire Resistance": [{
        "Name": "Fire Resistance",
        "Stat": "Fire Resistance",
        "Nature": "Natural",
        "Type": "Suffix",
        "Weight": 1000,
        "Tiers":
            {
                1: {tier: 1, range: [46, 48], text: "Of Tzteosh", weight: 1000, ilvl: 84},
                2: {tier: 2, range: [42, 45], text: "Of The Magma", weight: 1000, ilvl: 72},
                3: {tier: 3, range: [36, 41], text: "Of The Volcano", weight: 1000, ilvl: 60},
                4: {tier: 4, range: [30, 35], text: "Of The Furnace", weight: 1000, ilvl: 50},
                5: {tier: 5, range: [24, 29], text: "Of The Kiln", weight: 1000, ilvl: 38},
                6: {tier: 6, range: [18, 23], text: "Of The Drake", weight: 1000, ilvl: 26},
                7: {tier: 7, range: [12, 17], text: "Of The Salamander", weight: 1000, ilvl: 14},
                8: {tier: 8, range: [6, 11], text: "Of The Whelpling", weight: 1000, ilvl: 1}
            },
        "Text": ["+", "% To Fire Resistance"]
    }],
    "Lightning Resistance": [{
        "Name": "Lightning Resistance",
        "Stat": "Lightning Resistance",
        "Nature": "Natural",
        "Type": "Suffix",
        "Weight": 1000,
        "Tiers":
            {
                1: {tier: 1, range: [46, 48], text: "Of Ephij", weight: 1000, ilvl: 84},
                2: {tier: 2, range: [42, 45], text: "Of The Lightning", weight: 1000, ilvl: 72},
                3: {tier: 3, range: [36, 41], text: "Of The Maelstrom", weight: 1000, ilvl: 60},
                4: {tier: 4, range: [30, 35], text: "Of The Tempest", weight: 1000, ilvl: 50},
                5: {tier: 5, range: [24, 29], text: "Of The Thunderhead", weight: 1000, ilvl: 38},
                6: {tier: 6, range: [18, 23], text: "Of The Storm", weight: 1000, ilvl: 26},
                7: {tier: 7, range: [12, 17], text: "Of The Squall", weight: 1000, ilvl: 14},
                8: {tier: 8, range: [6, 11], text: "Of The Cloud", weight: 1000, ilvl: 1}
            },
        "Text": ["+", "% To Lightning Resistance"]
    }],
    "Chaos Resistance": [{
        "Name": "Chaos Resistance",
        "Stat": "Chaos Resistance",
        "Nature": "Natural",
        "Type": "Suffix",
        "Weight": 250,
        "Tiers":
            {
                1: {tier: 1, range: [31, 35], text: "Of Bameth", weight: 1000, ilvl: 81},
                2: {tier: 2, range: [26, 30], text: "Of Exile", weight: 1000, ilvl: 65},
                3: {tier: 3, range: [21, 25], text: "Of Expulsion", weight: 1000, ilvl: 56},
                4: {tier: 4, range: [16, 20], text: "Of Eviction", weight: 1000, ilvl: 44},
                5: {tier: 5, range: [11, 15], text: "Of Banishment", weight: 1000, ilvl: 30},
                6: {tier: 6, range: [5, 10], text: "Of The Lost", weight: 1000, ilvl: 16}
            },
        "Text": ["+", "% To Chaos Resistance"]
    }],
    "Reduced Attribute Reqs": [{
        "Name": "Reduced Attribute Reqs",
        "Stat": "Reduced Attribute Reqs",
        "Nature": "Natural",
        "Type": "Suffix",
        "Weight": 850,
        "Tiers":
            {
                1: {tier: 1, range: [32, 32], text: "Of The Apt", weight: 1000, ilvl: 60},
                2: {tier: 2, range: [18, 18], text: "Of The Worthy", weight: 1000, ilvl: 36}
            },
        "Text": ["", "% Reduced Attribute Requirements"]
    }],
    "%StunBlock": [{
        "Name": "%StunBlock", "Stat": "%StunBlock", "Nature": "Natural", "Type": "Suffix", "Weight": 1000, "Tiers":
            {
                1: {tier: 1, range: [26, 28], text: "Of Corundum Skin", weight: 1000, ilvl: 79},
                2: {tier: 2, range: [23, 25], text: "Of Adamantite Skin", weight: 1000, ilvl: 56},
                3: {tier: 3, range: [20, 22], text: "Of Steel Skin", weight: 1000, ilvl: 42},
                4: {tier: 4, range: [17, 19], text: "Of Iron Skin", weight: 1000, ilvl: 28},
                5: {tier: 5, range: [14, 16], text: "Of Stone Skin", weight: 1000, ilvl: 17},
                6: {tier: 6, range: [11, 13], text: "Of Thick Skin", weight: 1000, ilvl: 1}
            },
        "Text": ["", "% Increased Stun And Block Recovery"]
    }],
    "%Dodge": [{
        "Name": "%Dodge", "Stat": "%Dodge", "Nature": "Natural", "Type": "Suffix", "Weight": 2000, "Tiers":
            {
                1: {tier: 1, range: [5, 6], text: "Of Fog", weight: 500, ilvl: 85},
                2: {tier: 2, range: [3, 4], text: "Of Haze", weight: 1000, ilvl: 25}
            },
        "Text": ["", "% Chance To Dodge Attacks"]
    }]
};

/**
 * Generates a list of tiers in the defined structure by a given list of all supported tiers. If a maxTier is given,
 * it will override the highest tier to this level.
 *
 * @param allTiers list of supported tiers
 * @param maxTier optional: highest tier level
 */
function getTiers(allTiers, maxTier) {
    const tiers = {};

    const totalTiers = Object.keys(allTiers).length;
    if(maxTier === undefined){
        maxTier = totalTiers;
    }

    for (let tierLvl = 1; tierLvl <= maxTier; tierLvl++) {
        // Change tier entry according to minTier
        tiers[tierLvl] = allTiers[totalTiers - maxTier + tierLvl];
        tiers[tierLvl].tier = tierLvl;
    }
    return tiers;
}

/**
 * Generates an affix value based on a given tier count.
 * @param name of the affix
 * @param tiers - number of tiers for this affix
 * @returns parsable affix map value
 */
function getAffix(name, tiers) {
    if(baseAffixes[name] === undefined){
        console.log("WARN: No mods defined for stat "+name);
        return {};
    }

    // Deep clone mod to prevent changing default baseMods
    const mods = JSON.parse(JSON.stringify(baseAffixes[name]));

    // Add tier attributes
    mods.forEach((mod, i) => {
        mod.Tiers = getTiers(mod.Tiers, tiers);
    });

    return mods;
}

/**
 * Generates a baseAffix object for a given affix definition array defined in base-item-states
 * @param modDef: array of affix definition, containing affix name and number of tiers
 */
export function generateAffixList(modDef) {
    const result = {};

    modDef.forEach((mod) =>{
        result[mod.Name] = getAffix(mod.Name, mod.Tiers);
    });

    return result;
}