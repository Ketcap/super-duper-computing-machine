import { signal } from "@preact/signals-react";

export enum Element {
  Button = 'button',
  Paragraph = 'p'
}

export const selectedElement = signal<Element>(Element.Button);