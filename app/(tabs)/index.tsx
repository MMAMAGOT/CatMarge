import { Image } from 'expo-image';
import { StyleSheet } from 'react-native';

import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

const cats = [
  { name: 'Momo', note: 'Profile complete', score: '98%' },
  { name: 'Sora', note: 'Photo review', score: '84%' },
  { name: 'Luna', note: 'New intake', score: '72%' },
];

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D7F0E5', dark: '#17382E' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">CatMarge</ThemedText>
        <ThemedText>Cat profiles ready for careful matching.</ThemedText>
      </ThemedView>

      <ThemedView style={styles.summaryGrid}>
        <ThemedView style={styles.summaryCard}>
          <ThemedText type="subtitle">12</ThemedText>
          <ThemedText>Active cats</ThemedText>
        </ThemedView>
        <ThemedView style={styles.summaryCard}>
          <ThemedText type="subtitle">4</ThemedText>
          <ThemedText>Merge leads</ThemedText>
        </ThemedView>
      </ThemedView>

      <ThemedView style={styles.section}>
        <ThemedText type="subtitle">Recent profiles</ThemedText>
        {cats.map((cat) => (
          <ThemedView key={cat.name} style={styles.catRow}>
            <ThemedView style={styles.catText}>
              <ThemedText type="defaultSemiBold">{cat.name}</ThemedText>
              <ThemedText>{cat.note}</ThemedText>
            </ThemedView>
            <ThemedText type="defaultSemiBold">{cat.score}</ThemedText>
          </ThemedView>
        ))}
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    gap: 8,
  },
  summaryGrid: {
    flexDirection: 'row',
    gap: 12,
  },
  summaryCard: {
    flex: 1,
    gap: 4,
    borderRadius: 8,
    padding: 16,
    backgroundColor: 'rgba(52, 111, 91, 0.12)',
  },
  section: {
    gap: 12,
  },
  catRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
    borderRadius: 8,
    padding: 14,
    backgroundColor: 'rgba(40, 78, 106, 0.10)',
  },
  catText: {
    flex: 1,
    gap: 2,
  },
  headerImage: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
    opacity: 0.72,
  },
});
