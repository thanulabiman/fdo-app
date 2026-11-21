import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Text } from "@/components/ui/text";
import { View } from "@/components/ui/view";
import { useColor } from "@/hooks/useColor";
import { useRouter } from "expo-router";
import { Eye, EyeOff, Lock, LogIn, Mail } from "lucide-react-native";
import { useState } from "react";
import { Pressable } from "react-native";

export default function HomeScreen() {
  const router = useRouter();
  const muted = useColor("muted");

  const [showPassword, setShowPassword] = useState(false);

  return (
    <View>
      <View
        style={{ height: 400, justifyContent: "center", alignItems: "center",}}
      >
        <Text
          style={{
            fontSize: 55,
            textAlign: "center",
          }}
        >
          {"Welcome to\n"}
          <Text
            style={{
              fontSize: 60,
              color: "#0735de",
              fontWeight: 600,
            }}
          >
            StockFlow
          </Text>
        </Text>
      </View>

      <View
        style={{
          gap: 20,
          paddingHorizontal: 20,
        }}
      >
        <View
          style={{
            gap: 10,
          }}
        >
          <Input label="Email" placeholder="Enter your Email" icon={Mail} />

          <Input
            label="Password"
            placeholder="Enter the password"
            secureTextEntry={!showPassword}
            icon={Lock}
            rightComponent={
              <Pressable onPress={() => setShowPassword(!showPassword)}>
                {showPassword ? (
                  <EyeOff size={22} color={muted} />
                ) : (
                  <Eye size={22} color={muted} />
                )}
              </Pressable>
            }
          />
        </View>

        <Button icon={LogIn} onPress={() => {
          router.replace("/(tab)/StockRequest")
        }}>Sign In</Button>
      </View>
    </View>
  );
}
