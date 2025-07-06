import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const QuickStatsComponent = ({ title, value, icon }: { title: string, value: string, icon: React.ReactNode }) => {
  return (
    <View className='items-center justify-center flex-1'>
        <View className='flex-row items-center'>
          {icon}
        </View>
        <Text style={{ fontFamily: 'Inter-Regular' }} className='text-quinary text-lg '>{title}</Text>
        <Text style={{ fontFamily: 'Inter-SemiBold' }} className='text-white text-sm'>{value}</Text>
    </View>
  )
}

export default QuickStatsComponent

const styles = StyleSheet.create({})