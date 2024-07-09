import { View, Text } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { useNavigation , Link} from 'expo-router'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { CreateTripContext } from '../../context/CreateTripContext';
import { useRouter } from 'expo-router';
export default function SearchPlace() {
    const navigation = useNavigation();
    const router = useRouter();
    const {tripData, setTripData}= useContext(CreateTripContext);
    useEffect(()=>{
        navigation.setOptions({
            headerShown:true,
            headerTransparent:true,
            headerTitle:'Search'
        })
    },[])

    useEffect(()=>{
        console.log(tripData);
    }),[tripData]

  return (
    <View style={{
        padding:25,
        paddingTop:75,
        backgroundColor:'white',
        height:'100%'
    }}>
      <GooglePlacesAutocomplete
      placeholder='Search Place...'
      fetchDetails={true}
      onFail={error=>console.log(error)}
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        setTripData({
            locationInfo:{
                name:data.description,
                coordinates:details?.geometry.location,
                photoRef: details?.photos[0]?.photo_reference,
                url:details?.url
            }
        }),
        router.push('/create-trip/select-traveller')
      }}
      query={{
        key: process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY,
        language: 'en',
      }}

      styles={{
        textInputContainer:{
            borderWidth:1,
            borderRadius:5,
            marginTop:50,
        }
      }}
    />
    </View>
  )
}