import React from 'react';
import { Text, StyleSheet } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
  text: {
    fontSize: theme.fontSizes.body,
    color: theme.colors.textPrimary,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal
  },
  colorPrimary: {
    color: theme.colors.primary
  },
  colorSecondary: {
    color: theme.colors.textSecondary
  },
  bold: {
    fontWeight: theme.fontWeights.bold,
  },
  subheading: {
    fontSize: theme.fontSizes.subheading
  },
  textAlingCenter: {
    textAlign: 'center'
  }
})

const StyledText = ({children, color, fontSize, fontWeight, aling, style, ...restOfProps }) => {
  const textStyles = [
    styles.text,
    aling === 'center' && styles.textAlingCenter,
    color === 'primary' && styles.colorPrimary,
    color === 'secondary' && styles.colorSecondary,
    fontSize === 'subheading' && styles.subheading,
    fontWeight === 'bold' && styles.bold,
    style
  ];
  return (
    <Text style={textStyles} {...restOfProps}>
      {children}
    </Text>
  );
};

export default StyledText;