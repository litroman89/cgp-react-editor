import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Editor from "./components/Editor";
import Preview from "./components/Preview";

import "./App.css";

function App() {
  return (
    <div className="container relative h-dvh">
      <Header />
      <div className="relative flex min-h-[calc(100%-66px)] border-l border-r border-[#e4e6f1]">
        <Sidebar />
        <Editor />
        <Preview />
      </div>
    </div>
  );
}

export default App;
