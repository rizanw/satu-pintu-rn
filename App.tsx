import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { colors } from "./src/res/colors";
import { MaterialIcons } from "@expo/vector-icons";
import SplashScreen from "./src/screens/SplashScreen";
import BantuanScreen from "./src/screens/BantuanScreen";
import LoginScreen from "./src/screens/LoginScreen";
import RegisterPesertaScreen from "./src/screens/register/PesertaScreen";
import RegisterPenyelenggaraScreen from "./src/screens/register/PenyelenggaraScreen";
import InfoScreen from "./src/screens/info/InfoScreen";
import InfoScreen1 from "./src/screens/info/InfoScreen1";
import InfoScreen2 from "./src/screens/info/InfoScreen2";
import InfoScreen3 from "./src/screens/info/InfoScreen3";
import Main from "./src/screens/MainScreen";

const Stack = createStackNavigator();

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerTitleStyle: {
              color: colors.PRIMARY_BLUE,
            },
            headerBackTitle: " ",
            headerBackImage: () => (
              <MaterialIcons
                style={{ marginLeft: 16 }}
                name="arrow-back"
                size={28}
                color={colors.PRIMARY_BLUE}
              />
            ),
            headerTintColor: colors.PRIMARY_BLUE,
            headerStyle: {
              backgroundColor: colors.WHITE,
              borderWidth: 0,
              elevation: 0,
              shadowOpacity: 0,
            },
          }}
        >
          <Stack.Screen
            name="Info"
            component={InfoScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Info1"
            component={InfoScreen1}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Info2"
            component={InfoScreen2}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Info3"
            component={InfoScreen3}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Splash"
            component={SplashScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Bantuan" component={BantuanScreen} />
          <Stack.Screen
            name="RegisterPeserta"
            component={RegisterPesertaScreen}
            options={{ headerTitle: false }}
          />
          <Stack.Screen
            name="RegisterPenyelenggara"
            component={RegisterPenyelenggaraScreen}
            options={{ headerTitle: false }}
          />
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{
              headerBackImage: () => (
                <MaterialIcons
                  style={{ marginLeft: 16 }}
                  name="arrow-back"
                  size={28}
                  color={colors.WHITE}
                />
              ),
              headerStyle: {
                backgroundColor: colors.PRIMARY_BLUE,
                borderWidth: 0,
                elevation: 0,
                shadowOpacity: 0,
              },
            }}
          />
          <Stack.Screen
            name="Main"
            component={Main}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
