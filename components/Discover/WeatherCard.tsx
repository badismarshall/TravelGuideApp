import { Sun } from 'lucide-react-native'
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const WeatherCard = () => {
  return (
    <View className='flex-col items-start justify-center px-5 bg-tertiary rounded-2xl mx-3 py-5 gap-2'>


      <View className='flex flex-row items-center gap-2 justify-center'>
        <Sun size={20} color="#E67E22" />
        <Text style={{ fontFamily: 'Inter-Regular' }} className='text-quinary text-xl font-bold'>Climate</Text>
      </View>

        <Text style={{ fontFamily: 'Playfair-Regular' }} className='text-white text-lg font-normal'>
            Illizi is characterized by a dry desert climate, with extreme heat and dry air, with little rainfall.
            Light to moderate winds blow over the area in ge-neral, with east and south-easterly winds being the most common.
        </Text>
            <Image source={{uri: 'https://static-cms.routard.com/web-routard/uploads/photo_1561611_a5f2dd067b.jpg'}} className='w-full h-52 rounded-lg' resizeMode='cover'/>
    </View>
  )
}

export default WeatherCard

const styles = StyleSheet.create({})