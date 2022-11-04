import { BrowserRouter, Route, Routes } from "react-router-dom";

import Provider from "./providers";

import Home from "./components/Home";
import TxViewer from "./components/TxViewer";

function App() {
    return (
        <BrowserRouter>
            <Provider>
                <Routes>
                    <Route path="/:chainId/:txHash" element={<TxViewer />} />
                    <Route path="/" element={<Home />} />
                </Routes>
            </Provider>
        </BrowserRouter>
    );
}

export default App;
