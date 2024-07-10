import { View, Text, FlatList, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { Colors } from '../../constants/Colors';
import { SelectBudgetOptions } from '../../constants/Options';
import OptionCard from '../../components/CreateTrip/OptionCard';
import { CreateTripContext } from '../../context/CreateTripContext';

export default function SelectBudget() {
    const navigation = useNavigation();
    const [selectedOption, setSelectedOption]=useState();
    const router = useRouter();

    const {tripData, setTripData}=useContext(CreateTripContext);

    useEffect(()=>{
        navigation.setOptions({
            headerShown: true,
            headerTransparent:true,
            headerTitle:''
        })
    },[]);

    useEffect(()=>{
        selectedOption&&setTripData({
            ...tripData,
            budget: selectedOption?.title,
        })
    },[selectedOption])

    const onClickContinue =()=>{
        if(!selectedOption){
            ToastAndroid.show('Select Your Budget', ToastAndroid.LONG);
            return;
        }
        router.push('/create-trip/review-trip');
    }
  return (
    <View style={{
        padding:25,
        paddingTop:75,
        backgroundColor:Colors.white,
        height:'100%',
    }}>
      <Text style={{
        fontSize:30,
        fontFamily:'Outfit-Medium',
        marginTop:20
      }}>Budget</Text>

      <View style={{
        marginTop:20
      }}>
        <Text style={{
            fontSize:18,
            fontFamily:'Outfit-Medium',
        }}>Choose spending habits for your trip.</Text>

        <FlatList data={SelectBudgetOptions} renderItem={({item,index})=>(
            <TouchableOpacity onPress={()=>setSelectedOption(item)} style={{
                marginVertical:10
            }}>
                <OptionCard option={item} selectedOption={selectedOption}/>
            </TouchableOpacity>
        )}/>
      </View>

      <TouchableOpacity onPress={()=>onClickContinue()}
        style={{
          padding: 15,
          backgroundColor: Colors.primary,
          borderRadius: 15,
          marginTop: 20,
        }}
      >
        
          <Text
            style={{
              textAlign: "center",
              color: "#fff",
              fontFamily: "Outfit-Medium",
              fontSize: 18,
            }}
          >
            Continue
          </Text>
      </TouchableOpacity>
    </View>
  )
}