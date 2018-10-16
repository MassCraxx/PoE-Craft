import {AstralPlate} from "../base-item-states";
import {generateAffixList} from "../all-mods";
import {baseAffixes} from "../base-item-affixes";

function getDefaultState(defaultState = AstralPlate) {
    defaultState.rarity = "normal";
    defaultState.rarePrefixText = "";
    defaultState.rareSuffixText = "";
    defaultState.craftedAffix = [];
    if(!defaultState.quality){
        defaultState.quality = 20;
    }
    defaultState.baseMods = generateAffixList(baseAffixes[defaultState.baseItem]);

    return defaultState;
}

export default function ( state = getDefaultState(), action) {
    switch (action.type) {
        case 'SET_RARITY_MAGIC':
            return {...state, "rarity" : "magic"};
            break;
        case 'SET_RARITY_NORMAL':
            return {...state, "rarity" : "normal"};
            break;
        case 'SET_RARITY_RARE':
            return {...state, "rarity" : "rare"};
            break;
        case 'CHANGE_LEVEL-REQUIREMENTS':
            return state;
            break;
        case 'CHANGE_RARE_PREFIX':
            return {...state, rarePrefixText : action.payload};
            break;
        case 'CHANGE_RARE_SUFFIX':
            return {...state, rareSuffixText : action.payload};
            break;
        case 'CRAFT_MASTER_MOD':
            return {...state, craftedAffix: [action.payload]};
            break;
        case 'REMOVE_CRAFTED_MOD':
            return {...state, craftedAffix: []};
            break;
        case 'SWAP_ITEM':
            return getDefaultState(action.payload);
            break;
        default:
            return state;
    }
  };
