// both sign in and up 
//component has same aim
//to allow the user into our app
//and stores the data in firestore
//and use it for our identification someone is loged in or not



// mainly to communicate with firebase when something is hapend or loged in or out...

import React from 'react';
//importing the form and buttons below
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
//import firebase data below
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './sign-up.styles.scss';


//class to have sign up data
class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {//have all the signup data we want to enter in it
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
  }

  handleSubmit = async event => {//to prevent automatically anything working ,to be in our control
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;//telling this as state

    if (password !== confirmPassword) {//password not matches means then
      alert("passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(//method from firbase to create an data
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });//when something happens then state changes

      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });//assuming the name as value when state changes
  };

  render() {//all this are like sign in component
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className='sign-up'>
        <h2 className='title'>I do not have a account</h2>
        <span>Sign up with your email and password</span>
        <form className='sign-up-form' onSubmit={this.handleSubmit}>
          <FormInput
            type='text'
            name='displayName'
            value={displayName}
            onChange={this.handleChange}
            label='Display Name'
            required
          />
          <FormInput
            type='email'
            name='email'
            value={email}
            onChange={this.handleChange}
            label='Email'
            required
          />
          <FormInput
            type='password'
            name='password'
            value={password}
            onChange={this.handleChange}
            label='Password'
            required
          />
          <FormInput
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            onChange={this.handleChange}
            label='Confirm Password'
            required
          />
          <CustomButton type='submit'>SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
