import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";

import Header from "../components/Header";
import { colors } from "../style/index";


/**
 * Renders a <Button /> Component
 * @param props
 * @param props.gradient - Whether to add a gradient
 * @param props.size - Small, Large - Size of button padding
 * @param props.onPress - When button is pressed
 * @param props.children - Rendered Text
 * @param props.rounded - Round the button
 * @param props.color - Color of button
 * @param props.mv - Vertical Margin
 */
export default function Button({
  gradient = false,
  size = "small",
  children,
  onPress,
  rounded,
  color,
  mv,
  ...props
}) {

  const sizeStyle = size === "small" ? { padding: 20 } : { padding: 25 };

  const roundedStyle = rounded ? { borderRadius: 50 } : { borderRadius: 5 };

  const colorStyle = color ? { backgroundColor: color } : { backgroundColor: colors.accent };

  const buttonStyle = [ styles.container, props.style, sizeStyle, roundedStyle, colorStyle, {marginVertical: mv} ];

  return (
    <TouchableOpacity
      onPress={onPress}
      style={buttonStyle}
    >
      <Header type="h4" fontWeight="500" color={colors.white} centered>
        {children}
      </Header>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    // shadowColor: colors.accent,
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.25,
    // shadowRadius: 10,
  },
});
