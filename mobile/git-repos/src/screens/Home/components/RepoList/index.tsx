import { CardRepo } from "@components/CardRepo";
import { EmptySearch } from "@components/EmptySearch";
import { CustomLoading } from "@layout/CustomLoading";
import { Divider } from "@layout/Divider";
import { type RootState } from "@store/index";
import { getRepositories } from "@store/selectors";
import { FlatList } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { useSelector } from "react-redux";
import { useFetchNextPage } from "./hooks/useFetchNextPage";

interface Props {
  searchRepositoryName: string;
}

export function RepoList({ searchRepositoryName }: Props) {
  const { data: repositories, isLoading } = useSelector((state: RootState) =>
    getRepositories(state)
  );

  const { fetchNextPage } = useFetchNextPage();

  const handleGetMoreRepos = () => {
    if (!repositories || isLoading) return;

    const hasMoreItens = repositories?.items.length < repositories?.total_count;

    if (hasMoreItens) {
      fetchNextPage(searchRepositoryName);
    }
  };

  return (
    <FlatList
      data={repositories?.items ?? []}
      keyExtractor={(item) => String(item.id)}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingTop: RFValue(16),
        paddingBottom: RFValue(24),
      }}
      renderItem={({ item }) => <CardRepo repository={item} />}
      ItemSeparatorComponent={() => <Divider />}
      ListEmptyComponent={() => <EmptySearch />}
      onEndReached={handleGetMoreRepos}
      onEndReachedThreshold={0.2}
      ListFooterComponent={() => (isLoading ? <CustomLoading /> : null)}
    />
  );
}
