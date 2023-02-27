export interface Repository {
  id: number;
  name: string;
  stargazers_count: number;
  html_url: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

export interface RepositoriesResponse {
  total_count: number;
  items: Repository[];
}
