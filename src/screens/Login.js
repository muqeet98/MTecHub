import React from 'react';
import { Button, Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { TextInput, RadioButton } from 'react-native-paper';
const Login = ({ navigation }) => {
    return (
        
        <View style={{backgroundColor: 'black', flex:1}} >
            <View>

            </View>
            <View style={{alignItems:'center'}}>
                <Image style={styles.logo}
                    source={require('./icon2.png')}>
                </Image>
            </View>
            <View style={{ alignItems:'center', }}>
                <TextInput style={styles.input}
                 label='email'
                 mode='outlined'
                 placeholder='email or username'
                 placeholderTextColor
                 placeholderTextColor='#004dcf'
                 theme={{ colors: { primary: '#004dcf', underlineColor: 'transparent', } }}
                 //Value={email}
                //onChangeText={(Value) => setEmail(Value)}
                />
                 <TextInput style={styles.input}
                 label='Password'
                 mode='outlined'
                 placeholder='Password'
                 placeholderTextColor='#004dcf'
                 theme={{ colors: { primary: '#004dcf', underlineColor: '', } }}
                 //Value={email}
                //onChangeText={(Value) => setEmail(Value)}
                />
                 <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Home")}>
                <Text style={styles.buttonText}>
                    Sign In
               </Text>
            </TouchableOpacity>
            </View>
          
        </View>
    );
}
export default Login;


const styles = StyleSheet.create({
   button:{
       alignItems: 'center',
       width: ('80%'),
       height: ('15%'),
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
    marginTop:('2%')
},
input:{
   width: ('85%'),
   marginBottom:('5%'),
}

})