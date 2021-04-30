import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from '../screens/Home';
import Convirt from '../screens/Convirt';

const screens ={

    Home:{
        screen:Home
    },
    Convirt:{
        screen:Convirt
    },
   
   
   
}
const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
