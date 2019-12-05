interface SkyElementProps<P = any> {
  children: Array<SkyElement<any>>
}

type SkyElement<P extends SkyElementProps> = { type: string, props: P }

export function createElement<P extends SkyElementProps = any>(type: string, props: P, children: Array<any>): SkyElement<P> {
  return {
    type,
    props: {
      ...props,
      children: children.map(child => typeof child === 'object' ? child : createTextElement(child))
    }
  }
}

function createTextElement(text: string): any {
  return {
    type: "TEXT_ELEMENT",
    props: {
      nodeValue: text,
      children: []
    }
  }
}

export function render(element: SkyElement<any>, container: Node) {
  const dom: Text | HTMLElement = element.type === "TEXT_ELEMENT" ? document.createTextNode(element.props.nodeValue) : document.createElement(element.type);
  Object.keys(element.props).forEach((propName: any) => {
    if (propName !== "children") {
      if (dom instanceof HTMLElement) {
        dom.setAttribute(propName, element.props[propName]);
      }
    }
  });
  element.props.children.forEach((child: SkyElement<any>) => render(child, dom));
  container.appendChild(dom);
}