import { DarkTheme, DefaultTheme, Stack, usePathname } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useColorScheme } from "react-native";

import { useEffect, useMemo } from "react";
import { StackScreen } from "expo-router/build/layouts/stack-utils/StackScreen.js";
import { ThemeProvider } from "@/providers/theme-provider";
import { useFonts } from "expo-font";

SplashScreen.preventAutoHideAsync();

export default function TabLayout() {
  const colorScheme = useColorScheme();

  const path = usePathname();

  const Title = useMemo(
    () =>
      path == "/StockRequest"
        ? "Stock Requests"
        : path == "/Distributions"
          ? "Distributions"
          : "",
    [path],
  );

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  const [loaded, error] = useFonts({
    "Charm-Bold": require("@/assets/fonts/Charm-Bold.ttf"),
    "Charm-Regular": require("@/assets/fonts/Charm-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <ThemeProvider>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="(tab)"
          options={{
            headerTitle: Title,
            headerStyle: {
              backgroundColor: "#1c1c1e",
            },
          }}
        >
          <Stack.Toolbar placement="right">
            <Stack.Toolbar.Menu icon={"ellipsis"}>
              <Stack.Toolbar.MenuAction
                icon={"sun.min"}
                onPress={() => {
                  //switch process
                }}
              >
                Switch Theme
              </Stack.Toolbar.MenuAction>
            </Stack.Toolbar.Menu>
          </Stack.Toolbar>
        </Stack.Screen>

        <Stack.Screen
          name="NewRequest"
          options={{
            headerTitle: "New Request",
            headerStyle: {
              backgroundColor: "#1c1c1e",
            },
            headerBackButtonDisplayMode: "minimal",
          }}
        />

        <Stack.Screen
          name="PastRequests"
          options={{
            headerTitle: "Past Requests",
            headerStyle: {
              backgroundColor: "#1c1c1e",
            },
            headerBackButtonDisplayMode: "minimal",
          }}
        />
      </Stack>
    </ThemeProvider>
  );
}
