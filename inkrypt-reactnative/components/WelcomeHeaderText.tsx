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

export default function WelcomeHeaderText() {
    return (
      <View>
        <Text
          style={{
            fontFamily: "SpaceGroteskBold",
            fontSize: 30,
            textAlign: "center",
            color: "#FFFFFF",
          }}
        >
          Welcome to my{" "}
          <Text
            style={{
              fontFamily: "SpaceGroteskBold",
              fontSize: 30,
              color: "#00FFFF",
            }}
          >
            video player
          </Text>
        </Text>
        <Text
          style={{
            fontFamily: "SpaceGrotesk",
            fontSize: 16,
            textAlign: "center",
            color: "#FFFFFF",
            marginTop: 32,
            marginHorizontal: 32
          }}
        >
          Ensure your privacy and keep your content safe and secure.
        </Text>
      </View>
    );
  }