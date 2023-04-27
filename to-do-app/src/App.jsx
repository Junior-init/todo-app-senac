import { Button, TextField } from "@mui/material"
import "./style.css";
import { useState } from "react";



function App() {
  const [textTarefa, setTextTarefa] = useState("");
  const [listTarefa, setListTarefa] = useState([]);

  function handleClick() {
    setListTarefa((old) => [...old, textTarefa]);
    setTextTarefa("");
  }

  function handleDelete(){
    setListTarefa([])
  }

  return (
    <>
      <form className="form-container">
        <TextField
          value={textTarefa}
          id="standard-basic"
          label="Tarefa"
          variant="standard"
          placeholder="Digite a tarefa"
          onChange={({ target }) => setTextTarefa(target.value)}
        />
        <Button variant="contained" onClick={handleClick}>
          Add
        </Button>
        <Button variant="contained" color="secondary" 
        onClick={handleDelete}>
          Deletar
        </Button>

      </form>

      {
        listTarefa.map((tarefa, index) => (
          <>
            <div key={String(index)}>
              {tarefa}
            </div>

            <div className="divider"/>
          </>
        ))
      }

    </>
  )
}

export default App
