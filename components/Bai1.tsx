import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';

const data = [
  { id: '1', name: 'Ca nấu lẩu, nấu mì mini...', shop: 'Shop Devang', img: require('./img/ca_nau_lau.png') },
  { id: '2', name: '1KG KHÔ GÀ BƠ TỎI ...', shop: 'Shop LTD Food', img: require('./img/ga_bo_toi.png') },
  { id: '3', name: 'Xe cần cẩu đa năng', shop: 'Shop Thế giới đồ chơi', img: require('./img/xa_can_cau.png') },
  { id: '4', name: 'Đồ chơi dạng mô hình', shop: 'Shop Thế giới đồ chơi', img: require('./img/do_choi_dang_mo_hinh.png') },
  { id: '5', name: 'Lãnh đạo giản đơn', shop: 'Shop Minh Long Book', img: require('./img/lanh_dao_gian_don.png') },
  { id: '6', name: 'Hiểu lòng con trẻ', shop: 'Shop Minh Long Book', img: require('./img/hieu_long_con_tre.png') },
];

export default function Bai1() {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Image source={item.img} style={styles.img} resizeMode="contain" />
          <View style={styles.info}>
            <Text numberOfLines={1} style={styles.name}>{item.name}</Text>
            <Text style={styles.shop}>{item.shop}</Text>
          </View>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnTxt}>Chat</Text>
          </TouchableOpacity>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  item: { flexDirection: 'row', padding: 10, alignItems: 'center', borderBottomWidth: 1, borderColor: '#eee', backgroundColor: '#fff' },
  img: { width: 60, height: 60 },
  info: { flex: 1, marginLeft: 10 },
  name: { fontSize: 14, fontWeight: '500' },
  shop: { fontSize: 12, color: 'red', marginTop: 4 },
  btn: { backgroundColor: '#e51010', paddingVertical: 8, paddingHorizontal: 20, borderRadius: 2 },
  btnTxt: { color: '#fff', fontWeight: 'bold', fontSize: 13 },
});