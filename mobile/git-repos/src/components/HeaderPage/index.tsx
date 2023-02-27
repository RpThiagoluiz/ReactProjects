import { useNavigation } from "@react-navigation/native";
import { Typography } from "@layout/Typography";
import { Container, BackIcon } from "./styles";

interface Prop {
  title: string;
  hasBackIcon?: boolean;
  fontSize?: number;
}

export function HeaderPage({
  title,
  hasBackIcon = false,
  fontSize = 20,
}: Prop) {
  const { goBack } = useNavigation();

  const handleBackPage = () => {
    goBack();
  };

  return (
    <Container
      onPress={hasBackIcon ? handleBackPage : undefined}
      activeOpacity={1}
    >
      {hasBackIcon && <BackIcon />}
      <Typography bold fontSize={fontSize} color="YELLOW_400">
        {title}
      </Typography>
    </Container>
  );
}
