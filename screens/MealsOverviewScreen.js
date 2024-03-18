import { useEffect, useLayoutEffect } from "react";
import { View,Text,StyleSheet ,FlatList} from "react-native";
import MealItem from "../components/MealItem";
import { MEALS ,CATEGORIES} from "../data/dummy-data";


function MealsOverviewScreen({ route,navigation }){
    const catId = route.params.categoryId;

    const displayMeals = MEALS.filter((mealItem)=>{
        return mealItem.categoryIds.indexOf(catId)>=0;
    });
    // useEffect :title loads after screen loaded 
    // for simultaneously execution we use  useLayoutEffect
    useLayoutEffect(()=>{
        const categoryTitle=CATEGORIES.find((category)=>category.id ===catId).title;

        navigation.setOptions({
            title:categoryTitle,
        });
    },[catId,navigation]);


    function renderMealItem(itemData){
        const item=itemData.item;
        const mealItemProps={
            id:item.id,
            title:item.title,
            imageUrl:item.imageUrl,
            affordability:item.affordability,
            complexity:item.complexity,
            duration:item.duration,

        }
        return (
            <MealItem {...mealItemProps} />
        );
    }
    return (
        <View style={styles.container}>
            <FlatList
            data={displayMeals}
            keyExtractor={(item)=>item.id}            
            renderItem={renderMealItem}
            />
        </View>
        
    );

}
  
export default MealsOverviewScreen;
const styles=StyleSheet.create({
    container:{
        flex:1,
        padding:16,
    }

});