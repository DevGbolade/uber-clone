import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_KEY } from "@env";
import React from "react";
import tw from "twrnc";
import { useDispatch } from "react-redux";

import { setOrigin, setDestination } from "../features/nav/navSlice";
import { useNavigation } from "@react-navigation/native";
import NavFavorites from "./NavFavorites";

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
      </View>
      <NavFavorites />
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
