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
}

interface Props {
  navigation: NavigationProp<any, any>;
}

export default class RegisterPesertaScreen extends React.Component<
  Props,
  State
> {
  constructor(props: Props) {
    super(props);

    this.state = {
      nameField: "",
      emailField: "",
      passwordField: "",
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
              Buat Akun Peserta
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
            <View style={{ marginVertical: 28 }}>
              <Text
                style={{
                  textAlign: "center",
                  color: colors.GRAY,
                  fontSize: 11,
                  marginHorizontal: 46,
                }}
              >
                Dengan membuat akun, Anda setuju dengan ketentuan layanan dan
                kebijakan privasi
              </Text>
            </View>
          </View>
          <View
            style={[
              styles.containerSub,
              { alignItems: "flex-end" },
            ]}
          >
            <Button>DAFTAR</Button>
          </View>
        </ScrollView>
      </ScreenContainer>
    );
  }
}
