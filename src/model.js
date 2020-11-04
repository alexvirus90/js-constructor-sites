import image from "./assets/image.png";
import {
  TitleBlock,
  ImageBlock,
  ColumnBlock,
  TextBlock,
} from "./classes/blocks";

export const model = [
  new TitleBlock("Конструктор сайтов на JavaScript", {
    tag: "h2",
    styles: {
      background: "linear-gradient(to right, #f09, #493240)",
      color: "#fff",
      "text-align": "center",
      padding: "0.2rem",
    },
  }),
  new ImageBlock(image, {
    styles: {
      padding: "2rem 0",
      display: "flex",
      "justify-content": "center",
    },
    imageStyles: {
      width: "500px",
      height: "auto",
    },
    alt: "Картинка",
  }),
  new ColumnBlock(
    [
      "Lorem ipsum dolor sit amet.",
      "consectetur adipisicing elit.",
      "Quibusdam, reprehenderit.",
    ],
    {
      styles: {
        background: "linear-gradient(to bottom, #8e2de2, #4a00e0)",
        padding: "2rem",
        color: "#fff",
        "font-weight": "bold",
      },
    }
  ),
  new TextBlock("Lorem ipsum dolor sit amet", {
    styles: {
      background: "linear-gradient(to left, #f2994a, #f2c94c)",
      padding: "1rem",
      "font-weight": "bold",
    },
  }),
];
