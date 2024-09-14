import React, { useEffect, useState } from 'react';
import { FlatList, View, ActivityIndicator } from 'react-native';
import Post from '../components/Post';
import { getPosts } from '../api/simulateAPI';
import Header from '../components/Header';
import { PostType } from '../types/post';

const HomeScreen = () => {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadMorePosts();
  }, []);

  const loadMorePosts = async () => {
    if (loading) return;
    setLoading(true);
    const newPosts = await getPosts(page);
    setPosts((prev) => [...prev, ...newPosts]);
    setPage(page + 1);
    setLoading(false);
  };

  return (
    <View >
    
      <FlatList
        data={posts}
        renderItem={({ item }) => <Post post={item} />}
        keyExtractor={(item) => item.id}
        onEndReached={loadMorePosts}
        onEndReachedThreshold={0.5}
        ListFooterComponent={loading ? <ActivityIndicator /> : null}
      />
    </View>
  );
};

export default HomeScreen;
