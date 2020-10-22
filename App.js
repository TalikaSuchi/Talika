// In App.js in a new project
import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Anusuchak from './Anusuchak.js';
import Anusuchi from './Anusuchi.js';
import Suchi from './Suchi.js';
import Menu from './Menu.js';

//Import suchi, anusuchi and anusuchak like normal components
const Stack = createStackNavigator();
function App() {
	//Replace suchicomponent in the component prop for the screen
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Menu" component={Menu} options={{ headerShown: false }} style={{ flex: 1 }} />
				<Stack.Screen name="Suchi" component={Suchi} options={{ headerShown: false }} />
				<Stack.Screen name="Anusuchi" component={Anusuchi} options={{ headerShown: false }} />
				<Stack.Screen name="Anusuchak" component={Anusuchak} options={{ headerShown: false }} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

//To navigate to any of the screens in the Stack do
//this.navigation.navigate("name") for class comp
//navigation.navigate("name") for function comps

export default App;
