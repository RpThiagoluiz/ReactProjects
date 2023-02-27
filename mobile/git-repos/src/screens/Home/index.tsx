import { useState } from "react";
import { HeaderPage } from "@components/HeaderPage";
import { ScreenContainer } from "@layout/ScreenContainer";
import { RepoList } from "./components/RepoList";
import { SearchInput } from "./components/SearchInput";

export function Home() {
  const [searchRepositoryName, setSearchRepositoryName] = useState("");

  const handleOnChangeSearchRepositoryName = (queryParams: string) => {
    setSearchRepositoryName(queryParams);
  };

  return (
    <ScreenContainer>
      <HeaderPage fontSize={28} title="Repositórios" />
      <SearchInput
        searchRepositoryName={searchRepositoryName}
        handleOnChangeSearchRepositoryName={handleOnChangeSearchRepositoryName}
      />

      <RepoList searchRepositoryName={searchRepositoryName} />
    </ScreenContainer>
  );
}
