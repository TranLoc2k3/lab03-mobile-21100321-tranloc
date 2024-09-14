import React from 'react';
import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import {
    View,
    Text,
    StyleSheet,
    Button,
    Image,
    TextInput,
    TouchableOpacity
} from 'react-native';


export default function Screen3() {
    const [input, setInput] = useState("Enter your email")
    return (
        <View style={styles.container}>
            <View>
                <Image
                    style={styles.icon}
                    source={require('../assets/images/lock.png')} />
            </View>
            <View>
                <Text style={styles.title}>
                    Forget {'\n'} password </Text>
            </View>
            <View>
                <Text style={styles.subTitle}>
                    Provide your account’s email for which you want to reset your password</Text>
            </View>
            <View style={styles.inputContainer}>
                <Image
                    style={{ height: 30, width: 30, marginHorizontal: 12 }}
                    source={require('../assets/images/letter.png')} />
                <TextInput
                    style={{ color: '#000000', fontSize: 20 }}
                    placeholder='Enter your email' />
            </View>
            <View style={{width: '100%'}}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.text}>Click me</Text>
                </TouchableOpacity>
            </View>
            <LinearGradient
                colors={['#00CCF9', 'transparent']}
                start={{ x: 0, y: 3 }} end={{ x: 0, y: 0 }}
                style={styles.gradient}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: '#C7F4F6',
        padding: 24,
    },
    gradient: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 150,
        zIndex: -1,
    },
    icon: {
        width: 150,
        height: 150
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
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',

        width: 300,
        height: 50,
        padding: 8,
        borderWidth: 2,
        borderRadius: 5,

        backgroundColor: '#cccccc'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    button: {
        height: 50,
        width: '100%',
        borderRadius: 10,
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
