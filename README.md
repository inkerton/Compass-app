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
