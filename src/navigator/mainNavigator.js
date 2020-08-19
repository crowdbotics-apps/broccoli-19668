import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList92169Navigator from '../features/ArticleList92169/navigator';
import Maps92156Navigator from '../features/Maps92156/navigator';
import Maps92134Navigator from '../features/Maps92134/navigator';
import Add-Item92133Navigator from '../features/Add-Item92133/navigator';
import Maps92129Navigator from '../features/Maps92129/navigator';
import UserProfile92125Navigator from '../features/UserProfile92125/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList92169: { screen: ArticleList92169Navigator },
Maps92156: { screen: Maps92156Navigator },
Maps92134: { screen: Maps92134Navigator },
Add-Item92133: { screen: Add-Item92133Navigator },
Maps92129: { screen: Maps92129Navigator },
UserProfile92125: { screen: UserProfile92125Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
