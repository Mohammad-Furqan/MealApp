import { StyleSheet ,View, Text} from "react-native";


function List ({data}){
    return data.map((dataPoint)=>(
        <View  key={dataPoint} style={styles.listItem}>
            <Text style={styles.itemText}>{dataPoint}</Text>
        </View>
    ));
}

export default List;
const styles=StyleSheet.create({
    listItem:{
        borderRadius:6,
        paddingHorizontal:8,
        paddingVertical:4,
        marginVertical:4,
        marginHorizontal:12,
        backgroundColor:'#9a2f1c',
    },
    itemText:{
        color:'#d9c7c7',
        textAlign:'center',
    }

});