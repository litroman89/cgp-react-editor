import { useRef, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { twMerge } from "tailwind-merge";
import useOutsideClick from "../hooks/useOutsideClick";
import { changeData } from "../store/blocksSlice";

export default function EditorBlock({ element, children }) {
  const [isActive, setIsActive] = useState(false);
  const [inputValue, setInputValue] = useState(element.data);
  const blockRef = useRef(null);
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  //убираем активный статус при клике вне элемента
  useOutsideClick(blockRef, () => setIsActive(false));

  //изменяем данные в блоке и обновляем их в глобальном стейте
  const handleDataChange = (e) => {
    setInputValue(e.target.value);
    dispatch(changeData({ id: element.id, updatedData: e.target.value }));
  };

  //фокус на input при активном состоянии
  useEffect(() => {
    if (isActive && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isActive]);

  return (
    <div
      ref={blockRef}
      onClick={() => setIsActive(() => true)}
      className={twMerge(
        "relative flex min-h-[83px] w-full min-w-[100px] cursor-pointer flex-col items-center justify-center gap-[10px] rounded-md bg-white px-[15px] py-[15px] transition hover:shadow-md",
        isActive && "bg-[#d9e7ff]",
      )}
    >
      <img
        src={element.icon}
        alt=""
        className="pointer-events-none h-[25px] w-[25px]"
      />
      <p className="text-xs leading-normal">{element.name}</p>

      <div
        className={twMerge(
          "relative h-[38px] w-full overflow-hidden rounded-sm bg-white p-[5px]",
          !isActive && "hidden",
        )}
      >
        <input
          ref={inputRef}
          disabled={!isActive}
          type="text"
          value={inputValue}
          onChange={handleDataChange}
          className="h-full w-full rounded-sm border border-[#E4E6F1] p-[5px] text-[11px] leading-normal outline-0"
        />
      </div>
      {isActive && children}
    </div>
  );
}
