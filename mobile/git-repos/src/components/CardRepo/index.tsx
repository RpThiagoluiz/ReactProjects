import { useNavigation } from "@react-navigation/native";
import { Typography } from "@layout/Typography";
import { type Repository } from "interfaces/repositories";
import { Container, WrapperInfo, WrapperStars, UserAvatar } from "./styles";

interface Props {
  repository: Repository;
}

export function CardRepo({ repository }: Props) {
  const { navigate } = useNavigation();
  // Can be change params for redux, for select repository.
  const handleOnPressCard = () => {
    navigate("repoDetails", {
      repoName: repository.name,
      url: repository.html_url,
    });
  };

  return (
    <Container
      onPress={handleOnPressCard}
      activeOpacity={0.8}
      disabled={!repository.html_url}
    >
      <UserAvatar
        source={{
          uri: repository.owner.avatar_url,
        }}
      />
      <WrapperInfo>
        <Typography bold fontSize={16}>
          {repository.name}
        </Typography>
        <Typography>{repository.owner.login}</Typography>
        {!repository.html_url && (
          <Typography bold fontSize={12} color="RED_400">
            Repositório desativado
          </Typography>
        )}
      </WrapperInfo>
      <WrapperStars>
        <Typography>{repository.stargazers_count} Stars</Typography>
      </WrapperStars>
    </Container>
  );
}
