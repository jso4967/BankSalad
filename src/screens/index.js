
import React from 'react';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import DashBoardScreen from './DashBoardScreen/';
import AccountBookScreen from './AccountBookScreen';
import FinancialSecretaryScreen from './FinancialSecretaryScreen';
import JaeTechScreen from './JaeTechScreen';
import MoreScreen from './MoreScreen';
import SplashScreen from './SplashScreen '

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/FontAwesome';



// const RootStack = createStackNavigator(
//     {
//         HomeScreen : {screen: HomeScreen},
//     },
//     {
//         defaultNavigationOptions: ({ navigation }) => ({
//             title: navigation.state.index,
//         }),
//         initialRouteName: 'HomeScreen'
//     }
// );

const TabNavigator = createBottomTabNavigator(
    {
        My금융: DashBoardScreen,
        가계부: AccountBookScreen,
        금융비서: FinancialSecretaryScreen,
        재테크: JaeTechScreen,
        더보기: MoreScreen,
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                let icon = 'money';
                switch (routeName) {
                    case 'My금융':
                        return <FontAwesome5 size={25} color={focused && "#46c3ad" || "#888"} name={'money-bill'} />;
                    case '가계부':
                        icon = "exchange";
                        break;
                    case '재테크':
                        icon = "star";
                        break;
                    case '금융비서':
                        icon = "signal";
                        break;
                    case '더보기':
                        icon = "ellipsis-h";
                        break;

                }
                return <Icon name={icon} size={25} color={focused && "#46c3ad" || "#888"} />
            },
            tabBarTestID: navigation.state.routeName,
        }),
        lazy: false,
        tabBarOptions: {
            activeTintColor: "#46c3ad",
            inactiveTintColor: "#888",

        },

    }
);



export default createAppContainer(createSwitchNavigator({
    SplashScreen: SplashScreen,
    TabNavigator: TabNavigator
},
    {
        initialRouteName: "SplashScreen"
   
    }));

// export default createAppContainer(TabNavigator);