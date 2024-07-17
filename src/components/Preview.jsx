import { useSelector } from "react-redux";

export default function Preview() {
  const blocks = useSelector((state) => state.blocks.blocks);

  function getPreviewElement(element) {
    switch (element.name) {
      case "Headline": {
        return (
          <h2 className="text-center text-[22px] leading-normal text-[#252a32]">
            {element.data}
          </h2>
        );
      }
      case "Paragraph": {
        return (
          <p className="max-w-[572px] text-center text-[14px] leading-normal text-[#97aacd]">
            {element.data}
          </p>
        );
      }
      case "button": {
        return (
          <button className="mx-auto block rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
            {element.data}
          </button>
        );
      }
      case "image": {
        return (
          <img src={element.data} alt="" className="w-full object-cover" />
        );
      }
    }
  }

  return (
    <div className="relative flex h-min min-h-full max-w-[632px] grow flex-col space-y-[30px] p-[30px]">
      {blocks.map((block) => (
        <div key={crypto.randomUUID()}>{getPreviewElement(block)}</div>
      ))}
    </div>
  );
}
