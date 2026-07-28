/**
 * maps-utils.js — Funções utilitárias extraídas do Expo Maps App
 * Módulo testável isoladamente (sem dependências React Native)
 */

/**
 * Calcula a distância entre dois pontos geográficos usando a fórmula de Haversine
 * @param {Object} point1 - { latitude, longitude }
 * @param {Object} point2 - { latitude, longitude }
 * @returns {number} Distância em quilômetros
 */
function calculateDistance(point1, point2) {
  const R = 6371; // Raio da Terra em km
  const dLat = toRadians(point2.latitude - point1.latitude);
  const dLon = toRadians(point2.longitude - point1.longitude);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(point1.latitude)) *
      Math.cos(toRadians(point2.latitude)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

/**
 * Converte graus para radianos
 */
function toRadians(degrees) {
  return degrees * (Math.PI / 180);
}

/**
 * Verifica se uma coordenada está dentro de uma região (bounding box)
 */
function isWithinRegion(coordinate, region) {
  const latMin = region.latitude - region.latitudeDelta / 2;
  const latMax = region.latitude + region.latitudeDelta / 2;
  const lonMin = region.longitude - region.longitudeDelta / 2;
  const lonMax = region.longitude + region.longitudeDelta / 2;

  return (
    coordinate.latitude >= latMin &&
    coordinate.latitude <= latMax &&
    coordinate.longitude >= lonMin &&
    coordinate.longitude <= lonMax
  );
}

/**
 * Filtra marcadores visíveis na região atual do mapa
 */
function getVisibleMarkers(markers, region) {
  return markers.filter((marker) => isWithinRegion(marker.coordinate, region));
}

/**
 * Calcula a região (bounding box) que contém todos os marcadores
 */
function calculateBoundingRegion(markers, padding = 0.01) {
  if (!markers || markers.length === 0) {
    return null;
  }

  const lats = markers.map((m) => m.coordinate.latitude);
  const lons = markers.map((m) => m.coordinate.longitude);

  const minLat = Math.min(...lats);
  const maxLat = Math.max(...lats);
  const minLon = Math.min(...lons);
  const maxLon = Math.max(...lons);

  return {
    latitude: (minLat + maxLat) / 2,
    longitude: (minLon + maxLon) / 2,
    latitudeDelta: (maxLat - minLat) + padding,
    longitudeDelta: (maxLon - minLon) + padding,
  };
}

/**
 * Formata coordenadas para exibição
 */
function formatCoordinates(latitude, longitude, precision = 4) {
  if (typeof latitude !== 'number' || typeof longitude !== 'number') {
    return 'Coordenadas inválidas';
  }
  return `Lat: ${latitude.toFixed(precision)}, Lng: ${longitude.toFixed(precision)}`;
}

/**
 * Valida se um objeto é uma coordenada válida
 */
function isValidCoordinate(coord) {
  if (!coord || typeof coord !== 'object') return false;
  if (typeof coord.latitude !== 'number' || typeof coord.longitude !== 'number') return false;
  if (coord.latitude < -90 || coord.latitude > 90) return false;
  if (coord.longitude < -180 || coord.longitude > 180) return false;
  return true;
}

module.exports = {
  calculateDistance,
  toRadians,
  isWithinRegion,
  getVisibleMarkers,
  calculateBoundingRegion,
  formatCoordinates,
  isValidCoordinate,
};
