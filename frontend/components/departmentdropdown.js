import React, {  useEffect, useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';
import axios from 'axios';
import { log } from 'react-native-reanimated';
import { transferContext } from '../screens/transferpage';





const DeparmentDropdownComponent = () => {

  const {setItems} = React.useContext(transferContext);
  const [department,setdepartment] = useState([])
  const [value, setValue] = useState("");

  const getdepartment = async()=>{
    try{
      const response = await axios.get("http://192.168.149.136:5000/api/product/getdepartment");
      setdepartment(response.data);
    } catch(err) {
      console.log(err);
    }
  };

  const handelGetItems = async () => {
    try{
      if(value.length > 0) {
        const response = await axios.get("http://192.168.149.136:5000/api/product/getAllProductsOfDepartment/"+value);
        setItems(response.data);
      }
    } catch(err) {
      console.log(err);
    }
  }

  // const renderLabel = () => {
  //   if (value || isFocus) {
  //     return (
  //       <Text style={[styles.label,]}>
  //         Department
  //       </Text>
  //     );
  //   }
  //   return null;
  // };

  useEffect(()=>{
    getdepartment();
  },[]);

  useEffect(()=>{
    handelGetItems();
  },[value]);

  const data = [
    ...department.map(elm => {
      return(
        {label: elm, value: elm}
      )
    })
  ];

  return (
    <View style={styles.container}>
      {/* {renderLabel()} */}
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
        placeholder={'Select Department'}
        searchPlaceholder="Search..."
        value={value}
        // onFocus={() => setIsFocus(true)}
        // onBlur={() => setIsFocus(false)}
        onChange={item => {

        setValue(item.value);
        // handelGetItems();
          // setIsFocus(false);
        }}
      />
    </View>
  );
};

export default DeparmentDropdownComponent;

const styles = StyleSheet.create({
  container: {
   marginBottom:20
    
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
    color:"white",
    position: 'relative',
    backgroundColor: '#7D5A50',
    maxWidth:"40%",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
    opacity:0.4
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
