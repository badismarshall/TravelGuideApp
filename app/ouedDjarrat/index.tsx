import { GeometricPattern } from '@/components/GeometricPattern'
import { useRouter } from 'expo-router'
import React from 'react'
import { Dimensions, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const { width } = Dimensions.get('window')

const ouedDjarrat = () => {
  const router = useRouter()
  
  return (
    <SafeAreaView className='flex-1 bg-primary'>
      <ScrollView showsVerticalScrollIndicator={false} className='flex-1'>
        {/* Header Section */}
        <View className='pt-5 py-5 pb-5 relative px-6'>
          <View className='flex-row items-center justify-between mb-4 z-50'>
            <TouchableOpacity 
              onPress={() => router.back()}
              className='w-10 h-10 bg-white/10 rounded-full justify-center items-center'
            >
              <Text style={{ fontFamily: 'Inter-Regular' }} className='text-white text-xl'>←</Text>
            </TouchableOpacity>
            <View className='flex-1'></View>
          </View>
          <GeometricPattern width={100} height={100} />
          <Text style={{ fontFamily: 'Playfair-Bold' }} className='text-white text-3xl font-bold mb-1'>Oued Djarrat</Text>
          <Text style={{ fontFamily: 'Inter-Regular' }} className='text-secondary text-lg'>The Open-Air Gallery of Prehistoric Art</Text>
        </View>

        {/* Main Content */}
        <View className='px-6 pb-8'>
          {/* Hero Image Section */}
          <View className='mb-8'>
            <View className='bg-white/5 rounded-2xl overflow-hidden h-80 mb-6'>
              <Image 
                source={{ uri: 'https://www.point-afrique.com/wp-content/uploads/2023/11/Copie-de-gallery-circuits-600x400-99.jpg' }} 
                className='w-full h-full' 
                resizeMode='cover' 
              />
            </View>
          </View>

          {/* Main Description Section */}
          <View className='mb-8'>
            <View className='bg-gradient-to-r from-amber-400/20 to-orange-500/20 rounded-2xl p-6 mb-6 border border-amber-400/30'>
              <View className='flex-row items-center mb-4'>
                <View className='w-3 h-3 bg-amber-400 rounded-full mr-3'></View>
                <Text style={{ fontFamily: 'Playfair-Bold' }} className='text-amber-400 text-lg font-bold'>Prehistoric Art Gallery</Text>
              </View>
              <Text style={{ fontFamily: 'Playfair-Bold' }} className='text-white text-2xl font-bold mb-4'>75 Stations of Ancient Wonder</Text>
              <Text style={{ fontFamily: 'Inter-Regular' }} className='text-white/90 text-base leading-7'>
                The open-air gallery of the Oued Djarrat is one of the graving galleries in Algeria with its 75 stations. It has more than 4,000 figures inventoried over a distance of about 60 km, not counting the other drawings, total-ling 30,000 figures.
              </Text>
            </View>
          </View>

          {/* Geological Formation Section */}
          <View className='mb-8'>
            <View className='bg-white/10 rounded-2xl p-6 mb-6'>
              <Text style={{ fontFamily: 'Playfair-Bold' }} className='text-white text-2xl font-bold mb-4'>Natural Sculpture of Time</Text>
              <Text style={{ fontFamily: 'Inter-Regular' }} className='text-white/90 text-base leading-7'>
                The Djarrat Valley is carved into the sandstone of the Tassili River, which flows between steep slopes and flows into the Illizi Valley.
              </Text>
            </View>
            <View className='bg-white/5 rounded-xl overflow-hidden h-64 mb-4'>
              <Image 
                source={{ uri: 'https://www.hominides.com/wp-content/uploads/2022/08/art-rupestre-algerie-tassili-n-ajjer.jpg' }} 
                className='w-full h-full' 
                resizeMode='cover' 
              />
            </View>
          </View>

          {/* Statistics Section */}
          <View className='mb-8'>
            <Text style={{ fontFamily: 'Playfair-Bold' }} className='text-white text-2xl font-bold mb-6'>Gallery Statistics</Text>
            
            <View className='grid grid-cols-2 gap-4'>
              <View className='bg-gradient-to-r from-blue-400/20 to-indigo-500/20 rounded-xl p-5 border border-blue-400/30'>
                <Text style={{ fontFamily: 'Playfair-Bold' }} className='text-blue-400 text-3xl font-bold mb-2'>75</Text>
                <Text style={{ fontFamily: 'Inter-Regular' }} className='text-white/90 text-sm'>Art Stations</Text>
              </View>
              
              <View className='bg-gradient-to-r from-green-400/20 to-emerald-500/20 rounded-xl p-5 border border-green-400/30'>
                <Text style={{ fontFamily: 'Playfair-Bold' }} className='text-green-400 text-3xl font-bold mb-2'>4,000+</Text>
                <Text style={{ fontFamily: 'Inter-Regular' }} className='text-white/90 text-sm'>Inventoried Figures</Text>
              </View>
              
              <View className='bg-gradient-to-r from-purple-400/20 to-violet-500/20 rounded-xl p-5 border border-purple-400/30'>
                <Text style={{ fontFamily: 'Playfair-Bold' }} className='text-purple-400 text-3xl font-bold mb-2'>60 km</Text>
                <Text style={{ fontFamily: 'Inter-Regular' }} className='text-white/90 text-sm'>Gallery Distance</Text>
              </View>
              
              <View className='bg-gradient-to-r from-red-400/20 to-pink-500/20 rounded-xl p-5 border border-red-400/30'>
                <Text style={{ fontFamily: 'Playfair-Bold' }} className='text-red-400 text-3xl font-bold mb-2'>30,000</Text>
                <Text style={{ fontFamily: 'Inter-Regular' }} className='text-white/90 text-sm'>Total Figures</Text>
              </View>
            </View>
          </View>

          {/* Art Gallery Section */}
          <View className='mb-8'>
            <Text style={{ fontFamily: 'Playfair-Bold' }} className='text-white text-2xl font-bold mb-6'>Ancient Art Gallery</Text>
            <View className='bg-white/10 rounded-2xl p-6 mb-4'>
              <Text style={{ fontFamily: 'Inter-Regular' }} className='text-white/90 text-base leading-7 mb-4'>
                The Oued Djarrat gallery represents one of the most significant collections of prehistoric rock art in the world. Each of the 75 stations tells a unique story of human civilization, from hunting scenes to ritual ceremonies.
              </Text>
              <Text style={{ fontFamily: 'Inter-Regular' }} className='text-white/90 text-base leading-7'>
                The figures, carved and painted over millennia, provide an invaluable window into the lives, beliefs, and artistic expressions of our ancient ancestors who once thrived in this now-arid landscape.
              </Text>
            </View>
            <View className='bg-white/5 rounded-xl overflow-hidden h-80'>
              <Image 
                source={{ uri: 'https://static.nationalgeographic.fr/files/styles/image_3200/public/999a4962.jpg?w=1900&h=1268' }} 
                className='w-full h-full' 
                resizeMode='cover' 
              />
            </View>
          </View>

          {/* Valley Formation Section */}
          <View className='mb-8'>
            <View className='bg-gradient-to-r from-yellow-400/20 to-amber-500/20 rounded-2xl p-6 border border-yellow-400/30'>
              <Text style={{ fontFamily: 'Playfair-Bold' }} className='text-white text-xl font-bold mb-4'>Geological Wonder</Text>
              <Text style={{ fontFamily: 'Inter-Regular' }} className='text-white/90 text-base leading-7'>
                The dramatic landscape of the Djarrat Valley, with its steep sandstone cliffs and winding river course, creates the perfect natural canvas for this extraordinary open-air museum of human history.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default ouedDjarrat

const styles = StyleSheet.create({}) 