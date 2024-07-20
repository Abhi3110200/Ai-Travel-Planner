import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "expo-router";
import UserTripList from "../../components/MyTrips/UserTripList";
import { auth, db } from "../../configs/FirebaseConfig";
import { collection, getDocs, query } from "firebase/firestore";

export default function discover() {
    const user = auth.currentUser;
  return (
    <View
      style={{
        padding: 25,
        paddingTop: 50,
        height: "100%",
        backgroundColor: "#fff",
      }}
    >
      <Text
        style={{
          fontFamily: "Outfit-Bold",
          fontSize: 28,
        }}
      >
        Discover
      </Text>

      <Text>{}</Text>

    </View>
  );
}
