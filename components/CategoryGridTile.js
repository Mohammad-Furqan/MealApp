import { Pressable,View ,Text,StyleSheet, Platform} from "react-native";

function CategoryGridTile({title,color,onPress}){
    return( 
    <View style={[styles.gridItem,]}>
        <Pressable 
            android_ripple={{color:'#cccccc'}} 
            style={({pressed})=>[
                styles.button, 
                pressed ? styles.buttonPressed : null,
                ]}
            onPress={onPress}
                >

            <View style={[styles.innerContainer,{backgroundColor:color}]}> 
                <Text style={styles.text}>{title}</Text>
            </View>
        </Pressable>
    </View>
    );
}

export default CategoryGridTile;

const styles=StyleSheet.create({
    gridItem:{
        flex:1,
        margin:16,
        height:150,
        borderRadius:8,
        // borderWidth:2,
        elevation:4,
        //for ios 
        backgroundColor:'white', //for both , ios -> compulsory
        shadowColor:'black', //for both
        shadowOpacity:0.25,    //ios
        shadowOffset:{width:0,height:2}, //ios
        shadowRadius:8, //ios
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible', //overflow hides the shadows of ios 
        

    },
    text:{
        fontWeight:'bold',
        fontSize:18,
        // borderWidth:2,
        // padding:20,
    },
    innerContainer:{
        flex:1,
        borderRadius:8,//for ios
        padding:16, 
        justifyContent:'center',
        alignItems:'center',
    },
    button:{
        flex:1
    },
    buttonPressed:{
        opacity:0.5,
    }
});