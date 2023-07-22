import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';
import { transferContext } from '../screens/transferpage';
import axios from 'axios';



const DropdownComponent = () => {

  const { items,setStock } = React.useContext(transferContext);
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  console.log(items);

  const handleQuantity = async () => {
    try{
      if(value?.length) {
        const quantity = await axios.get("http://192.168.149.136:5000/api/product/getquantityofproduct/" + value);
        setStock(quantity.data);
      }
    } catch(err) {
      console.log(err);
    }
  }

  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label,]}>
          product
        </Text>
      );
    }
    return null;
  };
  var data = items.map(elm => {
    return { label: elm.name, value: elm.name }
  })

  useEffect(()=>{
    handleQuantity();
  },[value])



  return (
    <View style={styles.container}>
      {renderLabel()}
      <Dropdown
        style={[styles.dropdown]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? 'Select Product Name' : '...'}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setValue(item.value);
          setIsFocus(false);
        }}
      />
    </View>
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20

  },
  dropdown: {
    height: 50,
    borderColor: 'black',
    borderWidth: 0.8,
    borderRadius: 8,
    paddingHorizontal: 8,
    width: 360,
    height: 50,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    color: "white",
    position: 'relative',
    backgroundColor: '#7D5A50',
    maxWidth: "30%",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
    opacity: 0.4
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
