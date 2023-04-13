import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import tw from "twrnc";
import Map from "../compnents/Map";
import { createStackNavigator } from "@react-navigation/stack";
import NavigateCard from "../compnents/NavigateCard";
import RideOptionCard from "../compnents/RideOptionCard";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

const MapScreen = () => {
  const Stack = createStackNavigator();
  const navigate = useNavigation();
  return (
    <View>
      <View style={tw`h-1/2`}>
        <TouchableOpacity
          onPress={() => navigate.navigate("HomeScreen")}
          style={tw`absolute top-16 bg-gray-100 z-50 left-8 shadow-lg rounded-full`}
        >
          <Icon name="menu"></Icon>
        </TouchableOpacity>
        <Map />
      </View>
      <View style={tw`h-1/2`}>
        <Stack.Navigator>
          <Stack.Screen
            name="NavigateCard"
            component={NavigateCard}
            options={{ headerShown: false }}
          ></Stack.Screen>
          <Stack.Screen
            name="RideOptionCard"
            component={RideOptionCard}
            options={{ headerShown: false }}
          ></Stack.Screen>
        </Stack.Navigator>
      </View>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({});
