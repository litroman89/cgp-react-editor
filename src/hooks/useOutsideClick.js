import { useEffect } from "react";

//хук для отслеживания клика вне элемента или нажатие Enter
export default function useOutsideClick(ref, callback) {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    const handleEnterPress = (event) => {
      if (event.key === "Enter") {
        callback();
      }
    };
    window.addEventListener("keydown", handleEnterPress);
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
      window.removeEventListener("keydown", handleEnterPress);
    };
  }, [ref, callback]);
}
