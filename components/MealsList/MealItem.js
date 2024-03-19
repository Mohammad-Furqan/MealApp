import { useNavigation } from "@react-navigation/native";
import { View,Text,StyleSheet ,FlatList,Pressable,Image,Platform} from "react-native";
import MealDetails from "../MealDetails";


function MealItem({id,title,imageUrl,duration,complexity,affordability}){
    const navigation = useNavigation();

    function selectMealItemHandler(){
        navigation.navigate('MealDetail',{
            mealId:id,
        });        
    }

    return (
        <View style={styles.mealItem}>
            <Pressable 
            android_ripple={{color:'#cccccc'}} 
            style={({pressed})=>(pressed ? styles.buttonPressed : null)}
            onPress={selectMealItemHandler}
                >
            
                <View style={styles.innerContainer}>
                    <View>
                        <Image source={{uri:imageUrl}} style={styles.image} />
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <MealDetails 
                        duration={duration} 
                        complexity={complexity} 
                        affordability={affordability} 
                        
                        />
                </View>
            </Pressable>
        </View>
    );
}

export default MealItem;
const styles=StyleSheet.create({
    mealItem:{
        margin:16,
        borderRadius:8,
        overflow:"hidden",
        backgroundColor:"white",
        elevation:4,
        //for ios 
        backgroundColor:'white', //for both , ios -> compulsory
        shadowColor:'black', //for both
        shadowOpacity:0.25,    //ios
        shadowOffset:{width:0,height:2}, //ios
        shadowRadius:8, //ios
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible', //overflow hides the shadows of ios 
        
    },
    innerContainer:{
        borderRadius:8,
        overflow:'hidden',
    },
    image:{
        width:"100%",
        height:200,
    },
    title:{
        fontWeight:"bold",
        textAlign:"center",
        fontSize: 18,
        margin:8,
    },
    
    buttonPressed:{
        opacity:0.5,
    },
 
});