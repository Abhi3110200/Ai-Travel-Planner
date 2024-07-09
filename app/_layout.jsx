import { Stack } from "expo-router";
import {useFonts} from 'expo-font'
import { useState } from "react";
import { CreateTripContext } from './../context/CreateTripContext';
export default function RootLayout() {
  useFonts({
    "Outfit":require('./../assets/fonts/Outfit-Regular.ttf'),
    "Outfit-Bold":require('./../assets/fonts/Outfit-Bold.ttf'),
    "Outfit-Medium":require('./../assets/fonts/Outfit-Medium.ttf'),
  })

  const [tripData, setTripData] = useState([]);
  return (
    <CreateTripContext.Provider value={{tripData, setTripData}}>

    <Stack screenOptions={{
      headerShown: false,
    }}>
      {/* <Stack.Screen name="index" options={{
        headerShown: false,
      }}/> */}
      <Stack.Screen name='(tabs)'/>
    </Stack>
    </CreateTripContext.Provider>
  );
}
