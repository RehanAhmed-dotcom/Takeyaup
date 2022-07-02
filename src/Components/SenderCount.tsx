import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {PostLikes} from '../lib/api';
const SenderCount = props => {
  const {item} = props;
  const {userData} = useSelector(({USER}) => USER);
  // console.log('user', userData.token);
  const [count, setCount] = useState(item.like_count_sender);
  console.log('count', count);
  return (
    <View
      style={{
        flexDirection: 'row',
        marginTop: 30,
        // backgroundColor: 'red',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <View style={{flexDirection: 'row', marginTop: 0, alignItems: 'center'}}>
        {/* <Text style={{color: '#50D240'}}>@</Text> */}
        <Text style={{color: '#50D240'}}>{item?.sender?.username}</Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          PostLikes({
            Auth: userData.token,
            betid: item.id,
            userid: item.sender.id,
          }).then(res => {
            console.log('res', res);
            if (res.is_like == 'true') {
              setCount(count + 1);
            }
          });
        }}
        style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image
          source={require('../Images/Capture.png')}
          style={{height: 30, width: 30, resizeMode: 'contain'}}
        />
        <Text style={{color: '#50D240', marginLeft: 10}}>{count}</Text>
      </TouchableOpacity>
    </View>
  );
};
export default SenderCount;
