export default {
  home: '/',
  repos: (user: string) => `/repositorios/${user}`,
  follower: (user: string) => `/seguidores/${user}`,
  following: (user: string) => `/seguindo/${user}`,
}
