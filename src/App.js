import React, { Component } from 'react';
import {HashRouter as Router,Route,Switch} from 'react-router-dom';
//import './App.css';
//import {Provider} from './context';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/layout/Header';
import Contacts from './component/contacts/Contacts';
import AddContact from './component/contacts/AddContact';
import About from './component/pages/About';
import NotFound from './component/pages/NotFound';
import EditContacts from './component/contacts/EditContacts';
import { Provider } from "react-redux";
import store from "./store";
class App extends Component{
  render()
  {
    return(
  <Provider store={store}>
        <Router>
      <div className="App">
        <Header branding="Contact Manager"/>
        <div className="container">

       <Switch>
         <Route exact path="/" component={Contacts}></Route>
         <Route exact path="/contact/add" component={AddContact}></Route>
         <Route exact path="/contact/edit/:id" component={EditContacts}></Route>
         <Route exact path="/About" component={About}></Route>
         <Route component={NotFound}/>
       </Switch>
        </div>
      </div>
      </Router>
</Provider>
    );
  }
}
export default App;
