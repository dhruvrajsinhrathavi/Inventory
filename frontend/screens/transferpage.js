import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable, TextInput, ScrollView,DropDownPicker} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";
import styless from './screen';
import Header from "../components/comman";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import DropdownComponent from "../components/productdropdown";
import DeparmentDropdownComponent from "../components/departmentdropdown";

const Transferpage = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.exportpage}>
            <Header />
            


            <KeyboardAwareScrollView style={styles.inputFields}>
                <ScrollView >
                <DeparmentDropdownComponent />
                <DropdownComponent />
                    <TextInput
                        style={styles.textInputs}
                        multiline={true}
                        placeholder="Enter Quantity"
                    ></TextInput>
                </ScrollView>
            </KeyboardAwareScrollView>


            <View style={styless.nextPressable}>
                <Pressable
                    style={styless.button}
                    onPress={() => navigation.navigate("AndroidSmall16")}
                >
                    <Text style={styless.text}>Transfer</Text>
                </Pressable>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    exportpage: {
        backgroundColor: '#FCDEC0',
        flexDirection: "column",
        flex: 1,
        overflow: "hidden",
    },
    textInputs: {
        // backgroundColor: "dodgerblue",
        borderWidth: 0.8,
        borderColor: '#000',
        padding: 5,
        width: 360,
        height: 50,
        borderRadius: 8,
        marginBottom: 20,
        overflow: "scroll",
    },
    inputFields: {
        display: "flex",
        // justifyContent:"center",
        alignSelf: "center",
        marginTop: "32%",
        height: "40%",
        maxHeight: "60%",
        marginBottom: "10%",
        overflow: "scroll",
        alignSelf: "center",
    },
    circle: {
        width: "150%",
        height: "560%",
        right: "10%",
        borderRadius: 152,
        borderWidth: 0.9,
        backgroundColor: '#b4846c',
    },

    productImgDiv: {
        // backgroundColor: "red",
        position: "absolute",
        right: "10%",
        top: "9%",
        alignItems: "center",
    }
});

export default Transferpage;
