import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  TextInput,
} from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/Ionicons';
import moment from 'moment';

import {useSelector} from 'react-redux';
import {showComments, doComment} from '../../../../lib/api';
const Comments = ({navigation, route}) => {
  const {Post_id} = route.params;
  const [comments, setComments] = useState([]);
  const [check, setCheck] = useState(false);
  const [comment, setComment] = useState('');
  const {userData} = useSelector(({USER}) => USER);
  useEffect(() => {
    showComments({Auth: userData.token, id: Post_id}).then(res => {
      console.log(res);
      setComments(res.comments);
    });
  }, [check]);
  const renderItem = ({item}) => (
    <View style={styles.flatView}>
      <Image
        source={
          item.user_image
            ? {uri: item.user_image}
            : require('../../../../Images/holder.png')
        }
        style={styles.img}
      />
      <View style={styles.rightone}>
        <Text style={styles.name}>
          {item.user_name}
          <Text style={styles.message}> {item.comment}</Text>
        </Text>
        <Text style={styles.time}>{moment(item.created_at).fromNow()}</Text>
      </View>
    </View>
  );
  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrowleft" size={20} color={'white'} />
        </TouchableOpacity>
        <Text style={styles.comment}>Comments</Text>
      </View>
      <View style={styles.secondView}>
        <FlatList
          data={comments}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
        <View style={styles.textInput}>
          <TextInput
            placeholder={'Comment here'}
            placeholderTextColor={'#B4B4B4'}
            style={styles.input}
            value={comment}
            onChangeText={text => setComment(text)}
          />
          <Icon1
            name="ios-send-sharp"
            size={20}
            onPress={() => {
              comment &&
                doComment({
                  Auth: userData.token,
                  post_id: Post_id,
                  comment,
                }).then(res => {
                  console.log(res);
                  if (res.status == 'success') {
                    setComment('');
                    setCheck(!check);
                  }
                });
            }}
          />
        </View>
      </View>
    </View>
  );
};
export default Comments;
