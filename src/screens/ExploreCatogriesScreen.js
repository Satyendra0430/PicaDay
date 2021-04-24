import React from 'react';
import {
  StatusBar,
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  StyleSheet,
  Alert,
} from 'react-native';
// import PushNotificationIOS from "@react-native-community/push-notification-ios";
import PushNotification from 'react-native-push-notification';
import img1 from '../../assets/1.png';
import img2 from '../../assets/tp.png';
import img3 from '../../assets/mob.jpg';
import back from '../../assets/back.png';
import graph from '../../assets/graph.png';
import edit from '../../assets/edit.jpg';

export default class ExploreCatogriesScreen extends React.Component {
  componentDidMount() {}

  getListViewItem = item => {
    Alert.alert(item.key);
  };
  render() {
    return (
      <View style={{flex: 1, padding: 20, backgroundColor: '#5653EC'}}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Home')}
            style={{elevation: 10}}>
            <Image
              source={back}
              style={{height: 40, width: 40, borderRadius: 30, elevation: 100}}
            />
          </TouchableOpacity>
          <Text
            style={{
              alignSelf: 'center',
              marginLeft: '4%',
              color: '#fff',
              fontWeight: 'bold',
              fontSize: 20,
            }}>
            Explore Categories
          </Text>
        </View>

        <View style={{padding: 5}}>
          <FlatList
            horizontal={false}
            data={[
              {key: 'Business'},
              {key: 'Grocery'},
              {key: 'Design'},
              {key: 'Startup'},
              {key: 'Technology'},
              {key: 'Daily News'},
              {key: 'Tech'},
              {key: 'Internet'},
              {key: 'IOT'},
              {key: 'HealthCare'},
            ]}
            renderItem={({item}) => (
              // <Text style={styles.item}
              //     onPress={this.getListViewItem.bind(this, item)}>{item.key}</Text>
              <View style={styles.item}>
                <View
                  style={{
                    width: '40%',
                    height: '100%',
                    justifyContent: 'center',
                  }}>
                  <Image
                    source={graph}
                    style={{
                      height: 100,
                      width: 100,
                      borderRadius: 30,
                      elevation: 100,
                      alignSelf: 'center',
                    }}
                  />
                </View>
                <View
                  style={{
                    width: '60%',
                    height: '100%',
                  }}>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      fontSize: 20,
                      textAlign: 'center',
                    }}>
                    {item.key}
                  </Text>

                  <Text
                    style={{
                      fontWeight: '100',
                      fontSize: 18,
                      textAlign: 'center',
                      color: 'gray',
                    }}>
                    location : Hyderabad
                  </Text>

                  <Text
                    style={{
                      fontWeight: '400',
                      fontSize: 20,
                      textAlign: 'center',
                      paddingVertical: 5,
                    }}>
                    Hello this is tech
                  </Text>
                </View>
              </View>
            )}

            // ItemSeparatorComponent={this.renderSeparator}
          />
        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  linearGradient: {
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    marginTop: 100,
  },
  item: {
    padding: 10,
    fontSize: 18,
    backgroundColor: 'white',
    height: 130,
    width: '95%',
    margin: 10,
    textAlign: 'center',
    borderRadius: 10,
    fontWeight: 'bold',
    backgroundColor: 'white',
    color: 'white',
    paddingTop: 25,
    flexDirection: 'row',
  },
});
