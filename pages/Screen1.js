import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';


export default function Screen1() {
      return (
        <View style={styles.container}>
          <View>
            <View style={styles.ellipse}></View>
          </View>
          <View>
            <Text style={styles.title}>
              Grow {'\n'} your busines</Text>
          </View>
          <View>
            <Text style={styles.subTitle}>
              We will help you to grow your business using online server</Text>
          </View>
          <View style={styles.buttonContainer}>
            <Pressable style={styles.button}>
              <Text style={styles.text}>Login</Text>
            </Pressable>
            <Pressable style={styles.button}>
              <Text style={styles.text}>Sign up</Text>
            </Pressable>
          </View>
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#00CCF9',
        padding: 24,
    },
    ellipse: {
        width: 140,
        height: 140,
        marginVertical: 100,
        borderWidth: 15,
        borderRadius: 70,
        borderColor: '#000000',
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        textTransform: 'uppercase',
        padding: 12,
    },
    subTitle: {
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    button: {
        flex: 1,
        height: 50,
        borderRadius: 10,
        marginHorizontal: 24,
        justifyContent: 'center',
        backgroundColor: '#E3C000',
        alignItems: 'center',
    },
    text: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20,
    }
});
