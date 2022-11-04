import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Icon } from "@rneui/themed";
import tw from "twrnc";

const data = [
  {
    id: 1,
    icon: "home",
    location: "Home",
    destination: "Code street, London, uk",
  },
  {
    id: 2,
    icon: "briefcase",
    location: "Work",
    destination: "London eye, London, uk",
  },
];
const NavFavorites = () => {
  return (
    <FlatList
      //   horizontal
      ItemSeparatorComponent={() => <View style={tw`bg-gray-200 h-[0.5px]`} />}
      keyExtractor={(item) => item.id}
      data={data}
      renderItem={({ item }) => (
        <TouchableOpacity style={tw`flex-row items-center p-5 `}>
          <Icon
            style={tw`mr-4 rounded-full bg-gray-300 p-3 `}
            type="ionicon"
            name={item.icon}
            color="white"
            size={18}
          />
          <View>
            <Text style={tw`font-semibold text-lg`}>{item.location}</Text>
            <Text style={tw`text-gray-500 `}>{item.destination}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavFavorites;

const styles = StyleSheet.create({});
