import React from "react";
import { View, Text, Image, Button, TouchableOpacity } from "react-native";
import SwipeGesture from "react-native-swipe-gestures";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";
const RideScreen01 = () => {
  const navigation = useNavigation();
  const [fontsLoaded] = useFonts({
    "Inter-Black": require("../../../assets/fonts/Baloo2-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  const handleButtonPress = () => {
    navigation.navigate("RideScreen02");
  };
  const onSwipeLeft = () => {
    navigation.navigate("RideScreen02");
  };

  const config = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 80,
  };

  return (
    <SwipeGesture
      onSwipeLeft={onSwipeLeft}
      config={config}
      style={{ flex: 1, backgroundColor: "#F0195F" }}
    >
      <View className="bg-[#ec195e] h-[100%] ">
        <View className="flex items-center py-5 h-[100%] rounded-tr-3xl absolute right-3 bg-[#0104b1] rounded-br-[200px] left-0">
          <View
            style={{
              // borderWidth: 2,
              // marginTop: -120,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* Add your logo image here */}
            <Image
              source={require("../../../assets/images/map-logo.png")}
              style={{
                width: 90,
                height: 90,
              }}
              resizeMode="contain"
            />
            {/* Your existing onboarding content */}
            <Image
              source={require("../../../assets/images/map.png")}
              style={{ width: 310, height: 310 }}
              resizeMode="contain"
            />
          </View>
          <View className="w-52 mt-2">
            <Text
              className="text-white text-4xl pt-2 font-semibold text-center"
              style={{ fontFamily: "Inter-Black" }}
            >
              Available scooters
            </Text>
          </View>
          <View className="w-64">
            <Text
              className="text-white text-center px-5 pt-2 text-[16px]"
              style={{ fontFamily: "Inter-Black" }}
            >
              Search for available scooters around you on a handy interactive
              map
            </Text>
          </View>
          <View className="w-64 pt-10 flex flex-row gap-2 justify-center ">
            <Text className="w-2 h-2 rounded-full bg-white"></Text>
            <Text className="w-2 h-2 rounded-full bg-[#d1d1d194] "></Text>
            <Text className="w-2 h-2 rounded-full bg-[#d1d1d194] "></Text>
          </View>
        </View>

        <View className=" mt-10 absolute bottom-5  right-1">
          <TouchableOpacity onPress={handleButtonPress}>
            <Text className="text-white text-center text-[20px] p-3 uppercase rounded-full ">
              <Image
                source={require("../../../assets/right-click.png")}
                // style={{ width: 90, height: 90 }}
                className="w-[20px] h-[30px]"
                resizeMode="contain"
              />
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SwipeGesture>
  );
};

export default RideScreen01;
