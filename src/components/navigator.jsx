import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from '../pages/homeScreen'
import ProjectScreen from '../pages/projects'


const AppNavigator = createStackNavigator({
    Home: HomeScreen,
    Project: ProjectScreen
})

export default createAppContainer(AppNavigator);