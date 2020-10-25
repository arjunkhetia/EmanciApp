import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Welcome from '../Welcome/Welcome';
import Buttons from '../Buttons/Buttons';
import Header from '../Header/Header';

const Drawer = createDrawerNavigator();

const Home = (props) => {
  return (
    <NavigationContainer>
        <Drawer.Navigator initialRouteName="Welcome">
            <Drawer.Screen name="Welcome" component={Welcome} />
            <Drawer.Screen name="Buttons" component={Buttons} />
            <Drawer.Screen name="Header" component={Header} />
        </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Home;