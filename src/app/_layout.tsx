import { DarkTheme, DefaultTheme, Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useColorScheme } from "react-native";

import { useEffect } from "react";
import { StackScreen } from "expo-router/build/layouts/stack-utils/StackScreen.js";
import { ThemeProvider } from "@/providers/theme-provider";

SplashScreen.preventAutoHideAsync();

export default function TabLayout() {
  const colorScheme = useColorScheme();

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <ThemeProvider>
      <Stack>
        <Stack.Screen name="index" options={{
          headerShown:false,
        }} />
        <Stack.Screen name="screen1" options={{
          title:"Hello",
          headerBackButtonDisplayMode: "minimal",
        }} />
        <Stack.Screen name="screen2" />
      </Stack>
    </ThemeProvider>

  );
}
