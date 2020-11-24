import React from 'react';
import { Button, Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';

const First = ({ navigation }) => {
    return (
        <View style={{backgroundColor: 'black', flex:1}} >
            <View>

            </View>
            <View style={{alignItems:'center'}}>
                <Image style={styles.logo}
                    source={require('./icon2.png')}>
                </Image>
            </View>
            <View style={{alignItems:'center'}}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Signup")}>
                <Text  style={styles.buttonText}>
                    Sign Up
               </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Login")}>
                <Text style={styles.buttonText}>
                    Sign In
               </Text>
            </TouchableOpacity>
            </View>
        </View>
    );
}
export default First;


const styles = StyleSheet.create({
   button:{
       alignItems: 'center',
       width: ('80%'),
       height: ('20%'),
       borderRadius: 30,
       backgroundColor: '#1273de',
       borderColor: '#1273de',
       borderWidth: 1,
       marginBottom: ('5%') 
   },
   logo:{
       width:('60%'),
       height:('40%'),
       marginTop: ('20%')
   },
   buttonText: {
    fontSize: 20,
    color: '#fff',
    marginTop:('4%')
}

})