import React from 'react';
import {
  StatusBar,
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  FlatList,
  StyleSheet,
} from 'react-native';
import logo from '../../assets/tp.png';

export default class SplashScreen extends React.Component {
  componentDidMount() {
    this.timeoutHandle = setTimeout(() => {
      this.props.navigation.navigate('Home');
    }, 3000);
  }

  componentWillUnmount() {
    clearTimeout(this.timeoutHandle);
  }
  render() {
    return (
      <View
        style={{
          flex: 1,justifyContent:'center'
        }}>
          <View style={{justifyContent:'center',alignSelf:'center', flexDirection:'row'}}>
            <Text style={{color:'black',fontWeight:'bold',fontSize:25}}>pic</Text>
            <Text style={{color:'#979797',fontWeight:'bold',fontSize:25}}>a</Text>
            <Text style={{color:'#0cf2db',fontWeight:'bold',fontSize:25}}>day</Text>
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
    height: 400,
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
