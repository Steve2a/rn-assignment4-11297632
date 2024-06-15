import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import login from './screens/login';
import home from './screens/home';

const stack = createNativeStackNavigator();

export default function App() {
  return (

    <NavigationContainer>
    <stack.Navigator screenOptions={{headerShown: false}}>
      <stack.Screen name="Login" component={ login } />
      <stack.Screen name="home" component={ home } />
    </stack.Navigator>
    </NavigationContainer>
   );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
