import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable, TextInput, ScrollView, Alert, ToastAndroid } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";
import styless from './screen';
import Header from "../components/comman";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import DropdownComponent from "../components/productdropdown";
import DeparmentDropdownComponent from "../components/departmentdropdown";
import { AppStateContext } from "../App";
import axios from "axios";

export const transferContext = React.createContext();

const Transferpage = () => {
    const navigation = useNavigation();

    const [items, setItems] = React.useState([]);

    const { productName } = React.useContext(AppStateContext);

    const [inputStock, setInputStock] = React.useState(Number);

    const [stock, setStock] = React.useState(Number);

    const [confirm, setConfirm] = React.useState(false);

    const value = {
        items,
        setItems,
        setStock
    }

    const call = async () => {
        console.log("halse bhai");
        const response = await axios.post("http://192.168.149.136:5000/api/product/setquantity", {
            newStock: inputStock,
            pname: productName,
            oldStock: stock,
        });
        console.log(response.data);
        navigation.navigate("AndroidSmall16");
    }

    const showToastWithGravity = () => {
        ToastAndroid.showWithGravity(
            'Only This much stock is available',
            ToastAndroid.SHORT,
            ToastAndroid.CENTER,

        );
    };


    const handelTransfer = () => {
        console.log(stock);
        if (inputStock > stock) {
            console.log("nai chale");
            showToastWithGravity();
            return;
        } else {
            Alert.alert('Alert Title', 'My Alert Msg', [
                {
                    text: 'Cancel',
                    // onPress: () => showToastWithGravity(),
                    style: 'cancel',
                },
                {
                    text: 'OK', onPress: () => call(),
                }
            ]);
        }
    }


    return (
        <View style={styles.exportpage}>
            <Header />
            <KeyboardAwareScrollView style={styles.inputFields}>
                <ScrollView >
                    <transferContext.Provider value={value}>
                        <DeparmentDropdownComponent />
                        <DropdownComponent />
                    </transferContext.Provider>
                    <TextInput
                        style={styles.textInputs}
                        onChangeText={val => setInputStock(parseInt(val))}
                        value={inputStock}
                        placeholder="Enter Quantity"
                    ></TextInput>

                </ScrollView>
            </KeyboardAwareScrollView>


            <View style={styless.nextPressable}>
                <Pressable
                    style={styless.button}
                    onPress={() => {
                        handelTransfer();
                    }
                    }
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
