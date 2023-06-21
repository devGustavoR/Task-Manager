import { Button, TamaguiProvider, Text, YStack } from 'tamagui'
import config from '../../../tamagui.config'

import Check from '../../../assets/checklist.svg'

export default function Home({ navigation }) {
  return (
    <TamaguiProvider config={config}>
      <YStack
        bg="$gray1"
        p="$5"
        // pt="$10"
        pb="$20"
        alignItems="center"
        justifyContent="center"
        f={1}
      >
        <Text pt="$20" fontSize={18} fontFamily="$body" textAlign="center">
          Gerencie
          {'\n'}
          suas tarefas com
          {'\n'}
          mais facilidade
        </Text>
        <Check />
        <Button
          bg="$orange10"
          size="$5"
          color="$orange1"
          onPress={() => navigation.navigate('Login')}
        >
          {' '}
          Próximo{' '}
        </Button>
      </YStack>
    </TamaguiProvider>
  )
}
