import React from "react";
import {View,Text,Image,ScrollView} from 'react-native'
import styles from './TextList.style'

interface Props{
name:string;
value?:string;
icon?:any;
}

const TextList:React.FC<Props>=({name,value,icon})=>{
    return(
       
        <View style={styles.itemContainer}>
            <Text style={styles.nameText}>{name}</Text>
            {value?<Text style={styles.valueText}>{value}</Text>:null}
            {icon? <Image source={icon} width={24} height={24}/>:null}
        </View>

    )
}
export default TextList