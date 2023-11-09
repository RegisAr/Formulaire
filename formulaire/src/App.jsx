import "./App.css";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [errormessage, seterrormessage] = useState("");

  return (
    <div className="App">
      <h1>Jusque la tout va bien....</h1>
      {/* les deux lignes ci dessous previennent le rafraichissement */}
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (name && password && email) {
            alert("votre demande est ok");
          } else {
            seterrormessage("Déso il manque une ou plusieurs infos");
          }
          alert("Congratulations");
        }}
      >
        {/* Les events du Onchange n'ont rien à voir avec le event du Submit. */}
        <input
          value={name}
          type="text"
          placeholder="Pierre"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <input
          // Attention en mettant une value sur Password il pparait en clair dans le la consoles c'est donc facultatif..
          // value={password}
          type="password"
          placeholder="Quiroule"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <input
          value={email}
          type="email"
          placeholder="zeuhgf@zeu.dj"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <select>
          <option value="USA">USA</option>
          <option value="China">China</option>
          <option value="URSS">URSS</option>
        </select>
        <button type="Submit">C'est parti</button>
      </form>
      {errormessage && <p>{errormessage}</p>}
    </div>
  );
}

export default App;
