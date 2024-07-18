import { useSelector } from "react-redux";
import PreviewBlock from "../components/PreviewBlock";

export default function PreviewContainer() {
  const blocks = useSelector((state) => state.blocks.blocks);

  return (
    <div className="relative flex h-min min-h-full w-[632px] shrink-[0.5] grow flex-col space-y-[30px] p-[30px]">
      {blocks.map((block) => (
        <PreviewBlock
          key={crypto.randomUUID()}
          name={block.name}
          data={block.data}
        />
      ))}
    </div>
  );
}
