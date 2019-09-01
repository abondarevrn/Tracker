import { useState, useEffect } from 'react';
import { Accuracy, requestPermissionsAsync, watchPositionAsync } from 'expo-location';

const useLocation = (shouldTrack, callback) => {
  const [err, setErr] = useState(null);

  useEffect(() => {
    let locationSubscriber = null;
    const startWatching = async () => {
      try {
        await requestPermissionsAsync();
        locationSubscriber = await watchPositionAsync(
          {
            accuracy: Accuracy.BestForNavigation,
            timeInterval: 1000,
            distanceInterval: 10,
          },
          callback,
        );
      } catch (e) {
        setErr(e);
      }
    };

    const stopWatching = () => {
      if (locationSubscriber) {
        locationSubscriber.remove();
      }
      locationSubscriber = null;
    };

    if (shouldTrack) {
      startWatching();
    } else {
      stopWatching();
    }

    // The second time the useEffect gets called, this function will be executed
    // before the use effect callback

    return () => {
      if (locationSubscriber) {
        locationSubscriber.remove();
      }
    };
  }, [shouldTrack, callback]);

  return [err];
};

export default useLocation;
