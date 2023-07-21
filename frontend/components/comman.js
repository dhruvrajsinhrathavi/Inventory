import * as React from "react";
import { useState } from "react";
import { Image } from "expo-image";
import { TextInput } from "react-native-gesture-handler";
import { StyleSheet, View, Pressable, Text,Alert} from "react-native";

export default function Header () {
    return (
        <View style={styles.headerContainer}>
            <Image 
            style={styles.heado}
            contentFit="cover"
            source={require("../assets/heado.png")}
            />  
        </View>
    )
};

const styles = StyleSheet.create({
    headerContainer: {
        width: '55%',
        height: '23%',
        // backgroundColor: "red",
        marginTop: "-5%",
      },
      heado: {
        flex: 1,
      },
})