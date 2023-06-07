import { useFonts } from 'expo-font'

import { TamaguiProvider } from 'tamagui'

import config from './tamagui.config'

import Home from './src/Home/Home'

// import { Users } from './src/components/Users'

export default function App() {
  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  })

  if (!loaded) {
    return null
  }

  return (
    <TamaguiProvider config={config}>
      <Home />
    </TamaguiProvider>
  )
}
