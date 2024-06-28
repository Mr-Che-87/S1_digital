export interface IntegratedMarketingInterface {
    title: string;
    text: Array<string>;
    bottomBox: Array<BottomBox>;
}
export interface BottomBox {
    title: string;
    text: string;
}