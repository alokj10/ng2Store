export interface IOrder{
    Id: number;
    OrderDate: string;
    OrderStatus: string;
    OrderTotal: number;
    CustomerId: number;
    CustomerName: string;
    SellerId: number;
    SellerName: string;
}