import * as React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { styles } from "../res/styles";
import { colors } from "../res/colors";

interface BProps {
  activeOpacity?: number;
  children: React.ReactNode;
  buttonStyle?: "primary" | "secondary" | "outlined";
  onPress?: Function;
}

class ButtonItem extends React.Component<BProps> {
  constructor(props: BProps) {
    super(props);
  }

  static defaultProps = {
    buttonStyle: "primary",
  };

  render() {
    const {
      children,
      activeOpacity,
      buttonStyle,
      onPress,
      ...rest
    } = this.props;

    return (
      <TouchableOpacity style={styles.categoryItem}>
        <View style={styles.categoryIcon}></View>
    <Text style={styles.categoryText}>{children}</Text>
      </TouchableOpacity>
    );
  }
}

export default ButtonItem;
