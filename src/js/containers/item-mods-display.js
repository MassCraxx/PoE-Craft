import React, {Component} from 'react';
import {connect} from 'react-redux';
import ItemPropertiesDisplay from './item-properties-display';
import {AffixSortingValues} from '../affix-sorting-values';


class ItemModsDisplay extends Component {

    sumLikeAffixes(array) {
      var result = [];
      array.forEach(function (a) {
        if (!this[a.text]) {
          this[a.text] = { affix: a.affix, text: a.text, value: 0 };
          result.push(this[a.text]);
        }
        this[a.text].value += a.value;
      }, Object.create(null));
      return result;
    }

    sortAffixes(a , b) {
      return AffixSortingValues[a.text[1]] - AffixSortingValues[b.text[1]];
    }

    formatAffixData() {
      var A = this.props.currentAffixs.slice();
      var arr = [];
      for (var i=0; i<A.length; i++) {
        for (var j=0; j<A[i].length ;j++) {
          var modValue = Object.assign({}, A[i][j]);
          arr.push(modValue);
        }
      }
      if (!this.props.optionConfiguration.affixDetail) {
        var result = this.sumLikeAffixes(arr);
        result.sort(this.sortAffixes);
        return result.map((affix) => {
          return (
              <div id='affix' className="tooltipText">
                  {affix.text[0]}{affix.value}{affix.text[1]}
              </div>
          );
        });
      } else {
        var result = arr;
        result.sort(this.sortAffixes);
        return result.map((affix) => {
          return (
              <div id='affix' className="tooltipText">
                  {affix.text[0]}{affix.value}{affix.text[1]}       <span id="tierandtype">{affix.type[0]}{affix.tier}</span>
              </div>
          );
        });
      }
    }

    formatCraftedAffixData() {
      if (this.props.currentProperties.craftedAffix.length===0) {
        return <div></div>
      } else {
         var A = Object.assign({}, this.props.currentProperties.craftedAffix);
         return (
            <div className='craftedModText'>
              {A[0].Text}
            </div>
         );
      }
    }

    render() {
        var iconFile = require("../../assets/" + this.props.currentProperties.iconFile);
        var altName = this.props.currentProperties.baseName;
        return (
          <div className='itemStatsContainer'>
              <ItemPropertiesDisplay />
              <div className="itemImageDiv"><img className="itemImage" src={iconFile} alt={altName}/></div>
              <div className="affixContainer">
                {this.formatAffixData()}
                {this.formatCraftedAffixData()}
              </div>
          </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        currentAffixs: state.currentAffixs,
        currentProperties: state.currentProperties,
        optionConfiguration: state.optionConfiguration
    };
}
export default connect(mapStateToProps)(ItemModsDisplay);
