import { useLayoutEffect } from "react";
import { View,Text,StyleSheet,Image,ScrollView, Button } from "react-native";
import IconButton from "../components/IconButton";
import List from "../components/MealDetail/List";
import Subtitle from "../components/MealDetail/Subtitle";
import MealDetails from "../components/MealDetails";
import { MEALS } from "../data/dummy-data";

function MealDetailScreen({route,navigation}){
    const mealId=route.params.mealId;

    const selectedMeal=MEALS.find((meals)=>meals.id===mealId);
    function headerButtonPressedHandler(){
        console.log('button presss');
    }

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerRight:()=>{
                return <IconButton onPress={headerButtonPressedHandler} icon='star' color='white' />
            }
        })
    },[navigation,headerButtonPressedHandler]);

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