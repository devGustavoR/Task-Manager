import { XStack, Avatar } from 'tamagui'

export function Users() {
  return (
    <XStack alignItems="center" space="$6">
      <Avatar circular size="$5">
        <Avatar.Image src="https://github.com/devgustavor.png" />

        <Avatar.Fallback bc="$gray5" />
      </Avatar>
    </XStack>
  )
}
