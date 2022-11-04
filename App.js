import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { store } from "./app/store";
import HomeScreen from "./app/screens/HomeScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MapScreen from "./app/screens/MapScreen";
import { KeyboardAvoidingView, Platform } from "react-native";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <KeyboardAvoidingView
            style={{
              flex: 1,
            }}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={Platform.OS === "ios" ? "-64" : "0"}
          >
            <Stack.Navigator
              screenOptions={{
                headerShown: false,
              }}
            >
              <Stack.Screen
                options={{
                  headerShown: false,
                }}
                name="HomeScreen"
                component={HomeScreen}
              />
              <Stack.Screen name="MapScreen" component={MapScreen} />
            </Stack.Navigator>
          </KeyboardAvoidingView>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}
