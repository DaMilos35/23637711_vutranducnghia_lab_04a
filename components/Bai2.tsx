import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

const data = [
  { id: '1', name: 'Cáp chuyển từ Cổng USB sang PS2...', price: '69.900 đ', discount: '-39%', img: require('./img/daucam1.png') },
  { id: '2', name: 'Cáp chuyển từ Cổng USB sang PS2...', price: '69.900 đ', discount: '-39%', img: require('./img/dauchuyendoipsps21.png') },
  { id: '3', name: 'Cáp chuyển từ Cổng USB sang PS2...', price: '69.900 đ', discount: '-39%', img: require('./img/xa_can_cau.png') },
  { id: '4', name: 'Cáp chuyển từ Cổng USB sang PS2...', price: '69.900 đ', discount: '-39%', img: require('./img/daynguon1.png') },
  { id: '5', name: 'Cáp chuyển từ Cổng USB sang PS2...', price: '69.900 đ', discount: '-39%', img: require('./img/ca_nau_lau.png') },
  { id: '6', name: 'Cáp chuyển từ Cổng USB sang PS2...', price: '69.900 đ', discount: '-39%', img: require('./img/dauchuyendoipsps21.png') },
];

export default function Bai2() {
  return (
    <FlatList
      data={data}
      numColumns={2}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Image source={item.img} style={styles.img} resizeMode="contain" />
          <Text numberOfLines={2} style={styles.title}>{item.name}</Text>
          <View style={styles.row}>
            <Text style={styles.star}>⭐⭐⭐⭐⭐</Text>
            <Text style={styles.sub}>(15)</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.price}>{item.price}</Text>
            <Text style={styles.discount}>{item.discount}</Text>
          </View>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  card: { flex: 1, margin: 5, padding: 8, backgroundColor: '#fff' },
  img: { width: '100%', height: 90 },
  title: { fontSize: 12, marginTop: 5 },
  row: { flexDirection: 'row', alignItems: 'center', marginTop: 4 },
  star: { fontSize: 9 },
  sub: { fontSize: 10, color: '#666', marginLeft: 4 },
  price: { fontSize: 13, fontWeight: 'bold' },
  discount: { fontSize: 11, color: '#888', marginLeft: 6 },
});