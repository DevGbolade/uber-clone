import { View, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NavigateCard from "../components/NavigateCard";
import Map from "../components/Map";
import RideOptionsCard from "../components/RideOptionsCard";
import { Icon } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
const Stack = createNativeStackNavigator();

const MapScreen = () => {
  const { navigate } = useNavigation();
  return (
    <View>
      <TouchableOpacity
        style={tw`absolute top-15 left-8 z-50 p-3 rounded-full shadow-lg bg-gray-100`}
        onPress={() => navigate("HomeScreen")}
      >
        <Icon name="menu" />
      </TouchableOpacity>
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
