import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import SwipeGesture from "react-native-swipe-gestures";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";
const RideScreen03 = () => {
  const navigation = useNavigation();
  const [fontsLoaded] = useFonts({
    "Inter-Black": require("../../../assets/fonts/Baloo2-Bold.ttf"),
  });
  const handleButtonPress = () => {
    navigation.navigate("RideScreen01");
  };
  const onSwipeRight = () => {
    navigation.navigate("RideScreen02");
  };

  const config = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 80,
  };

  return (
    <SwipeGesture
      onSwipeRight={onSwipeRight}
      config={config}
      style={{ flex: 1, backgroundColor: "#ffa339" }}
    >
      <View className="bg-[#ffa339] w-full py-5 h-screen flex items-center text-white ">
        <View className="flex  items-center">
          <View>
            <Image
              source={require("../../../assets/images/start-logo.png")}
              style={{ width: 90, height: 90 }}
              resizeMode="contain"
            />
          </View>
          <View>
            <Image
              source={require("../../../assets/images/start.png")}
              style={{ width: 310, height: 310 }}
              resizeMode="contain"
            />
          </View>
          <View className="w-48">
            <Text
              className="text-white pt-2 text-4xl font-semibold text-center"
              style={{ fontFamily: "Inter-Black" }}
            >
              Enjoy your ride!
            </Text>
            <Text
              className="text-white text-center pt-2 text-[16px]"
              style={{ fontFamily: "Inter-Black" }}
            >
              You can pay fir rent after finishing your ride
            </Text>
          </View>
          <View className=" mt-10">
            <TouchableOpacity onPress={handleButtonPress}>
              <Text
                className="text-white text-center text-[16px] py-5 uppercase rounded-full px-20 bg-[#3a3dff]"
                style={{ fontFamily: "Inter-Black" }}
              >
                get started
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SwipeGesture>
  );
};

export default RideScreen03;
