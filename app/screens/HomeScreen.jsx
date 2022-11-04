import { StyleSheet, SafeAreaView, View, Image } from "react-native";
import React from "react";
import tw from "twrnc";
import NavOptions from "../components/NavOptions";
import { GOOGLE_MAPS_KEY } from "@env";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useDispatch } from "react-redux";
import { setOrigin, setDestination } from "../features/nav/navSlice";
import NavFavorites from "../components/NavFavorites";
const HomeScreen = () => {
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={tw`bg-white flex  h-full`}>
      <View style={tw`p-5`}>
        <Image
          style={{
            height: 100,
            width: 100,
            resizeMode: "contain",
          }}
          source={{
            uri: "https://links.papareact.com/gzs",
          }}
        />
        <GooglePlacesAutocomplete
          placeholder="Where from?"
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
          fetchDetails={true}
          onPress={(data, details = null) => {
            dispatch(
              setOrigin({
                location: details.geometry.location,
                description: data.description,
              })
            );
            dispatch(setDestination(null));
          }}
          query={{
            key: GOOGLE_MAPS_KEY,
            language: "en",
          }}
          styles={{
            container: {
              flex: 0,
            },
            textInput: {
              fontSize: 18,
            },
          }}
          enablePoweredByContainer={false}
          minLength={2}
        />
        <NavOptions />
        <NavFavorites />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
