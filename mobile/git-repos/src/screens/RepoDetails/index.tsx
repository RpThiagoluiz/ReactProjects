import { useState } from "react";
import { ScreenContainer } from "@layout/ScreenContainer";
import { useRoute } from "@react-navigation/native";
import WebView from "react-native-webview";
import { HeaderPage } from "@components/HeaderPage";
import { CustomLoading } from "@layout/CustomLoading";
import { WrapperLoading } from "./styles";

interface Params {
  url: string;
  repoName: string;
}

export function RepoDetails() {
  const [isLoading, setLoading] = useState(false);

  const route = useRoute();
  const { url, repoName } = route.params as Params;

  return (
    <ScreenContainer>
      <HeaderPage title={repoName} hasBackIcon />
      <WebView
        source={{ uri: url }}
        onLoadStart={() => setLoading(true)}
        onLoad={() => setLoading(false)}
        javaScriptEnabled
        domStorageEnabled
      />
      {isLoading ? (
        <WrapperLoading>
          <CustomLoading />
        </WrapperLoading>
      ) : null}
    </ScreenContainer>
  );
}
