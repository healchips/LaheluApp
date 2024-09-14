import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { PostType } from '../types/post';

const Post = ({ post }: { post: PostType }) => {
  return (
    <View style={styles.postContainer}>
      <View style={styles.textWrapper}>
        <Text style={styles.username}>{post.username}</Text>
      </View>
      <Image source={{ uri: post.imageUri }} style={styles.postImage} />
      <View style={styles.textWrapper}>
        <Text style={styles.caption}>{post.caption}</Text>
      </View>
      <View style={styles.postDetails}>
        <View style={styles.textWrapper}>
          <Text>{post.koin} koin</Text>
        </View>
        <View style={styles.textWrapper}>
          <Text>#{post.tag}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  postContainer: {
    padding: 10,
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 10,
  },
  username: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  postImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  caption: {
    marginVertical: 10,
    fontSize: 14,
  },
  postDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textWrapper: {
    marginVertical: 5,
  },
});

export default Post;
