import Block from "./Block";

import elements from "../elements-data/elements.json";

export default function Sidebar() {
  const elementsArray = Object.values(elements);

  return (
    <aside className="flex h-auto max-w-[276px] flex-wrap content-start justify-center gap-[10px] border-r border-[#e4e6f1] p-[30px]">
      {elementsArray.map((element) => (
        <Block key={element.id} element={element} />
      ))}
    </aside>
  );
}
