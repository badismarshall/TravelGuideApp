import { RollerCoaster } from 'lucide-react-native'
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const TerrainCard = () => {
  return (
    <View className='flex-col items-start justify-center px-5 bg-tertiary rounded-2xl mx-3 gap-2 py-5'>


    <View className='flex flex-row items-center gap-2 justify-center'>
      <RollerCoaster size={20} color="#E67E22" />
      <Text style={{ fontFamily: 'Inter-Regular' }} className='text-quinary text-xl font-bold'>Terrain</Text>
    </View>

      <Text style={{ fontFamily: 'Playfair-Regular' }} className='text-white text-lg font-normal'>
          Illizi is characterized by a dry desert climate, with extreme heat and dry air, with little rainfall.
          Light to moderate winds blow over the area in ge-neral, with east and south-easterly winds being the most common.
      </Text>
          <Image source={{uri: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/5f/81/2b/en-plein-silence.jpg?w=500&h=500&s=1'}} className='w-full h-52 rounded-lg' resizeMode='cover'/>
  </View>
  )
}

export default TerrainCard

const styles = StyleSheet.create({})