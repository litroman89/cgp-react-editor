import elements from "../elements-data/elements.json";

//возвращаем элемент для добавляние в глобальный стейт
export function onDropAddElementToState(e) {
  e.preventDefault();
  const elementName = e.dataTransfer.getData("text/plain");
  const elementsArray = Object.values(elements);

  //находим выбранный элемент из списка
  const element = elementsArray.find((element) => element.name === elementName);

  //добавляем элементу unique id
  const updatedElement = { ...element, id: crypto.randomUUID() };
  return updatedElement;
}

export function dragOverHandler(e) {
  e.preventDefault();
  e.dataTransfer.dropEffect = "move";
}
