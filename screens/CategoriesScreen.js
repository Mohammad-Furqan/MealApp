import { View,FlatList } from "react-native";
import {CATEGORIES} from '../data/dummy-data';
import CategoryGrideTile from '../components/CategoryGridTile';


function CategoriesScreen({navigation}){//special Navigation props, that is provided to those component, which you use as Screen,this navigation value will be a object with the method , can be use to navigate the screen 
    function renderCategoryItem(itemData){ //out side the main function ,because if we put it in main function it will rerender every time when the component re-render
        function pressHandler(){
            navigation.navigate('MealsOverview',{
                categoryId:itemData.item.id,
            }); 
        }
        return (
            <CategoryGrideTile 
               title={itemData.item.title} 
               color={itemData.item.color } 
               onPress={pressHandler} 
               />
               );
    }
   
    return <FlatList 
            data={CATEGORIES}
            keyExtractor={(item)=>item.id}          
            renderItem={renderCategoryItem} 
            numColumns={2} 
            />
}
export default CategoriesScreen;
