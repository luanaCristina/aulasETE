import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import api from '../services/api';

const PRIORITIES = ['baixa', 'media', 'alta', 'urgente'];
const CATEGORIES = ['limpeza', 'educacao', 'saude', 'cultura', 'infraestrutura'];
const PRIORITY_COLORS = { baixa: '#00B894', media: '#FDCB6E', alta: '#E17055', urgente: '#D63031' };

export default function CreateTaskScreen({ navigation }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('media');
  const [category, setCategory] = useState('infraestrutura');
  const [loading, setLoading] = useState(false);

  const handleCreate = async () => {
    if (!title.trim()) { Alert.alert('Erro', 'Título é obrigatório!'); return; }

    setLoading(true);
    try {
      await api.post('/tasks', { title: title.trim(), description: description.trim(), priority, category });
      Alert.alert('✅ Sucesso', 'Tarefa criada!');
      navigation.goBack();
    } catch (err) {
      Alert.alert('Erro', err.response?.data?.error || 'Falha ao criar tarefa.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.label}>Título *</Text>
      <TextInput style={styles.input} value={title} onChangeText={setTitle} placeholder="Ex: Limpar praça do bairro" maxLength={100} />

      <Text style={styles.label}>Descrição</Text>
      <TextInput style={[styles.input, { height: 80 }]} value={description} onChangeText={setDescription} placeholder="Detalhes da tarefa..." multiline maxLength={500} />

      <Text style={styles.label}>Prioridade</Text>
      <View style={styles.optionsRow}>
        {PRIORITIES.map(p => (
          <TouchableOpacity key={p} style={[styles.optionBtn, priority === p && { backgroundColor: PRIORITY_COLORS[p] }]} onPress={() => setPriority(p)}>
            <Text style={[styles.optionText, priority === p && { color: '#fff' }]}>{p}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.label}>Categoria</Text>
      <View style={styles.optionsRow}>
        {CATEGORIES.map(c => (
          <TouchableOpacity key={c} style={[styles.optionBtn, category === c && styles.optionActive]} onPress={() => setCategory(c)}>
            <Text style={[styles.optionText, category === c && { color: '#fff' }]}>{c}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={[styles.submitBtn, loading && { opacity: 0.6 }]} onPress={handleCreate} disabled={loading}>
        <Text style={styles.submitText}>{loading ? 'Criando...' : '✅ Criar Tarefa'}</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8F9FA', padding: 20 },
  label: { fontSize: 14, fontWeight: '600', color: '#2D3436', marginBottom: 6, marginTop: 16 },
  input: { backgroundColor: '#fff', borderRadius: 10, padding: 14, fontSize: 15, borderWidth: 1, borderColor: '#DFE6E9' },
  optionsRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  optionBtn: { paddingHorizontal: 14, paddingVertical: 8, borderRadius: 20, backgroundColor: '#DFE6E9' },
  optionActive: { backgroundColor: '#6C5CE7' },
  optionText: { fontSize: 12, fontWeight: '600', color: '#636E72', textTransform: 'capitalize' },
  submitBtn: { backgroundColor: '#6C5CE7', borderRadius: 12, padding: 16, alignItems: 'center', marginTop: 30, marginBottom: 40 },
  submitText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});
