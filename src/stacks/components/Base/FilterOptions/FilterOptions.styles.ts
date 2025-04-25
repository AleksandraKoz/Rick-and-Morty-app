import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 8,
  },
  buttonsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  modalContent: {
    position: 'absolute',
    top: 290,
    left: 16,
    right: 16,
    zIndex: 9999,
    padding: 16,
    maxHeight: '40%',
  },
});
