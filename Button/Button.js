import React from 'react';
import {StyleSheet,TouchableOpacity, Text, View} from 'react-native';

export default function FlatButton({text, onPress}){

    return(
        

        <TouchableOpacity onPress={onPress}>

            <View style={ styles.buton}>

                <Text style={ styles.butonText}> {text} </Text>
                
            </View>
            
         </TouchableOpacity>
    )
}
const styles = StyleSheet.create({

    buton:{
        borderRadius:15,
        paddingVertical:15,
        paddingHorizontal:10,
        backgroundColor:"#6EB1E4",
        width:'50%',
        left:'25%',
        top:'80%',

    },
    butonText:{
        color:"black",
        textAlign:'center',
    }
})

