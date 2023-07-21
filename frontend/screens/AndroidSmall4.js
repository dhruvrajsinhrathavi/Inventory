import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text, Touchable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";
import Header from "../components/comman";
import styless from "./screen";
import Productlayout from "../components/productlayout";
import Circle from "../components/circle";
import { ScrollView } from "react-native-gesture-handler";

const AndroidSmall4 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.androidSmall4}>
      <Header />
      <Circle />
        {/* <ScrollView > */}
          <Productlayout />
        {/* </ScrollView> */}
      

      <View style={styless.nextPressable}>
        <Pressable
          style={styless.button}
          onPress={() => navigation.navigate("AndroidSmall16")}
        >
          <Text style={styless.text}>Home</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({


  androidSmall4: {
    backgroundColor: '#FCDEC0',
    flex: 1,
    overflow: "hidden",
  },
  main: {
    display:"flex",
    height: "50%",
    backgroundColor: "blue",
    justifyContent: "center",
  },
  ppl: {
    height: "100%",
  }
});

export default AndroidSmall4;
