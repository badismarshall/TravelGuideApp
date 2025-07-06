import { GeometricPattern } from '@/components/GeometricPattern'
import { useRouter } from 'expo-router'
import React from 'react'
import { Dimensions, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const { width } = Dimensions.get('window')

const illiziTaghastTarat = () => {
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
          <Text style={{ fontFamily: 'Playfair-Bold' }} className='text-white text-3xl font-bold mb-1'>Illizi - Taghast - Tarat</Text>
          <Text style={{ fontFamily: 'Inter-Regular' }} className='text-secondary text-lg'>Circuit Culturel - 7 Days Adventure</Text>
        </View>

        {/* Main Content */}
        <View className='px-6 pb-8'>
          {/* Hero Image Section */}
          <View className='mb-8'>
            <View className='bg-white/5 rounded-2xl overflow-hidden h-80 mb-6'>
              <Image 
                source={{ uri: 'https://illizi.mta.gov.dz/wp-content/uploads/sites/32/2022/01/aras-illizi-1.jpg' }} 
                className='w-full h-full' 
                resizeMode='cover' 
              />
            </View>
          </View>

          {/* Circuit Overview Section */}
          <View className='mb-8'>
            <View className='bg-gradient-to-r from-blue-400/20 to-indigo-500/20 rounded-2xl p-6 mb-6 border border-blue-400/30'>
              <View className='flex-row items-center mb-4'>
                <View className='w-3 h-3 bg-blue-400 rounded-full mr-3'></View>
                <Text style={{ fontFamily: 'Playfair-Bold' }} className='text-blue-400 text-lg font-bold'>Cultural Circuit</Text>
              </View>
              <Text style={{ fontFamily: 'Playfair-Bold' }} className='text-white text-2xl font-bold mb-4'>600 Km Sahara Adventure</Text>
              <Text style={{ fontFamily: 'Inter-Regular' }} className='text-white/90 text-base leading-7'>
                A magnificent 7-day journey through the heart of the Sahara, connecting ancient oases, wetlands, and sand dunes across 600 kilometers of breathtaking desert landscape.
              </Text>
            </View>
          </View>

          {/* Journey Stages Section */}
          <View className='mb-8'>
            <Text style={{ fontFamily: 'Playfair-Bold' }} className='text-white text-2xl font-bold mb-6'>Journey Stages</Text>
            
            {/* Stage 1: Illizi to Ifni */}
            <View className='mb-6'>
              <View className='bg-gradient-to-r from-green-400/20 to-emerald-500/20 rounded-xl p-5 mb-4 border border-green-400/30'>
                <Text style={{ fontFamily: 'Playfair-Bold' }} className='text-green-400 text-lg font-bold mb-2'>Stage 1: Illizi → Ifni</Text>
                <Text style={{ fontFamily: 'Inter-Regular' }} className='text-white/90 text-base leading-7'>
                  Départ de la ville d'Illizi au village d'Ifni, qui se trouve à 150 km et contient (zones humides, oasis, dunes de sable).
                </Text>
              </View>
              <View className='bg-white/5 rounded-xl overflow-hidden h-48 mb-4'>
                <Image 
                  source={{ uri: 'https://www.point-afrique.com/wp-content/uploads/2023/11/Copie-de-gallery-circuits-600x400-99.jpg' }} 
                  className='w-full h-full' 
                  resizeMode='cover' 
                />
              </View>
            </View>

            {/* Stage 2: Ifni to Imihrou */}
            <View className='mb-6'>
              <View className='bg-gradient-to-r from-amber-400/20 to-orange-500/20 rounded-xl p-5 mb-4 border border-amber-400/30'>
                <Text style={{ fontFamily: 'Playfair-Bold' }} className='text-amber-400 text-lg font-bold mb-2'>Stage 2: Ifni → Imihrou</Text>
                <Text style={{ fontFamily: 'Inter-Regular' }} className='text-white/90 text-base leading-7'>
                  Vers la zone d'Imihrou avec une distance de marche de 120 km pour faire une pause.
                </Text>
              </View>
              <View className='bg-white/5 rounded-xl overflow-hidden h-48 mb-4'>
                <Image 
                  source={{ uri: 'https://www.hominides.com/wp-content/uploads/2022/08/art-rupestre-algerie-tassili-n-ajjer.jpg' }} 
                  className='w-full h-full' 
                  resizeMode='cover' 
                />
              </View>
            </View>

            {/* Stage 3: Imihrou to Ighsi */}
            <View className='mb-6'>
              <View className='bg-gradient-to-r from-purple-400/20 to-violet-500/20 rounded-xl p-5 mb-4 border border-purple-400/30'>
                <Text style={{ fontFamily: 'Playfair-Bold' }} className='text-purple-400 text-lg font-bold mb-2'>Stage 3: Imihrou → Ighsi</Text>
                <Text style={{ fontFamily: 'Inter-Regular' }} className='text-white/90 text-base leading-7'>
                  Destination vers l'oasis d'Ighsi (oasis, zones humides).
                </Text>
              </View>
              <View className='bg-white/5 rounded-xl overflow-hidden h-48 mb-4'>
                <Image 
                  source={{ uri: 'https://static.nationalgeographic.fr/files/styles/image_3200/public/999a4962.jpg?w=1900&h=1268' }} 
                  className='w-full h-full' 
                  resizeMode='cover' 
                />
              </View>
            </View>

            {/* Stage 4: Ighsi to Tarat */}
            <View className='mb-6'>
              <View className='bg-gradient-to-r from-red-400/20 to-pink-500/20 rounded-xl p-5 mb-4 border border-red-400/30'>
                <Text style={{ fontFamily: 'Playfair-Bold' }} className='text-red-400 text-lg font-bold mb-2'>Stage 4: Ighsi → Tarat</Text>
                <Text style={{ fontFamily: 'Inter-Regular' }} className='text-white/90 text-base leading-7'>
                  De là, départ vers Tarat.
                </Text>
              </View>
              <View className='bg-white/5 rounded-xl overflow-hidden h-48 mb-4'>
                <Image 
                  source={{ uri: 'https://www.museedelhomme.fr/system/files/styles/16_10_highest/mnhn/2022-02/exposition_tassili_algerie_memoires_pierre_c_mnhn.jpg.webp?itok=NBOIYLoj' }} 
                  className='w-full h-full' 
                  resizeMode='cover' 
                />
              </View>
            </View>
          </View>

          {/* Circuit Statistics */}
          <View className='mb-8'>
            <Text style={{ fontFamily: 'Playfair-Bold' }} className='text-white text-2xl font-bold mb-6'>Circuit Highlights</Text>
            
            <View className='grid grid-cols-2 gap-4'>
              <View className='bg-gradient-to-r from-blue-400/20 to-indigo-500/20 rounded-xl p-5 border border-blue-400/30'>
                <Text style={{ fontFamily: 'Playfair-Bold' }} className='text-blue-400 text-3xl font-bold mb-2'>600 km</Text>
                <Text style={{ fontFamily: 'Inter-Regular' }} className='text-white/90 text-sm'>Total Distance</Text>
              </View>
              
              <View className='bg-gradient-to-r from-green-400/20 to-emerald-500/20 rounded-xl p-5 border border-green-400/30'>
                <Text style={{ fontFamily: 'Playfair-Bold' }} className='text-green-400 text-3xl font-bold mb-2'>7</Text>
                <Text style={{ fontFamily: 'Inter-Regular' }} className='text-white/90 text-sm'>Days Duration</Text>
              </View>
              
              <View className='bg-gradient-to-r from-amber-400/20 to-orange-500/20 rounded-xl p-5 border border-amber-400/30'>
                <Text style={{ fontFamily: 'Playfair-Bold' }} className='text-amber-400 text-3xl font-bold mb-2'>4</Text>
                <Text style={{ fontFamily: 'Inter-Regular' }} className='text-white/90 text-sm'>Main Stages</Text>
              </View>
              
              <View className='bg-gradient-to-r from-purple-400/20 to-violet-500/20 rounded-xl p-5 border border-purple-400/30'>
                <Text style={{ fontFamily: 'Playfair-Bold' }} className='text-purple-400 text-3xl font-bold mb-2'>3</Text>
                <Text style={{ fontFamily: 'Inter-Regular' }} className='text-white/90 text-sm'>Oases Visited</Text>
              </View>
            </View>
          </View>

          {/* Landscape Features */}
          <View className='mb-8'>
            <Text style={{ fontFamily: 'Playfair-Bold' }} className='text-white text-2xl font-bold mb-6'>Landscape Features</Text>
            <View className='bg-white/10 rounded-2xl p-6 mb-4'>
              <Text style={{ fontFamily: 'Inter-Regular' }} className='text-white/90 text-base leading-7 mb-4'>
                This circuit takes you through diverse Saharan landscapes including wetlands, oases, and sand dunes. Each stage offers unique natural beauty and cultural experiences.
              </Text>
              <Text style={{ fontFamily: 'Inter-Regular' }} className='text-white/90 text-base leading-7'>
                From the bustling city of Illizi to the remote oasis of Tarat, this journey showcases the incredible diversity and resilience of life in the Sahara desert.
              </Text>
            </View>
            <View className='bg-white/5 rounded-xl overflow-hidden h-80'>
              <Image 
                source={{ uri: 'https://illizi.mta.gov.dz/wp-content/uploads/sites/32/2022/01/aras-illizi-1.jpg' }} 
                className='w-full h-full' 
                resizeMode='cover' 
              />
            </View>
          </View>

          {/* Cultural Experience */}
          <View className='mb-8'>
            <View className='bg-gradient-to-r from-yellow-400/20 to-amber-500/20 rounded-2xl p-6 border border-yellow-400/30'>
              <Text style={{ fontFamily: 'Playfair-Bold' }} className='text-white text-xl font-bold mb-4'>Cultural Experience</Text>
              <Text style={{ fontFamily: 'Inter-Regular' }} className='text-white/90 text-base leading-7'>
                This circuit offers an authentic cultural experience, allowing travelers to discover traditional Saharan life, ancient oases, and the rich heritage of the region's nomadic communities.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default illiziTaghastTarat

const styles = StyleSheet.create({}) 