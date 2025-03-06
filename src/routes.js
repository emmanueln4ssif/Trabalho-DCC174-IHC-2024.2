import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Login } from '../app/(tabs)/login.tsx'
import { Dashboard } from '../app/(tabs)/dashboard.tsx'

const Tab = createBottomTabNavigator();

export function Routes() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Login" component={Login} />
      <Tab.Screen name="Dashboard" component={Dashboard} />
    </Tab.Navigator>
  );
}