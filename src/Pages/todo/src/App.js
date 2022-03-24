import { useDispatch } from "react-redux";
import './App.css';
import NewTask from "./components/Tasks";
import { updatefilter } from "store/action/actions";
import { reset } from "store/actions/taskactions";

function App() {
  return (
    const dispatch = useDispatch();
    const filterSelected = (value) => {
      console.log("filtersSelected", value);
      dispatch(updateFilter(value));
    };

    return (
    <div className="App">
      <header className="App-header">
        <div style={{ display: "flex", alignItems:"center"}}
     ALL
     <input
     type="radio"
     name="filter
     defaultchecked
     onChange={() => filterSelected("ALL")}
     />
     DONE
     <input
     type="radio"
     name="filter
     defaultchecked
     onChange={() => filterSelected("DONE")}
     />
      TODO
      <input
     type="radio"
     name="filter
     defaultchecked
     onChange={() => filterSelected("TODO")}
     />

        
      </header>
    </div>
  );
}

export default App;
