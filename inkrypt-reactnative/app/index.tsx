import Ionicons from "@expo/vector-icons/Ionicons";
import {
  StyleSheet,
  Image,
  Platform,
  View,
  Text,
  TouchableOpacity,
  Pressable,
  Alert,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { Link, useNavigation } from "expo-router";
import WelcomeHeaderText from "@/components/WelcomeHeaderText";
import { Dimensions } from "react-native";

export default function Home() {
  const navigation = useNavigation();

  return (
    // <LinearGradient
    //   colors={["#8646EE", "#9909DD", "#3F0B93"]}
    //   start={{ x: 0, y: 0 }}
    //   end={{ x: 1, y: 1 }}
    //   style={{ flex: 1 }}
    // >
    <View style={{ flex: 1 }}>
      <Image
        source={require("../assets/images/bg.jpg")}
        style={{
          position: "absolute",
          top: 0,
          width: "100%",
          height: Dimensions.get("window").height,
        }}
      />
      <SafeAreaView style={styles.container}>
        <WelcomeHeaderText />

        <Image source={require("../assets/images/logo.png")} />

        <Link href="/features" asChild>
          <Pressable style={styles.outlineButton} onPress={() => navigation}>
            <Text style={styles.outlineButtonText}>Get More Information</Text>
            <Image
              style={styles.outlineButtonImage}
              source={require("../assets/images/arrow_up_button.png")}
            />
          </Pressable>
        </Link>
      </SafeAreaView>
    </View>
    // </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 40,
    paddingTop: 100,
  },
  header: {
    flexDirection: "column",
    marginLeft: "16%",
    marginRight: "16%",
  },
  outlineButton: {
    borderColor: "#C08CE0",
    borderWidth: 1.5,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 40,
    paddingHorizontal: 4,
    paddingVertical: 4,
    width: 312,
    height: 50,
  },
  outlineButtonText: {
    flex: 1,
    color: "#FFFFFF",
    fontFamily: "SpaceGroteskBold",
    fontSize: 16,
    textAlign: "center",
  },
  outlineButtonImage: {
    position: "absolute",
    right: 0,
    marginRight: 4,
    height: 40,
    width: 40,
  },
});
