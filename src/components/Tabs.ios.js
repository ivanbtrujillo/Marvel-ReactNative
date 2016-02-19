'use strict'

'use strict';
import React, {
  AppRegistry,
  TabBarIOS,
  Component
} from 'react-native';

var Icon = require('react-native-vector-icons/Ionicons');

var ComicList= require('./ComicListView');
var Heroes = require('./HeroesView');


class Tabs extends Component {
  constructor(props){
    super(props)
    this.state = {
      selectedTab: 'secure'
    }

  }

  render(){
    return(
      <TabBarIOS selectedTab={this.state.selectedTab}>
          <Icon.TabBarItem
            selected={this.state.selectedTab === 'secure'}
            iconName="ios-book-outline"
            selectedIconName="ios-book"
            title="Comics"
            onPress={() => {
                this.setState({
                    selectedTab: 'secure',
                });
            }}>
              <ComicList navigator={this.props.navigator}/>
          </Icon.TabBarItem>
          <Icon.TabBarItem
            selected={this.state.selectedTab === 'heroes'}
            iconName="ios-flame-outline"
            selectedIconName="ios-flame"
            title="Heroes"
            onPress={() => {
                  this.setState({
                      selectedTab: 'heroes',
                  });
            }}>
            <Heroes/>
          </Icon.TabBarItem>
        </TabBarIOS>
    )
  }
}

module.exports = Tabs;
