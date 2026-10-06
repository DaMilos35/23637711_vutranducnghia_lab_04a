import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';

import Bai1 from './components/Bai1';
import Bai2 from './components/Bai2';
import Bai3 from './components/Bai3';
import Bai4 from './components/Bai4';
import Bai5 from './components/Bai5';

export default function App() {
  const [tab, setTab] = useState<number>(1);

  return (
    <View style={styles.container}>
      <View style={styles.menu}>
        <Button title="Bài 1" onPress={() => setTab(1)} />
        <Button title="Bài 2" onPress={() => setTab(2)} />
        <Button title="Bài 3" onPress={() => setTab(3)} />
        <Button title="Bài 4" onPress={() => setTab(4)} />
        <Button title="Bài 5" onPress={() => setTab(5)} />
      </View>

      <View style={styles.content}>
        {tab === 1 && <Bai1 />}
        {tab === 2 && <Bai2 />}
        {tab === 3 && <Bai3 />}
        {tab === 4 && <Bai4 />}
        {tab === 5 && <Bai5 />}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 40, backgroundColor: '#f5f5f5' },
  menu: { flexDirection: 'row', justifyContent: 'space-around', paddingBottom: 10, borderBottomWidth: 1, borderColor: '#ccc', backgroundColor: '#fff' },
  content: { flex: 1 },
});