import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from '../screens/Home'
import Detail from '../screens/Detail'

const Stack = createStackNavigator()

function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{
          gestureEnabled: true
        }}>
          
        <Stack.Screen name='Home' component={Home} options={{ title: 'Home Screen' }} />
        <Stack.Screen
          name='Detail'
          component={Detail}
          options={{ title: 'Detail Screen' }}
        />
      </Stack.Navigator>
      
    </NavigationContainer>
  )
}

export default MainStackNavigator