import { Link } from 'expo-router'
import { ArrowRight, BookOpen } from 'lucide-react-native'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const HistoricalOverviewCard = () => {
  return (
    <Link href="/historicalOverview" asChild>
    <TouchableOpacity  activeOpacity={0.8}>
      <View className='flex-row items-start justify-between px-5 bg-tertiary rounded-2xl mx-3 py-5 gap-2'>
        <View className='flex flex-row items-center gap-2 justify-center'>
          <BookOpen size={20} color="#E67E22" />
          <Text style={{ fontFamily: 'Inter-Regular' }} className='text-quinary text-xl font-bold'>Historical Overview</Text>
        </View>
        <View className='bg-secondary rounded-full p-2'>
            <ArrowRight size={16} color="#2C1810" />
        </View>
      </View>
    </TouchableOpacity>
    </Link>
  )
}

export default HistoricalOverviewCard

const styles = StyleSheet.create({})