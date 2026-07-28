import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, StatusBar } from 'react-native';

const BUTTONS = [
  ['C', '÷', '×', '⌫'],
  ['7', '8', '9', '−'],
  ['4', '5', '6', '+'],
  ['1', '2', '3', '='],
  ['0', '.'],
];

const OP_MAP = { '÷': '/', '×': '*', '−': '-', '+': '+' };

export default function App() {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('0');

  const handlePress = (btn) => {
    if (btn === 'C') { setExpression(''); setResult('0'); return; }
    if (btn === '⌫') { setExpression(e => e.slice(0, -1)); return; }

    if (btn === '=') {
      try {
        // Substituir símbolos por operadores JS
        let expr = expression;
        Object.entries(OP_MAP).forEach(([k, v]) => { expr = expr.split(k).join(v); });

        if (expr.includes('/0') && eval(expr) === Infinity) {
          setResult('Erro: ÷ por 0');
          setExpression('');
          return;
        }

        const res = parseFloat(eval(expr).toFixed(8));
        setResult(String(res));
        setExpression(String(res));
      } catch { setResult('Erro'); setExpression(''); }
      return;
    }

    // Operador ou número
    const isOp = Object.keys(OP_MAP).includes(btn);
    if (isOp) {
      const last = expression.slice(-1);
      if (Object.keys(OP_MAP).includes(last)) {
        setExpression(e => e.slice(0, -1) + btn);
      } else if (expression) {
        setExpression(e => e + btn);
      }
    } else {
      setExpression(e => e + btn);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.displayArea}>
        <Text style={styles.expression}>{expression || ' '}</Text>
        <Text style={styles.result}>{result}</Text>
      </View>
      <View style={styles.buttonsArea}>
        {BUTTONS.map((row, i) => (
          <View key={i} style={styles.row}>
            {row.map(btn => {
              const isOp = Object.keys(OP_MAP).includes(btn);
              const isEquals = btn === '=';
              const isClear = btn === 'C';
              const isZero = btn === '0';
              return (
                <TouchableOpacity
                  key={btn}
                  style={[
                    styles.btn,
                    isOp && styles.btnOp,
                    isEquals && styles.btnEquals,
                    isClear && styles.btnClear,
                    isZero && styles.btnZero,
                  ]}
                  onPress={() => handlePress(btn)}
                  activeOpacity={0.7}
                >
                  <Text style={[styles.btnText, (isOp || isEquals || isClear) && styles.btnTextLight]}>
                    {btn}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#1a1a2e' },
  displayArea: { flex: 1, justifyContent: 'flex-end', padding: 24 },
  expression: { color: '#999', fontSize: 20, textAlign: 'right', marginBottom: 8 },
  result: { color: '#00d4aa', fontSize: 48, textAlign: 'right', fontWeight: 'bold' },
  buttonsArea: { padding: 12 },
  row: { flexDirection: 'row', justifyContent: 'center', marginBottom: 10 },
  btn: { width: 72, height: 72, borderRadius: 36, backgroundColor: '#0f3460', justifyContent: 'center', alignItems: 'center', marginHorizontal: 6 },
  btnOp: { backgroundColor: '#e94560' },
  btnEquals: { backgroundColor: '#00d4aa' },
  btnClear: { backgroundColor: '#ff9f43' },
  btnZero: { width: 154 },
  btnText: { fontSize: 24, color: '#e0e0e0', fontWeight: '600' },
  btnTextLight: { color: '#fff' },
});
