import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'

export default function HotelList({hotelList}) {
  return (
    <View>
      <Text>HotelList</Text>

      <FlatList data={hotelList}
      renderItem={({item,index})=>(
        <View>
            
            <Text>{item.hotelName}</Text>
        </View>
      )}/>
    </View>
  )
}