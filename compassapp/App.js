import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import { Magnetometer } from 'react-native-sensors';

const App = () => {
  const [heading, setHeading] = useState(null);

  useEffect(() => {
    const updateHeading = (headingObject) => {
      const roundedHeading = Math.round(headingObject.trueHeading);
      setHeading(roundedHeading);
    };

    Magnetometer.start(updateHeading);

    return () => {
      Magnetometer.stop();
    };
  }, []);

  return (
    <View>
      <Text>Compass heading: {heading}</Text>
      <Image source={require('./assets/compass.png')} style={{ transform: [{ rotate: `-${heading}deg` }] }} />
    </View>
  );
};

export default App;