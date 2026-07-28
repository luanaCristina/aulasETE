import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import api from '../services/api';

const STATUSES = ['pendente', 'em_andamento', 'concluida'];
const PRIORITIES = ['baixa', 'media', 'alta', 'urgente'];
const STATUS_COLORS = { pendente: '#FDCB6E', em_andamento: '#74B9FF', concluida: '#00B894' };
const PRIORITY_COLORS = { baixa: '#00B894', media: '#FDCB6E', alta: '#E17055', urgente: '#D63031' };

export default function EditTaskScreen({ route, navigation }) {
  const { task } = route.params;
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description || '');
  const [status, setStatus] = useState(task.status);
  const [priority, setPriority] = useState(task.priority);
  const [loading, setLoading] = useState(false);

  const handleUpdate = async () => {
    if (!title.trim()) { Alert.alert('Erro', 'Título obrigatório!'); return; }
    setLoading(true);
    try {
      await api.put(`/tasks/${task._id}`, { title: title.trim(), description: description.trim(), status, priority });
      Alert.alert('✅', 'Tarefa atualizada!');
      navigation.goBack();
    } catch (err) {
      Alert.alert('Erro', err.response?.data?.error || 'Falha');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.label}>Título *</Text>
      <TextInput style={styles.input} value={title} onChangeText={setTitle} maxLength={100} />

      <Text style={styles.label}>Descrição</Text>
      <TextInput style={[styles.input, { height: 80 }]} value={description} onChangeText={setDescription} multiline />

      <Text style={styles.label}>Status</Text>
      <View style={styles.row}>
        {STATUSES.map(s => (
          <TouchableOpacity key={s} style={[styles.chip, status === s && { backgroundColor: STATUS_COLORS[s] }]} onPress={() => setStatus(s)}>
            <Text style={[styles.chipText, status === s && { color: '#fff' }]}>{s.replace('_', ' ')}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.label}>Prioridade</Text>
      <View style={styles.row}>
        {PRIORITIES.map(p => (
          <TouchableOpacity key={p} style={[styles.chip, priority === p && { backgroundColor: PRIORITY_COLORS[p] }]} onPress={() => setPriority(p)}>
            <Text style={[styles.chipText, priority === p && { color: '#fff' }]}>{p}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={[styles.btn, loading && { opacity: 0.6 }]} onPress={handleUpdate} disabled={loading}>
        <Text style={styles.btnText}>{loading ? 'Salvando...' : '💾 Salvar Alterações'}</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8F9FA', padding: 20 },
  label: { fontSize: 14, fontWeight: '600', color: '#2D3436', marginBottom: 6, marginTop: 16 },
  input: { backgroundColor: '#fff', borderRadius: 10, padding: 14, fontSize: 15, borderWidth: 1, borderColor: '#DFE6E9' },
  row: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  chip: { paddingHorizontal: 14, paddingVertical: 8, borderRadius: 20, backgroundColor: '#DFE6E9' },
  chipText: { fontSize: 12, fontWeight: '600', color: '#636E72', textTransform: 'capitalize' },
  btn: { backgroundColor: '#6C5CE7', borderRadius: 12, padding: 16, alignItems: 'center', marginTop: 30, marginBottom: 40 },
  btnText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});
