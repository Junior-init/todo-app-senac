import { Button, TextField } from "@mui/material"
import "./style.css";
import { useState } from "react";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';



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

      <div className="container-task">
        <div className="box-task">
          {
            listTarefa.map((tarefa, index) => (
              <>
             
                <div className="task-single">

                  <div key={String(index)} className="task">
                    {tarefa}
                  </div>
                  <HighlightOffIcon/>

                </div>



                <div className="divider"/>
              </>
            ))
          }
        </div>
      </div>

    </>
  )
}

export default App
