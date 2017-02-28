export interface IOrder{
    Id: number;
    OrderDate: Date;
    OrderStatus: string;
    OrderTotal: number;
    CustomerId: number;
    CustomerName: string;
    SellerId: number;
    SellerName: string;
}