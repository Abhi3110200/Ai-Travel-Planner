import { View, Text} from "react-native";
import React, {useState} from "react";
import { Ionicons } from "@expo/vector-icons";
import StartNewTripCard from "../../components/MyTrips/StartNewTripCard";
export default function MyTrip() {
    const [userTrips, setUserTrips] = useState([]);

    
  return (
    <View
      style={{
        padding: 25,
        paddingTop: 55,
        backgroundColor: "#fff",
        height: "100%",
      }}
    >
      <View style={{
        display:'flex',
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}>
        <Text style={{
            fontFamily:'Outfit-Bold',
            fontSize: 28,
        }}>My Trips</Text>

        <Ionicons name="add-circle" size={35} color='black'/>
      </View>

      {
        userTrips?.length==0?
        <StartNewTripCard/>:null
      }
    </View>
  );
}
