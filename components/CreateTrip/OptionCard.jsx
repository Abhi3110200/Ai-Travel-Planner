import { View, Text } from "react-native";
import React from "react";
import { Colors } from '@/constants/Colors';

export default function OptionCard({ option, selectedOption }) {
  return (
    <View
      style={[{
        padding: 25,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:Colors.Light_gray,
        borderRadius:15
      }, selectedOption?.id==option?.id&&{borderWidth:2}]}
    >
      <View>
        <Text style={{
            fontSize: 20,
            fontFamily:'Outfit-Medium'
        }}>{option?.title}</Text>
        <Text style={{
            fontSize: 14,
            fontFamily:'Outfit',
            color: Colors.GRAY,
        }}>{option?.desc}</Text>
      </View>
      <Text style={{
        fontSize: 40,
      }}>{option?.icon}</Text>
    </View>
  );
}
