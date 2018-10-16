/** Constant keys for affixes. **/

// Prefixes
export const LIFE = "Life";
export const MANA = "Mana";

export const ARMOUR_FLAT = "Flat Armour";
export const ARMOUR_INC = "%Armour";
export const ARMOUR_STUN_HYBRID = "Hybrid %Armour/%StunBlock";
export const ARMOUR_LIFE_HYBRID = "Hybrid Flat Armour/Life";

export const EVASION_FLAT = "Flat Evasion";
export const EVASION_INC = "%Evasion";
export const EVASION_STUN_HYBRID = "Hybrid %Evasion/%StunBlock";
export const EVASION_LIFE_HYBRID = "Hybrid Flat Evasion/Life";

export const SHIELD_FLAT = "Flat Energy Shield";
export const SHIELD_INC = "%Energy Shield";
export const SHIELD_STUN_HYBRID = "Hybrid %Energy Shield/%StunBlock";
export const SHIELD_LIFE_HYBRID = "Hybrid Flat Energy Shield/Life";

export const ATK_FLAT_PHYS = "Flat Atk Phys";
export const ATK_FLAT_COLD = "Flat Atk Cold";
export const ATK_FLAT_FIRE = "Flat Atk Fire";
export const ATK_FLAT_LIGHT = "Flat Atk Lightning";

export const REFLECT_PHYS = "Physical Reflect";
export const RARITY_PREF = "Item Rarity Prefix";

export const LIFE_LEECH = "Physical Damage Life Leech";
export const MANA_LEECH = "Physical Damage Mana Leech";

// Suffixes
export const ACCURACY = "Flat Accuracy";
export const ATK_SPEED = "%Attack Speed";

export const STR = "Strength";
export const DEX = "Dexterity";
export const INT = "Intelligence";

export const LIFE_GAIN_OH = "Life gained on Hit";
export const LIFE_GAIN_OK = "Life gained on Kill";
export const MANA_GAIN_OK = "Mana gained on Kill";
export const LIFE_REG = "Life Regen";

export const ELE_RES_FIRE = "Fire Resistance";
export const ELE_RES_COLD = "Cold Resistance";
export const ELE_RES_LIGHT = "Lightning Resistance";
export const ELE_RES_CHAOS = "Chaos Resistance";

export const REDUCED_ATTR = "Reduced Attribute Reqs";
export const STUN_BLOCK_RECOV = "%StunBlock";

export const PHYS_RED = "%Physical Damage Reduction";
export const DODGE = "%Dodge";
export const SHIELD_REGEN = "%Energy Shield Regeneration";

export const RARITY_SUFF = "Item Rarity Suffix";

export const allAffixes = {
    // PREFIX
    "Life": [{
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
                1: {range: [69, 73], text: "Zaffre", weight: 1000, ilvl: 81},
                2: {range: [65, 68], text: "Blue", weight: 1000, ilvl: 75},
                3: {range: [60, 64], text: "Mazarine", weight: 1000, ilvl: 69},
                4: {range: [55, 59], text: "Chalybeous", weight: 1000, ilvl: 60},
                5: {range: [50, 54], text: "Gentian", weight: 1000, ilvl: 51},
                6: {range: [45, 49], text: "Opalescent", weight: 1000, ilvl: 42},
                7: {range: [40, 44], text: "Aqua", weight: 1000, ilvl: 35},
                8: {range: [35, 39], text: "Cerulean", weight: 1000, ilvl: 29},
                9: {range: [30, 34], text: "Sapphire", weight: 1000, ilvl: 23},
                10: {range: [25, 29], text: "Azure", weight: 1000, ilvl: 17},
                11: {range: [20, 24], text: "Cobalt", weight: 1000, ilvl: 11},
                12: {range: [15, 19], text: "Beryl", weight: 1000, ilvl: 1}
            },
        "Text": ["+", " To Maximum Mana"]
    }],

    "Flat Armour": [{
        "Name": "Flat Armour", "Stat": "Flat Armour", "Nature": "Natural", "Type": "Prefix", "Weight": 1000, "Tiers":
            {
                1: {range: [323, 400], text: "Carapaced", weight: 1000, ilvl: 73},
                2: {range: [139, 322], text: "Plated", weight: 1000, ilvl: 59},
                3: {range: [61, 138], text: "Fortified", weight: 1000, ilvl: 46},
                4: {range: [36, 60], text: "Ribbed", weight: 1000, ilvl: 30},
                5: {range: [11, 35], text: "Studded", weight: 1000, ilvl: 18},
                6: {range: [3, 10], text: "Lacquered", weight: 1000, ilvl: 1}
            },
        "Text": ["+", " To Evasion Rating"]
    }],
    "%Armour": [{
        "Name": "%Armour", "Stat": "%Armour", "Nature": "Natural", "Type": "Prefix", "Weight": 1000, "Tiers":
            {
                1: {range: [101, 110], text: "Impenetrable", weight: 1000, ilvl: 86},
                2: {range: [92, 100], text: "Impregnable", weight: 1000, ilvl: 84},
                3: {range: [80, 91], text: "Girded", weight: 1000, ilvl: 72},
                4: {range: [68, 79], text: "Thickened", weight: 1000, ilvl: 60},
                5: {range: [56, 67], text: "Buttressed", weight: 1000, ilvl: 42},
                6: {range: [43, 55], text: "Lobstered", weight: 1000, ilvl: 29},
                7: {range: [27, 42], text: "Layered", weight: 1000, ilvl: 17},
                8: {range: [15, 26], text: "Reinforced", weight: 1000, ilvl: 3}
            },
        "Text": ["", "% Increased Armour"]
    }],
    "Hybrid %Armour/%StunBlock": [{
        "Name": "Hybrid %Armour/%StunBlock",
        "Stat": "Hybrid %Armour",
        "Nature": "Natural",
        "Type": "Prefix",
        "Weight": 1000,
        "Tiers":
            {
                1: {range: [39, 42], text: "Mammoth\'s", weight: 1000, ilvl: 78},
                2: {range: [33, 38], text: "Elephant\'s", weight: 1000, ilvl: 60},
                3: {range: [27, 32], text: "Rhino\'s", weight: 1000, ilvl: 42},
                4: {range: [21, 26], text: "Armadillo\'s", weight: 1000, ilvl: 29},
                5: {range: [14, 20], text: "Crab\'s", weight: 1000, ilvl: 17},
                6: {range: [6, 13], text: "Mosquito\'s", weight: 1000, ilvl: 2}
            },
        "Text": ["", "% Increased Armour"]
    },
        {
            "Name": "Hybrid %Armour/%StunBlock",
            "Stat": "Hybrid %StunBlock",
            "Nature": "Natural",
            "Type": "Prefix",
            "Weight": 1000,
            "Tiers":
                {
                    1: {range: [16, 17], weight: 1000, ilvl: 78},
                    2: {range: [14, 15], weight: 1000, ilvl: 60},
                    3: {range: [12, 13], weight: 1000, ilvl: 42},
                    4: {range: [10, 11], weight: 1000, ilvl: 29},
                    5: {range: [8, 9], weight: 1000, ilvl: 17},
                    6: {range: [6, 7], weight: 1000, ilvl: 2}
                },
            "Text": ["", "% Increased Stun And Block Recovery"]
        }],
    "Hybrid Flat Armour/Life": [{
        "Name": "Hybrid Flat Armour/Life",
        "Stat": "Hybrid Flat Armour",
        "Nature": "Natural",
        "Type": "Prefix",
        "Weight": 1000,
        "Tiers":
            {
                1: {tier: 1, range: [96, 120], text: "Crocodile\'s", weight: 500, ilvl: 78},
                2: {tier: 2, range: [43, 95], text: "Nautilus\'s", weight: 1000, ilvl: 62},
                3: {tier: 3, range: [21, 42], text: "Urchin\'s", weight: 1000, ilvl: 46},
                4: {tier: 4, range: [14, 20], text: "Oyster\'s", weight: 1000, ilvl: 30}
            },
        "Text": ["+", " To Armour"]
    },
        {
            "Name": "Hybrid Flat Armour/Life",
            "Stat": "Hybrid Life",
            "Nature": "Natural",
            "Type": "Prefix",
            "Weight": 1000,
            "Tiers":
                {
                    1: {tier: 1, range: [34, 38], weight: 1000, ilvl: 78},
                    2: {tier: 2, range: [29, 33], weight: 1000, ilvl: 62},
                    3: {tier: 3, range: [24, 28], weight: 1000, ilvl: 46},
                    4: {tier: 4, range: [18, 23], weight: 1000, ilvl: 30}
                },
            "Text": ["+", " To Maximum Life"]
        }],

    "Flat Evasion": [{
        "Name": "Flat Evasion", "Stat": "Flat Evasion", "Nature": "Natural", "Type": "Prefix", "Weight": 1000, "Tiers":
            {
                1: {range: [323, 400], text: "Vaporous", weight: 1000, ilvl: 70},
                2: {range: [139, 322], text: "Blurred", weight: 1000, ilvl: 56},
                3: {range: [61, 138], text: "Fleet", weight: 1000, ilvl: 42},
                4: {range: [36, 60], text: "Acrobat\'s", weight: 1000, ilvl: 29},
                5: {range: [11, 35], text: "Dancer\'s", weight: 1000, ilvl: 18},
                6: {range: [3, 10], text: "Agile", weight: 1000, ilvl: 1}
            },
        "Text": ["+", " To Evasion Rating"]
    }],
    "%Evasion": [{
        "Name": "%Evasion", "Stat": "%Evasion", "Nature": "Natural", "Type": "Prefix", "Weight": 1000, "Tiers":
            {
                1: {range: [101, 110], text: "Illusion\'s", weight: 1000, ilvl: 86},
                2: {range: [92, 100], text: "Mirage\'s", weight: 1000, ilvl: 84},
                3: {range: [80, 91], text: "Nightmare\'s", weight: 1000, ilvl: 72},
                4: {range: [68, 79], text: "Phantasm\'s", weight: 1000, ilvl: 60},
                5: {range: [56, 67], text: "Wraith\'s", weight: 1000, ilvl: 44},
                6: {range: [43, 55], text: "Spectre\'s", weight: 1000, ilvl: 30},
                7: {range: [27, 42], text: "Ghost\'s", weight: 1000, ilvl: 19},
                8: {range: [15, 26], text: "Shade\'s", weight: 1000, ilvl: 3}
            },
        "Text": ["", "% Increased Evasion Rating"]
    }],
    "Hybrid %Evasion/%StunBlock": [{
        "Name": "Hybrid %Evasion/%StunBlock",
        "Stat": "Hybrid %Evasion",
        "Nature": "Natural",
        "Type": "Prefix",
        "Weight": 1000,
        "Tiers":
            {
                1: {range: [39, 42], text: "Hummingbird\'s", weight: 1000, ilvl: 78},
                2: {range: [33, 38], text: "Dragonfly\'s", weight: 1000, ilvl: 60},
                3: {range: [27, 32], text: "Wasp\'s", weight: 1000, ilvl: 44},
                4: {range: [21, 26], text: "Butterfly\'s", weight: 1000, ilvl: 30},
                5: {range: [14, 20], text: "Moth\'s", weight: 1000, ilvl: 19},
                6: {range: [6, 13], text: "Mosquito\'s", weight: 1000, ilvl: 2}
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
                    1: {range: [16, 17], weight: 1000, ilvl: 78},
                    2: {range: [14, 15], weight: 1000, ilvl: 60},
                    3: {range: [12, 13], weight: 1000, ilvl: 44},
                    4: {range: [10, 11], weight: 1000, ilvl: 30},
                    5: {range: [8, 9], weight: 1000, ilvl: 19},
                    6: {range: [6, 7], weight: 1000, ilvl: 2}
                },
            "Text": ["", "% Increased Stun And Block Recovery"]
        }],
    "Hybrid Flat Evasion/Life": [{
        "Name": "Hybrid Flat Evasion/Life",
        "Stat": "Hybrid Flat Evasion",
        "Nature": "Natural",
        "Type": "Prefix",
        "Weight": 1000,
        "Tiers":
            {
                1: {tier: 1, range: [96, 120], text: "Ibex\'s", weight: 500, ilvl: 78},
                2: {tier: 2, range: [43, 95], text: "Ram\'s", weight: 1000, ilvl: 62},
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
                    1: {tier: 1, range: [34, 38], weight: 1000, ilvl: 78},
                    2: {tier: 2, range: [29, 33], weight: 1000, ilvl: 62},
                    3: {tier: 3, range: [24, 28], weight: 1000, ilvl: 46},
                    4: {tier: 4, range: [18, 23], weight: 1000, ilvl: 30}
                },
            "Text": ["+", " To Maximum Life"]
        }],

    "Flat Energy Shield": [{
        "Name": "Flat Energy Shield",
        "Stat": "Flat Energy Shield",
        "Nature": "Natural",
        "Type": "Prefix",
        "Weight": 1000,
        "Tiers":
            {
                1: {range: [91, 100], text: "Resplendent", weight: 1000, ilvl: 75},
                2: {range: [77, 90], text: "Incandescent", weight: 1000, ilvl: 69},
                3: {range: [62, 76], text: "Scintillating", weight: 1000, ilvl: 60},
                4: {range: [50, 61], text: "Blazing", weight: 1000, ilvl: 51},
                5: {range: [39, 49], text: "Seething", weight: 1000, ilvl: 43},
                6: {range: [31, 38], text: "Pulsing", weight: 1000, ilvl: 35},
                7: {range: [24, 30], text: "Radiating", weight: 1000, ilvl: 29},
                8: {range: [17, 23], text: "Glowing", weight: 1000, ilvl: 23},
                9: {range: [12, 16], text: "Glittering", weight: 1000, ilvl: 17},
                10: {range: [6, 11], text: "Glimmering", weight: 1000, ilvl: 11},
                11: {range: [3, 5], text: "Shining", weight: 1000, ilvl: 3}
            },
        "Text": ["+", " To maximum Energy Shield"]
    }],
    "%Energy Shield": [{
        "Name": "%Energy Shield", "Stat": "%Energy Shield", "Nature": "Natural", "Type": "Prefix", "Weight": 1000, "Tiers":
            {
                1: {range: [101, 110], text: "Unfaltering", weight: 1000, ilvl: 86},
                2: {range: [92, 100], text: "Unassailable", weight: 1000, ilvl: 84},
                3: {range: [80, 91], text: "Indomitable", weight: 1000, ilvl: 72},
                4: {range: [68, 79], text: "Dauntless", weight: 1000, ilvl: 60},
                5: {range: [56, 67], text: "Fearless", weight: 1000, ilvl: 44},
                6: {range: [43, 55], text: "Resolute", weight: 1000, ilvl: 30},
                7: {range: [27, 42], text: "Strong-Willed", weight: 1000, ilvl: 19},
                8: {range: [11, 28], text: "Protective", weight: 1000, ilvl: 3}
            },
        "Text": ["", "% Increased Energy Shield"]
    }],
    "Hybrid %Energy Shield/%StunBlock": [{
        "Name": "Hybrid %Energy Shield/%StunBlock",
        "Stat": "Hybrid %Energy Shield",
        "Nature": "Natural",
        "Type": "Prefix",
        "Weight": 1000,
        "Tiers":
            {
                1: {range: [39, 42], text: "Seraphim\'s", weight: 1000, ilvl: 78},
                2: {range: [33, 38], text: "Djinn\'s", weight: 1000, ilvl: 60},
                3: {range: [27, 32], text: "Naga\'s", weight: 1000, ilvl: 44},
                4: {range: [21, 26], text: "Boggart'\'s", weight: 1000, ilvl: 30},
                5: {range: [14, 20], text: "Gremlin\'s", weight: 1000, ilvl: 19},
                6: {range: [6, 13], text: "Pixie\'s", weight: 1000, ilvl: 2}
            },
        "Text": ["", "% Increased Energy Shield"]
    },
        {
            "Name": "Hybrid %Energy Shield/%StunBlock",
            "Stat": "Hybrid %StunBlock",
            "Nature": "Natural",
            "Type": "Prefix",
            "Weight": 1000,
            "Tiers":
                {
                    1: {range: [16, 17], weight: 1000, ilvl: 78},
                    2: {range: [14, 15], weight: 1000, ilvl: 60},
                    3: {range: [12, 13], weight: 1000, ilvl: 44},
                    4: {range: [10, 11], weight: 1000, ilvl: 30},
                    5: {range: [8, 9], weight: 1000, ilvl: 19},
                    6: {range: [6, 7], weight: 1000, ilvl: 2}
                },
            "Text": ["", "% Increased Stun And Block Recovery"]
        }],

    "Hybrid Flat Energy Shield/Life": [{
        "Name": "Hybrid Flat Energy Shield/Life",
        "Stat": "Hybrid Flat Energy Shield",
        "Nature": "Natural",
        "Type": "Prefix",
        "Weight": 1000,
        "Tiers":
            {
                1: {range: [26, 30], text: "Exarch\'s", weight: 500, ilvl: 78},
                2: {range: [16, 25], text: "Abbot\'s", weight: 1000, ilvl: 62},
                3: {range: [11, 15], text: "Prior\'s", weight: 1000, ilvl: 46},
                4: {range: [8, 10], text: "Monk\'s", weight: 1000, ilvl: 30}
            },
        "Text": ["+", " To Energy Shield"]
    },
        {
            "Name": "Hybrid Flat Energy Shield/Life",
            "Stat": "Hybrid Life",
            "Nature": "Natural",
            "Type": "Prefix",
            "Weight": 1000,
            "Tiers":
                {
                    1: {range: [34, 38], weight: 1000, ilvl: 78},
                    2: {range: [29, 33], weight: 1000, ilvl: 62},
                    3: {range: [24, 28], weight: 1000, ilvl: 46},
                    4: {range: [18, 23], weight: 1000, ilvl: 30}
                },
            "Text": ["+", " To Maximum Life"]
        }],

    //TODO: Implement min max values, update fire and lightning
    "Flat Atk Phys": [{
        "Name": "Flat Atk Phys",
        "Stat": "Flat Atk Phys",
        "Nature": "Natural",
        "Type": "Prefix",
        "Weight": 1000,
        "Tiers":
            {
                1: {range: [650, 800], text: "Honed", weight: 1000, ilvl: 29},
                2: {range: [450, 550], text: "Polished", weight: 1000, ilvl: 21},
                3: {range: [300, 400], text: "Burnished", weight: 1000, ilvl: 13},
                4: {range: [150, 150], text: "Glinting", weight: 1000, ilvl: 2}
            },
        "Decimal": true,
        "Text": ["Adds ", " Physical Damage To Attacks"]}],
    "Flat Atk Cold": [{
        "Name": "Flat Atk Cold",
        "Stat": "Flat Atk Cold",
        "Nature": "Natural",
        "Type": "Prefix",
        "Weight": 1000,
        "Tiers":
            {
                1: {range: [1200, 1500], text: "Freezing", weight: 1000, ilvl: 29},
                2: {range: [850, 1250], text: "Frigid", weight: 1000, ilvl: 29},
                3: {range: [750, 950], text: "Icy", weight: 1000, ilvl: 21},
                4: {range: [500, 600], text: "Chilled", weight: 1000, ilvl: 13},
                5: {range: [150, 150], text: "Frosted", weight: 1000, ilvl: 2}
            },
        "Decimal": true,
        "Text": ["Adds ", " Cold Damage To Attacks"]}],
    "Flat Atk Fire": [{
        "Name": "Flat Atk Fire",
        "Stat": "Flat Atk Fire",
        "Nature": "Natural",
        "Type": "Prefix",
        "Weight": 1000,
        "Tiers":
            {
                1: {range: [1100, 1400], text: "Burning", weight: 1000, ilvl: 28},
                2: {range: [800, 100], text: "Smoking", weight: 1000, ilvl: 20},
                3: {range: [500, 650], text: "Smoldering", weight: 1000, ilvl: 12},
                4: {range: [150, 150], text: "Heated", weight: 1000, ilvl: 1}
            },
        "Decimal": true,
        "Text": ["Adds ", " Fire Damage To Attacks"]}],
    "Flat Atk Lightning": [{
        "Name": "Flat Atk Lightning",
        "Stat": "Flat Atk Lightning",
        "Nature": "Natural",
        "Type": "Prefix",
        "Weight": 1000,
        "Tiers":
            {
                1: {range: [1400, 1500], text: "Crackling", weight: 1000, ilvl: 30},
                2: {range: [1150, 1250], text: "Snapping", weight: 1000, ilvl: 22},
                3: {range: [750, 800], text: "Buzzing", weight: 1000, ilvl: 13},
                4: {range: [300, 300], text: "Humming", weight: 1000, ilvl: 3}
            },
        "Decimal": true,
        "Text": ["Adds ", " Lightning Damage To Attacks"]}],

    "Physical Reflect": [{
        "Name": "Physical Reflect",
        "Stat": "Physical Reflect",
        "Nature": "Natural",
        "Type": "Prefix",
        "Weight": 1000,
        "Tiers":
            {
                1: {range: [25, 50], text: "Jagged", weight: 1000, ilvl: 35},
                2: {range: [11, 24], text: "Barbed", weight: 1000, ilvl: 20},
                3: {range: [5, 10], text: "Spiny", weight: 1000, ilvl: 10},
                4: {range: [1, 4], text: "Thorny", weight: 1000, ilvl: 1}
            },
        "Text": ["Reflects ", " Physical Damage To Melee Attackers"]
    }],
    "Item Rarity Prefix": [{
        "Name": "Item Rarity Prefix",
        "Stat": "Item Rarity Prefix",
        "Nature": "Natural",
        "Type": "Prefix",
        "Weight": 1000,
        "Tiers":
            {
                1: {range: [13, 18], text: "Pirate\'s", weight: 1000, ilvl: 39},
                2: {range: [8, 12], text: "Magpie\'s", weight: 1000, ilvl: 20}
            },
        "Text": ["", "% increased Rarity of Items found"]
    }],

    "Physical Damage Life Leech": [{
        "Name": "Physical Damage Life Leech",
        "Stat": "Physical Damage Life Leech",
        "Nature": "Natural",
        "Type": "Prefix",
        "Weight": 1000,
        "Tiers":
            {
                1: {range: [20, 40], text: "Remora\'s", weight: 1000, ilvl: 50},
            },
        "Decimal": true,
        "Text": ["", "% of Physical Attack Damage Leeched as Life"]
    }],
    "Physical Damage Mana Leech": [{
        "Name": "Physical Damage Mana Leech",
        "Stat": "Physical Damage Mana Leech",
        "Nature": "Natural",
        "Type": "Prefix",
        "Weight": 1000,
        "Tiers":
            {
                1: {range: [20, 40], text: "Thirsty", weight: 1000, ilvl: 50},
            },
        "Decimal": true,
        "Text": ["", "% of Physical Attack Damage Leeched as Mana"]
    }],

    // SUFFIX
    "Flat Accuracy": [{
        "Name": "Flat Accuracy", "Stat": "Flat Accuracy", "Nature": "Natural", "Type": "Suffix", "Weight": 1000, "Tiers":
            {
                1: {range: [401, 500], text: "Of Lioneye", weight: 1000, ilvl: 85},
                2: {range: [321, 400], text: "Of The Assassin", weight: 1000, ilvl: 76},
                3: {range: [251, 320], text: "Of The Ranger", weight: 1000, ilvl: 63},
                4: {range: [201, 250], text: "Of The Deadeye", weight: 1000, ilvl: 50},
                5: {range: [166, 200], text: "Of The Marksman", weight: 1000, ilvl: 41},
                6: {range: [131, 165], text: "Of The Sniper", weight: 1000, ilvl: 33},
                7: {range: [101, 130], text: "Of Precision", weight: 1000, ilvl: 26},
                8: {range: [61, 100], text: "Of Accuracy", weight: 1000, ilvl: 20},
                9: {range: [16, 60], text: "Of Steadiness", weight: 1000, ilvl: 12},
                10: {range: [5, 15], text: "Of Calm", weight: 1000, ilvl: 1}
            },
        "Text": ["+", " To Accuracy Rating"]
    }],
    "%Attack Speed": [{
    "Name": "%Attack Speed", "Stat": "%Attack Speed", "Nature": "Natural", "Type": "Suffix", "Weight": 1000, "Tiers":
        {
            1: {range: [14, 16], text: "Of Renown", weight: 1000, ilvl: 30},
            2: {range: [11, 13], text: "Of Mastery", weight: 1000, ilvl: 22},
            3: {range: [8, 10], text: "Of Ease", weight: 1000, ilvl: 11},
            4: {range: [5, 7], text: "Of Skill", weight: 1000, ilvl: 1},
        },
    "Text": ["", "% increased Attack Speed"]
}],

    "Strength": [{
        "Name": "Strength", "Stat": "Strength", "Nature": "Natural", "Type": "Suffix", "Weight": 1000, "Tiers":
            {
                1: {range: [51, 55], text: "Of The Gods", weight: 1000, ilvl: 82},
                2: {range: [43, 50], text: "Of The Titan", weight: 1000, ilvl: 74},
                3: {range: [38, 42], text: "Of The Leviathan", weight: 1000, ilvl: 66},
                4: {range: [33, 37], text: "Of The Goliath", weight: 1000, ilvl: 55},
                5: {range: [28, 32], text: "Of The Gorilla", weight: 1000, ilvl: 44},
                6: {range: [23, 27], text: "Of The Lion", weight: 1000, ilvl: 33},
                7: {range: [18, 22], text: "Of The Bear", weight: 1000, ilvl: 22},
                8: {range: [13, 17], text: "Of The Wrestler", weight: 1000, ilvl: 11},
                9: {range: [8, 12], text: "Of The Brute", weight: 1000, ilvl: 1}
            },
        "Text": ["+", " To Strength"]
    }],
    "Dexterity": [{
        "Name": "Dexterity", "Stat": "Dexterity", "Nature": "Natural", "Type": "Suffix", "Weight": 1000, "Tiers":
            {
                1: {range: [51, 55], text: "Of The Wind", weight: 1000, ilvl: 82},
                2: {range: [43, 50], text: "Of The Phantasm", weight: 1000, ilvl: 74},
                3: {range: [38, 42], text: "Of The Jaguar", weight: 1000, ilvl: 66},
                4: {range: [33, 37], text: "Of The Leopard", weight: 1000, ilvl: 55},
                5: {range: [28, 32], text: "Of The Panther", weight: 1000, ilvl: 44},
                6: {range: [23, 27], text: "Of The Falcon", weight: 1000, ilvl: 33},
                7: {range: [18, 22], text: "Of The Fox", weight: 1000, ilvl: 22},
                8: {range: [13, 17], text: "Of The Lynx", weight: 1000, ilvl: 11},
                9: {range: [8, 12], text: "Of The Mongoose", weight: 1000, ilvl: 1}
            },
        "Text": ["+", " To Dexterity"]
    }],
    "Intelligence": [{
        "Name": "Intelligence", "Stat": "Intelligence", "Nature": "Natural", "Type": "Suffix", "Weight": 1000, "Tiers":
            {
                1: {range: [51, 55], text: "Of The Genius", weight: 1000, ilvl: 82},
                2: {range: [43, 50], text: "Of The Virtuoso", weight: 1000, ilvl: 74},
                3: {range: [38, 42], text: "Of The Savant", weight: 1000, ilvl: 66},
                4: {range: [33, 37], text: "Of The Sage", weight: 1000, ilvl: 55},
                5: {range: [28, 32], text: "Of The Philosopher", weight: 1000, ilvl: 44},
                6: {range: [23, 27], text: "Of The Augur", weight: 1000, ilvl: 33},
                7: {range: [18, 22], text: "Of The Prodigy", weight: 1000, ilvl: 22},
                8: {range: [13, 17], text: "Of The Student", weight: 1000, ilvl: 11},
                9: {range: [8, 12], text: "Of The Pupil", weight: 1000, ilvl: 1}
            },
        "Text": ["+", " To Dexterity"]
    }],

    "Life gained on Hit": [{
        "Name": "Life gained on Hit",
        "Stat": "Life gained on Hit",
        "Nature": "Natural",
        "Type": "Suffix",
        "Weight": 1000,
        "Tiers":
            {
                1: {range: [2, 2], text: "of Rejuvenation", weight: 1000, ilvl: 8}
            },
        "Text": ["+", " Life gained for each Enemy hit by your Attacks"]
    }],
    "Life gained on Kill": [{
        "Name": "Life gained on Kill",
        "Stat": "Life gained on Kill",
        "Nature": "Natural",
        "Type": "Suffix",
        "Weight": 1000,
        "Tiers":
            {
                1: {range: [11, 14], text: "of Triumph", weight: 1000, ilvl: 40},
                2: {range: [7, 10], text: "of Victory", weight: 1000, ilvl: 23},
                3: {range: [3, 6], text: "of Success", weight: 1000, ilvl: 1}
            },
        "Text": ["+", " Life gained on Kill"]
    }],
    "Mana gained on Kill": [{
        "Name": "Mana gained on Kill",
        "Stat": "Mana gained on Kill",
        "Nature": "Natural",
        "Type": "Suffix",
        "Weight": 1000,
        "Tiers":
            {
                1: {range: [4, 6], text: "of Consumption", weight: 1000, ilvl: 40},
                2: {range: [2, 3], text: "of Osmosis", weight: 1000, ilvl: 24},
                3: {range: [1, 1], text: "of Absorption", weight: 1000, ilvl: 1}
            },
        "Text": ["+", " Mana gained on Kill"]
    }],
    "Life Regen": [{
        "Name": "Life Regen", "Stat": "Life Regen", "Nature": "Natural", "Type": "Suffix", "Weight": 1000, "Tiers":
            {
                1: {range: [2001, 2500], text: "Of The Phoenix", weight: 1000, ilvl: 86},
                2: {range: [1601, 2000], text: "Of The Ryslatha", weight: 1000, ilvl: 83},
                3: {range: [1301, 1600], text: "Of The Troll", weight: 1000, ilvl: 78},
                4: {range: [1001, 1300], text: "Of The Hydra", weight: 1000, ilvl: 59},
                5: {range: [701, 1000], text: "Of The Starfish", weight: 1000, ilvl: 44},
                6: {range: [401, 701], text: "Of The Flatworm", weight: 1000, ilvl: 30},
                7: {range: [201, 400], text: "Of The Lizard", weight: 1000, ilvl: 18},
                8: {range: [100, 200], text: "Of The Newt", weight: 1000, ilvl: 1}
            },
        "Decimal": true,
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
                1: {range: [46, 48], text: "Of Haast", weight: 1000, ilvl: 84},
                2: {range: [42, 45], text: "Of The Ice", weight: 1000, ilvl: 72},
                3: {range: [36, 41], text: "Of The Polar Bear", weight: 1000, ilvl: 60},
                4: {range: [30, 35], text: "Of The Walrus", weight: 1000, ilvl: 50},
                5: {range: [24, 29], text: "Of The Yeti", weight: 1000, ilvl: 38},
                6: {range: [18, 23], text: "Of The Penguin", weight: 1000, ilvl: 26},
                7: {range: [12, 17], text: "Of The Seal", weight: 1000, ilvl: 14},
                8: {range: [6, 11], text: "Of The Inuit", weight: 1000, ilvl: 1}
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
                1: {range: [46, 48], text: "Of Tzteosh", weight: 1000, ilvl: 84},
                2: {range: [42, 45], text: "Of The Magma", weight: 1000, ilvl: 72},
                3: {range: [36, 41], text: "Of The Volcano", weight: 1000, ilvl: 60},
                4: {range: [30, 35], text: "Of The Furnace", weight: 1000, ilvl: 50},
                5: {range: [24, 29], text: "Of The Kiln", weight: 1000, ilvl: 38},
                6: {range: [18, 23], text: "Of The Drake", weight: 1000, ilvl: 26},
                7: {range: [12, 17], text: "Of The Salamander", weight: 1000, ilvl: 14},
                8: {range: [6, 11], text: "Of The Whelpling", weight: 1000, ilvl: 1}
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
                1: {range: [46, 48], text: "Of Ephij", weight: 1000, ilvl: 84},
                2: {range: [42, 45], text: "Of The Lightning", weight: 1000, ilvl: 72},
                3: {range: [36, 41], text: "Of The Maelstrom", weight: 1000, ilvl: 60},
                4: {range: [30, 35], text: "Of The Tempest", weight: 1000, ilvl: 50},
                5: {range: [24, 29], text: "Of The Thunderhead", weight: 1000, ilvl: 38},
                6: {range: [18, 23], text: "Of The Storm", weight: 1000, ilvl: 26},
                7: {range: [12, 17], text: "Of The Squall", weight: 1000, ilvl: 14},
                8: {range: [6, 11], text: "Of The Cloud", weight: 1000, ilvl: 1}
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
                1: {range: [31, 35], text: "Of Bameth", weight: 1000, ilvl: 81},
                2: {range: [26, 30], text: "Of Exile", weight: 1000, ilvl: 65},
                3: {range: [21, 25], text: "Of Expulsion", weight: 1000, ilvl: 56},
                4: {range: [16, 20], text: "Of Eviction", weight: 1000, ilvl: 44},
                5: {range: [11, 15], text: "Of Banishment", weight: 1000, ilvl: 30},
                6: {range: [5, 10], text: "Of The Lost", weight: 1000, ilvl: 16}
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
                1: {range: [32, 32], text: "Of The Apt", weight: 1000, ilvl: 60},
                2: {range: [18, 18], text: "Of The Worthy", weight: 1000, ilvl: 36}
            },
        "Text": ["", "% Reduced Attribute Requirements"]
    }],
    "%StunBlock": [{
        "Name": "%StunBlock", "Stat": "%StunBlock", "Nature": "Natural", "Type": "Suffix", "Weight": 1000, "Tiers":
            {
                1: {range: [26, 28], text: "Of Corundum Skin", weight: 1000, ilvl: 79},
                2: {range: [23, 25], text: "Of Adamantite Skin", weight: 1000, ilvl: 56},
                3: {range: [20, 22], text: "Of Steel Skin", weight: 1000, ilvl: 42},
                4: {range: [17, 19], text: "Of Iron Skin", weight: 1000, ilvl: 28},
                5: {range: [14, 16], text: "Of Stone Skin", weight: 1000, ilvl: 17},
                6: {range: [11, 13], text: "Of Thick Skin", weight: 1000, ilvl: 1}
            },
        "Text": ["", "% Increased Stun And Block Recovery"]
    }],

    "%Physical Damage Reduction": [{
        "Name": "%Physical Damage Reduction", "Stat": "%Physical Damage Reduction", "Nature": "Natural", "Type": "Suffix", "Weight": 2000, "Tiers":
            {
                1: {range: [3, 4], text: "Of Numbing", weight: 500, ilvl: 85},
                2: {range: [2, 2], text: "Of Dampening", weight: 1000, ilvl: 25}
            },
        "Text": ["", "% additional Physical Damage Reduction"]
    }],
    "%Dodge": [{
        "Name": "%Dodge", "Stat": "%Dodge", "Nature": "Natural", "Type": "Suffix", "Weight": 2000, "Tiers":
            {
                1: {range: [5, 6], text: "Of Fog", weight: 500, ilvl: 85},
                2: {range: [3, 4], text: "Of Haze", weight: 1000, ilvl: 25}
            },
        "Text": ["", "% Chance To Dodge Attacks"]
    }],
    "%Energy Shield Regeneration": [{
        "Name": "%Energy Shield Regeneration", "Stat": "%Energy Shield Regeneration", "Nature": "Natural", "Type": "Suffix", "Weight": 2000, "Tiers":
            {
                1: {range: [1000, 1000], text: "Of Exuberance", weight: 500, ilvl: 85},
                2: {range: [600, 600], text: "Of Vibrance", weight: 1000, ilvl: 25}
            },
        "Decimal": true,
        "Text": ["", "% of Energy Shield Regenerated per second"]
    }],

    "Item Rarity Suffix": [{
        "Name": "Item Rarity Suffix",
        "Stat": "Item Rarity Suffix",
        "Nature": "Natural",
        "Type": "Suffix",
        "Weight": 1000,
        "Tiers":
            {
                1: {range: [11, 14], text: "of Raiding", weight: 1000, ilvl: 30},
                2: {range: [6, 10], text: "of Plunder", weight: 1000, ilvl: 3}
            },
        "Text": ["", "% increased Rarity of Items found"]
    }],
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
    if (maxTier === undefined) {
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
    if (allAffixes[name] === undefined) {
        console.log("WARN: No mods defined for stat " + name);
        return {};
    }

    // Deep clone mod to prevent changing default baseMods
    const mods = JSON.parse(JSON.stringify(allAffixes[name]));

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

    modDef.forEach((mod) => {
        result[mod.Name] = getAffix(mod.Name, mod.Tiers);
    });

    return result;
}