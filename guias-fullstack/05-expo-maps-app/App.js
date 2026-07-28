import React, { useState, useEffect, useRef } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Alert,
  Platform,
} from 'react-native';
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps';
import * as Location from 'expo-location';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [region, setRegion] = useState({
    latitude: -23.5505,
    longitude: -46.6333,
    latitudeDelta: 0.02,
    longitudeDelta: 0.02,
  });

  const mapRef = useRef(null);

  // Marcadores customizados
  const markers = [
    {
      id: 1,
      title: 'Parque Ibirapuera',
      description: 'Principal parque urbano de São Paulo',
      coordinate: { latitude: -23.5874, longitude: -46.6576 },
      color: '#27ae60',
    },
    {
      id: 2,
      title: 'MASP',
      description: 'Museu de Arte de São Paulo',
      coordinate: { latitude: -23.5614, longitude: -46.6558 },
      color: '#e74c3c',
    },
    {
      id: 3,
      title: 'Pinacoteca',
      description: 'Museu de arte mais antigo de SP',
      coordinate: { latitude: -23.5342, longitude: -46.6337 },
      color: '#3498db',
    },
    {
      id: 4,
      title: 'Mercado Municipal',
      description: 'Mercadão - gastronomia tradicional',
      coordinate: { latitude: -23.5418, longitude: -46.6296 },
      color: '#f39c12',
    },
  ];

  useEffect(() => {
    (async () => {
      // Solicitar permissão de localização
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permissão de localização negada');
        return;
      }

      // Obter localização atual
      const currentLocation = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.High,
      });
      setLocation(currentLocation);

      // Atualizar região para a localização do usuário
      setRegion({
        latitude: currentLocation.coords.latitude,
        longitude: currentLocation.coords.longitude,
        latitudeDelta: 0.02,
        longitudeDelta: 0.02,
      });
    })();
  }, []);

  // Centralizar no usuário
  const centerOnUser = () => {
    if (location && mapRef.current) {
      mapRef.current.animateToRegion(
        {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        },
        1000
      );
    } else {
      Alert.alert('Localização', 'Aguardando localização do GPS...');
    }
  };

  // Lidar com clique no marcador
  const handleMarkerPress = (marker) => {
    Alert.alert(marker.title, marker.description);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />

      {/* Mapa */}
      <MapView
        ref={mapRef}
        style={styles.map}
        provider={Platform.OS === 'android' ? PROVIDER_GOOGLE : undefined}
        initialRegion={region}
        showsUserLocation={true}
        showsMyLocationButton={false}
        showsCompass={true}
        zoomControlEnabled={true}
        mapType="standard"
        onRegionChangeComplete={(newRegion) => setRegion(newRegion)}
      >
        {markers.map((marker) => (
          <Marker
            key={marker.id}
            coordinate={marker.coordinate}
            pinColor={marker.color}
            onPress={() => handleMarkerPress(marker)}
          >
            <Callout>
              <View style={styles.callout}>
                <Text style={styles.calloutTitle}>{marker.title}</Text>
                <Text style={styles.calloutDesc}>{marker.description}</Text>
              </View>
            </Callout>
          </Marker>
        ))}
      </MapView>

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>📍 Expo Maps</Text>
        <Text style={styles.headerSubtitle}>São Paulo, Brasil</Text>
      </View>

      {/* Botão centralizar */}
      <TouchableOpacity style={styles.centerButton} onPress={centerOnUser}>
        <Text style={styles.centerButtonText}>📌</Text>
      </TouchableOpacity>

      {/* Info Box */}
      <View style={styles.infoBox}>
        <Text style={styles.infoText}>
          {errorMsg
            ? `⚠️ ${errorMsg}`
            : location
            ? `📍 Lat: ${location.coords.latitude.toFixed(4)} | Lng: ${location.coords.longitude.toFixed(4)}`
            : '🔍 Obtendo localização...'}
        </Text>
        <Text style={styles.infoSubtext}>
          {markers.length} pontos de interesse no mapa
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  header: {
    position: 'absolute',
    top: 50,
    left: 20,
    right: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: 12,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1a1a2e',
  },
  headerSubtitle: {
    fontSize: 13,
    color: '#666',
    marginTop: 2,
  },
  centerButton: {
    position: 'absolute',
    bottom: 130,
    right: 20,
    backgroundColor: 'white',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  centerButtonText: {
    fontSize: 22,
  },
  infoBox: {
    position: 'absolute',
    bottom: 40,
    left: 20,
    right: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  infoText: {
    fontSize: 14,
    color: '#333',
    fontWeight: '500',
  },
  infoSubtext: {
    fontSize: 12,
    color: '#888',
    marginTop: 4,
  },
  callout: {
    padding: 8,
    maxWidth: 200,
  },
  calloutTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#333',
  },
  calloutDesc: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
});
