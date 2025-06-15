import {Link, Route, Routes} from 'react-router-dom'
import ComponentPlayground from "./playground/ComponentPlayground.tsx";

function App() {

  return (
    <>
        <Link to="/components" className="hover:underline">Components</Link>
        <Routes>
            <Route path="/components/*" element={<ComponentPlayground />} />
        </Routes>
    </>
  )
}

export default App
