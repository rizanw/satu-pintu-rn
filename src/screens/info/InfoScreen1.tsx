import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import { ScreenContainer } from "../../components/ScreenContainer";
import TextField from "../../components/TextField";
import { styles } from "../../res/styles";
import { colors } from "../../res/colors";
import Button from "../../components/Button";

interface State {
  emailField: string;
  passwordField: string;
}

interface Props {
  navigation: NavigationProp<any, any>;
}

export default class InfoScreen1 extends React.Component<Props, State> {
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
      <ScreenContainer bgcolor="white">
        <View style={styles.containerSub}>
          <Image
            source={require("../../../assets/Illustration.png")}
            style={{ marginTop: 50 }}
          />
        </View>
        <View style={[styles.containerSub, { justifyContent: "flex-start" }]}>
          <Text style={styles.infoMainTitle}>
            Berbagai portal informasi mengenai perlombaan dan event terlengkap!
          </Text>
          <Text style={styles.infoSubTitle}>
            Mulai dari berbagai jenjang dan kegiatan tersedia
          </Text>
          <View style={{ flexDirection: "row" }}>
            <View style={styles.infoDotDisabled}></View>
            <View style={styles.infoDot}></View>
            <View style={styles.infoDotDisabled}></View>
            <View style={styles.infoDotDisabled}></View>
          </View>
        </View>
        <View
          style={{
            marginBottom: 10,
            alignItems: "flex-end",
            flexDirection: "row-reverse",
            alignSelf: "center",
            marginHorizontal: 10,
          }}
        >
          <Button onPress={() => navigation.navigate("Info2")}>SELANJUTNYA</Button>
          <Button
            onPress={() => navigation.navigate("Splash")}
            buttonStyle="outlined"
          >
            LEWATI
          </Button>
        </View>
      </ScreenContainer>
    );
  }
}
