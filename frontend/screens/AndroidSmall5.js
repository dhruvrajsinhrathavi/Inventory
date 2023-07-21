import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const AndroidSmall5 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.androidSmall5}>
      <Image
        style={[styles.androidSmall5Child, styles.androidPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-21.png")}
      />
      <Image
        style={[styles.androidSmall5Item, styles.androidPosition]}
        contentFit="cover"
        source={require("../assets/vector-6.png")}
      />
      <View style={[styles.androidSmall5Inner, styles.rectangleLayout]} />
      <Text style={[styles.enterProductNamecompulsary, styles.enterFlexBox]}>
        enter product name(compulsary selsct from dropdown)
      </Text>
      <View style={[styles.rectangleView, styles.rectangleLayout]} />
      <View style={[styles.rectangleView, styles.rectangleLayout]} />
      <Text
        style={[styles.enterProductQuantity, styles.enterFlexBox]}
      >{`enter product quantity `}</Text>
      <Pressable
        style={[styles.rectanglePressable, styles.rectangleLayout]}
        onPress={() => navigation.navigate("AndroidSmall4")}
      />
      <Text style={[styles.export, styles.enterFlexBox]}>{`Export
`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  androidPosition: {
    left: 0,
    position: "absolute",
  },
  rectangleLayout: {
    height: 57,
    width: 330,
    borderRadius: Border.br_8xs,
    left: 15,
    position: "absolute",
  },
  enterFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  androidSmall5Child: {
    top: 0,
    width: 207,
    height: 207,
  },
  androidSmall5Item: {
    top: 522,
    width: 420,
    height: 118,
  },
  androidSmall5Inner: {
    top: 232,
    borderWidth: 1,
    borderColor: "#887e7e",
    borderStyle: "solid",
    width: 330,
    borderRadius: Border.br_8xs,
    left: 15,
  },
  enterProductNamecompulsary: {
    marginTop: -67,
    marginLeft: -157,
    top: "50%",
    color: Color.black,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    left: "50%",
  },
  rectangleView: {
    top: 311,
    borderWidth: 1,
    borderColor: "#887e7e",
    borderStyle: "solid",
    width: 330,
    borderRadius: Border.br_8xs,
    left: 15,
  },
  enterProductQuantity: {
    top: 327,
    left: 116,
    color: Color.black,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
    textAlign: "left",
  },
  rectanglePressable: {
    top: 562,
    backgroundColor: Color.paleturquoise_100,
    width: 330,
    borderRadius: Border.br_8xs,
    left: 15,
  },
  export: {
    marginLeft: -38,
    top: 575,
    fontSize: FontSize.size_5xl,
    fontWeight: "700",
    fontFamily: FontFamily.outfitBold,
    color: Color.gray,
    left: "50%",
  },
  androidSmall5: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 640,
    overflow: "hidden",
  },
});

export default AndroidSmall5;
