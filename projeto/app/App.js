import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import HomeScreen from './src/screens/HomeScreen';
import CreateTaskScreen from './src/screens/CreateTaskScreen';
import EditTaskScreen from './src/screens/EditTaskScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#6C5CE7' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: '🏘️ ComUnidade' }} />
        <Stack.Screen name="CreateTask" component={CreateTaskScreen} options={{ title: 'Nova Tarefa' }} />
        <Stack.Screen name="EditTask" component={EditTaskScreen} options={{ title: 'Editar Tarefa' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
