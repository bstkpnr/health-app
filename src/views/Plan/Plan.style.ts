import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    textContainer:{
        bottom:150,
        padding:10,
        margin:10,
        flexDirection:'column',


    },
    yearTextContainer:{
        borderWidth:1,
        backgroundColor:'#F5F5F5',
        width:167,
        height:53,
        borderRadius:8,
        borderColor:'transparent',
        bottom:5,

       
        
    },
    yearText:{
        textAlign:'center',
        fontSize:16,
        color:'#002855',
        fontWeight:'600',
        fontStyle:'normal',
        padding:17,
        lineHeight:18,


      
    },
    montTextContainer:{
        borderWidth:1,
        backgroundColor:'#002855',
        width:167,
        height:53,
        borderRadius:8,
        borderColor:'transparent',
        top:5,

       
        
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
    smallCard:{
        width: '100%',
        height: 136,
        position: 'relative',
        backgroundColor: 'white',
        borderRadius: 12,
        overflow: 'hidden',
        bottom:135,
padding:10    },
    smalCardTitle:{
        color:'#002855',
        fontSize:16,
        fontWeight:'600',
        padding:5,

        
    },
    desc:{
        color:'#78828A',
        fontSize:16,
        fontStyle:'normal',
        fontWeight:'500',
        padding:5,

    },
    termContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
    },
    termMainContainer:{
        width: '100%',
        position: 'relative',
        backgroundColor: 'white',
        borderRadius: 12,
        overflow: 'hidden',
        bottom:90,
        flex:1
    },
    buttonContainer:{
        bottom:60,
        padding:10,
        
    }

});
