import { Options as LibOptions } from "qr-code-styling";
export declare enum Position {
    top = "top",
    bottom = "bottom",
    left = "left",
    right = "right"
}
export declare enum DecorationType {
    text = "text",
    image = "image"
}
export type BorderOption = {
    thickness: number;
    color: string;
    dasharray: string;
};
export type ExtensionOptions = BorderOption & {
    round: number;
    decorations: {
        [key in Position]: {
            type: DecorationType;
            value: string;
            style: string;
        };
    };
    borderInner: BorderOption;
    borderOuter: BorderOption;
};
declare const QRBorderPlugin: {
    (extensionOptions: ExtensionOptions): (svg: SVGElement, options: LibOptions) => void;
    setKey: (key?: string) => void;
};
export default QRBorderPlugin;
