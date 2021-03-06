import { useHistory } from 'react-router-dom';
import googleIconImg from '../assets/google-icon.svg';
import illustrationImg from '../assets/illustration.svg';
import logoImg from '../assets/logo.svg';
import { Button } from '../components/Button';
import { useAuth } from '../hooks/useAuth';
import '../styles/auth.scss';



export function Home() {
  const history = useHistory();
  const {user, signInWithGoogle} = useAuth();

  async function handleCreateRoom() {
    if(!user) {
      await signInWithGoogle();
    };
    history.push('/rooms/new');
  };

  return (
    <div id="page-auth">
      <aside>
        <img src={illustrationImg} alt="ilustração de perguntas e respostas" />
        <strong>Crie suas salas de Q&amp;A ao-vivo</strong>
        <p>Tire as duvidas da sua audiência em tempo real</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="Letmeask" />
          <button onClick={handleCreateRoom} className="create-room">
            <img src={googleIconImg} alt="Logo do google" />
            Crie sua sala com google
          </button>
          <div className="separator">ou entre em uma sala</div>
          <form>
            <input
              type="text"
              placeholder="Digite o código da sala"
            />
            <Button type="submit">
              Entrar na sala
            </Button>
          </form>
        </div>
      </main>
    </div>
  )
}