import { Button, TextField } from "@mui/material"
import "./style.css";
import { useState } from "react";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';


function App() {
  const [textTarefa, setTextTarefa] = useState("");
  const [listTarefa, setListTarefa] = useState([]);


  function handleClick() {
    setListTarefa((old) => [...old, {id: Date.now(), title: textTarefa}]);
    setTextTarefa("");
  }

  function handleDelete(){
    setListTarefa([])
  }

  function handleDeleteTask(idTask){
    setListTarefa(listTarefa.filter(el => el.id !== idTask))
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
            listTarefa.map((tarefa) => (
              <div key={tarefa.id}>
             
                <div className="task-single">

                  <div  className="task">
                    {tarefa.title}
                  </div>
                  <HighlightOffIcon onClick={() => handleDeleteTask(tarefa.id)}/>

                </div>



                <div className="divider"/>
              </div>
            ))
          }
        </div>
      </div>

    </>
  )
}

export default App
