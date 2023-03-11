import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, NativeModules } from 'react-native'
import WebView from 'react-native-webview'
import { useState } from 'react'
import Constants from './Constants'

// require('dotenv').config()

const { StatusBarManager } = NativeModules

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT

const fetchApi = async (endPoint, data) => {
  try {
    return await (
      await fetch(Constants.API_URL + endPoint, {
        body: JSON.stringify(data),
        method: 'POST'
      })
    ).json()
  } catch (error) {
    return []
  }
}

export default function App() {
  const [texto, setTexto] = useState('Aguarde...')

  ;(async () => {
    let result = await fetchApi('instagram/obter-origens-disponiveis')
    if (result.length > 0) {
      setTexto('Próxima origem a ser paginada ' + result[0].instagram)
    }
  })()
  return (
    <View style={{ width: '100%', height: '100%', backgroundColor: '#000000' }}>
      <Text style={{ height: STATUSBAR_HEIGHT, backgroundColor: '#ffffff' }}></Text>
      <Text style={{ color: '#000000', backgroundColor: '#ffffff' }}>{texto}</Text>
      <WebView source={{ uri: 'https://chat.openai.com/chat' }} style={{ marginTop: 0 }} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    paddingLeft: 20,
    paddingRight: 20
  }
})
