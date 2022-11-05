import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useRef } from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import tw from "twrnc";
import { useDispatch, useSelector } from "react-redux";
import {
  selectDestination,
  selectOrigin,
  setTravelTimeInformation,
} from "../features/nav/navSlice";
import MapViewDirections from "react-native-maps-directions";
import { GOOGLE_MAPS_KEY } from "@env";

const Map = () => {
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);
  const mapRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!origin || !destination) return;
    mapRef.current.fitToSuppliedMarkers(["origin", "destination"], {
      edgePadding: {
        top: 50,
        right: 50,
        bottom: 50,
        left: 50,
      },
    });
  }, [origin, destination]);

  useEffect(() => {
    const getDistance = async () => {
      if (!origin || !destination) {
        return;
      }
      const URL = `https://maps.googleapis.com/maps/api/distancematrix/json?destinations=${destination?.description}&origins=${origin?.description}&units=imperial&key=${GOOGLE_MAPS_KEY}`;
      fetch(URL)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          dispatch(setTravelTimeInformation(data.rows[0].elements[0]));
        })
        .catch((error) => {
          console.log({ error });
        });
    };
    getDistance();
  }, [origin, destination, GOOGLE_MAPS_KEY]);

  return (
    <MapView
      ref={mapRef}
      // provider={PROVIDER_GOOGLE}
      style={tw`flex-1`}
      mapType="mutedStandard"
      region={{
        latitude: origin.location.lat,
        longitude: origin.location.lng,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
    >
      {origin && destination && (
        <MapViewDirections
          origin={origin?.description}
          destination={destination?.description}
          apikey={GOOGLE_MAPS_KEY}
          strokeColor="black"
          strokeWidth={3}
        />
      )}
      {origin?.location && (
        <Marker
          coordinate={{
            latitude: origin.location.lat,
            longitude: origin.location.lng,
          }}
          title="Origin"
          description={origin.description}
          identifier="origin"
        />
      )}
      {destination?.location && (
        <Marker
          coordinate={{
            latitude: destination.location.lat,
            longitude: destination.location.lng,
          }}
          title="Destination"
          description={destination.description}
          identifier="destination"
        />
      )}
    </MapView>
  );
};

export default Map;
