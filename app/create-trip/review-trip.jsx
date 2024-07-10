import { View, Text, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { Ionicons } from '@expo/vector-icons';
import { CreateTripContext } from '../../context/CreateTripContext';
import { Colors } from '../../constants/Colors';
import moment from 'moment';
export default function ReviewTrip() {
    const navigation = useNavigation();
    const {tripData, setTripData}=useContext(CreateTripContext);

    const router= useRouter();
    useEffect(()=>{
        navigation.setOptions({
            headerShown:true,
            headerTransparent:true,
            headerTitle:''
        })
    },[])


  return (
    <View style={{
        padding:25,
        paddingTop:75,
        backgroundColor:'white',
        height:'100%'
    }}>
      <Text style={{
        fontSize:30,
        fontFamily:'Outfit-Medium'
      }}>Review Your Trip</Text>

      <View style={{
        marginTop:20
      }}>
        <Text style={{
            fontSize:18,
            fontFamily:'Outfit-Medium',
        }}>Before generating your trip, please review your selection</Text>

        <View style={{
            marginTop:40,
            display:'flex',
            flexDirection:'row',
            gap:20,
            alignItems:'center'
        }}>
            <Text style={{
                fontSize:30,
            }}>📍</Text>
            <View>
                <Text style={{
                    fontSize:18,
                    fontFamily:'Outfit',
                    color:Colors.GRAY,
                }}>Destination</Text>
                <Text style={{
                    fontSize:20,
                    fontFamily:'Outfit-Medium',
                }}>{tripData?.locationInfo?.name}</Text>
            </View>
        </View>


        <View style={{
            marginTop:25,
            display:'flex',
            flexDirection:'row',
            gap:20,
            alignItems:'center'
        }}>
            <Text style={{
                fontSize:30,
            }}>🗓️</Text>
            <View>
                <Text style={{
                    fontSize:18,
                    fontFamily:'Outfit',
                    color:Colors.GRAY,
                }}>Travel Date</Text>
                <Text style={{
                    fontSize:20,
                    fontFamily:'Outfit-Medium',
                }}>{moment(tripData?.startDate).format('DD MMM')+ " To "+moment(tripData?.endDate).format('DD MMM') + " "} ({tripData.totalNoOfDays} days)</Text>
            </View>
        </View>


        <View style={{
            marginTop:25,
            display:'flex',
            flexDirection:'row',
            gap:20,
            alignItems:'center'
        }}>
            <Text style={{
                fontSize:30,
            }}>🚘</Text>
            <View>
                <Text style={{
                    fontSize:18,
                    fontFamily:'Outfit',
                    color:Colors.GRAY,
                }}>Who is Traveling</Text>
                <Text style={{
                    fontSize:20,
                    fontFamily:'Outfit-Medium',
                }}>{tripData?.traveler?.title}</Text>
            </View>
        </View>
        <View style={{
            marginTop:25,
            display:'flex',
            flexDirection:'row',
            gap:20,
            alignItems:'center'
        }}>
            <Text style={{
                fontSize:30,
            }}>💰</Text>
            <View>
                <Text style={{
                    fontSize:18,
                    fontFamily:'Outfit',
                    color:Colors.GRAY,
                }}>Budget</Text>
                <Text style={{
                    fontSize:20,
                    fontFamily:'Outfit-Medium',
                }}>{tripData?.budget}</Text>
            </View>
        </View>
      </View>

      <TouchableOpacity onPress={()=>router.replace('/create-trip/generate-trip')}
        style={{
          padding: 15,
          backgroundColor: Colors.primary,
          borderRadius: 15,
          marginTop: 80,
        }}
      >
        
          <Text
            style={{
              textAlign: "center",
              color: "#fff",
              fontFamily: "Outfit-Medium",
              fontSize: 18,
            }}
          >
            Build My Trip
          </Text>
      </TouchableOpacity>
    </View>
  )
}