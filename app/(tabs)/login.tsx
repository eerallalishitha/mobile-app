// app/login.tsx
import React, { useContext, useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import { AuthContext } from "../context/AuthContext";

export default function Login() {
  const { signIn } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  return (
    <View style={{flex:1,justifyContent:'center',padding:16}}>
      <Text>Login</Text>
      <TextInput value={email} onChangeText={setEmail} placeholder="Email" style={{borderWidth:1,padding:8,marginVertical:8}} />
      <Pressable onPress={() => signIn({ email })} style={{padding:12,backgroundColor:'#1e90ff',borderRadius:8}}>
        <Text style={{color:'#fff'}}>Sign in</Text>
      </Pressable>
    </View>
  );
}
