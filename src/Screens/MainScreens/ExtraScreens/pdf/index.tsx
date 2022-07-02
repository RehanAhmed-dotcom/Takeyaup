import React from 'react';

import {
  StyleSheet,
  SafeAreaView,
  Platform,
  Dimensions,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Pdf from 'react-native-pdf';
const pdf = ({navigation, route}) => {
  const {file} = route.params;
  console.log('file', file);
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{paddingHorizontal: 15, marginTop: 10}}></View>
      <View style={styles.container}>
        <Pdf
          trustAllCerts={Platform.OS == 'android' ? false : true}
          source={{
            uri: file
              ? file
              : 'http://samples.leanpub.com/thereactnativebook-sample.pdf',
            cache: true,
          }}
          onLoadComplete={(numberOfPages, filePath) => {
            console.log(`Number of pages: ${numberOfPages}`);
          }}
          onPageChanged={(page, numberOfPages) => {
            console.log(`Current page: ${page}`);
          }}
          onError={error => {
            console.log(error);
          }}
          onPressLink={uri => {
            console.log(`Link pressed: ${uri}`);
          }}
          style={styles.pdf}
        />
      </View>
    </SafeAreaView>
  );
};
export default pdf;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 25,
  },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
