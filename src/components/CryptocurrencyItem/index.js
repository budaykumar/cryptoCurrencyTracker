import {Component} from "react";

import "./index.css"

class CryptocurrencyItem extends Component{

    const {eachItemDetails} = this.props;
    
    const {currencyName, usdValue, euroValue, currencyLogo} = eachItemDetails;

    render(){
        return(
            <li className = "listItem">
                <div className ="imgAndNameCon">
                    <img
                        src= {currencyLogo} 
                        alt = {currencyName}
                        className ="imgLogo"
                    />
                    <h1 className ="logoHeading">{currencyName}</h1>
                </div>
                <div className ="detailsCon">
                        <p className ="logoHeading">{usdValue}</p>
                        <p className ="logoHeading">{euroValue}</p>
                </div>
            </li>
        )
    }
}

export default CryptocurrencyItem