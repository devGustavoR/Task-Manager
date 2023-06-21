import { useFonts } from 'expo-font'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from './src/pages/Home/Home'
import Login from './src/pages/Login/Login'

// import { Users } from './src/components/Users'

const Stack = createStackNavigator()

export default function App() {
  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  })

  if (!loaded) {
    return null
  }

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: '', headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ title: '', headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}
