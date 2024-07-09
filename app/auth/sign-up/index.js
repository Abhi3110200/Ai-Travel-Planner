import { View, Text,TextInput, StyleSheet, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { Colors } from '@/constants/Colors';
import {Ionicons} from '@expo/vector-icons';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../configs/FirebaseConfig';
export default function SignUp() {
    const navigation = useNavigation();
    const router = useRouter();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fullname, setFullName] = useState('');

    useEffect(()=>{
        navigation.setOptions({
            headerShown:false,
        })
    },[]);

    const OnCreateAccount =()=>{

      if(!email&&!password&&!fullname){
        ToastAndroid.show('Please enter all details', ToastAndroid.LONG);
        return;
      }

      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential)=>{
        const user = userCredential.user.displayName;
        console.log(user);
        router.replace('/mytrip');
      })
      .catch((error)=>{
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("---",errorCode,errorMessage);
      });
    }

  return (
    <View style={{
        padding:25,
        paddingTop:50,
        backgroundColor:Colors.white,
        height:'100%'
    }}>

        <TouchableOpacity onPress={()=>router.back()}>
            <Ionicons name='arrow-back' size={24} color='black'/>
        </TouchableOpacity>
      <Text style={{
        fontFamily:'Outfit-Medium',
        fontSize:30,
        marginTop:30,
      }}>Create New Account</Text>

      <View style={{
        marginTop:50,
      }}>
        <Text>Full Name</Text>
        <TextInput onChangeText={(value)=>setFullName(value)} style={styles.input} placeholder='Enter Full Name'/>
      </View>

<View style={{
        marginTop:20,
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

      <TouchableOpacity onPress={OnCreateAccount} style={{
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
        }}>Create Account</Text>
      </TouchableOpacity>


      <TouchableOpacity
        onPress={()=>router.replace('auth/sign-in')}
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
        }}>Sign In</Text>
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