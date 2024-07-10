import { View, Text, Image } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { Colors } from "../../constants/Colors";
import { CreateTripContext } from "../../context/CreateTripContext";
import { AI_PROMPT } from "../../constants/Options";
import { chatSession } from "../../configs/AiModel";
import { useRouter } from "expo-router";
import { doc, setDoc } from "firebase/firestore";
import { auth,db } from "../../configs/FirebaseConfig";

export default function GenerateTrip() {
  const { tripData, setTripData } = useContext(CreateTripContext);
  const [isLoading, setIsLoading] = useState();
  const user=auth.currentUser;
  const router=useRouter();
  useEffect(() => {
    GenerateAiTrip();
  }, []);
  const GenerateAiTrip = async () => {
    setIsLoading(true);
    const FINAL_PROMPT = AI_PROMPT.replace(
      "{location}",
      tripData?.locationInfo?.name
    )
      .replace("{totalDays}", tripData.totalNoOfDays)
      .replace("{totalNight}", tripData.totalNoOfDays - 1)
      .replace("{traveler}", tripData.traveler?.title)
      .replace("{budget}", tripData.budget)
      .replace("{totalDays}", tripData.totalNoOfDays)
      .replace("{totalNight}", tripData.totalNoOfDays - 1)

    console.log(FINAL_PROMPT);

    const result = await chatSession.sendMessage(FINAL_PROMPT);
    console.log(result.response.text());
    setIsLoading(false);
    const tripResp= JSON.parse(result.response.text());
    const docId=(Date.now()).toString();
    const result_ = await setDoc(doc(db, 'UserTrips', docId),{
        userEmail:user.email,
        tripPlan:tripResp,
        tripDate:JSON.stringify(tripData),
        docId:docId
    })

    router.push('(tabs)/mytrip');

  };
  return (
    <View
      style={{
        padding: 25,
        backgroundColor: "#fff",
        height: "100%",
        paddingTop: 75,
      }}
    >
      <Text
        style={{
          fontSize: 30,
          fontFamily: "Outfit-Medium",
          textAlign: "center",
        }}
      >
        Please Wait...
      </Text>

      <Text
        style={{
          fontSize: 18,
          fontFamily: "Outfit-Medium",
          textAlign: "center",
          marginTop: 40,
        }}
      >
        We are working to generate your dream trip
      </Text>

      <Image
        source={require("./../../assets/images/plane.gif")}
        style={{
          width: "100%",
          height: 300,
          objectFit: "contain",
        }}
      />

      <Text
        style={{
          fontSize: 20,
          fontFamily: "Outfit",
          textAlign: "center",
          color: Colors.GRAY,
          marginTop: 10,
        }}
      >
        Do not Go Back
      </Text>
    </View>
  );
}
