import React from 'react';
import { StyleSheet, Text, TextStyle, TouchableOpacity, ViewStyle } from 'react-native';

import { ButtonVariant } from './ButtonVariants';

interface IButton {
  title: string;
  onPress: () => void;
  variant?: ButtonVariant;
  style?: ViewStyle;
}

const Button = ({
                  title,
                  onPress,
                  variant = ButtonVariant.Primary,
                  style,
                }: IButton): React.JSX.Element => {
  return (
    <TouchableOpacity onPress={onPress} style={[ styles.buttonBaseStyle, styles[variant], style ]}>
      <Text style={[ textStyles.textBaseStyle, textStyles[variant] ]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create<Record<ButtonVariant | 'buttonBaseStyle', ViewStyle>>({
  [ButtonVariant.Primary]: {
    backgroundColor: '#224229',
  },
  [ButtonVariant.PrimaryOutline]: {
    borderWidth: 1,
    borderColor: '#224229',
    backgroundColor: '#fff',
  },
  buttonBaseStyle: {
    borderRadius: 24,
    paddingVertical: 8,
    paddingHorizontal: 24,
    justifyContent: 'center',
  },
});

const textStyles: Record<ButtonVariant | 'textBaseStyle', TextStyle> = {
  textBaseStyle: {
    textAlign: 'center',
    textTransform: 'uppercase'
  },
  [ButtonVariant.Primary]: {
    color: '#fff',
  },
  [ButtonVariant.PrimaryOutline]: {
    color: '#224229',
  },
};