/**
 * maps-utils.test.js — Testes Unitários para funções do Maps App
 * Técnicas: BVA, Particionamento por Equivalência, Edge Cases
 */

const {
  calculateDistance,
  toRadians,
  isWithinRegion,
  getVisibleMarkers,
  calculateBoundingRegion,
  formatCoordinates,
  isValidCoordinate,
} = require('./maps-utils');

describe('toRadians', () => {
  test('converte 0 graus para 0 radianos', () => {
    expect(toRadians(0)).toBe(0);
  });

  test('converte 180 graus para PI radianos', () => {
    expect(toRadians(180)).toBeCloseTo(Math.PI);
  });

  test('converte 90 graus para PI/2 radianos', () => {
    expect(toRadians(90)).toBeCloseTo(Math.PI / 2);
  });

  test('converte valores negativos', () => {
    expect(toRadians(-90)).toBeCloseTo(-Math.PI / 2);
  });
});

describe('calculateDistance', () => {
  const saoPaulo = { latitude: -23.5505, longitude: -46.6333 };
  const rioDeJaneiro = { latitude: -22.9068, longitude: -43.1729 };

  test('distância entre mesmo ponto é 0', () => {
    expect(calculateDistance(saoPaulo, saoPaulo)).toBe(0);
  });

  test('distância SP-RJ é aproximadamente 360km', () => {
    const dist = calculateDistance(saoPaulo, rioDeJaneiro);
    expect(dist).toBeGreaterThan(350);
    expect(dist).toBeLessThan(380);
  });

  test('distância é simétrica (A→B === B→A)', () => {
    const ab = calculateDistance(saoPaulo, rioDeJaneiro);
    const ba = calculateDistance(rioDeJaneiro, saoPaulo);
    expect(ab).toBeCloseTo(ba);
  });

  test('pontos muito próximos retornam distância pequena', () => {
    const pontoA = { latitude: -23.5505, longitude: -46.6333 };
    const pontoB = { latitude: -23.5506, longitude: -46.6334 };
    expect(calculateDistance(pontoA, pontoB)).toBeLessThan(0.02); // < 20m
  });
});

describe('isWithinRegion', () => {
  const region = {
    latitude: -23.55,
    longitude: -46.63,
    latitudeDelta: 0.1,
    longitudeDelta: 0.1,
  };

  test('ponto no centro está dentro', () => {
    const coord = { latitude: -23.55, longitude: -46.63 };
    expect(isWithinRegion(coord, region)).toBe(true);
  });

  test('ponto no limite está dentro (BVA)', () => {
    const coord = { latitude: -23.5, longitude: -46.58 }; // limite superior
    expect(isWithinRegion(coord, region)).toBe(true);
  });

  test('ponto fora está fora', () => {
    const coord = { latitude: -24.0, longitude: -47.0 };
    expect(isWithinRegion(coord, region)).toBe(false);
  });

  test('ponto exatamente no limite inferior', () => {
    const coord = { latitude: -23.6, longitude: -46.68 };
    expect(isWithinRegion(coord, region)).toBe(true);
  });
});

describe('getVisibleMarkers', () => {
  const markers = [
    { id: 1, coordinate: { latitude: -23.55, longitude: -46.63 } },
    { id: 2, coordinate: { latitude: -23.58, longitude: -46.65 } },
    { id: 3, coordinate: { latitude: -24.0, longitude: -47.0 } }, // fora
  ];

  const region = {
    latitude: -23.55,
    longitude: -46.63,
    latitudeDelta: 0.1,
    longitudeDelta: 0.1,
  };

  test('retorna apenas marcadores visíveis', () => {
    const visible = getVisibleMarkers(markers, region);
    expect(visible).toHaveLength(2);
    expect(visible[0].id).toBe(1);
    expect(visible[1].id).toBe(2);
  });

  test('retorna vazio quando nenhum está visível', () => {
    const farRegion = { latitude: 0, longitude: 0, latitudeDelta: 0.01, longitudeDelta: 0.01 };
    expect(getVisibleMarkers(markers, farRegion)).toHaveLength(0);
  });

  test('retorna todos quando região é muito grande', () => {
    const bigRegion = { latitude: -23.5, longitude: -46.5, latitudeDelta: 5, longitudeDelta: 5 };
    expect(getVisibleMarkers(markers, bigRegion)).toHaveLength(3);
  });

  test('array vazio retorna vazio', () => {
    expect(getVisibleMarkers([], region)).toHaveLength(0);
  });
});

describe('calculateBoundingRegion', () => {
  test('retorna null para array vazio', () => {
    expect(calculateBoundingRegion([])).toBeNull();
  });

  test('retorna null para null', () => {
    expect(calculateBoundingRegion(null)).toBeNull();
  });

  test('marcador único retorna região centrada nele', () => {
    const markers = [{ coordinate: { latitude: -23.55, longitude: -46.63 } }];
    const region = calculateBoundingRegion(markers);
    expect(region.latitude).toBeCloseTo(-23.55);
    expect(region.longitude).toBeCloseTo(-46.63);
  });

  test('múltiplos marcadores retorna região que contém todos', () => {
    const markers = [
      { coordinate: { latitude: -23.5, longitude: -46.6 } },
      { coordinate: { latitude: -23.6, longitude: -46.7 } },
    ];
    const region = calculateBoundingRegion(markers);
    expect(region.latitude).toBeCloseTo(-23.55);
    expect(region.longitude).toBeCloseTo(-46.65);
    expect(region.latitudeDelta).toBeGreaterThan(0.1);
  });
});

describe('formatCoordinates', () => {
  test('formata coordenadas com precisão padrão (4)', () => {
    expect(formatCoordinates(-23.550523, -46.633308)).toBe('Lat: -23.5505, Lng: -46.6333');
  });

  test('formata com precisão customizada', () => {
    expect(formatCoordinates(-23.5505, -46.6333, 2)).toBe('Lat: -23.55, Lng: -46.63');
  });

  test('retorna erro para valores inválidos', () => {
    expect(formatCoordinates('abc', null)).toBe('Coordenadas inválidas');
  });

  test('retorna erro para undefined', () => {
    expect(formatCoordinates(undefined, undefined)).toBe('Coordenadas inválidas');
  });
});

describe('isValidCoordinate', () => {
  // Particionamento por Equivalência: válidas, inválidas por tipo, inválidas por range
  
  test('coordenada válida retorna true', () => {
    expect(isValidCoordinate({ latitude: -23.55, longitude: -46.63 })).toBe(true);
  });

  test('coordenada no equador/meridiano retorna true', () => {
    expect(isValidCoordinate({ latitude: 0, longitude: 0 })).toBe(true);
  });

  // BVA: Limites de latitude (-90 a 90)
  test('latitude -90 é válida (BVA)', () => {
    expect(isValidCoordinate({ latitude: -90, longitude: 0 })).toBe(true);
  });

  test('latitude 90 é válida (BVA)', () => {
    expect(isValidCoordinate({ latitude: 90, longitude: 0 })).toBe(true);
  });

  test('latitude -91 é inválida (BVA)', () => {
    expect(isValidCoordinate({ latitude: -91, longitude: 0 })).toBe(false);
  });

  test('latitude 91 é inválida (BVA)', () => {
    expect(isValidCoordinate({ latitude: 91, longitude: 0 })).toBe(false);
  });

  // BVA: Limites de longitude (-180 a 180)
  test('longitude -180 é válida (BVA)', () => {
    expect(isValidCoordinate({ latitude: 0, longitude: -180 })).toBe(true);
  });

  test('longitude 180 é válida (BVA)', () => {
    expect(isValidCoordinate({ latitude: 0, longitude: 180 })).toBe(true);
  });

  test('longitude -181 é inválida (BVA)', () => {
    expect(isValidCoordinate({ latitude: 0, longitude: -181 })).toBe(false);
  });

  // Equivalência: tipos inválidos
  test('null é inválido', () => {
    expect(isValidCoordinate(null)).toBe(false);
  });

  test('undefined é inválido', () => {
    expect(isValidCoordinate(undefined)).toBe(false);
  });

  test('string é inválida', () => {
    expect(isValidCoordinate('coordenada')).toBe(false);
  });

  test('objeto sem propriedades é inválido', () => {
    expect(isValidCoordinate({})).toBe(false);
  });

  test('latitude como string é inválida', () => {
    expect(isValidCoordinate({ latitude: '-23', longitude: -46 })).toBe(false);
  });
});
