import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RideScreen01 from "./screens/rideApp/01";
import RideScreen02 from "./screens/rideApp/02";
import RideScreen03 from "./screens/rideApp/03";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="RideScreen01"
          options={{ headerShown: false }}
          component={RideScreen01}
        />
        <Stack.Screen
          name="RideScreen02"
          options={{ headerShown: false }}
          component={RideScreen02}
        />
        <Stack.Screen
          name="RideScreen03"
          options={{ headerShown: false }}
          component={RideScreen03}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
