import { useContext, useLayoutEffect } from "react";
import { View,Text,StyleSheet,Image,ScrollView, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import IconButton from "../components/IconButton";
import List from "../components/MealDetail/List";
import Subtitle from "../components/MealDetail/Subtitle";
import MealDetails from "../components/MealDetails";
import { MEALS } from "../data/dummy-data";
import { addFavorite,removeFavorites } from "../store/redux/favorites";
// import { FavoritesContext } from "../store/context/Favorites-context";

function MealDetailScreen({route,navigation}){

    // const favoriteMealsCtx=useContext(FavoritesContext);
    const favoriteMealIds = useSelector((state)=>state.favoriteMeals.ids);
    const dispatch=useDispatch();


    const mealId=route.params.mealId;
    const selectedMeal=MEALS.find((meals)=>meals.id===mealId);

    // const mealIsFavorite = favoriteMealsCtx.ids.includes(mealId);
    const mealIsFavorite = favoriteMealIds.includes(mealId);


    function changeFavoriteStatusHandler(){
        if(mealIsFavorite){ 
            // favoriteMealsCtx.removeFavorites(mealId);
            dispatch(removeFavorites({id : mealId}));

        } else{
            // favoriteMealsCtx.addFavorites(mealId);
            dispatch(addFavorite({id : mealId}));

        }
    }

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerRight:()=>{
                return (
                    <IconButton 
                        onPress={changeFavoriteStatusHandler} 
                        icon={mealIsFavorite ? 'star' :'star-outline'}
                        color='white'
                />
                );
            }
        })
    },[navigation,changeFavoriteStatusHandler]);

    return(
        <ScrollView style={styles.rootContainer} >
            <View >
                <Image style={styles.image} source={{uri:selectedMeal.imageUrl}} />
                <Text style={styles.title}>{selectedMeal.title}</Text>
            </View>
            <MealDetails
                 duration={selectedMeal.duration}
                 complexity={selectedMeal.complexity}
                 affordability={selectedMeal.affordability} 
                 textStyle={styles.detailText}
                 />
            <View style={styles.listOuterContainer}>
                <View style={styles.listContainer}>
                    <Subtitle>Ingredients</Subtitle>
                    <List data={selectedMeal.ingredients}/>
                    <Subtitle>Steps</Subtitle>
                    <List data={selectedMeal.steps}/>
                </View>
            </View>
        </ScrollView>
    );
}

export default MealDetailScreen;
const styles=StyleSheet.create({
    rootContainer:{
        marginBottom:6,
    },
    image:{
        width:'100%',
        height:250,
    },
    title:{
        fontSize:24,
        fontWeight:'bold',
        margin:8,
        textAlign:'center',
        color:'white'
    },
    detailText:{
        color:'white',
    },
    listOuterContainer:{
        alignItems:'center',
    },
    listContainer:{
        width:'80%',
    },
    
});