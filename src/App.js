import "./app.css";
//importo hojas de stilo de bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import EmpleadoList from "./components/EmpleadoList";

function App() {
    return (
        <>
            <div>
                <EmpleadoList />
            </div>
        </>
    );
}

export default App;
