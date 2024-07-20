import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { auth, db } from "../../configs/FirebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";


export default function profile() {
    const user = auth.currentUser;
    const [userTrips, setUserTrips] = useState([]);

  useEffect(() => {
    user && GetMyTrip();
  }, [user]);

  const GetMyTrip = async () => {
 
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

  };
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
        Profile

        <Text>{userTrips?.userEmail}</Text>
      </Text>
    </View>
  );
}
