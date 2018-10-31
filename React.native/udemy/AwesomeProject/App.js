import { Navigation } from "react-native-navigation";

import AuthScreen from "./src/screens/Auth/Auth";
import SharePlaceScreen from "./src/screens/SharePlace/SharePlace";
import FindPlaceScreen from "./src/screens/FindPlace/FindPlace";

// Register Screens
Navigation.registerComponent("AwesomeProject.AuthScreen", () => AuthScreen);
Navigation.registerComponent("AwesomeProject.SharePlaceScreen", () => SharePlaceScreen);
Navigation.registerComponent("AwesomeProject.FindPlaceScreen", () => FindPlaceScreen);

// Start a App
Navigation.startSingleScreenApp({
    screen: {
        screen: "AwesomeProject.AuthScreen",
        title: "Login"
    }
});