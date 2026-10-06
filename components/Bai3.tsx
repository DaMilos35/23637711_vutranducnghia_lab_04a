import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';

interface User {
  id: string;
  name: string;
  email: string;
}

export default function Bai3() {
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
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Text style={styles.bold}>{item.name}</Text>
          <Text style={styles.sub}>{item.email}</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  center: { flex: 1, justifyContent: 'center' },
  item: { padding: 12, borderBottomWidth: 1, borderColor: '#eee' },
  bold: { fontWeight: 'bold', fontSize: 15 },
  sub: { color: '#666', marginTop: 2 },
});