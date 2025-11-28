import { useRouter } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";

export default function Home() {
  const router = useRouter();
  return (
    <View style={{ flex:1, alignItems:'center', justifyContent:'center', padding:20 }}>
      <Text style={{ fontSize:22, marginBottom:20 }}>Welcome — Home</Text>

      <Pressable
        onPress={() => router.push('/profile')}
        style={({pressed})=>({
          backgroundColor: pressed ? '#0b63d6' : '#1e90ff',
          paddingVertical:12, paddingHorizontal:18, borderRadius:8
        })}
      >
        <Text style={{ color:'white', fontSize:16 }}>Go to Profile</Text>
      </Pressable>
    </View>
  );
}
