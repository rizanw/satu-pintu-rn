import React from "react";
import { ScreenContainer } from "../../components/ScreenContainer";
import { View, Text } from "react-native";
import { styles } from "../../res/styles";
import {
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native-gesture-handler";
import SearchBar from "../../components/SearchBar";
import ButtonItem from "../../components/ButtonItem";
import Card from "../../components/Card";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    imageUrl: "http://via.placeholder.com/160x160",
    title: "IDEATHON 2020",
  },
  {
    id: "bd7acbea-c1b1-46c2-dsas-3ad53abb28ba",
    imageUrl: "http://via.placeholder.com/160x160",
    title: "ITS YOUTH TECHNOPRENUER",
  },
  {
    id: "bd7acbea-c1b1-46c2-asdw-3ad53abb28ba",
    imageUrl: "http://via.placeholder.com/160x160",
    title: "AWS HACKTHON",
  },
  {
    id: "bd7acbea-213s-46c2-aed5-3ad53abb28ba",
    imageUrl: "http://via.placeholder.com/160x160",
    title: "MICROSOFT IMAGINE",
  },
  {
    id: "bd7acbea-asdw-46c2-aed5-3ad53abb28ba",
    imageUrl: "http://via.placeholder.com/160x160",
    title: "GEMASTIK",
  },
  {
    id: "bd7acbea-asdw-asdf-aed5-3ad53abb28ba",
    imageUrl: "http://via.placeholder.com/160x160",
    title: "ALIBABA BUSINESS COMP",
  },
];

export default class ResultScreen extends React.Component<{}> {
  constructor(props: {}) {
    super(props);
  }

  render() {
    return (
      <ScreenContainer>
        <SearchBar></SearchBar>
        <View style={styles.containerMain}>
          <FlatList
            data={DATA}
            keyExtractor={(item) => `${item.id}`}
            renderItem={({ item }) => {
              return <Card>{item.title}</Card>;
            }}
          />
        </View>
      </ScreenContainer>
    );
  }
}
