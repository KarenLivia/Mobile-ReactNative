import { StyleSheet, Dimensions } from "react-native"

const style = StyleSheet.create({
  screen: {
    width: Dimensions.get('window').width,
    minHeight: Dimensions.get('window').height,
    backgroundColor: 'transparent',
    paddingLeft: 15,
    paddingRight: 15
  },
  title: {
    marginTop: 15,
    fontSize: 25,
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  inputBox: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 15, 
    marginBottom: 15
  },
  input: {
    borderWidth: 2,
    fontSize: 16,
    borderColor: '#000',
    width: ((Dimensions.get('window').width - 60) - 80)
  },
  btnDesativado: {
    backgroundColor: '#000',
    height: 55, width: 100,
    marginLeft: 5
  },
  btnAtivado: {
    backgroundColor: '#0560a9',
    height: 55, width: 100,
    marginLeft: 5,
  },
  btnTxt: {
    marginTop: 14,
    marginLeft: 21,
    fontSize: 18,
    color: '#fff'
  },
  cepShowed: {
    marginTop: 15,
    padding: 15,
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: '#d6d6d6'
  },
  txtCep: {
    color: '#000',
    fontSize: 18
  },
  aviso: {
    fontSize: 18,
    color: '#000'
  }
})

export default style