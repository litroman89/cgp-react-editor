import ElementBlock from "../components/ElementBlock";

import elements from "../elements-data/elements.json";

export default function SidebarContainer() {
  const elementsArray = Object.values(elements);

  return (
    <aside className="flex h-auto max-w-[276px] shrink flex-wrap content-start justify-center gap-[10px] border-r border-[#e4e6f1] p-[30px]">
      {elementsArray.map((element) => (
        <ElementBlock key={element.id} element={element} />
      ))}
    </aside>
  );
}
