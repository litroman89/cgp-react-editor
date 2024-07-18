import { useSelector, useDispatch } from "react-redux";
import { addBlock } from "../store/blocksSlice";
import EditorBlock from "../components/EditorBlock";
import MoveBlock from "../components/block-features/MoveBlock";
import {
  onDropAddElementToState,
  dragOverHandler,
} from "../utils/editor-utils";
import CopyDelete from "../components/block-features/CopyDelete";

export default function EditorContainer() {
  const blocks = useSelector((state) => state.blocks.blocks);
  const dispatch = useDispatch();

  return (
    <div
      onDrop={(e) => dispatch(addBlock(onDropAddElementToState(e)))}
      onDragOver={dragOverHandler}
      className="flex h-auto w-[538px] shrink grow flex-col gap-[15px] bg-[#f5f5fc] p-[30px]"
    >
      {blocks.map((block) => (
        <EditorBlock key={block.id} element={block}>
          <MoveBlock element={block} />
          <CopyDelete element={block} />
        </EditorBlock>
      ))}
    </div>
  );
}
