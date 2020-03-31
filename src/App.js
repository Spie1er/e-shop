import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInUp from './pages/signinup/signinup.component';
import Header from './components/header/header.component';
import { auth } from './firebase/firebase.utils';

import './App.css';




class App extends React.Component  {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unscubscribeFromAuth = null;  

  componentDidMount() {
    this.unscubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });

      console.log(user)
    });
  }

  componentWillUnmount() {
    this.unscubscribeFromAuth();
  }


  render() {
    return (
      <div>
      <Header currentUser={this.state.currentUser}/>
      <Switch>
      <Route exact={true} path='/' component={HomePage} />
      <Route path='/shop' component={ShopPage} />
      <Route path='/signin' component={SignInUp} />
      
      </Switch>
      </div>
    );
  }
}

export default App;
