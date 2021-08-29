import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";

import Header from "../components/Header";
import { colors } from "../style/index";

export default function Button({
  gradient = false,
  size = "small",
  onPress,
  children,
  rounded,
  ...props
}) {
  const sizeStyle = size === "small" ? { padding: 20 } : { padding: 30 };

  const roundedStyle = rounded ? { borderRadius: 50 } : { borderRadius: 5 };

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, props.style, sizeStyle, roundedStyle]}
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
    backgroundColor: colors.accent,
    shadowColor: colors.accent,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
  },
});
