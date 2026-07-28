import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const PRIORITY_COLORS = {
  baixa: '#00B894',
  media: '#FDCB6E',
  alta: '#E17055',
  urgente: '#D63031',
};

const STATUS_EMOJI = {
  pendente: '⏳',
  em_andamento: '🔨',
  concluida: '✅',
};

export default function TaskCard({ task, onPress, onDelete }) {
  return (
    <TouchableOpacity
      style={[styles.card, { borderLeftColor: PRIORITY_COLORS[task.priority] }]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={styles.row}>
        <Text style={styles.title} numberOfLines={1}>{task.title}</Text>
        <View style={[styles.badge, { backgroundColor: PRIORITY_COLORS[task.priority] }]}>
          <Text style={styles.badgeText}>{task.priority}</Text>
        </View>
      </View>

      {task.description ? (
        <Text style={styles.desc} numberOfLines={2}>{task.description}</Text>
      ) : null}

      <View style={styles.footer}>
        <Text style={styles.status}>{STATUS_EMOJI[task.status]} {task.status.replace('_', ' ')}</Text>
        <Text style={styles.category}>📂 {task.category}</Text>
      </View>

      <TouchableOpacity style={styles.deleteBtn} onPress={() => onDelete(task._id)}>
        <Text style={styles.deleteIcon}>🗑️</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 16,
    marginBottom: 12,
    borderLeftWidth: 5,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
  },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  title: { fontSize: 16, fontWeight: '700', color: '#2D3436', flex: 1, marginRight: 8 },
  badge: { paddingHorizontal: 8, paddingVertical: 3, borderRadius: 10 },
  badgeText: { color: '#fff', fontSize: 10, fontWeight: 'bold', textTransform: 'uppercase' },
  desc: { color: '#636E72', marginTop: 6, fontSize: 13, lineHeight: 18 },
  footer: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 },
  status: { fontSize: 12, color: '#6C5CE7', fontWeight: '600' },
  category: { fontSize: 11, color: '#B2BEC3' },
  deleteBtn: { position: 'absolute', top: 10, right: 10 },
  deleteIcon: { fontSize: 16 },
});
