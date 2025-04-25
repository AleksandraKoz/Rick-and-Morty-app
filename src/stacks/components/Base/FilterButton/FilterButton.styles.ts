import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  filterButton: {
    justifyContent: 'center',
    alignSelf: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 24,
    paddingVertical: 10,
    borderRadius: 24,
  },
  filterText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '400',
  },
  icon: {
    marginLeft: 8,
  },
  modalOverlay: {
    flex: 1,
  },
});
