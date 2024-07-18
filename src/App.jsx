import Header from "./components/Header";
import SidebarContainer from "./containers/SidebarContainer";
import EditorContainer from "./containers/EditorContainer";
import PreviewContainer from "./containers/PreviewContainer";

import "./App.css";

function App() {
  return (
    <div className="container relative h-dvh">
      <Header />
      <div className="relative flex min-h-[calc(100%-66px)] border-l border-r border-[#e4e6f1]">
        <SidebarContainer />
        <EditorContainer />
        <PreviewContainer />
      </div>
    </div>
  );
}

export default App;
