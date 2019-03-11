import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import '../App.css'

class countryDetail extends Component{

  callDetail = () =>{


  let dataCountry = this.props.countries.find((eachInfo)=>{

    return eachInfo.cca3 === this.props.match.params.id

  })


  let { name, region, area, capital, flag, borders} = dataCountry



  let allTheBorders = borders.map(((border,i)=>{ //Loops through borders
                return <ol key={i}>Border's with <Link to={`/country/${border}`}>{border}</Link></ol>
            }))       
            return (
              

<div className="col-6">
<h1>{name.common}</h1>

<table className="table">
      <thead></thead>
      <tbody>
        <tr>
          <td className="captial">Capital</td>
          <td>{capital[0]}</td>
        </tr>
        <tr>
          <td>Area</td>
          <td>{area} km
            <sup>2</sup>
          </td>
        </tr>
        <tr>
          <td>Borders</td>
          <td>
            <ul>
              {allTheBorders}
            </ul>
          </td>
        </tr>
        
      </tbody>
    </table>

</div>

            );
  }

render(){
  return(
      <div>
          {this.callDetail()}
      </div>
  )
}

} 
export default countryDetail;

// import React, { Component } from 'react';
// import { Link } from 'react-router-dom'

// import '../App.css';

// //OPTION 3 
// function CountryDetail(props){ //stateless 
//         console.log(props)
//         let currentCountry = props.countries.find((eachCountry)=>{ //loops through all countries until it finds a country wher teh cca3 matches the url             
//            return eachCountry.cca3 === props.match.params.id //this is the url 
//         })

//         let { name, region, area, capital, flag, borders} = currentCountry //Spread operator that deconstructs all the values

//         let allTheBorders = borders.map(((border,i)=>{ //Loops through borders
//             return <ol key={i}>Border's with <Link to={`/country/${border}`}>{border}</Link></ol>
//         }))       
//         return (
//             <div className="CountryDetail">
//                 {name.common} {flag} 
//                 <div> {region} {area} {capital[0]} </div>
//                 {allTheBorders}
//             </div>
//         );
// }
// export default CountryDetail;