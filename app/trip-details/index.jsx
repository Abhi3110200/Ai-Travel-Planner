import React, { useEffect, useState } from "react";
import { View, Text, Image } from "react-native";
import { useLocalSearchParams, useNavigation, useRouter } from "expo-router";
import moment from "moment";
import { Colors } from "../../constants/Colors";
import FlightInfo from "../../components/TripDetails/FlightInfo";
import HotelList from "../../components/TripDetails/HotelList";

export default function TripDetail() {
  const navigation = useNavigation();
  const router = useRouter();
  const { trip } = useLocalSearchParams();
  const [tripDetails, setTripDetails] = useState(null);

  // Move formatData function outside of the component function
  const formatData = (data) => {
    return JSON.parse(data);
  };

  useEffect(() => {
    if (!trip) return; // Handle case where trip is not defined yet

    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "",
    });

    // Parse trip data only if trip is defined and has content
    if (trip) {
      setTripDetails(JSON.parse(trip));
    }
  }, [trip]); // Add trip to the dependency array to update tripDetail when trip changes

  return (
    tripDetails && (
      <View>
        {/* Use conditional rendering to ensure tripDetail is loaded before accessing its properties */}

        <Image
          source={{
            uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${
              formatData(tripDetails.tripDate).locationInfo?.photoRef
            }&key=${process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY}`,
          }}
          style={{ width: "100%", height: 300 }}
        />

        <View
          style={{
            padding: 15,
            backgroundColor: "#fff",
            marginTop: -30,
            height: "100%",
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontFamily: "Outfit-Medium",
            }}
          >
            {tripDetails?.tripPlan.tripDetails.location}
          </Text>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              marginTop: 5,
            }}
          >
            <Text
              style={{
                fontSize: 14,
                fontFamily: "Outfit",
                color: Colors.GRAY,
              }}
            >
              {moment(formatData(tripDetails.tripDate).startDate).format(
                "DD MMM yyyy"
              )}
            </Text>
            <Text
              style={{
                fontSize: 15,
                fontFamily: "Outfit",
                color: Colors.GRAY,
              }}
            >
              {" "}
              -{" "}
              {moment(formatData(tripDetails.tripDate).endDate).format(
                "DD MMM yyyy"
              )}
            </Text>
          </View>

          <Text
            style={{
              fontSize: 15,
              fontFamily: "Outfit",
              color: Colors.GRAY,
            }}
          >
            🚘 {formatData(tripDetails.tripDate)?.traveler?.title}
          </Text>

          {/* Flight info */}
          <FlightInfo
            flightData={tripDetails?.tripPlan?.flightDetails?.flightOptions[0]}
          />

          {/* Hotel List */}
          <HotelList hotelList={tripDetails?.tripPlan?.hotelOptions}/>

          {/* Trip Day Planner info */}
        </View>
      </View>
    )
  );
}
