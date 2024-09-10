import { useNavigation } from "expo-router";
import { useEffect } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import { version } from "../package.json";
import { Dimensions } from "react-native";
export default function About() {
  const navigation = useNavigation();

  return (
    <ScrollView>

    <View>
      <Image
        source={require("../assets/images/bg.jpg")}
        style={{
          position: "absolute",
          top: 0,
          width: "100%",
          height: Dimensions.get("window").height,
          zIndex: -100,
        }}
      />
      <SafeAreaView style={styles.container}>
        <View style={styles.toolbar}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Entypo name="chevron-left" size={32} color="#FFFFFF" />
          </TouchableOpacity>
          <Text style={styles.toolbarTitle}>About the App</Text>
        </View>
          <Image
            source={require("../assets/images/about_icon.png")}
            style={styles.topImage}
          />
          <Text
            style={{
              color: "#FFFFFF",
              fontFamily: "SpaceGroteskBold",
              fontSize: 16,
            }}
          >
            App Build Version : {version}
          </Text>
          <Text style={styles.paragraph}>
            My Video Player is designed to provide high-quality, protected
            content from our trusted partner video hosts. Whether you're
            accessing educational materials, entertainment, or any other
            exclusive videos, our player ensures a seamless and secure viewing
            experience.
          </Text>
          <Text style={styles.paragraph}>
            Our app leverages cutting-edge technology to maintain the integrity
            and confidentiality of the streamed content, allowing you to enjoy
            premium videos without worrying about unauthorized access or piracy.
          </Text>
          <Text style={styles.paragraph}>
            With My Video Player, you get the best of both worlds: top-tier
            video quality and robust protection.
          </Text>
          <Text style={styles.paragraph}>
            Discover the future of video streaming with Inkrypt Videos and enjoy
            the content you love with peace of mind.
          </Text>
      </SafeAreaView>
    </View>
    </ScrollView>

  );
}

const styles = StyleSheet.create({
  container: {
    margin: 16,
  },
  toolbar: {
    flexDirection: "row",
    paddingVertical: 40,
  },
  toolbarTitle: {
    fontFamily: "SpaceGroteskBold",
    fontSize: 20,
    color: "#FFFFFF",
  },
  topImage: {
    width: "100%",
    resizeMode: "contain",
    height: 122,
    marginBottom: 24
  },
  paragraph: {
    fontFamily: "SpaceGrotesk",
    fontSize: 16,
    color: "#FFFFFF",
    marginTop: 16,
  },
});
