// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, Alert } from 'react-native';
// import { STYLES, COLORS } from './Styles';
// // import ImagePicker from 'react-native-image-picker';

// import {launchCamera, launchImageLibrary,} from 'react-native-image-picker';

// export default function SimpleImagePicker() {
//   const [imageSource, setImageSource] = useState(null);

//   function 
//   selectImage() {
//     let options = {
//       title: 'You can choose one image',
//       maxWidth: 256,
//       maxHeight: 256,
//       storageOptions: {
//         skipBackup: true
//       }
//     };

//     launchImageLibrary(options, response => {
//       console.log({ response });

//       if (response.didCancel) {
//         console.log('User cancelled photo picker');
//         Alert.alert('You did not select any image');
//       } else if (response.error) {
//         console.log('ImagePicker Error: ', response.error);
//       } else if (response.customButton) {
//         console.log('User tapped custom button: ', response.customButton);
//       } else {
//         let source = { uri: response.uri };
//         console.log({ source });
//       }
//     });
//   }

//   return (
//     <View
//       style={[
//         STYLES.flex,
//         STYLES.centerContainer,
//         { backgroundColor: COLORS.primaryDark }
//       ]}
//     >
//       <Text style={[STYLES.title, { color: COLORS.primaryLight }]}>
//         Simple Image Picker
//       </Text>
//       <TouchableOpacity
//         onPress={selectImage}
//         style={[
//           STYLES.selectButtonContainer,
//           { backgroundColor: COLORS.primaryLight }
//         ]}
//       >
//         <Text style={STYLES.selectButtonTitle}>Pick an image</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert, Image, Dimensions } from 'react-native';
import { STYLES, COLORS } from './Styles';
// import ImagePicker from 'react-native-image-picker';
import { launchCamera, launchImageLibrary, } from 'react-native-image-picker';
import lens from '../../assets/lens.jpeg';
import home from '../../assets/home.jpg';
import share from '../../assets/share.png';

export default function SimpleImagePicker() {
  const [imageSource, setImageSource] = useState(null);

  function selectImage() {
    let options = {
      title: 'You can choose one image',
      maxWidth: 256,
      maxHeight: 256,
      noData: true,
      mediaType: 'photo',
      storageOptions: {
        skipBackup: true
      }
    };

    launchCamera(options, response => {
      if (response.didCancel) {
        console.log('User cancelled photo picker');
        Alert.alert('You did not select any image');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        let source = { uri: response.uri };

        // ADD THIS
        setImageSource(source.uri);
      }
    });
  }

  return (
    // <View
    //   style={[
    //     STYLES.flex,
    //     STYLES.centerContainer,
    //     { backgroundColor: COLORS.primaryDark }
    //   ]}
    // >
    //   <Text style={[STYLES.title, { color: COLORS.primaryLight }]}>
    //     Simple Image Picker
    //   </Text>
    //   {/* ADD THIS */}
    //   <View style={STYLES.imageContainer}>
    //     {imageSource === null ? (
    //       <Image
    //         source={require('../../assets/img1.jpg')}
    //         style={STYLES.imageBox}
    //         resizeMode='contain'
    //       />
    //     ) : (
    //       <Image
    //         source={{ uri: imageSource }}
    //         style={STYLES.imageBox}
    //         resizeMode='contain'
    //       />
    //     )}
    //   </View>
    //   <TouchableOpacity
    //     onPress={selectImage}
    //     style={[
    //       STYLES.selectButtonContainer,
    //       { backgroundColor: COLORS.primaryLight }
    //     ]}
    //   >
    //     <Text style={STYLES.selectButtonTitle}>Pick an image</Text>
    //   </TouchableOpacity>
    // </View>


    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: Dimensions.get('screen').height / 12,
        width: '70%',
        alignSelf: 'center',
        padding: 5

      }}>
      <Image
        source={home}
        style={{ height: 60, width: 60, borderRadius: 50, }}
      />
      <TouchableOpacity
        onPress={selectImage}
      // onPress={() => this.props.navigation.navigate('ExploreCatogries')}
      >
        <Image
          source={lens}
          style={{ height: 60, width: 60, borderRadius: 50, }}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate('Testing')}
        style={{ backgroundColorL: '#fff' }}
      >
        <Image
          source={share}
          style={{
            height: 40, width: 40, borderRadius: 50, top: 5
          }}
        />
      </TouchableOpacity>
    </View>




  );
}