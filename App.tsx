import React, { useState } from 'react';
import axios from 'axios';

interface User {
  avatar_url: string;
  name: string;
  bio: string;
}
interface Repo {
  id: number;
  name: string;
  description: string;
  visibility: string;
  html_url: string;
  language: string;
}

const App: React.FC = () => {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState<User | null>(null);
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [selected, setSelected] = useState<Repo | null>(null);

  const search = async () => {
    if (!username) { setError('Digite um usuário'); return; }
    setError(''); setLoading(true);
    try {
      const u = await axios.get<User>(`https://api.github.com/users/${username}`);
      const r = await axios.get<Repo[]>(`https://api.github.com/users/${username}/repos`);
      setUser(u.data);
      setRepos(r.data);
    } catch {
      setError('Erro na requisição');
      setUser(null);
      setRepos([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: 20, fontFamily: 'sans-serif' }}>
      <h1>Busca GitHub</h1>
      <input
        placeholder="Username"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <button onClick={search}>Buscar</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {loading && <p>Carregando...</p>}
      {user && (
        <div>
          <img src={user.avatar_url} alt="Avatar" width={100} />
          <h2>{user.name}</h2>
          <p>{user.bio}</p>
        </div>
      )}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 20 }}>
        {repos.map(repo => (
          <div key={repo.id}
               style={{ border: '1px solid #ccc', padding: 10, cursor: 'pointer' }}
               onClick={() => setSelected(repo)}>
            <h3>{repo.name}</h3>
            <p>{repo.description}</p>
          </div>
        ))}
      </div>
      {selected && (
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex',
          alignItems: 'center', justifyContent: 'center'
        }} onClick={() => setSelected(null)}>
          <div style={{ background: 'white', padding: 20 }} onClick={e => e.stopPropagation()}>
            <h2>{selected.name}</h2>
            <p><strong>Visibilidade:</strong> {selected.visibility}</p>
            <p><strong>Linguagem:</strong> {selected.language}</p>
            <p>{selected.description}</p>
            <a href={selected.html_url} target="_blank" rel="noreferrer">Ver no GitHub</a>
            <br/><button onClick={() => setSelected(null)}>Fechar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;