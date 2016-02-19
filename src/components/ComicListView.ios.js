"use strict";

var React = require("react-native");
var crypto = require("crypto-js");

var {
    Component,
    StyleSheet,
    ListView,
    Image,
    Text,
    View,
    TouchableHighlight,
} = React;


var ComicDetail = require("./ComicDetailView");

var REQUEST_URL = 'http://gateway.marvel.com:80/v1/public/characters';


class ComicListView extends Component {

    constructor(props) {
        super(props);
        this.timestamp = 1;
        this.public_key = '9a6a2e7e2ee1ff735a5d269bed263e7e';
        this.private_key = '6ebe068fe586aeb4c6a9003538560d873bc38dcb'
        this.state = {
          dataSource: new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2,
          }),
          loaded: false,
        };



        this.renderComic  = this.renderComic.bind(this);
        this.onComicPressed = this.onComicPressed.bind(this);
    }

    componentDidMount() {
      this.fetchData();
    }

    fetchData() {
      var hash = crypto.MD5(this.timestamp+this.private_key+this.public_key);
      fetch(REQUEST_URL+'?ts='+this.timestamp+'&apikey='+this.public_key+'&hash='+hash)
        .then((response) => response.json())
        .then((responseData) => {
          this.setState({
            dataSource: this.state.dataSource.cloneWithRows(responseData.data.results),
            loaded: true,
          });
        })
        .done();
    }


    render() {
      if (!this.state.loaded) {
        return this.renderLoadingView();
      }

      return (
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderComic}
          style={styles.listView}
        />
      );
    }

    renderLoadingView() {
      return (
        <View style={styles.container}>
          <Text>
            Loading movies...
          </Text>
        </View>
      );
    }



    renderComic(comic) {
      return (
        <TouchableHighlight onPress={() => this.onComicPressed(comic)}>
          <Image source={{uri: comic.thumbnail.path+'.jpg'}}
            style={styles.backgroundImage}>
          <View style={styles.rightContainer}>
            <Text style={styles.title}>{comic.name}</Text>
            <Text style={styles.available}>Disponibles: {comic.comics.available}</Text>
          </View>
      </Image>
      </TouchableHighlight>
      );
    }

    onComicPressed(comic){
      console.log('Choosing a comic: '+comic.name);
      this.props.navigator.push({
          name: 'Details',
          title: comic.name,
          passProps: {comic: comic},
      });
    }
};

var styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  backgroundImage:{
    justifyContent: 'center',
     alignItems: 'center',
     alignSelf: 'stretch',
     height:150,
  },
  rightContainer: {
    backgroundColor:'rgba(52,52,52,0.5)',
    alignSelf: 'stretch',
    paddingTop:30,
    height: 150,

  },
  title: {
    fontSize: 27,
    marginBottom: 8,
    textAlign: 'center',
    color: '#FFFFFF',
    backgroundColor: 'rgba(52,52,52,0)',
  },
  available: {
    fontSize:18,
    textAlign: 'center',
    color: '#FFFFFF',
    backgroundColor:'rgba(52,52,52,0)',
  },
  listView: {
    paddingTop: 64,

  },
});

module.exports = ComicListView;
