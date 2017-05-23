import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TextInput, Alert } from 'react-native';
import { Button, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }
    checkPass() {
        if ((this.state.username == '') && (this.state.password === '')) {
            Actions.contentfeed();
        } else {
            Alert.alert(
                'Username หรือ Password ไม่ถูกต้อง',
                'Username หรือ Password ลองใหม่อีกครั้ง',
                [
                    { text: 'ลองอีกครั้ง' }
                ],
                { cancelable: false }

            );
        }
    }
    render() {
        return (
            <Image source={require('../Images/BG-Main.jpg')}
                style={[styles.loginBG, {
                    backgroundColor: 'transparent'
                }]}>
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    backgroundColor: 'rgba(0,0,0,0.1)',
                    padding: 20
                }}>
                    <Image source={require('../Images/logo-sideline.png')} style={{
                        width: 500,
                        height: 500,
                        alignSelf:'center',
                        top:-50,
                        marginBottom: 0.001
                    }} />
                    <View style={{
                        flexDirection: 'row',
                    }}>
                        <View style={styles.viewHalf}>
                            <Text style={styles.strongLabel}></Text>
                        </View>
                        <View style={styles.view2_3}>
                            <TextInput
                                placeholder="ใส่ชื่อผู้ใช้งาน"
                                onChangeText={(username) => this.setState({ username })}
                                style={styles.loginInput}
                            />
                        </View>

                    </View>
                    <View style={{
                        flexDirection: 'row',
                        marginTop: 10
                    }}>
                        <View style={styles.viewHalf}>
                            <Text style={styles.strongLabel}></Text>
                        </View>
                        <View style={styles.view2_3}>
                            <TextInput
                                placeholder="ใส่รหัสผ่าน"
                                onChangeText={(password) => this.setState({ password })}
                                style={styles.loginInput}
                                secureTextEntry={true}
                            />
                        </View>

                    </View>

                    <View style={{
                        marginTop: 20,
                        marginLeft: 80
                    }}>
                        <Button rounded light
                            onPress={this.checkPass.bind(this)}
                        >
                            <Icon name="md-log-in" />
                            <Text style={{
                                color: 'black',
                                fontWeight: 'normal'
                            }}>ลงชื่อเข้าใช้งาน</Text>
                        </Button>
                    </View>
                </View>
            </Image>
        );
    }
}
const styles = StyleSheet.create({
    loginBG: {
        flex: 1,
        width: null,
        justifyContent: 'center',
        height: null
    },
    viewHalf: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        marginRight: 10
    },
    view2_3: {
        flex: 8,
        marginRight:40,
        backgroundColor: 'transparent'
    },
    strongLabel: {
        fontWeight: 'normal',
        color: '#ffffff',
        fontSize: 14
    },
    loginInput: {
        height: 35,
        padding: 5,
        backgroundColor: 'white'
    }
});
export default Login;
