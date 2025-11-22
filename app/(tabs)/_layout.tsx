import { Tabs } from "expo-router";
import React from "react";

import { IconSymbol } from "@/components/ui/icon-symbol";
import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { Icon } from "@/components/ui/icon";
import { Info } from "lucide-react-native";
import { House } from "lucide-react-native";
import { NotebookText } from "lucide-react-native";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: true,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Icon as={House} size="md" color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="zod-val"
        options={{
          title: "Zod-Val",
          tabBarIcon: ({ color }) => (
            <Icon as={NotebookText} size="md" color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="about"
        options={{
          title: "About",
          tabBarIcon: ({ color }) => <Icon as={Info} size="md" color={color} />,
        }}
      />
    </Tabs>
  );
}
