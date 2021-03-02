import React from 'react';
import {View, StyleSheet} from 'react-native';
import {enableScreens} from 'react-native-screens';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from 'react-native-screens/native-stack';
import {Button} from '../shared';

enableScreens();

type StackParamList = {
  Main: undefined;
  Detail: undefined;
};

interface MainScreenProps {
  navigation: NativeStackNavigationProp<StackParamList, 'Main'>;
}

const MainScreen = ({navigation}: MainScreenProps): JSX.Element => (
  <View style={styles.container}>
    <Button
      title="Go to detail"
      onPress={() => navigation.navigate('Detail')}
    />
    <Button onPress={() => navigation.pop()} title="🔙 Back to Examples" />
  </View>
);

interface DetailScreenProps {
  navigation: NativeStackNavigationProp<StackParamList, 'Detail'>;
}

const DetailScreen = ({navigation}: DetailScreenProps): JSX.Element => (
  <View style={styles.container}>
    <Button title="Go back" onPress={() => navigation.goBack()} />
  </View>
);

const Stack = createNativeStackNavigator<StackParamList>();

const App = (): JSX.Element => (
  <Stack.Navigator
    screenOptions={{
      statusBarStyle: 'dark',
    }}>
    <Stack.Screen
      name="Main"
      component={MainScreen}
      options={{title: 'Simple Native Stack'}}
    />
    <Stack.Screen name="Detail" component={DetailScreen} />
  </Stack.Navigator>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
  },
});

export default App;