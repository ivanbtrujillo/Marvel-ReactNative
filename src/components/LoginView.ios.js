"use strict";

var React = require("react-native");

var {
    Component,
    StyleSheet,
    Text,
    Image,
    TextInput,
    TouchableHighlight,
    View,
    AlertIOS,
} = React;

var ComicList = require("./ComicListView");
var Tabs = require("./Tabs");

class LoginView extends Component {

    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            username: "",
            password: ""
        };
    }

    render() {
        return (
            <Image source={{uri: 'http://i.kinja-img.com/gawker-media/image/upload/s--1Bavm6Lp--/c_scale,fl_progressive,q_80,w_800/1465410572645258056.jpg'}} style={styles.container}>
                <Text style={styles.title}>
                    Marvel React Native
                </Text>
                <View>
                    <TextInput
                        placeholder="Your name"
                        placeholderTextColor="#FFFFFF"
                        onChange={(event) => this.setState({username: event.nativeEvent.text})}
                        style={styles.formInput}
                        value={this.state.username} />
                    <TextInput
                        placeholder="Password"
                        placeholderTextColor="#FFFFFF"
                        secureTextEntry={true}
                        onChange={(event) => this.setState({password: event.nativeEvent.text})}
                        style={styles.formInput}
                        value={this.state.password} />
                    <TouchableHighlight onPress={(this.onLoginPressed.bind(this))} style={styles.buttonLogin}>
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={(this.onRegisterPressed.bind(this))} style={styles.buttonRegister}>
                        <Text style={styles.buttonText}>Register</Text>
                    </TouchableHighlight>
                </View>
            </Image>
        );
    }

    onLoginPressed() {
      this.props.navigator.replace({
        title:'Main',
        name:'Dashboard',
        passProps: {},
      })

      // this.props.navigator.push({
      //   name: 'Tabs'
      // });
    }
    onRegisterPressed(){
      console.log('Register');
      this.props.navigator.push({
          title: "Secure Zone",
          component: ComicList,
          passProps: {username: this.state.username, password: this.state.password},
      });
    }

};

var styles = StyleSheet.create({
    container: {
        flex: 1,
        // remove width and height to override fixed static size
        width: null,
        height: null,
        padding: 30,
        marginTop: 65,
        alignItems: "stretch"
    },
    title: {
        fontSize: 25,
        marginBottom: 10,
        backgroundColor: 'rgba(52,52,52,0)',
        textAlign: 'center',
        color:'#FFFFFF'
    },
    formInput: {
        height: 36,
        padding: 10,
        marginRight: 5,
        marginBottom: 5,
        marginTop: 5,
        flex: 1,
        fontSize: 18,
        borderWidth: 1,
        borderColor: "#555555",
        borderRadius: 8,
        color: "#FFFFFF"
    },
    buttonLogin: {
        height: 36,
        flex: 1,
        backgroundColor: "#555555",
        borderColor: "#555555",
        borderWidth: 1,
        borderRadius: 8,
        marginTop: 10,
        justifyContent: "center"
    },
    buttonRegister: {
        height: 36,
        flex: 1,
        backgroundColor: "#007AFF",
        borderColor: "#555555",
        borderWidth: 1,
        borderRadius: 8,
        marginTop: 10,
        justifyContent: "center"
    },
    buttonText: {
        fontSize: 18,
        color: "#ffffff",
        alignSelf: "center"
    },
  backgroundImage:{
    justifyContent: 'center',
     alignItems: 'center',
     flex: 1,
     resizeMode: Image.resizeMode.contain
  }
});

module.exports = LoginView;
