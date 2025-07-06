import { GeometricPattern } from '@/components/GeometricPattern';
import { touristPlaces } from '@/constants';
import { useRouter } from 'expo-router';
import { Clock, LineSquiggle } from 'lucide-react-native';
import React from 'react';
import { Dimensions, FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const { width: screenWidth } = Dimensions.get('window');

const circuits = () => {
  const router = useRouter()

  const handlePlacePress = (item: any) => {
    console.log('Place pressed:', item.id, item.name)
    if (item.id === 1) {
      console.log('Navigating to Oued Djarrat...')
      // Navigate to Oued Djarrat page
      router.push('/ouedDjarrat/' as any)
    } else if (item.id === 2) {
      console.log('Navigating to Illizi - Taghast - Tarat...')
      // Navigate to Illizi - Taghast - Tarat page
      router.push('/illiziTaghastTarat/' as any)
    }
    // Add other navigation logic for different items here
  }

  return (
    <SafeAreaView className='flex-1 bg-primary'>
      <View className='pt-5 py-5 pb-5 relative px-6'>
        <GeometricPattern width={100} height={100} />
        <Text style={{ fontFamily: 'Playfair-Bold' }} className='text-white text-3xl font-bold mb-1'>Tourist Circuits</Text>
        <Text style={{ fontFamily: 'Inter-Regular' }} className='text-secondary text-lg'>Discover the best places to visit in Illizi</Text>
      </View>
    <View className='flex-1 px-6'>
      <FlatList
        data={touristPlaces}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
        renderItem={({ item }) => (
          <TouchableOpacity 
            activeOpacity={0.8}
            className='mb-4'
            onPress={() => handlePlacePress(item)}
          >
            <View className='bg-tertiary rounded-2xl overflow-hidden shadow-lg'>
              <Image 
                source={{ uri: item.image }} 
                className='w-full h-48' 
                resizeMode='cover'
              />
              <View className='p-5'>
                <View className='flex-row items-center justify-between mb-2'>
                  <Text style={{ fontFamily: 'Playfair-Bold' }} className='text-white text-xl font-bold'>
                    {item.name}
                  </Text>
                  <View className='bg-secondary rounded-full px-3 py-1 flex-row items-center gap-1'>
                    <Clock size={16} color="#2C1810" />
                    <Text style={{ fontFamily: 'Inter-Regular' }} className='text-primary text-sm font-semibold'>
                      {item.duration}
                    </Text>
                  </View>
                </View>
                <Text style={{ fontFamily: 'Inter-Regular' }} className='text-secondary text-sm mb-3'>
                  {item.characteristics}
                </Text>
                <Text style={{ fontFamily: 'Playfair-Regular' }} className='text-white text-base leading-6'>
                  {item.description}
                </Text>
                <View className='flex-row items-center mt-3'>
                  <LineSquiggle size={16} color="#E67E22" />
                  <Text style={{ fontFamily: 'Inter-Regular' }} className='text-quinary text-sm ml-1'>
                    {item.distance}
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>

    </SafeAreaView>
  )
}

export default circuits

const styles = StyleSheet.create({})