import { useState, useEffect, useCallback } from 'react';
import { View, FlatList, Text, TouchableOpacity, StyleSheet, RefreshControl, Alert } from 'react-native';
import api from '../services/api';
import TaskCard from '../components/TaskCard';

export default function HomeScreen({ navigation }) {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTasks = useCallback(async () => {
    try {
      setLoading(true);
      const { data } = await api.get('/tasks');
      setTasks(data);
    } catch (err) {
      Alert.alert('Erro', 'Falha ao carregar tarefas.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', fetchTasks);
    return unsubscribe;
  }, [navigation, fetchTasks]);

  const handleDelete = (id) => {
    Alert.alert('Confirmar', 'Remover esta tarefa?', [
      { text: 'Cancelar' },
      { text: 'Remover', style: 'destructive', onPress: async () => {
        await api.delete(`/tasks/${id}`);
        fetchTasks();
      }},
    ]);
  };

  const stats = {
    total: tasks.length,
    pendentes: tasks.filter(t => t.status === 'pendente').length,
    andamento: tasks.filter(t => t.status === 'em_andamento').length,
    concluidas: tasks.filter(t => t.status === 'concluida').length,
  };

  return (
    <View style={styles.container}>
      {/* Stats */}
      <View style={styles.statsRow}>
        <View style={[styles.stat, { backgroundColor: '#DFE6E9' }]}><Text style={styles.statNum}>{stats.total}</Text><Text style={styles.statLabel}>Total</Text></View>
        <View style={[styles.stat, { backgroundColor: '#FFEAA7' }]}><Text style={styles.statNum}>{stats.pendentes}</Text><Text style={styles.statLabel}>Pendentes</Text></View>
        <View style={[styles.stat, { backgroundColor: '#81ECEC' }]}><Text style={styles.statNum}>{stats.andamento}</Text><Text style={styles.statLabel}>Em And.</Text></View>
        <View style={[styles.stat, { backgroundColor: '#55EFC4' }]}><Text style={styles.statNum}>{stats.concluidas}</Text><Text style={styles.statLabel}>Feitas</Text></View>
      </View>

      {/* Lista */}
      <FlatList
        data={tasks}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <TaskCard
            task={item}
            onPress={() => navigation.navigate('EditTask', { task: item })}
            onDelete={handleDelete}
          />
        )}
        refreshControl={<RefreshControl refreshing={loading} onRefresh={fetchTasks} />}
        ListEmptyComponent={
          <Text style={styles.empty}>Nenhuma tarefa ainda.{'\n'}Toque no + para criar! 🎯</Text>
        }
        contentContainerStyle={{ paddingBottom: 80 }}
      />

      {/* FAB */}
      <TouchableOpacity style={styles.fab} onPress={() => navigation.navigate('CreateTask')}>
        <Text style={styles.fabText}>＋</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8F9FA', padding: 16 },
  statsRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16 },
  stat: { flex: 1, marginHorizontal: 3, padding: 10, borderRadius: 10, alignItems: 'center' },
  statNum: { fontSize: 18, fontWeight: 'bold', color: '#2D3436' },
  statLabel: { fontSize: 10, color: '#636E72', marginTop: 2 },
  empty: { textAlign: 'center', color: '#B2BEC3', marginTop: 60, fontSize: 16, lineHeight: 24 },
  fab: { position: 'absolute', bottom: 20, right: 20, width: 56, height: 56, borderRadius: 28, backgroundColor: '#6C5CE7', justifyContent: 'center', alignItems: 'center', elevation: 6, shadowColor: '#6C5CE7', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.3, shadowRadius: 6 },
  fabText: { color: '#fff', fontSize: 28, lineHeight: 30 },
});
