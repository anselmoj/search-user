import './styles.css'
import axios from 'axios'
import { useState } from 'react'

type GitHubResponse = {
  name: string
  bio: string
  avatar_url: string
}

function Home() {
  const [search, setSearch] = useState('')
  const [name, setName] = useState('Aguardando...')
  const [bio, setBio] = useState('Aguardando...')
  const [avatar, setAvatar] = useState('Aguardando...')

  const handleSearch = () => {
    axios
      .get<GitHubResponse>(`http://api.github.com/users/${search}`)
      .then((res) => {
        setName(res.data.name)
        setBio(res.data.bio)
        setAvatar(res.data.avatar_url)
      })
  }

  return (
    <div className="container-app">
      <div className="container">
        <header className="header-top">
          <ul>
            <li>Jovem Programador</li>
          </ul>
        </header>

        <main>
          <div className="form">
            <h1>Buscador de perfis do GITHUB</h1>
            <input
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="Digite um username"
            />
            <button onClick={handleSearch}>Buscar</button>
          </div>

          <div className="content">
            <div>
              <img src={avatar} alt="Foto Perfil" />
              <h1>{name}</h1>
              <p>{bio}</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Home
