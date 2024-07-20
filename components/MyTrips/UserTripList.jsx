import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import moment from "moment";
import { Colors } from "../../constants/Colors";
import UserTripCard from "./UserTripCard";
import { useRouter } from "expo-router";

export default function UserTripList({ userTrips }) {
  const LatestTrip = JSON.parse(userTrips[0].tripDate);
  const router = useRouter();
  return (
    <View
      style={{
        marginBottom: 60,
      }}
    >
      <View
        style={{
          marginTop: 20,
        }}
      >
        {LatestTrip?.locationInfo?.photoRef ? (
          <Image
            source={{
              uri:
                "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=" +
                LatestTrip.locationInfo?.photoRef +
                "&key=" +
                process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY,
            }}
            style={{
              width: "100%",
              height: 200,
              borderRadius: 15,
              objectFit: "cover",
            }}
          />
        ) : (
          <Image
            source={require("./../../assets/images/bg.jpg")}
            style={{
              width: "100%",
              height: 240,
              borderRadius: 15,
              objectFit: "cover",
            }}
          />
        )}

        <View
          style={{
            marginTop: 10,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontFamily: "Outfit-Medium",
            }}
          >
            {userTrips[0]?.tripPlan?.tripDetails?.location}
          </Text>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 10,
            }}
          >
            <Text
              style={{
                fontSize: 15,
                fontFamily: "Outfit",
                color: Colors.GRAY,
              }}
            >
              {moment(LatestTrip.startDate).format("DD MMM yyyy")}
            </Text>

            <Text
              style={{
                fontSize: 15,
                fontFamily: "Outfit",
                color: Colors.GRAY,
              }}
            >
              🚘 {LatestTrip.traveler.title}
            </Text>
          </View>

          <TouchableOpacity
            onPress={() =>
              router.push({
                pathname: "/trip-details",
                params: {
                  trip: JSON.stringify(userTrips[0]),
                },
              })
            }
            style={{
              marginTop: 10,
              padding: 15,
              backgroundColor: Colors.primary,
              borderRadius: 15,
            }}
          >
            <Text
              style={{
                color: Colors.white,
                fontSize: 15,
                fontFamily: "Outfit",
                textAlign: "center",
              }}
            >
              See your plan
            </Text>
          </TouchableOpacity>
        </View>

        {userTrips.map((trip, index) => (
          <UserTripCard trip={trip} key={index} />
        ))}
      </View>
    </View>
  );
}
