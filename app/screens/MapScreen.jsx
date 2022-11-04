import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import tw from "twrnc";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NavigateCard from "../components/NavigateCard";
import Map from "../components/Map";
import RideOptionsCard from "../components/RideOptionsCard";
const Stack = createNativeStackNavigator();

const MapScreen = () => {
  return (
    <View>
      <View style={tw`h-1/2`}>
        <Map />
      </View>
      <View style={tw`h-1/2`}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="NavigateCard" component={NavigateCard} />
          <Stack.Screen name="RideOptionsCard" component={RideOptionsCard} />
        </Stack.Navigator>
      </View>
    </View>
  );
};

export default MapScreen;
