import React, {Component} from 'react';
import {connect} from 'react-redux';



class ItemPropertiesDisplay extends Component {

    calculateFlatDefensiveBonuses() {
      var A = this.props.currentAffixs.slice();
      var flatBonuses = {Evasion: 0, Armour: 0, EnergyShield: 0}
      var i;
      var n = A.length;
      for (i=0;i<n;i++) {
        if(A[i][0].affix==="Flat Evasion" || A[i][0].affix==="Hybrid Flat Evasion/Armour" || A[i][0].affix==="Hybrid Flat Energy Shield/Evasion" || A[i][0].affix==="Hybrid Flat Evasion/Life") {
            flatBonuses.Evasion += A[i][0].value
        } else if (A[i][0].affix==="Flat Armour" || A[i][0].affix==="Hybrid Flat Evasion/Armour" || A[i][0].affix==="Hybrid Flat Armour/Energy Shield" || A[i][0].affix==="Hybrid Flat Armour/Life") {
            flatBonuses.Armour += A[i][0].value
        } else if (A[i][0].affix==="Flat Energy Shield" || A[i][0].affix==="Hybrid Flat Armour/Energy Shield" || A[i][0].affix==="Hybrid Flat Energy Shield/Evasion" || A[i][0].affix==="Hybrid Flat Energy Shield/Life") {
            flatBonuses.EnergyShield += A[i][0].value
        }
      }
      return flatBonuses;
    }

    calculatePercentDefensiveBonus() {
      var A = this.props.currentAffixs.slice();
      var percentBonuses = {Evasion: 1.00, Armour: 1.00, EnergyShield: 1.00}
      var i;
      var n = A.length;
      for (i=0;i<n;i++) {
        if(A[i][0].affix==="%Evasion" || A[i][0].affix==="Hybrid %Evasion/%Armour" || A[i][0].affix==="Hybrid %Energy Shield/%Evasion" || A[i][0].affix==="Hybrid %Evasion/%StunBlock") {
            percentBonuses.Evasion += ((A[i][0].value/100))
        } else if (A[i][0].affix==="%Armour" || A[i][0].affix==="Hybrid %Evasion/%Armour" || A[i][0].affix==="Hybrid %Armour/%Energy Shield" || A[i][0].affix==="Hybrid %Armour/%StunBlock") {
            percentBonuses.Armour += ((A[i][0].value/100))
        } else if (A[i][0].affix==="%Energy Shield" || A[i][0].affix==="Hybrid %Armour/%Energy Shield" || A[i][0].affix==="Hybrid %Energy Shield/%Evasion" || A[i][0].affix==="Hybrid %Energy Shield/%StunBlock") {
            percentBonuses.EnergyShield += ((A[i][0].value/100))
        }
      }
      return percentBonuses;
    }

    findMagicName() {
      var baseItemName = this.props.currentProperties.baseName;
      var A = this.props.currentAffixs.slice();
      var prefixText = "";
      var suffixText = "";
      for (var i=0; i<A.length; i++) {
        if (A[i][0].type === "Prefix") {
          prefixText = A[i][0].tierText;
        }
        if (A[i][0].type === "Suffix") {
          suffixText = A[i][0].tierText;
        }
      }
      return prefixText + " " + baseItemName + " " + suffixText
    }

    findRareName() {
      var baseItemName = this.props.currentProperties.baseName;
      var prefixText = this.props.currentProperties.rarePrefixText;
      var suffixText = this.props.currentProperties.rareSuffixText;
      return prefixText + " " + suffixText + " " + baseItemName
    }

    formatPropertyData() {
      var A = Object.assign({}, this.props.currentProperties);
      var B = this.props.currentAffixs.slice();
        var qualityBonus = 1 + (A.quality / 100);
      var flatBonuses = this.calculateFlatDefensiveBonuses();
      var percentBonuses = this.calculatePercentDefensiveBonus();
      var defenseStats = [];
      for (var i=0; i<A.defenseStats.length; i++) {
        var defenseValue = Number;
        if (A.defenseStats[i][0]==="Evasion Rating:") {
          defenseValue = Math.floor(((A.defenseStats[i][1] * qualityBonus) + flatBonuses.Evasion) * percentBonuses.Evasion)
        }
        if (A.defenseStats[i][0]==="Armour:") {
          defenseValue = Math.floor(((A.defenseStats[i][1] * qualityBonus) + flatBonuses.Armour) * percentBonuses.Armour)
        }
        if (A.defenseStats[i][0]==="Energy Shield:") {
          defenseValue = Math.floor(((A.defenseStats[i][1] * qualityBonus) + flatBonuses.EnergyShield) * percentBonuses.EnergyShield)
        }
        defenseStats.push(<div id="propertyText" className="tooltipText">{A.defenseStats[i][0]} <span id="propertyValue">{defenseValue}</span></div>)
      }
      var itemHeaderName;
      if (this.props.currentProperties.rarity === "magic"){
        itemHeaderName = this.findMagicName();
      } else if (this.props.currentProperties.rarity === "rare") {
        itemHeaderName = this.findRareName();
      } else {
        itemHeaderName = this.props.currentProperties.baseName;
      }
      var itemHeaderImageSource;
      if (this.props.currentProperties.rarity==="normal") {
        itemHeaderImageSource = require("../../assets/Misc/NormalItemHeader.png")
      } else if (this.props.currentProperties.rarity==="magic") {
        itemHeaderImageSource = require("../../assets/Misc/MagicItemHeader.png")
      } else {
        itemHeaderImageSource = require("../../assets/Misc/RareItemHeader.png")
      }

      var quality = this.props.currentProperties.quality;
        return (
          <div className="itemProperties">
                <div className="itemHeaderContainer"><img id="itemHeaderImage" src={itemHeaderImageSource}></img><div className="itemHeaderText">{itemHeaderName}</div></div>
                <div id='propertyText' className="tooltipText">Quality: <span id="qualityValue">+{quality}%</span></div>
                {defenseStats}
          </div>
        );
    }

    render() {
        return (
          <div>
              {this.formatPropertyData()}
          </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        currentProperties: state.currentProperties,
        currentAffixs: state.currentAffixs
    };
}
export default connect(mapStateToProps)(ItemPropertiesDisplay);
