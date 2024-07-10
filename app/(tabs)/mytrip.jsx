import { View, Text, ActivityIndicator, ScrollView, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import StartNewTripCard from "../../components/MyTrips/StartNewTripCard";
import { collection, getDocs, query, where } from "firebase/firestore";
import { auth, db } from "../../configs/FirebaseConfig";
import { Colors } from "../../constants/Colors";
import UserTripList from "../../components/MyTrips/UserTripList";
import { router } from "expo-router";
export default function MyTrip() {
  const [userTrips, setUserTrips] = useState([]);
  const [loading, setLoading] = useState(false);
  const user = auth.currentUser;

  useEffect(() => {
    user && GetMyTrip();
  }, [user]);

  const GetMyTrip = async () => {
    setLoading(true);
    setUserTrips([]);
    const q = query(
      collection(db, "UserTrips"),
      where("userEmail", "==", user?.email)
    );
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      console.log(doc.id, "=>", doc.data());
      setUserTrips((prev) => [...prev, doc.data()]);
    });
    setLoading(false);
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        padding: 25,
        paddingTop: 55,
        backgroundColor: "#fff",
        height: "100%",
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
            fontFamily: "Outfit-Bold",
            fontSize: 28,
          }}
        >
          My Trips
        </Text>

        <TouchableOpacity onPress={() => router.push("/create-trip/search-place")}>
          <Ionicons name="add-circle" size={35} color="black" />
        </TouchableOpacity>
      </View>
      {loading && <ActivityIndicator size={"large"} color={Colors.primary} />}

      {userTrips?.length == 0 ? (
        <StartNewTripCard />
      ) : (
        <UserTripList userTrips={userTrips} />
      )}
    </ScrollView>
  );
}
