interface IGetAllProfileResponse {
  list: {
    login: string
    name: string
    bio: string
    avatar_url: string
    public_repos: number
    following: number
    followers: number
  }[]
}

export default IGetAllProfileResponse
