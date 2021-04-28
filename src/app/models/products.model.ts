export interface Products{
    id?: string;
    cate: string;
    name: string;
    price: number;
    priceUnitCom: number;
    priceUnitVen?: number;
    quantity: number;
    unit: string;
    description?: string;
    img: string;
}

export interface Buy{
    id?: string;
    img: string;
    name: string;
    priceUnitVen: number;
    priceTotal: number;
    quantity: number;
    unit: string;
}