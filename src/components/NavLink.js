import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';

import Spacer from './Spacer';

const NavLink = ({ navigation, paragraphs, routeName }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
      <Spacer>
        {paragraphs &&
          paragraphs.map((paragraph, index) => (
            <Text key={index} style={styles.link}>
              {paragraph}
            </Text>
          ))}
      </Spacer>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  link: {
    color: '#1f88d9',
  },
});

export default withNavigation(NavLink);
