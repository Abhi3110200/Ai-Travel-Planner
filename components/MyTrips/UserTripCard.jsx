import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import moment from "moment";
import { Colors } from "../../constants/Colors";

export default function UserTripCard({ trip }) {
  const formatData = (data) => {
    return JSON.parse(data);
  };
  return (
    <View
      style={{
        marginTop: 20,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "start",
      }}
    >
      {/* <Image
        source={require("./../../assets/images/bg.jpg")}
        style={{
          width: 100,
          height: 100,
          borderRadius: 15,
        }}
      /> */}
      <Image source={{uri:'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference='+formatData(trip.tripDate).locationInfo?.photoRef+'&key='+process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY}}  style={{width: 100, height: 100, borderRadius: 15, objectFit:'cover'}} />

      <View>
        <Text
          style={{
            fontSize: 18,
            fontFamily: "Outfit-Medium",
            width: 200,
          }}
        >
          {trip.tripPlan?.tripDetails?.location}
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontFamily: "Outfit",
            color: Colors.GRAY,
          }}
        >
          {moment(formatData(trip.tripDate)).format("DD MMM yyyy")}
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontFamily: "Outfit",
            color: Colors.GRAY,
          }}
        >
          Traveling: {formatData(trip.tripDate).traveler.title}
        </Text>
      </View>
    </View>
  );
}
