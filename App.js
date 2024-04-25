import { FlatList, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Foundation from 'react-native-vector-icons/Foundation';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import 'react-native-gesture-handler';
import Login from './src/Login';
import Signup from './src/Signup';
import profile from './src/Profile';
import Home from './src/Home';
import Flatlist from './src/Flatlist';
import Drawer from './src/Drawer';
import Homee from './src/Instagram/Homee';
import Postt from './src/Instagram/Postt';
import Searchh from './src/Instagram/Searchh';
import Reelss from './src/Instagram/Reelss';
import Profilee from './src/Instagram/Profilee';
import { black } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';


function list() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      {/* <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Login" component={Login} /> */}
      {/* <Stack.Screen name="Profile" component={profile} options={{ statusBarColor: 'white' }} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name='Flatlist' component={Flatlist} /> */}
      {/* <Stack.Screen name='Drawer' component={Drawer} /> */}
      <Stack.Screen name='Homee' component={Homee} />
      <Stack.Screen name='Postt' component={Postt} />
      <Stack.Screen name='Searchh' component={Searchh} />
      <Stack.Screen name='Reelss' component={Reelss} />
      <Stack.Screen name='Profilee' component={Profilee} />
    </Stack.Navigator>
  )
}


export default function App() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false, tabBarShowLabel: false, }}>
        <Tab.Screen name="Home" component={Homee} options={{ tabBarIcon: ({ focused }) => <Ionicons name={"home"} size={focused ? 30 : 25} color={focused ? '#555555' : 'black'} /> }} />
        <Tab.Screen name="Search" component={Searchh} options={{ tabBarIcon: ({ focused }) => <Ionicons name={"search"} size={focused ? 30 : 25} color={focused ? '#555555' : 'black'} />, headerShown: false, }} />
        <Tab.Screen name=" New post" component={Postt} options={{ tabBarIcon: ({ focused }) => <Feather name={"plus-square"} size={focused ? 30 : 25} color={focused ? '#555555' : 'black'} />, headerShown: true }} />
        <Tab.Screen name="Reels" component={Reelss} options={{ tabBarIcon: ({ focused }) => <MaterialCommunityIcons name={"movie-open-play-outline"} size={focused ? 30 : 25} color={focused ? '#555555' : 'black'} /> }} />
        <Tab.Screen name="Profile" component={Profilee} options={{ tabBarIcon: ({ focused }) => <FontAwesome5 name={"user-circle"} size={focused ? 30 : 25} color={focused ? '#555555' : 'black'} /> }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}



