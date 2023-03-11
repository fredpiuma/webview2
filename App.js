import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, NativeModules } from 'react-native';
import WebView from 'react-native-webview'

const { StatusBarManager } = NativeModules;

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT;

export default function App() {
  return (
    <View style={{ width: '100%', height: '100%', backgroundColor: '#000000' }}>
      <div style={{height:STATUSBAR_HEIGHT,backgroundColor:'#ffffff'}}></div>
        <WebView
          source={{ uri: 'https://chat.openai.com/chat' }}
          style={{ marginTop: 0 }}
        />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    paddingLeft: 20,
    paddingRight: 20,
  }
});
