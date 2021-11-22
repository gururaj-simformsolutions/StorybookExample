import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';

const Button = ({onPress, label, type, ...props}) => {
  const container = StyleSheet.flatten([
    styles.container,
    type === 'secondary' ? styles.secondary : styles.primary,
  ]);
  return (
    <Pressable style={container} onPress={onPress} {...props}>
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    minWidth: 100,
    borderRadius: 5,
  },
  primary: {
    backgroundColor: 'orange',
  },
  secondary: {
    borderColor: 'orange',
    borderWidth: 2,
  },
  label: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    textAlign: 'center',
  },
});

export default Button;
