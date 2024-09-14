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
import OTPTextView from 'react-native-otp-textinput';


export default function Screen4() {
    const [input, setInput] = useState("Enter your email")
    return (
        <View style={styles.container}>
            <View>
                <Text style={{ fontWeight: 'bold', fontSize: 60 }}>CODE</Text>
            </View>
            <View>
                <Text style={{ fontWeight: 'bold', fontSize: 24 }}>VERIFICATION</Text>
            </View>
            <View>
                <Text style={styles.subTitle}>
                    Enter ontime password sent on {"\n"} ++42534246576</Text>
            </View>
            <OTPTextView
                style={{borderWidth: 1, height: 50, width: 50}}
                textInputStyle={{fontSize: 60}}
                inputCount={6} />

            <View style={{ width: '100%' }}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.text}>Verifi code</Text>
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
        textTransform: 'uppercase',
        fontSize: 20,
    }
});
