import React from 'react';
import {ActivityIndicator} from 'react-native';

const Indicator = ({...props}) => {
  return <ActivityIndicator size="large" color="#0000ff" {...props} />;
};

export default Indicator;
