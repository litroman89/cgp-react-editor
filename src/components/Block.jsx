export default function Block({ element }) {
  function dragstartHandler(ev) {
    // Add the target element's id to the data transfer object
    ev.dataTransfer.setData("text/plain", ev.target.getAttribute("data-name"));
  }

  return (
    <div
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
