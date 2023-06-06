import { useFonts } from 'expo-font'

import { TamaguiProvider, YStack } from 'tamagui'

import config from './tamagui.config'

import { Users } from './src/components/Users'

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
      <YStack bg="$red10Dark" f={1} p="$6" pt="$8">
        <Users />
      </YStack>
    </TamaguiProvider>
  )
}
