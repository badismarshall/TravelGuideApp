import { GeometricPattern } from '@/components/GeometricPattern'
import { useRouter } from 'expo-router'
import React from 'react'
import { Dimensions, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const { width } = Dimensions.get('window')

const index = () => {
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
          <Text style={{ fontFamily: 'Playfair-Bold' }} className='text-white text-3xl font-bold mb-1'>Historical Overview</Text>
          <Text style={{ fontFamily: 'Inter-Regular' }} className='text-secondary text-lg'>Discover the history of Illizi</Text>
        </View>

        {/* Main Content */}
        <View className='px-6 pb-8'>
          {/* UNESCO World Heritage Section */}
          <View className='mb-8'>
            <View className='bg-gradient-to-r from-amber-400/20 to-orange-500/20 rounded-2xl p-6 mb-6 border border-amber-400/30'>
              <View className='flex-row items-center mb-4'>
                <View className='w-3 h-3 bg-amber-400 rounded-full mr-3'></View>
                <Text style={{ fontFamily: 'Playfair-Bold' }} className='text-amber-400 text-lg font-bold'>UNESCO World Heritage Site</Text>
              </View>
              <Text style={{ fontFamily: 'Playfair-Bold' }} className='text-white text-2xl font-bold mb-4'>Tassili Najjer: Cradle of Prehistoric Art</Text>
              <Text style={{ fontFamily: 'Inter-Regular' }} className='text-white/90 text-base leading-7'>
                The Tassili Najjer contains the densest and oldest exhibition of prehistoric desert art. These priceless remains, including the Tassili Najjer, are a unique World Heritage Site classified by UNESCO in 1982.
              </Text>
            </View>
            <View className='bg-white/5 rounded-xl overflow-hidden h-56 mb-6'>
              <View className='flex-1 bg-gradient-to-br from-amber-400/20 to-orange-500/20 justify-center items-center'>
                  <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Illizi_Residential_quarter_1991.png/1920px-Illizi_Residential_quarter_1991.png' }} className='w-full h-full' resizeMode='cover' />
              </View>
            </View>
          </View>

          {/* Ancient Origins Section */}
          <View className='mb-8'>
            <View className='bg-white/10 rounded-2xl p-6 mb-6'>
              <Text style={{ fontFamily: 'Playfair-Bold' }} className='text-white text-2xl font-bold mb-4'>Dawn of Human Civilization</Text>
              <Text style={{ fontFamily: 'Inter-Regular' }} className='text-white/90 text-base leading-7 mb-4'>
                These rock engravings date back to the dawn of the human era, when the Homohabelus made its giant tools, arousing curiosity, such as those in the region of Tanakna, where the primitives fished around Lake Tihudana, known today as the Sand Sea.
              </Text>
              <Text style={{ fontFamily: 'Inter-Regular' }} className='text-white/90 text-base leading-7'>
                One of the most beautiful remains of the Neolithic period (10,000 years ago) and the most spectacular are the rock carving and inscriptions representing the origin of African art and predating the 4,000-year-old pyramids.
              </Text>
            </View>
            <View className='bg-white/5 rounded-xl overflow-hidden h-56 mb-4'>
              <View className='flex-1 bg-gradient-to-br from-yellow-400/20 to-amber-500/20 justify-center items-center'>
                <Image source={{ uri: 'https://static.nationalgeographic.fr/files/styles/image_3200/public/999a4962.jpg?w=1900&h=1268' }} className='w-full h-full' resizeMode='cover' />
              </View>
            </View>
          </View>

          {/* Trade Routes Section */}
          <View >
            <View className='bg-gradient-to-r from-blue-400/20 to-indigo-500/20 rounded-2xl p-6 mb-6 border border-blue-400/30'>
              <Text style={{ fontFamily: 'Playfair-Bold' }} className='text-white text-2xl font-bold mb-4'>Crossroads of Ancient Trade</Text>
              <Text style={{ fontFamily: 'Inter-Regular' }} className='text-white/90 text-base leading-7'>
                Over the centuries, the Tassili region has always been an important stopover for trade caravans from the Maghreb to Fezzan and Tripoli or from the East to Africa.
              </Text>
            </View>
            <View className='bg-white/5 rounded-xl overflow-hidden h-80 mb-4'>
              <View className='flex-1 bg-gradient-to-br from-blue-400/20 to-indigo-500/20 justify-center items-center'>
                <Image source={{ uri: 'https://www.hominides.com/wp-content/uploads/2022/08/art-rupestre-algerie-tassili-n-ajjer.jpg' }} className='w-full h-full' resizeMode='cover' />
              </View>
            </View>
          </View>

          {/* Resistance Era Section */}
          <View className=''>
            <Text style={{ fontFamily: 'Playfair-Bold' }} className='text-white text-2xl font-bold mb-6'>Era of Resistance & Liberation</Text>
            
            {/* Colonial Resistance */}
            <View className='mb-6'>
              <View className='bg-gradient-to-r from-red-400/20 to-pink-500/20 rounded-xl p-5 mb-4 border border-red-400/30'>
                <Text style={{ fontFamily: 'Playfair-Bold' }} className='text-red-400 text-lg font-bold mb-2'>Symbol of Resistance</Text>
                <Text style={{ fontFamily: 'Inter-Regular' }} className='text-white/90 text-base leading-7'>
                  After the French colonial occupation of Algeria, Illizi became a symbol of the resistance, defending every acre of land. In 1881, the Touareg, led by Ibrahim Abibakr, destroyed a mast at Fort Flatters in In Houan.
                </Text>
              </View>
            </View>

            {/* Military Battles */}
            <View className='mb-6'>
              <View className='bg-white/10 rounded-xl p-5 mb-4'>
                <Text style={{ fontFamily: 'Playfair-Bold' }} className='text-secondary text-lg font-bold mb-2'>Heroic Battles</Text>
                <Text style={{ fontFamily: 'Inter-Regular' }} className='text-white/90 text-base leading-7 mb-3'>
                  From 1913 to 1920, the French suffered several defeats against the armies of Sheikh Amoud, notably at Ain El Hadj (13 February 1917) and at Assiyaco in 1918.
                </Text>
                <Text style={{ fontFamily: 'Inter-Regular' }} className='text-white/90 text-base leading-7'>
                  One of the battles that will be remembered in history is the Battle of Essen, on October 15, 1956.
                </Text>
              </View>
            </View>

            {/* Cultural Resistance */}
            <View className='mb-6'>
              <View className='bg-gradient-to-r from-purple-400/20 to-violet-500/20 rounded-xl p-5 mb-4 border border-purple-400/30'>
                <Text style={{ fontFamily: 'Playfair-Bold' }} className='text-purple-400 text-lg font-bold mb-2'>Cultural Resistance</Text>
                <Text style={{ fontFamily: 'Inter-Regular' }} className='text-white/90 text-base leading-7'>
                  As early as 1920, after the occupation of the area by the French colonial forces, the occupiers tried to dismantle the Tassili and its inhabitants culturally through missionary and military missions, as evidenced by the names of the forts scattered in the area, such as Fort Polygnac in Illizi and Fort Flatters in Bordj Omar Idriss.
                </Text>
              </View>
            </View>

            {/* Liberation Struggle */}
            <View>
              <View className='bg-gradient-to-r from-green-400/20 to-emerald-500/20 rounded-xl p-5 mb-4 border border-green-400/30'>
                <Text style={{ fontFamily: 'Playfair-Bold' }} className='text-green-400 text-lg font-bold mb-2'>The Great Liberation Revolution</Text>
                <Text style={{ fontFamily: 'Inter-Regular' }} className='text-white/90 text-base leading-7'>
                  The popular resistance continued until the outbreak of the Great Liberation Revolution, and the people gave their lives like other Algerians throughout the national territory for Algeria and freedom.
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default index

const styles = StyleSheet.create({})