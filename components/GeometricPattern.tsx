import React from 'react';
import { StyleSheet, View } from 'react-native';
import Svg, { G, Path } from 'react-native-svg';

interface GeometricPatternProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

export function GeometricPattern({ 
  width = 100, 
  height = 100, 
  color = '#D4A574',
  opacity = 0.1 
}: GeometricPatternProps) {
  return (
    <View style={[styles.container, { width, height }]}>
      <Svg width={width} height={height} viewBox="0 0 100 100">
        <G opacity={opacity}>
          {/* Traditional Touareg geometric pattern */}
          <Path
            d="M50 10 L70 30 L70 50 L50 70 L30 50 L30 30 Z"
            fill="none"
            stroke={color}
            strokeWidth="1"
          />
          <Path
            d="M50 20 L60 30 L60 40 L50 50 L40 40 L40 30 Z"
            fill={color}
            fillOpacity="0.3"
          />
          <Path
            d="M20 20 L30 10 L40 20 L30 30 Z"
            fill={color}
            fillOpacity="0.2"
          />
          <Path
            d="M60 20 L70 10 L80 20 L70 30 Z"
            fill={color}
            fillOpacity="0.2"
          />
          <Path
            d="M20 60 L30 70 L40 60 L30 50 Z"
            fill={color}
            fillOpacity="0.2"
          />
          <Path
            d="M60 60 L70 70 L80 60 L70 50 Z"
            fill={color}
            fillOpacity="0.2"
          />
        </G>
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
  },
});