import React from 'react';
import { View, ViewStyle } from 'react-native';

import { styles } from "./Wrapper.styles";

interface IWrapper {
  children: React.ReactNode;
  style?: ViewStyle
}

const Wrapper = ({ children, style }: IWrapper): React.JSX.Element => {
  return (
    <View style={{ ...styles.wrapper, ...style }}>
      {children}
    </View>
  );
};

export default Wrapper;
