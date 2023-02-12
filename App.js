import { Text, View, TextInput, StyleSheet, Image, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import bruschettaImage from './images/bruschetta.png';
import * as SplashScreen from 'expo-splash-screen';

function HomeScreen({ navigation }) {

  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Bruschetta Recipe</Text>
      <Image source={bruschettaImage} />
      <TextInput style={styles.input}
          placeholder="Enter the Number Of Servings"
          onChangeText={text => setText(text)}
          defaultValue={text} />
      <Pressable
        onPress={() => {
          navigation.navigate(' ', {
            //set numbers here
            numberOfServings: text
          });
        }}>
          {({ pressed }) => (
          <Text style={styles.button}>View Recipe</Text>
        )}
        </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

function DetailsScreen({ route, navigation }) {
  /* 2. Get the param */
  const { numberOfServings } = route.params;
  return (
    <View style={styles.container}>
      <View>
      <Text style={styles.heading}>Bruschetta</Text>
      </View>
      <View>
      <Text style={styles.subHeading}>Ingredients</Text>
      <Text style={styles.detailsText}>{JSON.stringify(numberOfServings * 4)} plum tomatoes</Text>
      <Text style={styles.detailsText}>{JSON.stringify(numberOfServings * 6)} basil leaves</Text>
      <Text style={styles.detailsText}>{JSON.stringify(numberOfServings * 3)} garlic cloves, chopped</Text>
      <Text style={styles.detailsText}>{JSON.stringify(numberOfServings * 3)} TB olive oil</Text>
      </View>
      <View style={styles.detailsView}><Text style={styles.subHeading}>Directions</Text>
      <Text style={styles.detailsText}>Combine the ingredients, add salt to taste. 
      Top French bread slices with mixture</Text></View>
      <StatusBar style="auto" />
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {

  SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 2000);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Healthy Recipes" component={HomeScreen} 
        options={{
            title: 'Healthy Recipes',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
          }}/>
        <Stack.Screen name=" " component={DetailsScreen} options={{
            title:'',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
          }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    color: 'white',
    padding: 10,
    alignCItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'grey',
  },
  heading: {
    top: -40,
    fontSize: 35,
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
  },
  input: {
    padding: 40,
    alignCItems: 'center',
    justifyContent: 'center',
    fontSize: 18,
    textAlign: 'center',
  },
  subHeading: {
    paddingTop: 0,
    fontSize: 30,
    left: -30,
  },
  detailsText: {
    alignContent: 'center',
    fontSize: 21,
    width: 300,
  },
  detailsView: {
    paddingTop: 60,
  }
  });