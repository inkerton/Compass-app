# Compass-app
A compass app in React-native.

# steps:
Sure, here are the steps to make a compass app in React Native:

1. **Install React Native:** Make sure you have React Native installed on your development machine. You can follow the official React Native installation guide for instructions on setting up the development environment.

2. **Create a React Native Project:** Use the `react-native init` command to create a new React Native project. Give your project a name, such as "CompassApp".

3. **Install React Native Sensors:** Install the `react-native-sensors` package using `npm install react-native-sensors` or `yarn add react-native-sensors`. This package provides access to device sensors, including the magnetometer, which is used to detect magnetic fields and determine the compass direction.

4. **Create the Compass Component:** Create a new component file, such as `Compass.js`, to define the compass app's UI and functionality.

5. **Import React and Sensors:** Import the necessary components from React and `react-native-sensors` in the `Compass.js` file.

6. **Create a State Variable:** Declare a state variable to store the current compass heading.

7. **Subscribe to Magnetometer Data:** Use the `useSensor` hook from `react-native-sensors` to subscribe to magnetometer data updates. Update the state variable with the latest compass heading whenever the magnetometer data changes.

8. **Create the Compass UI:** Design the compass UI using React Native components. Display the current compass heading in a text element.

9. **Rotate the Compass UI:** Use the `Animated` module from React Native to rotate the compass UI elements based on the current compass heading.

10. **Run the App:** Run the React Native app on your device or emulator. The compass app should display the current compass heading and rotate accordingly.

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
