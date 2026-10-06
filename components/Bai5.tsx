import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, ScrollView, Button, Image, StyleSheet } from 'react-native';

interface PhotoItem {
  id: string;
  name: string;
  avatar: string;
}

export default function Bai5() {
  const [data, setData] = useState<PhotoItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [isGrid, setIsGrid] = useState<boolean>(false);

  useEffect(() => {
    fetch('https://6976c5a9c0c36a2a9951c9d8.mockapi.io/users')
      .then((res) => res.json())
      .then((json: PhotoItem[]) => setData(json))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <ActivityIndicator style={styles.center} size="large" color="#0000ff" />;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerTitle}>Gallery App</Text>

      {/* Horizontal List: Scroll ngang item nổi bật */}
      <Text style={styles.sectionTitle}>Hình ảnh nổi bật</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        keyExtractor={(item) => 'h-' + item.id}
        renderItem={({ item }) => (
          <View style={styles.hCard}>
            <Image source={{ uri: item.avatar }} style={styles.hImg} />
            <Text numberOfLines={1} style={styles.subTxt}>{item.name}</Text>
          </View>
        )}
      />

      {/* Nút chuyển đổi ListView / GridView */}
      <View style={styles.btnBox}>
        <Button 
          title={`Chuyển sang ${isGrid ? 'ListView (1 cột)' : 'GridView (2 cột)'}`} 
          onPress={() => setIsGrid(!isGrid)} 
        />
      </View>

      {/* FlatList danh sách chính */}
      <FlatList
        key={isGrid ? 'grid' : 'list'}
        scrollEnabled={false}
        data={data}
        numColumns={isGrid ? 2 : 1}
        keyExtractor={(item) => 'm-' + item.id}
        renderItem={({ item }) => (
          <View style={isGrid ? styles.gridItem : styles.listItem}>
            <Image source={{ uri: item.avatar }} style={isGrid ? styles.gridImg : styles.listImg} />
            <Text style={styles.bold}>{item.name}</Text>
          </View>
        )}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: '#fff' },
  center: { flex: 1, justifyContent: 'center' },
  headerTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 10, textAlign: 'center' },
  sectionTitle: { fontSize: 16, fontWeight: 'bold', marginVertical: 8 },
  hCard: { marginRight: 10, alignItems: 'center', width: 90 },
  hImg: { width: 80, height: 80, borderRadius: 8 },
  subTxt: { fontSize: 11, marginTop: 4, textAlign: 'center' },
  btnBox: { marginVertical: 12 },
  listItem: { flexDirection: 'row', alignItems: 'center', padding: 8, borderWidth: 1, borderColor: '#eee', marginBottom: 8, borderRadius: 6 },
  listImg: { width: 50, height: 50, borderRadius: 25, marginRight: 10 },
  gridItem: { flex: 1, margin: 4, padding: 8, borderWidth: 1, borderColor: '#eee', borderRadius: 6, alignItems: 'center' },
  gridImg: { width: 80, height: 80, borderRadius: 8, marginBottom: 6 },
  bold: { fontWeight: 'bold', fontSize: 13 },
});