import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageContainer: {
    width: 200,
    height: 200,
    borderRadius: 24,
    overflow: 'hidden',
    position: 'relative',
  },
  avatar: {
    width: '100%',
    height: '100%',
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#224229',
    backgroundColor: '#224229',
  },
});
