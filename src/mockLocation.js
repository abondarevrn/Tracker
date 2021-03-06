import * as Location from 'expo-location';

const tenMetersWithDegrees = 0.0001;
const getLocation = increment => ({
  timestamp: 1000000,
  coords: {
    speed: 0,
    heading: 0,
    accuracy: 5,
    altitute: 5,
    longitude: 12.3948684 + increment * tenMetersWithDegrees,
    latitude: 44.0026033 + increment * tenMetersWithDegrees,
  },
});

let counter = 0;

setInterval(() => {
  Location.EventEmitter.emit('Expo.locationChanged', {
    watchId: Location._getCurrentWatchId(),
    location: getLocation(counter),
  });
  counter++;
}, 1000);
