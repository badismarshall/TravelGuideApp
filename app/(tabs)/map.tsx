import { Drum } from 'lucide-react-native';
import React, { useMemo, useRef, useState } from 'react';
import { Alert, Dimensions, Linking, StyleSheet, TouchableOpacity, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
// import BottomSheet from '@gorhom/bottom-sheet';
// import { useFonts, Poppins_600SemiBold, Poppins_400Regular } from '@expo-google-fonts/poppins';

const { width, height } = Dimensions.get('window');

type Place = {
  id: number;
  name: string;
  description: string;
  lat: number;
  lng: number;
};

const places: Place[] = [
  {
    id: 1,
    name: 'Taghit Oasis',
    description: 'Magical oasis with palm trees and desert cliffs.',
    // image: require('../assets/desert.jpg'),
    lat: 26.534417,
    lng: 8.268481,
  },
  {
    id: 2,
    name: 'Cheikh Bouamama Museum',
    description: 'Discover the heritage of resistance and Saharan culture.',
    // image: require('../assets/desert.jpg'),
    lat: 26.996034,
    lng: 8.019105,
  },
  {
    id: 3,
    name: 'Brezina Dunes',
    description: 'Golden dunes, perfect for walking and photography.',
    // image: require('../assets/desert.jpg'),
    lat: 26.480083,
    lng: 8.490096,
  },
];

const map = () => {
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);
  const sheetRef = useRef(null);
  const snapPoints = useMemo(() => ['25%', '50%'], []);

  const openInMaps = (place: Place) => {
    const url = `https://www.google.com/maps/search/?api=1&query=${place.lat},${place.lng}`;
    
    Linking.canOpenURL(url).then(supported => {
      if (supported) {
        Linking.openURL(url);
      } else {
        // Fallback to Apple Maps on iOS
        const appleMapsUrl = `http://maps.apple.com/?q=${place.lat},${place.lng}`;
        Linking.openURL(appleMapsUrl);
      }
    }).catch(err => {
      Alert.alert('Error', 'Could not open map application');
    });
  };

  const handleMarkerPress = (place: Place) => {
    setSelectedPlace(place);
    // Show a brief alert with the location name before opening maps
    Alert.alert(
      place.name,
      `Opening ${place.name} in your map app...`,
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Open in Maps',
          onPress: () => openInMaps(place),
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 32.5,
          longitude: 0.5,
          latitudeDelta: 3,
          longitudeDelta: 3,
        }}
        customMapStyle={mapStyle}
      >
        {places.map((place) => (
          <Marker
            key={place.id}
            coordinate={{ latitude: place.lat, longitude: place.lng }}
            onPress={() => handleMarkerPress(place)}
          >
            <TouchableOpacity
              style={styles.markerContainer}
              activeOpacity={0.7}
            >
              <Drum
                size={24}
                color="#DAA520"
              />
            </TouchableOpacity>
          </Marker>
        ))}
      </MapView>

      {/* <BottomSheet
        ref={sheetRef}
        index={-1}
        snapPoints={snapPoints}
        backgroundStyle={styles.sheetBackground}
        handleStyle={styles.sheetHandle}
      >
        {selectedPlace && (
          <View style={styles.sheetContent}>
            <Image source={selectedPlace.image} style={styles.sheetImage} />
            <Text style={styles.sheetTitle}>{selectedPlace.name}</Text>
            <Text style={styles.sheetDescription}>{selectedPlace.description}</Text>
          </View>
        )}
      </BottomSheet> */}
    </View>
  );
}
export default map
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  markerContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: 8,
    borderRadius: 20,
    borderColor: '#DAA520',
    borderWidth: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  marker: {
    backgroundColor: '#DAA520',
    padding: 6,
    borderRadius: 20,
    borderColor: '#FFF',
    borderWidth: 2,
  },
  markerText: {
    fontSize: 18,
  },
  sheetBackground: {
    backgroundColor: '#FFF8ED',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  sheetHandle: {
    backgroundColor: '#D4AF37',
  },
  sheetContent: {
    padding: 20,
  },
  sheetImage: {
    width: '100%',
    height: 140,
    borderRadius: 12,
    marginBottom: 15,
  },
  sheetTitle: {
    fontSize: 20,
    fontFamily: 'Poppins_600SemiBold',
    color: '#2A2A2A',
    marginBottom: 6,
  },
  sheetDescription: {
    fontSize: 14,
    fontFamily: 'Poppins_400Regular',
    color: '#555',
    lineHeight: 20,
  },
});
const mapStyle = [
  {
    elementType: 'geometry',
    stylers: [{ color: '#F5F0E1' }],
  },
  {
    elementType: 'labels.text.fill',
    stylers: [{ color: '#5B5B5B' }],
  },
  {
    featureType: 'poi',
    stylers: [{ visibility: 'off' }],
  },
  {
    featureType: 'road',
    stylers: [{ color: '#E0C097' }],
  },
  {
    featureType: 'water',
    stylers: [{ color: '#C9D6D5' }],
  },
];