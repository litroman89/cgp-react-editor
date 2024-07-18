import elements from "../elements-data/elements.json";

// добавляем тип элемента в data transfer object
export function dragstartHandler(event) {
  event.dataTransfer.setData(
    "text/plain",
    event.target.getAttribute("data-name"),
  );
}

// возвращаем элемент для добавляние в глобальный стейт
export function addElementToState(event) {
  const elementName = event.currentTarget.dataset.name;
  const elementsArray = Object.values(elements);

  //находим выбранный элемент из списка
  const element = elementsArray.find((element) => element.name === elementName);

  //добавляем элементу unique id
  const updatedElement = { ...element, id: crypto.randomUUID() };
  return updatedElement;
}
