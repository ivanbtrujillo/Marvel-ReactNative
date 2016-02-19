/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  TouchableHighlight,
  Navigator,
  StyleSheet,
  Text,
} from 'react-native';

var NavigationBarRouteMapper = {
  LeftButton: function(route, navigator, index, navState) {

    if(route.name=='Login' || route.name=='Dashboard'){
      return null;
    }
    return(<TouchableHighlight underlayColor='rgba(0,0,0,0)' onPress={() => {
              if(index > 0){
                navigator.pop();
              }
          }}>

            <Text style={{marginTop: 10, marginLeft:20, color:'#007AFF'}}>Back</Text>
         </TouchableHighlight>
    )
  },
  RightButton: function(route, navigator, index, navState){
    return null;
  },
  Title: function(route, navigator, index, navState){
    if(route.name == 'Login'){
      return null;
    }
    return(
      <Text style={{marginTop: 10, color:'#007AFF' }}>
        {route.name}
      </Text>
    )
  },
};

var Login = require('./src/components/LoginView');
var Details = require('./src/components/ComicDetailView');
var Tabs = require('./src/components/Tabs');

class GettingStarted extends Component{




  renderScene (route, navigator) {
    switch (route.name) {
       case 'Login':
        return (
         <Login {...route.props} navigator={navigator} route={route} />
       );
       case 'Dashboard':
        return (
          <Tabs {...route.props} navigator={navigator} route={route}/>
       );
       case 'Details':
       console.log('Details');
        return(
          <Details {...route.props} navigator={navigator} route={route} />
        )
    }
  }

  render(){
    return(

      <Navigator style={{backgroundColor: '#fff'}}
         initialRoute={{name: 'Login'}}
         renderScene={this.renderScene}
         configureScene={(route) => {
           if(route.sceneConfig){
             return route.sceneConfig;
           }
           return Navigator.SceneConfigs.FloatFromRight
         }}
         navigationBar={
           <Navigator.NavigationBar
            routeMapper={NavigationBarRouteMapper}/>}
      />
      // <NavigatorIOS style={styles.navigationContainer}
      //   initialRoute={{
      //     title: 'Login',
      //     component: LoginView,
      //   }} />
    )
  }
}
const styles = StyleSheet.create({
  navigationContainer: {
    flex: 1,
  }
});

AppRegistry.registerComponent('GettingStarted' , () => GettingStarted);
