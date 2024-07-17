export default function EditorBlock({ element, children }) {
  return (
    <div className="flex h-[83px] min-w-[100px] max-w-full cursor-pointer flex-col items-center justify-center gap-[10px] rounded-md px-[15px] py-[10px] transition hover:shadow-md">
      <img
        src={element.icon}
        alt=""
        className="pointer-events-none h-[25px] w-[25px]"
      />
      <p className="text-xs leading-normal">{element.name}</p>
      {/* {children} */}
    </div>
  );
}
