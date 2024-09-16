import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import { useState } from 'react';

export default function Screen5() {
    const [inputPassword, setInputPassword] = useState("");
    const [password, setPassword] = useState("");
    const [isShowPassword, setIsShowPassword] = useState(false);

    function togglePasswordVisibility() {
        setIsShowPassword(!isShowPassword);
    }

    return (
        <View style={styles.container}>
            <View>
                <Text
                    style={{ textTransform: 'uppercase', fontWeight: 'bold', fontSize: 25 }}>
                    Login</Text>
            </View>
            <View style={styles.inputContainer}>
                <View style={styles.inputItem}>
                    <TextInput placeholder='Email' />
                </View>

                <View style={styles.inputItem}>
                    <TextInput
                        onChange={(e) => setPassword(e)}
                        secureTextEntry={!isShowPassword}
                        value={password}
                        placeholder='Password' />
                    <TouchableOpacity 
                        onPress={togglePasswordVisibility}>
                        <Image
                            style={{ height: 30, width: 30 }}
                            source={require('../assets/images/eye.png')}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}>
                    <Text style={{ textTransform: 'uppercase', fontWeight: 'bold', fontSize: 20, color: '#ffffff' }}>Login</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.textContainer}>
                <Text style={{ padding: 8 }}>When you agree to terms and conditions</Text>
                <Text style={{ color: '#5D25FA', padding: 8 }}>Forgt your password?</Text>
                <Text style={{ padding: 8 }}>Or login with</Text>
            </View>
            <View style={styles.iconLoginContainer}>
                <TouchableOpacity style={styles.iconLoginItem}>
                    <Image style={{ height: 50, width: 50 }}
                        source={require('../assets/images/facebook.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconLoginItem}>
                    <Image style={{ height: 50, width: 50 }}
                        source={require('../assets/images/zalo.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconLoginItem}>
                    <Image style={{ height: 50, width: 50 }}
                        source={require('../assets/images/google.png')} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        padding: 24,



        backgroundColor: 'rgba(49, 170, 82, 0.3)'
    },
    inputContainer: {
        width: '100%'
    },

    inputItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        padding: 12,
        marginVertical: 12,
        fontSize: 18,
        borderWidth: 1,
        backgroundColor: 'rgba(196, 196, 196, 0.3)'
    },
    buttonContainer: {
        width: '100%'
    },
    button: {
        width: '100%',
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',

        backgroundColor: '#E53935',
    },
    textContainer: {
        alignItems: 'center',
    },
    iconLoginContainer: {
        flexDirection: 'row',
        marginVertical: 24
    },
    iconLoginItem: {
        margin: 12,
        padding: 12,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#cccccc'
    }
})