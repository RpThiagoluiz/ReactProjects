import { Typography } from "@layout/Typography";
import { Container, SearchOffIcon } from "./styles";

export function EmptySearch() {
  return (
    <Container>
      <SearchOffIcon />
      <Typography color="YELLOW_400" fontSize={14}>
        Encontre repositórios
      </Typography>
    </Container>
  );
}
