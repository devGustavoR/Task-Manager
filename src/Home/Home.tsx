import { Text, XStack } from 'tamagui'

export default function Home() {
  return (
    <XStack p="$6" pt="$8" alignItems="center" justifyContent="center">
      <Text fontSize={20} fontFamily="$body" textAlign="center">
        Gerencie
        {'\n'}
        suas tarefas com
        {'\n'}
        mais facilidade
      </Text>
    </XStack>
  )
}
