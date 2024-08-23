import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login(){

    const [username, setUsername] = useState('');
    const navigate = useNavigate();
  


    const handleSubmit = (e) => {
        e.preventDefault();
        if (username) {
          navigate(`/jugar/${username}`);
        }
      };
    
      return (
        <div>
          <h1>Ingrese su nombre de usuario</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Nombre de usuario"
            />
            <button type="submit">Ingresar</button>
          </form>
        </div>
      );
}

export default Login;