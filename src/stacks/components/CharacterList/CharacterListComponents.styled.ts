import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  infoContainer: {
    margin: 10,
    flex: 1,
  },
  infoItem: {
    marginBottom: 18
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
  likeButton: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: '#F4F6F4',
    borderColor: '#224229',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  likeText: {
    marginLeft: 6,
    color: '#162C1B',
    fontWeight: '400',
    fontSize: 14,
  },
});
