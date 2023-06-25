import { TextInput, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import Check from '../../../assets/checklist.svg'
import styles from './style'

export default function Login() {
  return (
    <View style={styles.container}>
      <View style={styles.viewImage}>
        <Check style={styles.image} />
      </View>
      <View style={styles.viewLogin}>
        <View style={styles.inputContainer}>
          <Icon name="user" size={20} color="#000" style={styles.icon} />
          <TextInput style={styles.input} placeholder="E-mail" />
        </View>
        <View style={styles.inputContainer}>
          <Icon name="lock" size={20} color="#000" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
          />
        </View>
      </View>
    </View>
  )
}
