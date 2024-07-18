import { useDispatch } from "react-redux";
import { moveBlockUp, moveBlockDown } from "../../store/blocksSlice";

export default function MoveBlock({ element }) {
  const dispatch = useDispatch();

  const moveBtnStyles =
    "grow flex items-center justify-center transition bg-[#449cf4] hover:bg-[#2c7ccc] rounded-sm active:bg-[#2867b2]";

  return (
    <div className="absolute right-[68px] top-[-27px] flex h-[27px] w-[53px] overflow-hidden rounded-t-[3px] bg-[#449cf4] p-[3px]">
      <button
        onClick={() => dispatch(moveBlockDown({ id: element.id }))}
        className={moveBtnStyles}
      >
        <svg
          width="11"
          height="13"
          viewBox="0 0 11 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.875 10.6162V0.249992H6.125V10.6162L10.0581 6.68312L10.9419 7.56687L5.5 13.0087L0.0581284 7.56687L0.94188 6.68312L4.875 10.6162Z"
            fill="white"
          />
        </svg>
      </button>
      <button
        onClick={() => dispatch(moveBlockUp({ id: element.id }))}
        className={moveBtnStyles}
      >
        <svg
          width="11"
          height="13"
          viewBox="0 0 11 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.125 2.38376V12.75H4.875V2.38376L0.941871 6.31688L0.0581207 5.43313L5.5 -0.00874329L10.9419 5.43313L10.0581 6.31688L6.125 2.38376Z"
            fill="white"
          />
        </svg>
      </button>
    </div>
  );
}
