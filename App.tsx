import { StatusBar } from "expo-status-bar";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { MotiView } from "moti"

import "./global.css";

export default function App() {
  return (
    <SafeAreaView className="flex-1 flex justify-center bg-black/95">
      <Text className="w-full py-3 text-center android:text-blue-400 ios:text-green-400 font-semibold text-lg">
        React 19 + Expo 54 + NativeWind v4!
      </Text>
      <View className="flex-row flex-wrap content-start p-3 gap-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <View
            key={index}
            className="h-32 w-[48%] flex-grow rounded-md border bg-blue-400/20 ios:bg-green-400/20 border-blue-400/40 ios:border-green-400/40"
          />
        ))}
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

