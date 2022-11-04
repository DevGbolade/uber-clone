import { Text, View, FlatList, TouchableOpacity, Image } from "react-native";
import React from "react";
import tw from "twrnc";
import { Icon } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectOrigin } from "../features/nav/navSlice";

const data = [
  {
    id: 1,
    title: "Get a ride",
    image: "https://links.papareact.com/3pn",
    screen: "MapScreen",
  },
  {
    id: 2,
    title: "Order food",
    image: "https://links.papareact.com/28w",
    screen: "EatsScreen",
  },
];

const NavOptions = () => {
  const navigation = useNavigation();
  const origin = useSelector(selectOrigin);

  return (
    <View>
      <FlatList
        data={data}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={tw`p-2 pl-6 pb-8 bg-gray-200 m-2 rounded-sm w-40`}
            onPress={() => navigation.navigate(item.screen)}
            // disabled={!origin}`
          >
            <View style={tw`${!false && "opacity-20"}`}>
              <Image
                style={{
                  height: 120,
                  width: 120,
                  resizeMode: "contain",
                }}
                source={{
                  uri: item.image,
                }}
              />
              <Text style={tw`font-semibold mt-2 text-base`}>{item.title}</Text>
              <Icon
                style={tw`p-2 bg-black mt-4 rounded-full w-10`}
                type="antdesign"
                color="white"
                name="arrowright"
              />
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default NavOptions;
