import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Keyboard,
    TouchableWithoutFeedback
} from 'react-native';






class AuthScreen extends Component {


    
    state = {
        nameBorderColor: 'gray',
        phoneBorderColor: 'gray',
        name: '',
        phoneNum: '',
        message: '이름과 전화번호를 입력해주세요.',
        color: 'black'
    }

    onSubmit = () => {
        const { name, phoneNum } = this.state;
        if (!this.isCelluar(phoneNum)) {
            this.secondTextInput.focus();
            this.setState({ message: '전화번호를 확인해주세요.', color: 'red' });
            return;
        }
        if (!this.isName(name)) {
            this.firstTextInput.focus();
            this.setState({ message: '이름을 확인해주세요.', color: 'red' });
            return;
        }
        this.props.navigation.navigate('Password', { name: name, phoneNum: phoneNum });
    }

    // 핸드폰 번호 체크 정규식
    isCelluar(value) {
        var regExp = /^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/;
        return regExp.test(value); // 형식에 맞는 경우 true 리턴
    }


    isName(value) {
        var reg = /^[가-힣]{2,4}$/;
        return reg.test(value);
    }

    render() {
        return (

                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View  style={styles.main} >
                        <Text style={{ width: "100%", textAlign: 'left', fontSize: 20, color: this.state.color }}>{this.state.message}</Text>
                        <TextInput
                            value={this.state.name}
                            style={[styles.name, { borderBottomColor: this.state.nameBorderColor }]}
                            onFocus={() => this.setState({ nameBorderColor: '#45CA93' })}
                            onBlur={() => this.setState({ nameBorderColor: 'gray' })}
                            onChangeText={(text) => this.setState({ name: text.trim() })}
                            placeholder="이름"
                            textContentType="name"
                            autoFocus={true}
                            returnKeyType={"next"}
                            ref={(input) => { this.firstTextInput = input; }}
                            onSubmitEditing={() => { this.secondTextInput.focus(); }}
                            blurOnSubmit={false}
                        />
                        <TextInput
                            value={this.state.phoneNum}
                            style={[styles.name, { borderBottomColor: this.state.phoneBorderColor }]}
                            onFocus={() => this.setState({ phoneBorderColor: '#45CA93' })}
                            onBlur={() => this.setState({ phoneBorderColor: 'gray' })}
                            onChangeText={(text) => { const cleanNumber = text.replace(/[^0-9]/g, ""); this.setState({ phoneNum: cleanNumber.trim() }); }}
                            placeholder="전화번호"
                            textContentType="telephoneNumber"
                            ref={(input) => { this.secondTextInput = input; }}
                            onSubmitEditing={() => { this.onSubmit() }}
                            returnKeyType={"done"}
                            keyboardType='numeric'
                        />

                        <TouchableOpacity style={styles.button}
                            onPress={() => this.onSubmit()}>
                            <Text style={styles.bottonText}>다음</Text>
                        </TouchableOpacity>

                    </View >
                 </TouchableWithoutFeedback>

        )
    }
}


const styles = StyleSheet.create({
    main: { flex: 1, alignItems: 'center', paddingTop: "20%", paddingLeft: "10%", paddingRight: "10%", justifyContent: 'center', backgroundColor: 'white' },
    name: {
        marginTop: "10%",
        borderBottomWidth: 2,
        width: "100%",
        fontSize: 25,
        paddingLeft: 4,
        paddingRight: 3,

    },
    button: {
        justifyContent: 'center',
        height: "8%",
        width: "100%",
        backgroundColor: '#45CA93',
        marginTop: 'auto',
        borderRadius: 6
    },
    bottonText: {
        textAlign: 'center',
        color: 'white',
    }
});

export default AuthScreen;