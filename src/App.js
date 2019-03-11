// import React, { Component } from 'react';
// // import { Link } from 'react-router-dom'
// import './App.css';
// import countries from './countries.json'
// import CountriesKa from './components/CountriesKa.js'
// import { Switch, Route } from 'react-router-dom'
// import Navbar from './components/NavBar.js'
// import CountryDetail from './components/CountryDetail.js'


// class App extends Component {

//   state={
//     countries:countries
//   }
//   render() {
//     console.log(this.state.countries)
//     return (
//       <div className="App">
//      <Navbar/>
//      <Switch>
//             {/* <Route exact path="/country/:id" component={CountryDetail} /> */}
//             <Route 
//               exact path="/country/:id" />
//               component={(props) => <CountryDetail {...props} {...this.state}/>} />
//               {/* <CountryDetail {...this.state}/> */}
//           </Switch>

//      <CountriesKa {...this.state}/>
     
     
//       </div>
//     );
//   }
// }

// export default App;







import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import Countries from './components/CountriesKa.js'
import countries from './countries.json'
import CountryDetail from './components/CountryDetail.js'


class App extends Component {
  state = {
    countries
  }
  render() {
    console.log(this.state.countries)
    return (
      <div className="App">
          <Switch>
            {/* <Route exact path="/country/:id" component={CountryDetail} /> */}
            <Route 
              exact path="/country/:id" 
               component={(props) => <CountryDetail {...props} {...this.state}/>} />

          </Switch>
          <Countries {...this.state} /> 

      </div>
    );
  }
}

export default App;





// import React, { Component } from 'react';
// import './App.css';
// import Navbar from './components/NavBar.js'
// import CountryList from './components/CountriesKa.js'
// import CountryDetails from './components/CountryDetail.js'
// import { Switch, Route} from 'react-router-dom';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         < Navbar />
//           <div className="container">
//             <div className="row">
//             < CountryList />

//                   <Switch>
//                     <Route path='/:id' component={CountryDetails}></Route>
//                   </Switch>
           
//             </div>
//           </div>
//       </div>
//     );
//   }
// }

// export default App;