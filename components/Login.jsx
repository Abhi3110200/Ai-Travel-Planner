import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";

export default function Login() {
    const router=useRouter();
  return (
    <View>
      <Image
        source={require("./../assets/images/bg.jpg")}
        resizeMode="cover"
        style={{
          width: "100%",
          height: 450,
        }}
      />

      <View style={styles.container}>
        <Text
          style={{
            fontSize: 25,
            fontFamily: "Outfit-Medium",
            textAlign:'center',
            marginTop:20
          }}
        >
          AI Travel Planner
        </Text>

        <Text style={{
            fontSize: 15,
            fontFamily: "Outfit",
            textAlign:'center',
            color:Colors.GRAY,
            marginTop:25
        }}>Discover your next adventure effortlessly Personalized itineraries at your fingertips. Travel smarter with AI-driven insights.</Text>

        <TouchableOpacity style={styles.button}
            onPress={()=>router.push('auth/sign-in')}
        >
            <Text style={{
                color:Colors.white,
                textAlign:'center',
                fontFamily:'Outfit',
                fontSize:17
            }}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: -30,
    backgroundColor: Colors.white,
    height: "100%",
    borderTopRightRadius:30,
    borderTopLeftRadius:30,
    padding:25
  },
  button:{
    padding:15,
    backgroundColor:Colors.primary,
    borderRadius:99,
    marginTop:'25%'
  }
});
