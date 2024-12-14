import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';
import AppNavigator from './navigation/AppNavigator';
import { useColorScheme } from '@/hooks/useColorScheme';
import Mypage from './mybutton';
// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        {/* <Stack.Screen name="mybutton" component={Mypage}/> */}
        <Stack.Screen name="mybutton"/>
        <Stack.Screen name="mytask"/>
        {/* screen component in default export in layout must not have children */}
        <Stack.Screen name="+not-found" />
        <Stack.Screen name="register"/>
        <Stack.Screen name="addtask"/>
        {/* <Stack.Screen name="TaskScreen" component={TaskScreen} /> */}
      </Stack>
      
      <StatusBar style="auto" />
      
    </ThemeProvider>
  );
}
