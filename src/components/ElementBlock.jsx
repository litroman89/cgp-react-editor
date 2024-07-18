import { useDispatch } from "react-redux";
import { addBlock } from "../store/blocksSlice";
import { dragstartHandler, addElementToState } from "../utils/element-utils";

export default function ElementBlock({ element }) {
  const dispatch = useDispatch();
  return (
    <div
      onClick={(e) => dispatch(addBlock(addElementToState(e)))}
      onDragStart={dragstartHandler}
      data-name={element.name}
      draggable={true}
      className="flex h-[83px] min-w-[100px] max-w-full cursor-pointer flex-col items-center justify-center gap-[10px] rounded-md bg-[#f6f9fe] px-[15px] py-[10px] transition hover:shadow-md"
    >
      <img
        src={element.icon}
        alt=""
        className="pointer-events-none h-[25px] w-[25px]"
      />
      <p className="text-xs leading-normal">{element.name}</p>
    </div>
  );
}
