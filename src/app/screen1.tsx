import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function Screen1() {
  const router = useRouter();

  function gotoNext() {
    router.navigate("/screen2");
  }
  return (
    <View style={{flex:1,justifyContent:"center",alignItems:"center",}}>
      <TouchableOpacity
        onPress={gotoNext}
        style={{
          backgroundColor: "#007AFF",
          paddingVertical: 12,
          paddingHorizontal: 24,
          borderRadius: 8,
        }}
      >
        <Text>Go to next</Text>
      </TouchableOpacity>
    </View>
  );
}
