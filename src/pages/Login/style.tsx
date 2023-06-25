import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  input: {
    borderRadius: 10,
    borderColor: '#000',
    borderWidth: 1,
    height: 40,
    width: 350,
    padding: 10,
    margin: 6,
  },
  image: {
    height: 350,
    width: 350,
  },
  viewLogin: {
    position: 'absolute',
    top: '52%',
    left: 10,
    right: 10,
    zIndex: 1,
    backgroundColor: 'rgba(255, 169, 22, 0.95)',
    opacity: 0.96,
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 40,
    alignItems: 'center',
  },
  viewImage: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 270,
  },
  icon: {
    marginRight: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    borderColor: '#000',
    borderWidth: 1,
    height: 40,
    width: 350,
    padding: 10,
    margin: 12,
  },
})

export default styles
