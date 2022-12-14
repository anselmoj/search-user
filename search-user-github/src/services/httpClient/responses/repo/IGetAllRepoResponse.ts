interface IGetAllRepoResponse {
  id: string
  full_name: string
  description: string
  html_url: string
  owner: {
    avatar_url: string
    login: string
  }
}

export default IGetAllRepoResponse
