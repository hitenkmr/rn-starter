import React, { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";


const LoginScreen = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    return (

        <View
            style={{ marginLeft: 20, marginRight: 20 }}
        >
            <Text style={{ marginTop: 10, fontSize: 25 }}> Enter Username</Text>

            <TextInput
                style={{ marginTop: 10, borderRadius: 30, borderWidth: 2, borderColor: 'rgb(230,32,255)', paddingLeft: 10, height: 40 }}
                autoCapitalize='words'
                autoCorrect={false}
                keyboardType='default'
                onChangeText={(newValue) => setUsername(newValue)}
                placeholder='Enter username'
            />

            <Text style={{ marginTop: 20, fontSize: 25 }}> Enter Password</Text>

            <TextInput
                style={{ marginTop: 10, borderRadius: 30, borderWidth: 2, borderColor: 'rgb(230,32,255)', paddingLeft: 10, height: 40 }}
                autoCapitalize='words'
                autoCorrect={false}
                secureTextEntry={true}
                onChangeText={(newValue) => setPassword(newValue)}
                placeholder='Enter password'
            />

            {
                isValidPassword(password) ? <Text style={{ marginTop: 10, color: 'green' }}> Valid password</Text> : <Text style={{ marginTop: 10, color: 'red' }}> The password should be atleast 8 chars long</Text>
            }

            <View style={{ borderRadius:5, marginTop: 100, backgroundColor: 'rgb(230,32,255)' }} >
                <Button color='white' title='Go' onPress={() => { /*empty implementation*/ }} />
            </View>

        </View>

    );

};

function isValidPassword(password) {
    return password.length >= 8
}

export default LoginScreen;