import { Text, View, StyleSheet } from 'react-native';
import Button from './components/Button';
import { useState } from 'react';

export default function App() {
  const [counter, setCounter] = useState(0)

  return (
    <View style={styles.main} >
      <Text style={styles.textCount}>Contador de Pessoas</Text>
      <View style={styles.countDisplay}>
        <Text style={styles.textDisplay}>{counter}</Text>
      </View>
      <Button content='+' action={() => setCounter(p => p + 1)}/>
      <Button content='-' action={() => setCounter(p => p - 1)}/>
    </View>
  );
}

const styles = {
  main: {
    gap: 24,
    alignItems: 'center',
    backgroundColor: '#5260c5',
    height: '100%',
    color: 'white'
  },
  countDisplay: {
    backgroundColor: 'white',
    width: 180,
    borderRadius: 18,
    justifyContent: 'center',
    height: 70,
  },
  textCount: {
    marginTop: 24,
    fontSize: 24,
    color: 'white'
  },
  textDisplay: {
    color: 'black',
    fontSize: 32,
    textAlign: 'center',
    fontWeight: 700,
  }
};
