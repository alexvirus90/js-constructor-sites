import { block, css } from "../utilTemplates";
import { TextBlock, TitleBlock } from "./blocks";

export class Sidebar {
  constructor(selector, updateCallback) {
    this.el = document.querySelector(selector);
    this.update = updateCallback;
    this.init();
  }

  init() {
    this.el.insertAdjacentHTML("afterbegin", this.template);
    this.el.addEventListener("submit", this.add.bind(this));
  }

  get template() {
    return [block("text"), block("title")].join("");
  }

  add(event) {
    event.preventDefault();

    const {
      name: type,
      value: { value },
      styles: { value: styles },
    } = event.target;

    const newBlock =
      type === "text"
        ? new TextBlock(value, { styles })
        : new TitleBlock(value, { styles });

    this.update(newBlock);
    event.target.value.value = "";
    event.target.styles.value = "";
  }
}
