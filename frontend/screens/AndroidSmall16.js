import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";
import Header from '../components/comman'
import styless from "./screen";
import Circle from "../components/circle";
import Productlayout from "../components/productlayout";
import Productdescrip from "../components/productdescrip";

const AndroidSmall16 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.androidSmall16}>
     <Header />
     <View style={styles.productImgDiv}>
        <View style={styles.circle}>
            <Image
                style={{
                    width: "100%",
                    height: "100%",
                    marginBottom: 15,
                    marginTop: -15,
                }}
                contentFit="contain"
                source={require("../assets/chair.png")}
            />
          
            
        </View>

    </View>
     <Productdescrip />

     <View style={styless.nextPressable}>
        <Pressable
          style={styless.button}
          onPress={() => navigation.navigate("AndroidSmall2")}
        >
          <Text style={styless.text}>Home</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  androidSmall16: {
    backgroundColor:"#FCDEC0",
    flex: 1,
    width: "100%",
    height: 640,
    overflow: "hidden",
  },
  circle: {
    width: "100%",
    height: "100%",
    right:"10%",
    borderRadius: 152,
    borderWidth:0.9,
    backgroundColor: '#b4846c',
  },

  productImgDiv: {
    // backgroundColor: "red",
    width: "30%",
    height: "15%",
    position:"absolute",
    right: "8%",
    top: "9%",
    // alignItems:"center",
  }
});

export default AndroidSmall16;
