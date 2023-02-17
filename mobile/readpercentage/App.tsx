import { StatusBar } from 'react-native';
import { Post } from './src/screens/Post';

export default function App() {
  return (
    <>
      <Post />
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
    </>
  );
}
