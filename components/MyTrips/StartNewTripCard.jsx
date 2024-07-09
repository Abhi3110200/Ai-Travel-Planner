import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";
export default function StartNewTripCard() {
  const router = useRouter();

  
  return (
    <View
      style={{
        padding: 20,
        marginTop: 50,
        display: "flex",
        alignItems: "center",
        gap: 25,
      }}
    >
      <Ionicons name="location-sharp" size={30} color="black" />
      <Text
        style={{
          fontSize: 25,
          fontFamily: "Outfit-Medium",
        }}
      >
        No Trips Planned yet
      </Text>

      <Text
        style={{
          fontSize: 18,
          fontFamily: "Outfit",
          color: Colors.GRAY,
          textAlign: "center",
        }}
      >
        Looks like its time to plan a new travel experinece! Get Started below
      </Text>

      <TouchableOpacity
        onPress={() => router.push("/create-trip/search-place")}
        style={{
          padding: 10,
          backgroundColor: Colors.primary,
          borderRadius: 15,
          paddingHorizontal: 30,
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 17,
            fontFamily: "Outfit",
          }}
        >
          Start a new trip
        </Text>
      </TouchableOpacity>
    </View>
  );
}
