import React from 'react';
import { SafeAreaView, View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './auth/login';
import Signup from './auth/signup';
import AddFunds from './payment/add-funds';
import LuckyDraw from './draw/lucky-draw';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="AddFunds" component={AddFunds} />
        <Stack.Screen name="LuckyDraw" component={LuckyDraw} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Text>Select a Category:</Text>
      <Button title="Motorcycle" onPress={() => navigation.navigate('AddFunds', { category: 'Motorcycle' })} />
      <Button title="Mobile" onPress={() => navigation.navigate('AddFunds', { category: 'Mobile' })} />
      <Button title="Cash" onPress={() => navigation.navigate('AddFunds', { category: 'Cash' })} />
    </SafeAreaView>
  );
};

export default App;
