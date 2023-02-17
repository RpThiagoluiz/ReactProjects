import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: 56,
    backgroundColor: '#292e2e',

    position: 'absolute',
    bottom: 32,
    alignSelf: 'center',

    justifyContent: 'center',

    borderRadius: 32,
    paddingHorizontal: 16,
    opacity: 0.9,
  },
  value: {
    color: '#c4c4cc',
    marginRight: 7,
  },
  progressContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tracker: {
    flex: 1,
    height: 3,
    borderRadius: 3,
    backgroundColor: '#505059',
  },
  progress: {
    height: 3,
    backgroundColor: '#03C988',
  },
});
