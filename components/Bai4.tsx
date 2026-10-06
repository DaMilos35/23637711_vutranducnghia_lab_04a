import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';

interface User {
  id: string;
  name: string;
  email: string;
}

export default function Bai4() {
  const [data, setData] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch('https://6976c5a9c0c36a2a9951c9d8.mockapi.io/users')
      .then((res) => res.json())
      .then((json: User[]) => setData(json))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <ActivityIndicator style={styles.center} size="large" color="#0000ff" />;

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text numberOfLines={1} style={styles.bold}>{item.name}</Text>
            <Text numberOfLines={1} style={styles.sub}>{item.email}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { height: 110, paddingVertical: 10 },
  center: { flex: 1, justifyContent: 'center' },
  card: { width: 140, marginHorizontal: 6, padding: 10, borderWidth: 1, borderColor: '#ccc', borderRadius: 8, justifyContent: 'center' },
  bold: { fontWeight: 'bold', fontSize: 14 },
  sub: { color: '#666', fontSize: 12, marginTop: 4 },
});