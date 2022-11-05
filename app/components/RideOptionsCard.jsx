import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import React from "react";
import tw from "twrnc";
import { Icon } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectTravelTimeInformation } from "../features/nav/navSlice";

const data = [
  {
    id: "Uber-X-I878",
    title: "Uber X",
    multiplier: 1,
    img: "https://links.papareact.com/3pn",
  },
  {
    id: "Uber-X-I8998",
    title: "Uber XL",
    multiplier: 1.2,
    img: "https://links.papareact.com/5w8",
  },
  {
    id: "Uber-LUX-I866",
    title: "Uber LUX",
    multiplier: 1.75,
    img: "https://links.papareact.com/7pf",
  },
];

// When there is surge
const SURGE_PRICE = 1.5;

const RideOptionsCard = () => {
  const { navigate } = useNavigation();
  const [selected, setSelected] = useState(null);

  const travelTimeInformation = useSelector(selectTravelTimeInformation);
  console.log(travelTimeInformation);

  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>
      <View>
        <TouchableOpacity
          style={tw`absolute top-1 left-5 p-2 rounded-full bg-white shadow-lg`}
          onPress={() => navigate("NavigateCard")}
        >
          <Icon name="chevron-left" type="fontawesome" />
        </TouchableOpacity>
        <Text style={tw`text-center font py-3 text-base`}>
          Select a ride - {travelTimeInformation?.distance?.text}
        </Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={({ id }) => id}
        renderItem={({ item: { id, img, title, multiplier }, item }) => (
          <TouchableOpacity
            style={tw`flex flex-row justify-between items-center px-10 ${
              id === selected?.id && "bg-gray-300"
            }`}
            onPress={() => setSelected(item)}
          >
            <Image
              style={{
                width: 100,
                height: 90,
                rizeMode: "contian",
              }}
              source={{ uri: img }}
            />
            <View>
              <Text style={tw`text-xl font-semibold`}>{title}</Text>
              <Text style={tw`text-xs `}>
                {travelTimeInformation?.duration?.text} Travel time
              </Text>
            </View>
            <Text style={tw`text-base `}>
              {new Intl.NumberFormat("en-gb", {
                style: "currency",
                currency: "NGN",
              }).format(
                travelTimeInformation?.duration?.value *
                  SURGE_PRICE *
                  multiplier
              )}
            </Text>
          </TouchableOpacity>
        )}
      />
      <View style={tw`mt-auto border-t border-gray-200`}>
        <TouchableOpacity disabled={!selected} style={tw`bg-black py-3 m-3`}>
          <Text style={tw`text-xl text-center text-white`}>
            Choose {selected?.title}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RideOptionsCard;

const styles = StyleSheet.create({});
