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
import img1 from '../../assets/img1.jpg';
import img2 from '../../assets/img2.jpg';
import img3 from '../../assets/img3.jpg';
import img4 from '../../assets/img4.jpg';
import img5 from '../../assets/img5.jpg';
import img6 from '../../assets/img6.jpg';
import img7 from '../../assets/img7.jpg';
import lens from '../../assets/lens.jpeg';
import home from '../../assets/home.jpg';
import share from '../../assets/share.png';

import SimpleImagePicker from '../screens/ExploreCatogriesScreen'


export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [
        { img: img1 },
        { img: img2 },
        { img: img3 },
        { img: img4 },
        { img: img5 },
        { img: img6 },
        { img: img7 },
      ],
      page: 1,
      seed: 1,
      error: null,
      refreshing: false,
    };
  }

  componentDidMount() { }

  render() {
    return (
      <View style={{ flex: 1, }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            height: Dimensions.get('screen').height / 9,
          }}>
          <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 25 }}>pic</Text>
          <Text style={{ color: '#979797', fontWeight: 'bold', fontSize: 25 }}>a</Text>
          <Text style={{ color: '#0cf2db', fontWeight: 'bold', fontSize: 25 }}>day</Text>
        </View>

        <FlatList
          data={this.state.data}
          horizontal={false}
          renderItem={({ item }) => (
            <TouchableOpacity style={{ height: 150, borderWidth: 1 }}
              onPress={() => this.props.navigation.navigate('ExploreCatogries')} >
              <Image
                source={item.img}
                style={{
                  height: 150,
                  width: '100%',
                }}
              />
            </TouchableOpacity>
          )}
        />


        {/* <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            height: Dimensions.get('screen').height /12,
            width: '70%',
            alignSelf: 'center',
            padding:5
            
          }}>
          <Image
            source={home}
            style={{ height: 60, width: 60, borderRadius: 50, }}
          />
          <TouchableOpacity 
            onPress={() => this.props.navigation.navigate('ExploreCatogries')}>
            <Image
              source={lens}
              style={{ height:60, width: 60, borderRadius:50, }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Testing')}
            style={{ backgroundColorL: '#fff' }}
          >
            <Image
              source={share}
              style={{
                height: 40, width: 40, borderRadius:50, top:5
              }}
            />
          </TouchableOpacity>
        </View> */}




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
