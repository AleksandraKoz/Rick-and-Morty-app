import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  likeButtonWide: {
    backgroundColor: '#224229',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 20,
    marginTop: 16,
    padding: 8,
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
  likeTextWide: {
    color: '#fff',
    marginLeft: 8,
    fontSize: 14,
  },
  likeText: {
    fontSize: 14,
    marginLeft: 6,
    color: '#162C1B',
    fontWeight: '400',
  },
});
