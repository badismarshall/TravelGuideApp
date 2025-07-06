import HistoricalOverviewCard from '@/components/Discover/HistoricalOverviewCard';
import QuickStatsComponent from '@/components/Discover/quickStatsComponent';
import TerrainCard from '@/components/Discover/TerrainCard';
import WeatherCard from '@/components/Discover/WeatherCard';
import { GeometricPattern } from '@/components/GeometricPattern';
import { Language, LanguageToggle } from '@/components/LanguageToggle';
import { quickStats } from '@/constants';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { Dimensions, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


const { width: screenWidth } = Dimensions.get('window');

const index = () => {
    const [currentLanguage, setCurrentLanguage] = useState<Language>('en');

  return (
    <SafeAreaView className='flex-1 bg-primary'>
      <ScrollView className='flex-1 bg-primary' showsVerticalScrollIndicator={false} contentContainerStyle={{ minHeight: "100%"}}>
        <View className='overflow-hidden'>
          <LinearGradient colors={['#2C1810', '#C65D3C', '#E67E22']} className='flex-1 py-5 pt-5 px-3 h-[400px]'>
            <View className='flex flex-row justify-between items-center px-3'>
                <GeometricPattern width={screenWidth} height={300} />
            

                <View className='flex-col justify-between items-start mb-10 pt-5 px-3'>
                    <Text style={{ fontFamily: 'Playfair-Bold' }} className='text-white text-3xl font-bold mb-1'>Welcome to Illizi</Text>
                    <Text style={{ fontFamily: 'Inter-Regular' }} className='text-secondary text-lg'>The Soul of the South</Text>
                </View>

                <LanguageToggle
                    currentLanguage={currentLanguage}
                    onLanguageChange={setCurrentLanguage}
                />



            </View>
            <View className='flex-1 justify-center px-5'>
                  <Text style={{ fontFamily: 'Inter-Regular' }} className='text-white text-xl font-bold mb-8'>Discover the ancient beauty of Algeria's desert city, where red-ochre architecture meets endless golden dunes.</Text>
            </View>
            <View className='flex-row  items-center py-4 px-3 bg-tertiary rounded-2xl mb-7 mx-3 justify-around mt-7'>
              {quickStats.map((stat, index) => (
                <QuickStatsComponent key={index} title={stat.title} value={stat.value} icon={<stat.icon size={20} color="#E67E22" />} />
              ))}
            </View>
          </LinearGradient>

          {/* Weather */}
          <View className='flex flex-col mt-5 gap-5'>
            <WeatherCard />
            <TerrainCard />
            <HistoricalOverviewCard />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default index