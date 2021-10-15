import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import FlatListScreen from "./src/screens/FlatListScreen";
import SectionListScreen from "./src/screens/SectionListScreen";
import ImageScreen from "./src/screens/ImageScreen";
import FlexBoxExamplesScreen from "./src/FlexBoxExamples/FlexBoxExamplesScreen";
import FlexUsesScreen from "./src/FlexBoxExamples/FlexUsesScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    FlatList: FlatListScreen,
    SectionedList: SectionListScreen,
    Image: ImageScreen,
    FlexBoxExScreen: FlexBoxExamplesScreen,
    AppFlexUsesScreen: FlexUsesScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
