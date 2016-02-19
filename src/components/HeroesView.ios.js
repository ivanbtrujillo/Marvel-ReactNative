var React = require("react-native");

var {
    Component,
    StyleSheet,
    ListView,
    Image,
    Text,
    View,
    TouchableHighlight,
} = React;

class HeroesView extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.description}>
            Welcome to the Heroes Tabs
        </Text>
      </View>
    )
  }
}


var styles = StyleSheet.create({
  description:{
    fontSize: 20,
    textAlign: 'center',
    color: '#FFFFFF',
  },
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#123456',
  }
});

module.exports = HeroesView;
