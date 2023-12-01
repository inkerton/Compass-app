# Code:

Sure, here are the steps to make a compass app in React Native:

1. **Create a new React Native project**

```
npx react-native init compass-app
```

2. **Install react-native-sensors**

```
npm install react-native-sensors
```

3. **Import react-native-sensors in your App.js file**

```javascript
import { Magnetometer } from 'react-native-sensors';
```

4. **Create a state variable to store the compass heading**

```javascript
const [heading, setHeading] = useState(null);
```

5. **Create a function to update the compass heading**

```javascript
const updateHeading = (headingObject) => {
  const roundedHeading = Math.round(headingObject.trueHeading);
  setHeading(roundedHeading);
};
```

6. **Subscribe to the Magnetometer sensor**

```javascript
Magnetometer.start(updateHeading);
```

7. **Render the compass heading**

```javascript
<View>
  <Text>Compass heading: {heading}</Text>
</View>
```

8. **(Optional) Add a compass image to rotate based on the heading**

```javascript
<Image source={require('./assets/compass.png')} style={{ transform: [{ rotate: `-${heading}deg` }] }} />
```

Here is a complete example of a compass app in React Native:

```javascript
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
```

This is a basic compass app, and you can customize it to your liking. For example, you could add a compass needle, a gradient background, or a text label that indicates the direction of the heading.
