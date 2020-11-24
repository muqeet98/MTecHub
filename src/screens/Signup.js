import React, { useState ,useEffect} from 'react';
import { Button, Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { TextInput, RadioButton } from 'react-native-paper';
import DateTimePickerModal from "react-native-modal-datetime-picker";
const SignUp = ({ navigation }) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  const test = () => {
    console.log(email)
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };


  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    hideDatePicker();
  };
  return (
    <View style={{ backgroundColor: 'black', flex: 1, }}>
      <View>

      </View>

      <View style={{ alignItems: 'center', }}>
        <TextInput style={styles.input}
          label='username'
          mode='outlined'
          placeholder='username'
          placeholderTextColor
          placeholderTextColor='#004dcf'
          theme={{ colors: { primary: '#004dcf', underlineColor: 'transparent', } }}
          Value={username}
          onChangeText={(Value) => setUsername(Value)}
        />

        <TextInput style={styles.input}
          label='email'
          mode='outlined'
          placeholder='email'
          placeholderTextColor='#004dcf'
          theme={{ colors: { primary: '#004dcf', underlineColor: '', } }}
          Value={email}
          onChangeText={(Value) => setEmail(Value)}
        />

        <TextInput style={styles.input}
          label='Password'
          mode='outlined'
          placeholder='Password'
          placeholderTextColor='#004dcf'
          theme={{ colors: { primary: '#004dcf', underlineColor: '', } }}
          Value={password}
          onChangeText={(Value) => setPassword(Value)}
        />

        
        <TouchableOpacity onPress={showDatePicker} style={styles.buttonpicker}>
          <Text>Date of Birth</Text>
        </TouchableOpacity>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
        {/* <Button title="Click me" onPress={test}/> */}



        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Home")}>
          <Text style={styles.buttonText}>
            Sign In
         </Text>
        </TouchableOpacity>
      </View>



    </View>
  );
}
export default SignUp;


const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    width: ('80%'),
    height: ('15%'),
    borderRadius: 30,
    backgroundColor: '#1273de',
    borderColor: '#1273de',
    borderWidth: 1,
    marginBottom: ('5%')
  },
  buttonpicker: {
    
    width: ('30%'),
    height: ('5%'),
    borderRadius: 30,
    backgroundColor: '#1273de',
    borderColor: '#1273de',
    borderWidth: 1,
    marginBottom: ('5%')
  },
  logo: {
    width: ('60%'),
    height: ('40%'),
    marginTop: ('20%')
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
    marginTop: ('2%')
  },
  input: {
    width: ('85%'),
    marginBottom: ('5%'),
  }

})