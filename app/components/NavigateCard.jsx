import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_KEY } from "@env";
import React from "react";
import tw from "twrnc";
import { useDispatch } from "react-redux";

import { setOrigin, setDestination } from "../features/nav/navSlice";
import { useNavigation } from "@react-navigation/native";
import NavFavorites from "./NavFavorites";
import { Icon } from "@rneui/themed";

const NavigateCard = () => {
  const dispatch = useDispatch();
  const { navigate } = useNavigation();

  const handlePress = (data, details = null) => {
    dispatch(
      setDestination({
        location: details.geometry.location,
        description: data.description,
      })
    );
    navigate("RideOptionsCard");
  };

  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <Text style={tw`text-center py-5 text-xl font-semibold`}>
        Good morning, Agbolade{" "}
      </Text>
      <View style={tw`border-t border-gray-100 flex-shrink`}>
        <View>
          <GooglePlacesAutocomplete
            placeholder="Where to?"
            nearbyPlacesAPI="GooglePlacesSearch"
            debounce={400}
            fetchDetails={true}
            query={{
              key: GOOGLE_MAPS_KEY,
              language: "en",
            }}
            styles={styles}
            enablePoweredByContainer={false}
            minLength={2}
            returnKeyType="search"
            onPress={handlePress}
          />
        </View>
        <NavFavorites />
      </View>
      <View
        style={tw`flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100`}
      >
        <TouchableOpacity
          style={tw`flex flex-row justify-between bg-black w-24 px-4 py-3 rounded-full`}
          onPress={() => navigate("RideOptionsCard")}
        >
          <Icon
            style={tw``}
            type="font-awesome"
            color="white"
            name="car"
            size={16}
          />
          <Text style={tw`text-white text-center`}>Rides</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={tw`flex flex-row justify-between  w-24 px-4 py-3 rounded-full`}
        >
          <Icon
            style={tw``}
            type="ionicon"
            color="black"
            name="fast-food-outline"
            size={16}
          />
          <Text style={tw`text-black text-center`}>Eats</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default NavigateCard;

const styles = StyleSheet.create({
  container: {
    flex: 0,
    paddingTop: 20,
    backgroundColor: "#fff",
  },
  textInput: {
    backgroundColor: "#DDDDDF",
    borderRadius: 0,
    fontSize: 18,
  },
  textInputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 0,
  },
});
