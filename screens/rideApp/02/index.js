import React from "react";
import { View, Text, Image, Button, TouchableOpacity } from "react-native";
import SwipeGesture from "react-native-swipe-gestures";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";
const RideScreen02 = () => {
  const navigation = useNavigation();
  const [fontsLoaded] = useFonts({
    "Inter-Black": require("../../../assets/fonts/Baloo2-Bold.ttf"),
  });
  const handleButtonPress = () => {
    navigation.navigate("RideScreen03");
  };
  const onSwipeLeft = () => {
    navigation.navigate("RideScreen03");
  };
  const onSwipeRight = () => {
    navigation.navigate("RideScreen01");
  };

  const config = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 80,
  };

  return (
    <SwipeGesture
      onSwipeLeft={onSwipeLeft}
      onSwipeRight={onSwipeRight}
      config={config}
      style={{ flex: 1, backgroundColor: "#ec195e" }}
    >
      <View className="bg-[#ffa339] h-[100%] ">
        <View className="flex items-center py-5 h-[100%] rounded-tr-3xl absolute right-3 bg-[#ec195e] rounded-br-[200px] left-0">
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
              source={require("../../../assets/images/charge-logo.png")}
              style={{
                width: 90,
                height: 90,
              }}
              resizeMode="contain"
            />
            {/* Your existing onboarding content */}
            <Image
              source={require("../../../assets/images/charge.png")}
              style={{ width: 310, height: 310 }}
              resizeMode="contain"
            />
          </View>
          <View className="w-52 mt-2">
            <Text
              className="text-white text-4xl pt-2 font-semibold text-center"
              style={{ fontFamily: "Inter-Black" }}
            >
              Always full charge
            </Text>
          </View>
          <View className="w-64 mt-2 ">
            <Text
              className="text-white text-center  px-5 pt-2 text-[16px]"
              style={{ fontFamily: "Inter-Black" }}
            >
              You don't need to worry about the scooter charging
            </Text>
          </View>
          <View className="w-64 pt-14 flex flex-row gap-2 justify-center ">
            <Text className="w-2 h-2 rounded-full bg-[#d1d1d194] "></Text>
            <Text className="w-2 h-2 rounded-full bg-white"></Text>
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

export default RideScreen02;
