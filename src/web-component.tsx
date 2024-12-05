import ReactDOM from "react-dom/client";
import Welcome, { WelcomeProps } from "./components/Welcome";

const normalizeAttribute = (attribute: string) => {
  return attribute.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
};

class WelcomeWebComponent extends HTMLElement {
  private readonly shadowDOMRoot: ShadowRoot;

  constructor() {
    super();

    this.shadowDOMRoot = this.attachShadow({ mode: "closed" });
  }

  connectedCallback() {
    this.injectStylesheets();
    this.injectReactApp();
  }

  private injectReactApp(): void {
    const props = {} as WelcomeProps;

    Array.from(this.attributes).forEach((attribute) => {
      props[normalizeAttribute(attribute.name) as keyof WelcomeProps] =
        attribute.value;
    });

    const root = ReactDOM.createRoot(this.shadowDOMRoot);

    root.render(<Welcome {...props} />);
  }

  private injectStylesheets(): void {
    const stylesSheets =
      this.attributes
        .getNamedItem("styleSheets")
        ?.value.split(",")
        .map((s) => s.trim()) ?? [];

    stylesSheets.forEach((href) => {
      const link = document.createElement("link");
      link.setAttribute("rel", "stylesheet");
      link.setAttribute("href", href);
      this.shadowDOMRoot.appendChild(link);
    });
  }
}

customElements.define("pu-welcome", WelcomeWebComponent);
