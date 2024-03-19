import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavoritesScreen from './screens/FavoritesScreen';
import {Ionicons} from '@expo/vector-icons';
// import FavoritesContextProvider from './store/context/Favorites-context';
import { Provider } from 'react-redux';
import { store } from './store/redux/store';
 

const Stack=createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator(){
  return <Drawer.Navigator screenOptions={{ 
    headerStyle:{backgroundColor:'#641a09'},
    headerTintColor:'white',
    sceneContainerStyle:{backgroundColor:'#c59494'},
    drawerContentStyle:{backgroundColor:'#581414cc'},
    drawerInactiveTintColor:'white',
    drawerActiveBackgroundColor:'#f5bcbc',
    drawerActiveTintColor:'#650707',
    }}>

      
    <Drawer.Screen 
      name='categories' 
      component={CategoriesScreen}
      options={{
        title:'All Categorires',
        drawerIcon:({color,size})=><Ionicons name='list' color={color} size={size}  />,
      }}
      />
    <Drawer.Screen name='Favorite-Screen' component={FavoritesScreen}
    options={{
      drawerIcon:({color,size}) =><Ionicons name='star' color={color} size={size} />
    }} />
  </Drawer.Navigator>
}

export default function App() {
  return (
    <>
    <StatusBar style='light'/>
    {/* <FavoritesContextProvider> */}
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
                  headerStyle:{backgroundColor:'#641a09'},
                  headerTintColor:'white',
                  contentStyle:{backgroundColor:'#c59494'}
      }}>
        <Stack.Screen 
          name='Drawer' 
          component={DrawerNavigator} 
          options={{
            // title:'All Categories',
            headerShown:false,
          }}
          />
        <Stack.Screen 
        name='MealsOverview' 
        component={MealsOverviewScreen} 
        // options={({route,navigation})=>{
        //   const catId=route.params.categoryId;
        //   return {
        //     title:catId,
        //   };
        // }}

        />
        <Stack.Screen 
        name='MealDetail' 
        component={MealDetailScreen}
        options={{title:'About the Meal'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
    {/* </FavoritesContextProvider> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    
  },
});
