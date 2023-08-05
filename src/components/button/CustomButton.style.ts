import { StyleSheet,Dimensions} from "react-native";
const deviceSize=Dimensions.get('window');

export default StyleSheet.create({
    buttonText:{
        color: '#fff',
    fontWeight: '600',
    letterSpacing: 1,
    textAlign:'center',
    fontSize:16,
    fontStyle:'normal',
    
    },
    buttonContainer:{
        height:56,
        width: '100%',
        flexDirection:'row',
        alignSelf:'center',
        alignItems:'center',
        backgroundColor: '#FF6347', 
        borderRadius: 12, 
        justifyContent: 'center',
        padding:10
    }
   
})