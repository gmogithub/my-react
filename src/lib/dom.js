export function createDom(fiber) {
  const dom = fiber.type === "TEXT_ELEMENT" ? document.createTextNode(fiber.props.nodeValue) : document.createElement(fiber.type);
  Object.keys(fiber.props).forEach((propName) => {
    if (propName !== "children") {
      if (dom instanceof HTMLElement) {
        dom[propName] = fiber.props[propName];
      }
    }
  });
  return dom;
}