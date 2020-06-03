import * as React from "react";
import { Text, TextInput, View } from "react-native";
import { styles } from "../res/styles";
import { Feather } from "@expo/vector-icons";
import { colors } from "../res/colors";
import { TouchableOpacity } from "react-native-gesture-handler";

interface Props {
  value?: string;
  onChangeText?: any;
  label?: string;
  placeholder?: string;
  secureTextEntry?: boolean;
  navigation?: any
}

class SearchBar extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  static defaultProps = {
    secureTextEntry: false,
  };

  render() {
    const {
      value,
      onChangeText,
      label,
      placeholder,
      secureTextEntry,
      ...rest
    } = this.props;

    return (
      <View style={styles.searchBarContainer}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate("Main")} style={styles.searchBarIcon}>
          <Feather name="search" size={20} color={colors.GRAY} />
        </TouchableOpacity>
        <TextInput
          style={styles.searchBarField}
          onChangeText={onChangeText}
          value={value}
          placeholder={placeholder}
        />
      </View>
    );
  }
}

export default SearchBar;
