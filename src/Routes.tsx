import { Route,Routes } from "react-router-dom";
import { HomePage } from "./pages/home";


export function Router(){
    return(
        // effect in router
        <Routes> 
                <Route path="/" element={<HomePage/>} />
        </Routes>
    );

}