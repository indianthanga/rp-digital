export class Shared {
  static colors: Color[] = [
    { name: 'Rebecca Blue', value: 'bg-color-rebecca-blue', index: 0 },
    { name: 'Dodger Blue', value: 'bg-color-dodger-blue', index: 1 },
    { name: 'Golden Rod', value: 'bg-color-golden-rod', index: 2 },
    { name: 'Cathams Blue', value: 'bg-color-cathams-blue', index: 3 },
    { name: 'Web Orange', value: 'bg-color-web-orange', index: 4 },
    { name: 'Flamingo', value: 'bg-color-flamingo', index: 5 },
    { name: 'Lone Star', value: 'bg-color-lone-star', index: 6 },
  ];
}

export class Color {
  name: string;
  value: string;
  index: number;
  constructor(name: string, value: string, index: number) {
    this.name = name;
    this.value = value;
    this.index = index;
  }
}
