import { StyleSheet, View,Text,Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
// import { Text } from 'react-native-reanimated/lib/typescript/Animated';
export default function Mypage() {
  return (
    <>
    <View style={styles.container}>
     <Text style={styles.textgreen}>this is a prototype of my productivity app </Text>
     <Text style={styles.textred}>building from scratch to deployment of the app</Text>
    </View>
    <View>
       <View style={{
        width:200,
        height:20,
        backgroundColor:'lightgreen',
        marginTop:100,
        marginBottom:10
       }}/>
       <View style={{
        width:200,
        height:20,
        backgroundColor:'lightblue',
        marginBottom:20
       }}/>
       <View style={{
        width:200,
        height:20,
        backgroundColor:'lightgreen'
       }}/>
    </View>
    </>
    // <ParallaxScrollView
    //   headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
    //   headerImage={
    //     <IconSymbol
    //       size={300}
    //       color="#00503"
    //       name="chevron.left.forwardslash.chevron.right"
    //       style={styles.headerImage}
    //     />
    //   }>
     
      
    // </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
    container:{
marginTop:50,
fontSize:20,
fontWeight:'bold'
    },
    textred:{
        color:'red',
        fontSize:20
    },
    textgreen:{
        color:'green',
        alignItems:'center',
        justifyContent:'center',
        fontSize:30
    },
  headerImage: {
    color: 'lightblue',
    bottom: -10,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
