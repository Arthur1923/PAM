import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native-web';
import Form from './src/components/Form';
import Title from './src/components/title';

export default function App() {
  return (
    <View style={styles.container}>
      <Title title="Meu Primeiro App"></Title>
      <Form></Form>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f456',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
