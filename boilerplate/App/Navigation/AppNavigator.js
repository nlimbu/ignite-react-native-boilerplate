// import { Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import { StackNavigator } from 'react-navigation';

import LaunchScreen from '../Components/LaunchScreen';
import AboutUs from '../Components/AboutUs';

const checkDuplicateNavigation = (action, state) => {
  if (action.type === "Navigation/NAVIGATE") {
    const { routeName } = action
    if (routeName === state.routes[state.index].routeName) {
      // console.log(`Stopping duplicate navigation action...`)
      return true;
    }
  }
  return false;
}

/**
 *
 */
const AppNavigator = StackNavigator(
  {
    LaunchScreen: { screen: LaunchScreen },
    AboutUs: { screen: AboutUs },
  },
  {
    initialRoute: 'LaunchScreen',
    headerMode: 'none',
    cardStyle: { backgroundColor: '#fff' },
    // transitionConfig: () => ({ screenInterpolator: CardStackStyleInterpolator.forHorizontal }),
  }
);
const HomeScreenStateForAction = AppNavigator.router.getStateForAction;

AppNavigator.router.getStateForAction = (action, state) => (checkDuplicateNavigation(action, state) ? state : HomeScreenStateForAction(action, state));

export default AppNavigator;
