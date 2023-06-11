import React, { useEffect, useState } from 'react';
import './App.css';
import { Switch, Redirect, Route, Router, BrowserRouter, useLocation } from 'react-router-dom';
import { createStore, applyMiddleware, Store } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import SignIn from './components/Enter/Sign-in';
import SignUp from './components/Enter/Sing-up';
import RecipeReviewCard from './components/Country/Cards';
import Country from './components/Country/Countries';
import Hotel from './components/DataTables/Hotel';
import Restaurant from './components/DataTables/Restaurant';
import Synagogue from './components/DataTables/Synagogue';
import Lecture from './components/DataTables/Lecture';
import Tour from './components/DataTables/Tour';
import Site from './components/DataTables/Site';
import User from './components/DataTables/User';
import FormDialogPassword from './components/Draft/ChangePassword';
import axios from 'axios';
import FormDialog from './components/Draft/PersonalArea';
import Header from './components/Header‏'
import MyAccount from './components/MyAccount';
import Home from './components/Home';
import Zipcode from './components/Zipcode';
import { CountryState, CountryAction, DispatchType } from './state/types';
import countryReducer from './state/countryReducer';
import Contact from './components/Extras/Contact';
import Times from './components/Extras/Times';
import HomePage from './components/Home';
import Footer from './components/Footer';
import InRadius from './components/InRadius';
import AddHotel from './components/Admin/AddHotel';
import Terms from './components/Extras/Terms';
import Privacy from './components/Extras/Privacy';
import Services from './components/DataTables/Services';
import About from './components/Extras/About';
import Team from './components/Extras/Team';
import Weather from './components/Extras/Weather';
import Chabad from './components/Extras/Chabad';
import { configureStore } from './state/store';


const store = configureStore();
export default function App() {
  document.title="Datiuli"

  // const store: Store<CountryState, CountryAction> & {
  //   dispatch: DispatchType
  // } = createStore(countryReducer, applyMiddleware(thunk))

  const location = useLocation();
  const [historyArray, setHistoryArray] = useState<any>([]);

  useEffect(()=>{
    let newArray = [...historyArray];
    newArray.push({pathname:location.pathname,title:document.title});
    var result = newArray.reduce((unique, o) => {
      if(!unique.some((obj:any) => obj.pathname === o.pathname && obj.title === o.title)) {
        unique.push(o);
      }
      return unique;
     },[]);
    setHistoryArray(result);    
  },[location])

  return (
    <Provider store={store}>
      <div className="App">
        <div style={{
          position: "sticky",
          top: 0,
          zIndex: 1100
        }}>
          <Header />
        </div>
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route path="/signIn" component={SignIn} />
          <Route path="/signUp" component={SignUp} />
          <Route path="/recipeReviewCard" component={RecipeReviewCard} />
          <Route path="/country" component={Country} />
          <Route path="/hotel/:serviceId/:country" component={Hotel} />
          <Route path="/restaurant/:serviceId/:country" component={Restaurant} />
          <Route path="/synagogue/:serviceId/:country" component={Synagogue} />
          <Route path="/lecture/:serviceId/:country" component={Lecture} />
          <Route path="/tour/:serviceId/:country" component={Tour} />
          <Route path="/site/:serviceId/:country" component={Site} />
          <Route path="/user" component={User} />
          <Route path="/myAccount" component={(props:any)=><MyAccount {...props} historyArray={historyArray}/>} />
          <Route path="/myAccount/:tab" component={(props:any)=><MyAccount {...props} historyArray={historyArray}/>}/>
            {/* <Route path="/t" component={FormDialogPassword} /> */}
          <Route path="/w" component={AddHotel} />
          <Route path="/zz" component={Zipcode} />
          <Route path="/contact" component={Contact} />
          <Route path="/time" component={Times} />
          <Route path="/InRadius" component={InRadius} />
          <Route path="/terms" component={Terms} />
          <Route path="/privacy" component={Privacy} />
          <Route path="/s" component={Services} />
          <Route path="/About" component={About} />
          <Route path="/Team" component={Team} />
          <Route path="/Weather" component={Weather} />
          <Route path="/Chabad" component={Chabad} />
          <Route path="/" component={HomePage} />
          {/*  */}
        </Switch>
        <Footer />
      </div>
    </Provider>
  );
}

