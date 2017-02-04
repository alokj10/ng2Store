import { IProduct } from '../model/product.interface';

export const MockProducts: IProduct[] = [
    {
        Id: 1,
        Name: "IFB 8 kg Fully Automatic Front Load Washing Machine",
        CategoryId: 1,
        Title: "IFB 8 kg Fully Automatic Front Load Washing Machine",
        Description: "IFB 8 kg Fully Automatic Front Load Washing Machine",
        MarketPrice: 24,
        SellingPrice: 22,
        ModelNumber: "L100H",
        Quantity: 4,
        Features: ["Automatic","Power Saver","Compact in Size","Water Proof"],
        Specifications: [{Description:"spec1",Id:1,ProductId:1,SpecificationCategoryName:"Display",Title:"Title"}],
        Offers: [{Conditions:["str1","str2"],Disclaimer:"discl1",DiscountRate:20,Id:1,Name:"offer1",Title:"offer1"}],
        Reviews: [{Id:1,ProductId:1,Comments:"comment1",RatingStars:5,ReviewedById:1}]
    }
    // ,
    // {
    //     Id: 2,
    //     Name: "IFB 8 kg Fully Automatic Front Load Washing Machine",
    //     CategoryId: 1,
    //     Title: "IFB 8 kg Fully Automatic Front Load Washing Machine",
    //     Description: "IFB 8 kg Fully Automatic Front Load Washing Machine",
    //     MarketPrice: 24000,
    //     SellingPrice: 22000,
    //     ModelNumber: "L100H",
    //     Quantity: 4,
    //     Features: ["Automatic","Power Saver","Compact in Size","Water Proof"],
    //     Specifications: [{Description:"spec1",Id:1,ProductId:1,SpecificationCategoryName:"Display",Title:"Title"}],
    //     Offers: [{Conditions:["str1","str2"],Disclaimer:"discl1",DiscountRate:20,Id:1,Name:"offer1",Title:"offer1"}],
    //     Reviews: [{Id:1,ProductId:1,Comments:"comment1",RatingStars:5,ReviewedById:1}]
    // },
    // {
        
    //     Id: 3,
    //     Name: "IFB 8 kg Fully Automatic Front Load Washing Machine",
    //     CategoryId: 1,
    //     Title: "IFB 8 kg Fully Automatic Front Load Washing Machine",
    //     Description: "IFB 8 kg Fully Automatic Front Load Washing Machine",
    //     MarketPrice: 24000,
    //     SellingPrice: 22000,
    //     ModelNumber: "L100H",
    //     Quantity: 4,
    //     Features: ["Automatic","Power Saver","Compact in Size","Water Proof"],
    //     Specifications: [{Description:"spec1",Id:1,ProductId:1,SpecificationCategoryName:"Display",Title:"Title"}],
    //     Offers: [{Conditions:["str1","str2"],Disclaimer:"discl1",DiscountRate:20,Id:1,Name:"offer1",Title:"offer1"}],
    //     Reviews: [{Id:1,ProductId:1,Comments:"comment1",RatingStars:5,ReviewedById:1}]
    // },
    // {
        
    //     Id: 4,
    //     Name: "IFB 8 kg Fully Automatic Front Load Washing Machine",
    //     CategoryId: 1,
    //     Title: "IFB 8 kg Fully Automatic Front Load Washing Machine",
    //     Description: "IFB 8 kg Fully Automatic Front Load Washing Machine",
    //     MarketPrice: 24000,
    //     SellingPrice: 22000,
    //     ModelNumber: "L100H",
    //     Quantity: 4,
    //     Features: ["Automatic","Power Saver","Compact in Size","Water Proof"],
    //     Specifications: [{Description:"spec1",Id:1,ProductId:1,SpecificationCategoryName:"Display",Title:"Title"}],
    //     Offers: [{Conditions:["str1","str2"],Disclaimer:"discl1",DiscountRate:20,Id:1,Name:"offer1",Title:"offer1"}],
    //     Reviews: [{Id:1,ProductId:1,Comments:"comment1",RatingStars:5,ReviewedById:1}]
    // },

]