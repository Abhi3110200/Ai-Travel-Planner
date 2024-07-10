import { View, Text, TouchableOpacity, ToastAndroid } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import {  useNavigation, useRouter } from "expo-router";
import CalendarPicker from "react-native-calendar-picker";
import  {Colors}  from './../../constants/Colors';
import moment from 'moment'
import { CreateTripContext } from "../../context/CreateTripContext";
export default function SelectDates() {
  const navigation = useNavigation();
  const router = useRouter();
  const [startDate, setStartDate]=useState();
  const [endDate, setEndDate]=useState();
  const {tripData, setTripData}=useContext(CreateTripContext);

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "",
    });
  }, []);

  const onDateChange=(date,type)=>{
    console.log(date,type)
    if(type=='START_DATE'){
        setStartDate(moment(date))
    }
    else{
        setEndDate(moment(date))
    }
  }
  const OnDateSelectionContinue=()=>{
    if(!startDate&&!endDate){
        ToastAndroid.show('Please select Start and End Date',ToastAndroid.BOTTOM);
        return;
    }

    const totalNoOfDays= endDate.diff(startDate,'days');
    console.log(totalNoOfDays+1);
    setTripData({
        ...tripData,
        startDate:startDate,
        endDate:endDate,
        totalNoOfDays:totalNoOfDays+1
    })

    router.push('/create-trip/select-budget');
  }
  return (
    <View
      style={{
        padding: 25,
        paddingTop: 75,
        backgroundColor: "#fff",
        height: "100%",
      }}
    >
      <Text
        style={{
          fontSize: 30,
          fontFamily: "Outfit-Medium",
          marginTop: 20,
        }}
      >
        Travel Dates
      </Text>

      <View style={{
        marginTop: 30,
      }}>
        <CalendarPicker
          onDateChange={onDateChange}
          allowRangeSelection={true}
          minDate={new Date()}
          maxRangeDuration={4}
          selectedRangeStyle={{
            backgroundColor: Colors.primary,
          }}
          selectedDayTextStyle={{
            color: Colors.white,
          }}
        />
      </View>

      <TouchableOpacity onPress={OnDateSelectionContinue}
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
  );
}
