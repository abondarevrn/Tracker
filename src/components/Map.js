import React, { useContext } from 'react';
import { StyleSheet, ActivityIndicator } from 'react-native';
import MapView, { Polyline, Circle } from 'react-native-maps';

import { Context as LocationContext } from '../context/LocationContext';

const Map = () => {
  const {
    state: { currentLocation, locations },
  } = useContext(LocationContext);
  if (!currentLocation) {
    return <ActivityIndicator size="large" style={{ marginTop: 200 }} />;
  }
  return (
    <MapView
      initialRegion={{
        ...currentLocation.coords,
        longitudeDelta: 0.01,
        latitudeDelta: 0.01,
      }}
      // region={{ ...currentLocation.coords, longitudeDelta: 0.01, latitudeDelta: 0.01 }}
      style={styles.map}
    >
      <Circle
        center={currentLocation.coords}
        radius={30}
        strokeColor="rgba(158,158,255,1.0)"
        fillColor="rgba(158,158,255,0.3)"
      />
      <Polyline
        coordinates={locations.map(loc => loc.coords)}
        strokeColor="#000000"
        strokeWidth={2}
      />
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: { height: 300 },
});

export default Map;