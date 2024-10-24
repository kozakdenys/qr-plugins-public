export declare const createRect: () => SVGRectElement;
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
    (extensionOptions: ExtensionOptions): (svg: SVGElement, options: {
        width: number;
        height: number;
    }) => void;
    setKey: (key?: string) => void;
    verifyKey(element: SVGElement, options: {
        width: number;
        height: number;
    }): void;
};
export default QRBorderPlugin;
