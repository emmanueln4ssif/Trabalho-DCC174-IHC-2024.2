import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Login',
          tabBarIcon: ({ color }) => <AntDesign name="login" size={24} color={color}/>,
        }}
      />
      <Tabs.Screen
        name="dashboard"
        options={{
          title: 'Dashboard',
          tabBarIcon: ({ color }) => <AntDesign name="dotchart" size={24} color={color}/>,
        }}
      />
      <Tabs.Screen
        name="cadastroFamilias"
        options={{
          title: 'Famílias',
          tabBarIcon: ({ color }) => <FontAwesome6 name="people-roof" size={24} color={color}/>,
        }}
      />
      <Tabs.Screen
        name="cadastroCampanhas"
        options={{
          title: 'Campanhas',
          tabBarIcon: ({ color }) => <MaterialIcons name="campaign" size={24} color={color}/>,
        }}
      />
    </Tabs>
  );
}
