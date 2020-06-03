import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import { ScreenContainer } from "../../components/ScreenContainer";
import { colors } from "../../res/colors";
import { styles } from "../../res/styles";
import TextField from "../../components/TextField";
import Button from "../../components/Button";

interface State {
  nameField: string;
  emailField: string;
  passwordField: string;
  addressField: string;
  phoneField: string;
}

interface Props {
  navigation: NavigationProp<any, any>;
}

export default class RegisterPenyelenggaraScreen extends React.Component<
  Props,
  State
> {
  constructor(props: Props) {
    super(props);

    this.state = {
      nameField: "",
      emailField: "",
      passwordField: "",
      addressField: "",
      phoneField: "",
    };
  }

  render() {
    const { navigation, ...rest } = this.props;

    return (
      <ScreenContainer bgcolor="white">
        <ScrollView>
          <View style={styles.containerSub}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                textAlign: "left",
                alignSelf: "stretch",
                marginVertical: 26,
              }}
            >
              Buat Akun Penyelenggara
            </Text>
            <TextField
              onChangeText={(nameField: any) =>
                this.setState({ nameField: nameField })
              }
              value={this.state.nameField}
              label="Nama Lengkap"
              placeholder="Nama Lengkap"
            />
            <TextField
              onChangeText={(emailField: any) =>
                this.setState({ emailField: emailField })
              }
              value={this.state.emailField}
              label="Email"
              placeholder="Email"
            />
            <TextField
              onChangeText={(phoneField: any) =>
                this.setState({ phoneField: phoneField })
              }
              value={this.state.phoneField}
              label="Nomor Telephone"
              placeholder="Nomor Telephone"
            />
            <TextField
              onChangeText={(addressField: any) =>
                this.setState({ addressField: addressField })
              }
              value={this.state.addressField}
              label="Alamat"
              placeholder="Alamat"
            />
            <TextField
              onChangeText={(passwordField: any) =>
                this.setState({ passwordField: passwordField })
              }
              value={this.state.passwordField}
              label="Kata Sandi"
              placeholder="Kata Sandi"
              secureTextEntry={true}
            />
            <TextField
              onChangeText={(passwordField: any) =>
                this.setState({ passwordField: passwordField })
              }
              value={this.state.passwordField}
              label="Konfirmasi Kata Sandi"
              placeholder="Konfirmasi Kata Sandi"
              secureTextEntry={true}
            />
          </View>
          <View style={[styles.containerSub, { marginBottom: 28 }]}>
            {/* <Text style={{textAlign:"center", color: colors.GRAY, fontSize: 11, marginHorizontal:46}}>Dengan membuat akun, Anda setuju dengan ketentuan layanan dan kebijakan privasi</Text> */}
          </View>
          <View style={styles.containerSub}>
            <Button>DAFTAR</Button>
          </View>
        </ScrollView>
      </ScreenContainer>
    );
  }
}
