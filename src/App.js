import React from 'react';
//router - mutiple pages ,switch - make all work perfect
//redirect - used when user is logged in it will redirect to home page
import { Switch, Route,Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
//for giving the selector data as it is
import { createStructuredSelector } from 'reselect';


//app style
import './App.css';
//components
import CheckoutPage from './pages/checkout/checkout.component';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';

import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

//getting the currentuser value from redux
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';

//class to store data to sign in


class App extends React.Component {
  unsubscribeFromAuth = null;//declare it

  componentDidMount() {
    const { setCurrentUser } = this.props;//this .props declared and used below

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {//method connects firebase to our app if something add or loged in or changed it knows
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {//created new snapshot for our current user to store the data in our app and firestore
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          
          <Route 
            exact//this will redirect to homepage when someone is logged in our app or use as a link
            path='/signin'
            render={() =>
              this.props.currentUser ? (
                <Redirect to='/' />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}
//first argument of connect function
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});
//second argument of connect function

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});
//exporting the current user value whoever want to know
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

