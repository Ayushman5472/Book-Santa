import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import firebase from 'firebase'
import db from '../config'

export default class WelcomeScreen extends React.Component {
    constructor(){
        super()
        this.state={
        Password: "",
        EmailID: "",
        }
       }
       UserLogIn=(Email,Password)=>{
        firebase.auth().signInWithEmailAndPassword(Email,Password).then(()=>{
           return( alert("You have succefully logged in")
           )

        }).catch(error=>{
            return(alert(error.message))
        })
       }
       UserSignUp=(Email,Password)=>{
firebase.auth().createUserWithEmailAndPassword(Email, Password).then((response)=>{
    return(alert("You have succesfully Signed Up")
    )
}).catch(function(error){
    return(alert(error.message))
})
       }

render(){ 
  return (
    <View style={styles.container}>
     <TextInput placeholder={"Email ID"} keyboardType={"email-address"} onChangeText={(text)=>{
         this.setState({
             EmailID:text
         })
     }}></TextInput>
     <TextInput secureTextEntry= {true} placeholder={"Password"} onChangeText={(text)=>{
         this.setState({
        Password:text 
         })
     }}></TextInput>
     <TouchableOpacity onPress={()=>
         this.UserSignUp(this.state.EmailID, this.state.Password)
     }><Text>Sign Up</Text></TouchableOpacity>
     <TouchableOpacity onPress={()=>
         this.UserLogIn(this.state.EmailID, this.state.Password)     
     }><Text>Log In</Text></TouchableOpacity>

    </View>
  )
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
