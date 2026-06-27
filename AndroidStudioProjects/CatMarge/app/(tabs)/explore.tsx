import { Image } from 'expo-image';
import { StyleSheet } from 'react-native';

import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

const mergeQueue = [
  { pair: 'Momo + Momo-2', status: 'Strong visual match', confidence: 'High' },
  { pair: 'Sora + Sky', status: 'Name and age overlap', confidence: 'Medium' },
  { pair: 'Luna + Lune', status: 'Needs manual review', confidence: 'Low' },
];

export default function QueueScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#F4E7CB', dark: '#40351C' }}
      headerImage={
        <Image
          source={require('@/assets/images/react-logo.png')}
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Merge Queue</ThemedText>
        <ThemedText>Candidate records waiting for review.</ThemedText>
      </ThemedView>

      <ThemedView style={styles.queue}>
        {mergeQueue.map((item) => (
          <ThemedView key={item.pair} style={styles.queueItem}>
            <ThemedView style={styles.queueText}>
              <ThemedText type="defaultSemiBold">{item.pair}</ThemedText>
              <ThemedText>{item.status}</ThemedText>
            </ThemedView>
            <ThemedView style={styles.badge}>
              <ThemedText type="defaultSemiBold">{item.confidence}</ThemedText>
            </ThemedView>
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
  queue: {
    gap: 12,
  },
  queueItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    borderRadius: 8,
    padding: 14,
    backgroundColor: 'rgba(116, 84, 35, 0.12)',
  },
  queueText: {
    flex: 1,
    gap: 2,
  },
  badge: {
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 6,
    backgroundColor: 'rgba(52, 111, 91, 0.14)',
  },
  headerImage: {
    height: 178,
    width: 178,
    bottom: 0,
    left: 0,
    position: 'absolute',
    opacity: 0.72,
  },
});
