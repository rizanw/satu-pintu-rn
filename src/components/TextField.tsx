import * as React from "react";
import { Text, TextInput, View } from "react-native";
import { styles } from "../res/styles";

interface Props {
    value: string,
    onChangeText: any,
    label: string,
    placeholder?: string,
    secureTextEntry: boolean
}

class TextField extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  static defaultProps = {
    secureTextEntry: false
  }

  render() {
    const { value, onChangeText, label, placeholder, secureTextEntry, ...rest } = this.props;

    return (
        <View style={styles.textFieldContainer}>
            <TextInput
            style={styles.textFieldArea}
            onChangeText={onChangeText}
            value={value}
            placeholder={placeholder}
            />
            <Text style={styles.textFieldLabel}>{label}</Text>
      </View>
    );
  }
}

export default TextField;
