import { Button, Text, YStack } from 'tamagui'

import Check from '../../assets/checklist.svg'

export default function Home() {
  return (
    <YStack
      bg="$gray5"
      p="$5"
      // pt="$10"
      pb="$20"
      alignItems="center"
      justifyContent="center"
      f={1}
    >
      <Text pt="$15" fontSize={15} fontFamily="$body" textAlign="center">
        Gerencie
        {'\n'}
        suas tarefas com
        {'\n'}
        mais facilidade
      </Text>
      <Check />
      <Button bg="$orange10" size="$5" color="$orange1">
        {' '}
        Próximo{' '}
      </Button>
    </YStack>
  )
}
