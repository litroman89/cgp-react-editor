import { useSelector, useDispatch } from "react-redux";
import { addBlock } from "../store/blocksSlice";
import EditorBlock from "./EditorBlock";

import elements from "../elements-data/elements.json";

export default function Editor() {
  const blocks = useSelector((state) => state.blocks.blocks);
  const dispatch = useDispatch();

  function dragoverHandler(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  }
  function dropHandler(e) {
    e.preventDefault();
    const draggedElementId = e.dataTransfer.getData("text/plain");

    const elementsArray = Object.values(elements);
    const element = elementsArray.find(
      (element) => element.name === draggedElementId,
    );

    //adding unique id
    const updatedElement = { ...element, id: crypto.randomUUID() };

    dispatch(addBlock(updatedElement));
  }

  return (
    <div
      onDrop={dropHandler}
      onDragOver={dragoverHandler}
      className="flex h-auto grow flex-col gap-[15px] bg-[#f5f5fc] p-[30px] [&>div]:bg-[#fff]"
    >
      {blocks.map((block) => (
        <EditorBlock key={block.id} element={block}>
          <h2>hey</h2>
        </EditorBlock>
      ))}
    </div>
  );
}
