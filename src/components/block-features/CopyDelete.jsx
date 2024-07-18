import { useDispatch } from "react-redux";
import { copyBlock, deleteBlock } from "../../store/blocksSlice";

export default function CopyDelete({ element }) {
  const dispatch = useDispatch();

  const copyDelBtnStyles =
    "grow flex items-center justify-center transition rounded-sm bg-[#68c2e9] hover:bg-[#4b97b8] active:bg-[#2b7797] p-[3px]";

  return (
    <div className="absolute right-[10px] top-[-27px] flex h-[27px] w-[53px] rounded-t-[3px] bg-[#68c2e9] p-[3px]">
      <button
        id="copyBtn"
        className={copyDelBtnStyles}
        onClick={() => dispatch(copyBlock({ id: element.id }))}
      >
        <svg
          width="13"
          height="13"
          viewBox="0 0 13 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9 9V11.5C9 12.2202 8.47018 12.75 7.75 12.75H1.5C0.779822 12.75 0.25 12.2202 0.25 11.5V5.25C0.25 4.52982 0.779822 4 1.5 4H4V1.5C4 0.779822 4.52982 0.25 5.25 0.25H11.5C12.2202 0.25 12.75 0.779822 12.75 1.5V7.75C12.75 8.47018 12.2202 9 11.5 9H9ZM7.75 9H5.25C4.52982 9 4 8.47018 4 7.75V5.25H1.5V11.5H7.75V9ZM5.25 1.5V7.75H11.5V1.5H5.25Z"
            fill="white"
          />
        </svg>
      </button>
      <button
        id="deleteBtn"
        className={copyDelBtnStyles}
        onClick={() => dispatch(deleteBlock({ id: element.id }))}
      >
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.6563 1.87501H9.84378V0.937503C9.84378 0.419533 9.42423 0 8.90626 0H6.09377C5.5758 0 5.15627 0.419533 5.15627 0.937503V1.87501H2.34378C1.82581 1.87501 1.40628 2.29454 1.40628 2.81251V3.75001C1.40628 4.2675 1.82581 4.68703 2.34284 4.68751H12.6568C13.1743 4.68703 13.5938 4.2675 13.5938 3.75001V2.81249C13.5938 2.29454 13.1742 1.87501 12.6563 1.87501ZM8.90626 1.87501H6.09377V1.40624C6.09377 1.1475 6.30377 0.937483 6.56251 0.937483H8.43752C8.69626 0.937483 8.90626 1.14748 8.90626 1.40624V1.87501ZM2.34376 13.125C2.34376 14.1605 3.18328 15 4.21876 15H10.7813C11.8167 15 12.6563 14.1605 12.6563 13.125V5.62499H2.34376V13.125ZM9.37504 7.03126C9.37504 6.77251 9.58503 6.5625 9.84378 6.5625C10.1025 6.5625 10.3125 6.77249 10.3125 7.03126V12.6563C10.3125 12.915 10.1025 13.125 9.84378 13.125C9.58503 13.125 9.37504 12.915 9.37504 12.6563V7.03126ZM7.03127 7.03126C7.03127 6.77251 7.24127 6.5625 7.50003 6.5625C7.7588 6.5625 7.96877 6.77249 7.96877 7.03126V12.6563C7.96877 12.915 7.75878 13.125 7.50003 13.125C7.24129 13.125 7.03127 12.915 7.03127 12.6563V7.03126ZM4.68751 7.03126C4.68751 6.77251 4.8975 6.5625 5.15627 6.5625C5.41503 6.5625 5.62503 6.77249 5.62503 7.03126V12.6563C5.62503 12.915 5.41503 13.125 5.15627 13.125C4.8975 13.125 4.68751 12.915 4.68751 12.6563V7.03126Z"
            fill="white"
          />
        </svg>
      </button>
    </div>
  );
}
