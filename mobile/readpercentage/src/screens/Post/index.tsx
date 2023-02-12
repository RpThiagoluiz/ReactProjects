import { useRef } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { ProgressBar } from '../components/ProgressBar';

import { useMoveToTop } from './hooks/useMoveToTop';
import { usePercentage } from './hooks/usePercentageScrollView';
import { styles } from './styles';

export function Post() {
  const { scrollPercentage, percentage } = usePercentage();

  const scrollRef = useRef<ScrollView>(null);

  const { handleOnMoveToTop } = useMoveToTop(scrollRef);

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollRef}
        scrollEventThrottle={16} //Time event throttling
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
        onScroll={(event) => scrollPercentage(event.nativeEvent)}
      >
        <Text style={styles.title}>Lorem Ipsum</Text>
        <View>
          <Text style={styles.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            autem minus perferendis omnis repudiandae, molestias placeat.
            Laborum perferendis atque eaque maiores nostrum amet iusto porro
            nulla labore repellendus? Magnam, magni?
          </Text>
          <Text style={styles.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            autem minus perferendis omnis repudiandae, molestias placeat.
            Laborum perferendis atque eaque maiores nostrum amet iusto porro
            nulla labore repellendus? Magnam, magni?
          </Text>
          <Text style={styles.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            autem minus perferendis omnis repudiandae, molestias placeat.
            Laborum perferendis atque eaque maiores nostrum amet iusto porro
            nulla labore repellendus? Magnam, magni?
          </Text>
          <Text style={styles.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            autem minus perferendis omnis repudiandae, molestias placeat.
            Laborum perferendis atque eaque maiores nostrum amet iusto porro
            nulla labore repellendus? Magnam, magni?
          </Text>
          <Text style={styles.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            autem minus perferendis omnis repudiandae, molestias placeat.
            Laborum perferendis atque eaque maiores nostrum amet iusto porro
            nulla labore repellendus? Magnam, magni?
          </Text>
          <Text style={styles.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            autem minus perferendis omnis repudiandae, molestias placeat.
            Laborum perferendis atque eaque maiores nostrum amet iusto porro
            nulla labore repellendus? Magnam, magni?
          </Text>
          <Text style={styles.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            autem minus perferendis omnis repudiandae, molestias placeat.
            Laborum perferendis atque eaque maiores nostrum amet iusto porro
            nulla labore repellendus? Magnam, magni?
          </Text>

          <Text style={styles.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            autem minus perferendis omnis repudiandae, molestias placeat.
            Laborum perferendis atque eaque maiores nostrum amet iusto porro
            nulla labore repellendus? Magnam, magni? Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Vel recusandae a veritatis
            dignissimos! Similique, soluta. In fugiat praesentium vel
            necessitatibus! Nulla quam porro, repudiandae iste assumenda quos
            odio veritatis amet?
          </Text>
          <Text style={styles.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            autem minus perferendis omnis repudiandae, molestias placeat.
            Laborum perferendis atque eaque maiores nostrum amet iusto porro
            nulla labore repellendus? Magnam, magni? Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Vel recusandae a veritatis
            dignissimos! Similique, soluta. In fugiat praesentium vel
            necessitatibus! Nulla quam porro, repudiandae iste assumenda quos
            odio veritatis amet?
          </Text>
          <Text style={styles.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            autem minus perferendis omnis repudiandae, molestias placeat.
            Laborum perferendis atque eaque maiores nostrum amet iusto porro
            nulla labore repellendus? Magnam, magni? Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Vel recusandae a veritatis
            dignissimos! Similique, soluta. In fugiat praesentium vel
            necessitatibus! Nulla quam porro, repudiandae iste assumenda quos
            odio veritatis amet?
          </Text>
          <Text style={styles.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            autem minus perferendis omnis repudiandae, molestias placeat.
            Laborum perferendis atque eaque maiores nostrum amet iusto porro
            nulla labore repellendus? Magnam, magni? Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Vel recusandae a veritatis
            dignissimos! Similique, soluta. In fugiat praesentium vel
            necessitatibus! Nulla quam porro, repudiandae iste assumenda quos
            odio veritatis amet?
          </Text>
        </View>
      </ScrollView>
      <ProgressBar value={percentage} onMoveToTop={handleOnMoveToTop} />
    </View>
  );
}
