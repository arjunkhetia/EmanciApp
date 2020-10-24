import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Welcome from '../Welcome/Welcome';

const Drawer = createDrawerNavigator();

const Home = (props) => {
  return (
    <NavigationContainer>
        <Drawer.Navigator initialRouteName="Welcome">
            <Drawer.Screen name="Welcome" component={Welcome} />
        </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Home;