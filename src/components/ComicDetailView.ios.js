/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';

class ComicDetailView extends Component {
  constructor(props) {
      super(props);
      this.passProps= this.props.route.passProps;
      this.modified = this.passProps.comic.modified.slice(0, 10);
  }
  render() {
    return (
      <View style={styles.container}>

        <Image
          source={{uri: this.passProps.comic.thumbnail.path+'.jpg'}}
          style={styles.image} />
          <Text
            style={styles.title}>{this.passProps.comic.name}</Text>
            <Text
              style={styles.description}>{this.passProps.comic.description}</Text>

              <Text
                style={styles.description}>Available:{this.passProps.comic.comics.available}</Text>
                <Text style={styles.modified}>Modified: {this.modified}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 63,
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  title:{
    fontSize:23,
    color: '#007AFF'
  },
  description:{
    marginTop:10,
    fontSize: 16,
  },
  modified:{
    marginTop: 10,
    fontSize:16,
    color: '#007AFF',
  },
  image: {
    alignSelf: 'stretch',
    height: 300,
  },
});

module.exports = ComicDetailView;
