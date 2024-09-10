import { Href, Link, useNavigation } from "expo-router";
import { useEffect } from "react";
import {
  StyleSheet,
  Image,
  Platform,
  View,
  Text,
  TouchableOpacity,
  Pressable,
  Alert,
  FlatList,
  ImageSourcePropType,
  Touchable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import DATA from "./data";
import { Dimensions } from "react-native";

type ItemProps = {
  title: string;
  route: Href;
  imagePath: ImageSourcePropType;
};

const Item = ({ title, route, imagePath }: ItemProps) => (
  <Link href={route} asChild>
    <TouchableOpacity>
      <View style={styles.item}>
        <Text style={styles.itemTitle}>{title}</Text>
        <Image source={imagePath} style={styles.itemImage} />
      </View>
    </TouchableOpacity>
  </Link>
);

export default function Features() {
  return (
    <View>
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
        <Text style={styles.title}>Unlock Secure Streaming</Text>

        <FlatList
          data={DATA}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <Item
              title={item.title}
              route={item.route as Href}
              imagePath={item.imagePath}
            />
          )}
          contentContainerStyle={{ paddingBottom: 300 }}
        />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 16,
  },
  title: {
    fontFamily: "SpaceGroteskBold",
    fontSize: 30,
    textAlign: "center",
    color: "#FFFFFF",
    paddingVertical: 16,
  },
  item: {
    backgroundColor: "#00000010",
    flexDirection: "column",
    alignItems: "center",
    display: "flex",
    borderRadius: 30,
    borderWidth: 0.5,
    borderColor: "#2ECFF2",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  itemTitle: {
    color: "#FFFFFF",
    fontFamily: "SpaceGroteskBold",
    fontSize: 20,
  },
  itemImage: {
    marginTop: 16,
    width: "100%",
    resizeMode: "contain",
    height: 122,
  },
});
