import React from "react";
import Button from "../components/Button";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { ScreenContainer } from "../components/ScreenContainer";
import { styles } from "../res/styles";
import { colors } from "../res/colors";
import { NavigationProp } from "@react-navigation/native";
import TextField from "../components/TextField";

interface State {
  emailField: string;
  passwordField: string;
}

interface Props {
  navigation: NavigationProp<any, any>;
}

export default class LoginScreen extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      emailField: "",
      passwordField: "",
    };
  }

  render() {
    const { navigation, ...rest } = this.props;

    return (
      <ScreenContainer bgcolor='white'>
        <View
          style={[
            {
              alignItems: 'center', 
              justifyContent: 'center',
              alignContent: 'center',
              width:"100%",
              padding: 16,
              backgroundColor: colors.PRIMARY_BLUE,
              marginBottom: 28
            },
          ]}
        >
          <Image source={require("../../assets/horizontal-logo.png")} />
        </View>
        <View style={styles.containerSub}>
            <TextField 
                onChangeText={(emailField:any) => this.setState({ emailField: emailField })}
                value={this.state.emailField}
                label='Email'
                placeholder='Email'
            />
            <TextField 
                onChangeText={(passwordField:any) => this.setState({ passwordField: passwordField })}
                value={this.state.passwordField}
                label='Kata Sandi'
                placeholder='Kata Sandi'
                secureTextEntry={true}
            />
            <TouchableOpacity onPress={() => navigation.navigate("Bantuan")} style={{alignSelf:'stretch'}}>
              <Text style={{fontSize: 10, color: colors.PRIMARY_BLUE, textAlign: "right"}}>
                Lupa Kata Sandi ?
              </Text>
            </TouchableOpacity>
            <View style={{backgroundColor:colors.BORDER_BLUE, width:24, height:4, borderRadius:10, marginTop:60}}></View>
        </View>
        <View style={[styles.containerSub, {alignItems: "flex-end"}]}>
            <Button>MASUK</Button>
            <Button onPress={() => navigation.navigate("Main")} buttonStyle='outlined'>MASUK SEBAGAI TAMU</Button>
        </View>
      </ScreenContainer>
    );
  }
}
