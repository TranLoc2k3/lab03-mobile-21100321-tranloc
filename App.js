import React from 'react';
import {Button, View} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Screen1 from './pages/Screen1';
import Screen2 from './pages/Screen2';
import Screen3 from './pages/Screen3';
import Screen4 from './pages/Screen4';
import Screen5 from './pages/Screen5';


function HomeScreen({ navigation }) {
  return (
    <View style={{flex: 1, justifyContent: 'space-around'}}>
      <Button
        title="Go to Screen 1"
        onPress={() => navigation.navigate('Screen1')}
      />
      <Button
        title="Go to Screen 2"
        onPress={() => navigation.navigate('Screen2')}
      />
      <Button
        title="Go to Screen 3"
        onPress={() => navigation.navigate('Screen3')}
      />
      <Button
        title="Go to Screen 4"
        onPress={() => navigation.navigate('Screen4')}
      />
      <Button
        title="Go to Screen 5"
        onPress={() => navigation.navigate('Screen5')}
      />
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Screen1" component={Screen1} />
        <Stack.Screen name="Screen2" component={Screen2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
