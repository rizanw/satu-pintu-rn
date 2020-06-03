import React from "react";
import Button from "../components/Button";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { ScreenContainer } from "../components/ScreenContainer";
import { styles } from "../res/styles";
import { colors } from "../res/colors";
import { NavigationProp } from "@react-navigation/native";

interface State {
  emailField: string;
}

interface Props {
  navigation: NavigationProp<any,any>
}

export default class SplashScreen extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      emailField: "",
    };
  }

  render() {
      const {navigation, ...rest} = this.props;

    return (
      <ScreenContainer bgcolor='blue'>
        <View style={styles.containerSub}>
          <Image style={{marginTop: 40}} source={require('../../assets/logo.png')} />
        </View>
        <View style={styles.containerSub}>
          <Button buttonStyle="secondary" onPress={() => navigation.navigate('RegisterPenyelenggara')}>Daftar Akun Penyelenggara</Button>
          <Button buttonStyle="secondary" onPress={() => navigation.navigate('RegisterPeserta')}>Daftar Akun Peserta</Button>
          <Button buttonStyle="secondary" onPress={() => navigation.navigate('Login')}>Masuk</Button>
        </View>
        <View style={{marginBottom: 10, alignSelf:'stretch', marginRight: 24}}>
          <TouchableOpacity onPress={() => navigation.navigate('Bantuan')}>
            <Text style={{color: colors.WHITE, textAlign:'right'}}>
              Bantuan ?
            </Text>
          </TouchableOpacity>
        </View>
      </ScreenContainer>
    );
  }
}
