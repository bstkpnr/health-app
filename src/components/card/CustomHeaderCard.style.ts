import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    width: '100%',
    height: 176,
    position: 'relative',
    backgroundColor: 'white',
    borderRadius: 12,
    overflow: 'hidden',
  },
  orangeCircle: {
    width: 157,
    height: 157,
    left: 280,
    position: 'absolute',
    borderRadius: 9999,
  },
  startText: {
    left: 292,
    top: 24,
    position: 'absolute',
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
});
