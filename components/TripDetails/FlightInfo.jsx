import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Colors } from "../../constants/Colors";

export default function FlightInfo({ flightData }) {
  return (
    <View
      style={{
        marginTop: 20,
        padding: 10,
        backgroundColor: Colors.Light_gray,
        borderRadius: 10,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontFamily: "Outfit-Medium",
          }}
        >
          ✈️ Flights
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: Colors.primary,
            padding: 5,
            width: 100,
            borderRadius: 7,
            marginTop: 7,
          }}
        >
          <Text
            style={{
              color: "white",
              textAlign: "center",
              fontFamily: "Outfit",
            }}
          >
            Book Here
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop: 7,
      }}>
        <Text
          style={{
            fontSize: 16,
            fontFamily: "Outfit",
  
          }}
        >
          Airline: {flightData?.airline}
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontFamily: "Outfit",
          }}
        >
          Price: {flightData?.price}
        </Text>
      </View>
    </View>
  );
}
