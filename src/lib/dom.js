const isProperty = (key) => key !== 'children';
const isEvent = (key) => key.startsWith('on');
const eventName = k => k.toLowerCase().substring(2);

export function createDom(fiber) {
  const dom = fiber.type === "TEXT_ELEMENT" ? document.createTextNode(fiber.props.nodeValue) : document.createElement(fiber.type);
  updateDom(dom, {}, fiber.props);
  return dom;
}

export function updateDom(dom, prevProps, nextProps) {
  // remove previous props
  Object.keys(prevProps)
    .filter(isProperty)
    .forEach(propName => {
      if (!(propName in nextProps)) {
        if (isEvent(propName)) {
          dom.removeEventListener(eventName(propName), prevProps[propName])
        } else {
          dom[propName] = '';
        }
      }
    });

  // add or update next props
  Object.keys(nextProps).filter(isProperty).forEach(propName => {
    if (prevProps[propName] !== nextProps[propName]) {
      if (isEvent(propName)) {
        if (prevProps[propName]) {
          dom.removeEventListener(eventName(propName), prevProps[propName])
        }
        dom.addEventListener(eventName(propName), nextProps[propName])
      } else {
        dom[propName] = nextProps[propName];
      }
    }
  });

}