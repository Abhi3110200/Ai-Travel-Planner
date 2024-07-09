import { View, Text, TextInput,StyleSheet, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import {useNavigation, useRouter} from 'expo-router';
import { Colors } from '@/constants/Colors';
import {Ionicons} from '@expo/vector-icons';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../configs/FirebaseConfig';
export default function SignIn() {
    const navigation = useNavigation();
    const router = useRouter();

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    useEffect(()=>{
        navigation.setOptions({
            headerShown: false,
        })
    },[]);


    const onSignIn= ()=>{

      if(!email&&!password){
        ToastAndroid.show('Please Enter Email & Password', ToastAndroid.BOTTOM)
      }
      signInWithEmailAndPassword(auth,email,password)
      .then((userCredential)=>{
        const user = userCredential.user;
        router.replace('/mytrip');
        console.log(user)
      })
      .catch((error)=>{
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage,errorCode);
        if(errorCode=='auth/invalid-credential'){
          ToastAndroid.show('Invalid Email or Password', ToastAndroid.LONG)
        }
      })
    }
  return (
    <View style={{
        padding:25,
        backgroundColor:Colors.white,
        height:'100%',
        paddingTop:40
    }}>
        <TouchableOpacity onPress={()=>router.back()}>
            <Ionicons name='arrow-back' size={24} color='black'/>
        </TouchableOpacity>
      <Text style={{
        fontSize:30,
        fontFamily:'Outfit-Medium',
        marginTop:30
      }}>Let's Sign You In</Text>
      <Text style={{
        fontSize:20,
        fontFamily:'Outfit',
        marginTop:20,
        color:Colors.GRAY,
      }}>Welcome Back</Text>
      <Text style={{
        fontSize:20,
        fontFamily:'Outfit',
        marginTop:10,
        color:Colors.GRAY
      }}>You've been missed</Text>

      <View style={{
        marginTop:50,
      }}>
        <Text style={{
            fontFamily:'Outfit'
        }}>Email</Text>
        <TextInput onChangeText={(value)=>setEmail(value)} style={styles.input} placeholder='Enter Email'/>
      </View>
      {/* Password */}
      <View style={{
        marginTop:20,
      }}>
        <Text style={{
            fontFamily:'Outfit'
        }}>Password</Text>
        <TextInput onChangeText={(value)=>setPassword(value)} style={styles.input} placeholder='Enter Password' secureTextEntry={true}/>
      </View>

      <TouchableOpacity onPress={onSignIn} style={{
        padding:20,
        backgroundColor:Colors.primary,
        borderRadius:15,
        marginTop:50
      }}>
        <Text style={{
            color:Colors.white,
            textAlign:'center',
            fontFamily:'Outfit-Medium',
            fontSize:15
        }}>Sign In</Text>
      </TouchableOpacity>


      <TouchableOpacity
        onPress={()=>router.replace('auth/sign-up')}
       style={{
        padding:20,
        backgroundColor:Colors.white,
        borderRadius:15,
        marginTop:20,
        borderWidth:1,
      }}>
        <Text style={{
            color:Colors.primary,
            textAlign:'center',
            fontFamily:'Outfit-Medium',
            fontSize:15
        }}>Create Account</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    input:{
        padding:15,
        borderWidth:1,
        borderColor:Colors.GRAY,
        borderRadius:15,
        paddingLeft:15,
        fontFamily:'Outfit'
    }
})