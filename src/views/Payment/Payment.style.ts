import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    textContainer:{
        bottom:180,
        padding:10,
        margin:10,
        flexDirection:'column',
        


    },
    text:{
        fontSize:26,
        fontStyle:'normal',
        fontWeight:'600',
        color:'#002855',

        
    },
    montTextContainer:{
        borderWidth:1,
        backgroundColor:'#002855',
        width:167,
        height:53,
        borderRadius:8,
        borderColor:'transparent',
        alignSelf:'center',
      
       
        
    },
    montText:{
        textAlign:'center',
        fontSize:16,
        color:'white',
        fontWeight:'600',
        fontStyle:'normal',
        padding:17,
        lineHeight:18,


      
    },
    totalContainer:{
        bottom:200,
        padding:10,
        margin:10,
        flexDirection:'row',
        justifyContent:'space-between'
    
    },
    totalText:{
        fontSize:16,
        color:'#002855',
        fontWeight:'600',
        fontStyle:'normal',
        alignSelf:'center',

        
    },
    cardContainer:{
        width: '100%',
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent:'space-between',
        padding:18,
        borderRadius:12
    },
    iconTextContainer:{
        alignItems: 'center',
    flexDirection: 'row',
    },
    cardText:{
        color:'#6B7280',
        fontSize:16,
        fontWeight:'500',
        marginLeft:5,


    },
    masterCardIcon:{
        marginRight:10
    },
    excardContainer:{
        backgroundColor: 'white',
        borderRadius:12,
        width:'45%',
        padding:18,
        
        

    },
    holderCard:{
        width: '100%',
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent:'space-between',
        padding:18,
        borderRadius:12,
        top:20
    }
});
