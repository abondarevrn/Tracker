import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationEvents, SafeAreaView } from 'react-navigation';

import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SigninScreen = () => {
  const { state, signin, clearErrorMessage } = useContext(AuthContext);
  return (
    <SafeAreaView style={styles.container} forceInset={{ top: 'always' }}>
      <NavigationEvents onWillBlur={clearErrorMessage} />
      <AuthForm
        headerText="Sign in to your account"
        errorMessage={state.errorMessage}
        onSubmit={signin}
        submitButtonText="Sign In"
      />
      <NavLink
        paragraphs={["Don't have an account ?", 'Sign up instead.']}
        routeName="Signup"
      />
    </SafeAreaView>
  );
};

SigninScreen.navigationOptions = { header: null };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 210,
  },
});

export default SigninScreen;
