import { useCallback, useMemo, useState } from "react";
import "./App.css";
import Button from "./components/Button";
import TextField from "./components/TextField";

interface Task {
  id: string;
  isCompleted: boolean;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [count, setCount] = useState<number>(1);

  const completedTasks: boolean[] = useMemo(() => {
    return tasks
      .filter((task) => task.isCompleted)
      .map((task) => task.isCompleted);
  }, [tasks]);

  console.log(completedTasks);

  const handleButtonClick: () => void = useCallback(() => {
    return console.log("clicked");
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Button theme="dark" onClick={handleButtonClick}>
          Enviar
        </Button>

        <TextField onChange={(e) => console.log(e.target.value)} />
      </header>
    </div>
  );
}

export default App;
