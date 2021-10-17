import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import FlatListScreen from "./src/screens/FlatListScreen";
import SectionListScreen from "./src/screens/SectionListScreen";
import ImageScreen from "./src/screens/ImageScreen";
import FlexBoxExamplesScreen from "./src/FlexBoxExamples/FlexBoxExamplesScreen";
import FlexUsesScreen from "./src/FlexBoxExamples/FlexUsesScreen";
import FlexDirecionUsagesScreen from "./src/FlexBoxExamples/FlexDirectionUsagesScreen";
import DirectionUsesScreen from "./src/FlexBoxExamples/DirectionUsesScreen";
import CounterScreen from "./src/screens/CounterScreen";
import ColorScreen from "./src/screens/ColorScreen";
import SquareScreen from "./src/screens/SquareScreen";
import LoginScreen from "./src/screens/LoginScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    FlatList: FlatListScreen,
    SectionedList: SectionListScreen,
    Image: ImageScreen,
    FlexBoxExScreen: FlexBoxExamplesScreen,
    AppFlexUsesScreen: FlexUsesScreen,
    AppFleDirectionUsagesScreen: FlexDirecionUsagesScreen,
    DirectionUsesScreen: DirectionUsesScreen,
    AppCounterScreen: CounterScreen,
    AppColorScreen: ColorScreen,
    AppSquareScreen: SquareScreen,
    AppLoginScreen: LoginScreen
  },
  {
    initialRouteName: "Home",
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
