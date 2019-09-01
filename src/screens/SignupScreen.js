import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationEvents, SafeAreaView } from 'react-navigation';

import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SignupScreen = () => {
  const { state, signup, clearErrorMessage } = useContext(AuthContext);

  return (
    <SafeAreaView style={styles.container} forceInset={{ top: 'always' }}>
      <NavigationEvents onWillBlur={clearErrorMessage} />
      <AuthForm
        headerText="Sign up for Tracker"
        errorMessage={state.errorMessage}
        onSubmit={signup}
        submitButtonText="Sign Up"
      />
      <NavLink
        paragraphs={['Already have an account ?', 'Sign in instead.']}
        routeName="Signin"
      />
    </SafeAreaView>
  );
};

SignupScreen.navigationOptions = { header: null };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 250,
  },
});

export default SignupScreen;
