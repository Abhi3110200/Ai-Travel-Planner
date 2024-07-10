import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation, useRouter } from 'expo-router'

export default function TripDetail() {
    const navigation = useNavigation();
    const router = useRouter();

    useEffect(()=>{
        navigation.setOptions({
            headerShown:true,
            headerTransparent:true,
            headerTitle:'',
        })
    },[])
  return (
    <View>
      <Text>TripDetail</Text>
    </View>
  )
}