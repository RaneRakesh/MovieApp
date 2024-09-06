import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './screens/SplashScreen';
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import DetailsScreen from './screens/DetailsScreen';

// Create a stack navigator for screens
const Stack = createStackNavigator();

// Create a bottom tab navigator
const Tab = createBottomTabNavigator();

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
    <Stack.Screen name="Details" component={DetailsScreen} />
  </Stack.Navigator>
);

const SearchStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="SearchScreen" component={SearchScreen} options={{ headerShown: false }}/>
    <Stack.Screen name="Details" component={DetailsScreen} />
  </Stack.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Main" options={{ headerShown: false }}>
          {() => (
            <Tab.Navigator
              screenOptions={{
                tabBarLabelStyle: { fontSize: 16,  paddingBottom: 10,},
                tabBarIcon: () => null,  // Hide the icons for all tabs
              }}
            >
              <Tab.Screen name="HomeTab" component={HomeStack} options={{ tabBarLabel: 'Home', headerShown: false }} />
              <Tab.Screen name="SearchTab" component={SearchStack} options={{ tabBarLabel: 'Search', headerShown: false }} />
            </Tab.Navigator>
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

