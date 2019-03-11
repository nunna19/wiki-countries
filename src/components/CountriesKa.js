// import React, {Component} from 'react';
// import { Link } from 'react-router-dom'



// class Countries extends Component {
  

//   showCountries = ()=>{

//     let arrayCountries = this.props.countries.map((eachCountry,i)=>{

//       return (
     
//         <Link to={{pathname: `/${eachCountry.name.common}/${eachCountry.cca3}`}} key={eachCountry.cca3} className="list-group-item list-group-item-action">

//         {eachCountry.name.common}   {/* name for click to the Link */}
//         {eachCountry.flag}  
//         </Link>
        
        
//       )
//     })
//     return arrayCountries
//   }

//   render(){

//     return(
//       <div className="col-5 countrylist">
//              <div className="list-group">
//              {this.showCountries()}
//              </div>
            
//           </div>
//     )
//   }
// }

// export default Countries;






import React, { Component } from 'react';

import '../App.css';
import { Link } from 'react-router-dom'

class Countries extends Component {

  showCountries = () => { //looping through each of the countries from the state 
    let list = this.props.countries.map((eachCountry, i)=>{
      return (
       
          <Link to={{  //Make a link 
            pathname:`/country/${eachCountry.cca3}` }} key={eachCountry.cca3} className="list-group-item list-group-item-action">

            {eachCountry.name.common}
            {eachCountry.flag}  
          </Link>
        
      )
    })
    return list;
  }

  render() {
    return (
      <div className="col-5 countrylist">
                <div className="list-group">
                    {this.showCountries()}
                    </div>
                  
                 </div>
    );
  }
}

export default Countries;




// import React, { Component } from 'react';
// import countries from '../countries.json';
// import '../App.css';
// import { Link } from 'react-router-dom';

// class CountryList extends Component {
//     state = {
//       countries: countries
//     }

//   thecountries = () => {
//     let list = this.state.countries.map((country) => {
//       return ( 
//         <Link to={`/${country.name.common}/${country.cca3}`} key={country.cca3} className="list-group-item list-group-item-action">{country.flag}{country.name.common}</Link>
//         )
//     })
//     return list;
//   }




//   render() {
//     console.log(this.state.countries)
//     return(
      
//           <div className="col-5 countrylist">
//             <div className="list-group">
//               {this.thecountries()}
//             </div>
            
//           </div>
        
      
//     )
//   }
  
// }

// export default CountryList;
