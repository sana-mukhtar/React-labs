import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Counter from "./components/Counter";
import TextEditor from "./components/TextEditor";
import Profile from "./components/Profile";
import Header from "./components/Header";
import Signup from "./components/SignUp";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Signup />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/counter" element={<Counter />}></Route>
        <Route path="/text-editor" element={<TextEditor />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
