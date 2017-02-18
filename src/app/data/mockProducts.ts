import { IProduct } from '../model/product.interface';

export const MockProducts: IProduct[] = [
    {
        Id: 1,
        Name: "IFB 8 kg Fully Automatic Front Load Washing Machine",
        CategoryId: 27,
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
    ,
    {
        Id: 2,
        Name: "IFB 7 kg Fully Automatic Front Load Washing Machine",
        CategoryId: 27,
        Title: "IFB 7 kg Fully Automatic Front Load Washing Machine",
        Description: "IFB 7 kg Fully Automatic Front Load Washing Machine",
        MarketPrice: 24000,
        SellingPrice: 22000,
        ModelNumber: "L100H",
        Quantity: 4,
        Features: ["Automatic","Power Saver","Compact in Size","Water Proof"],
        Specifications: [{Description:"spec1",Id:1,ProductId:1,SpecificationCategoryName:"Display",Title:"Title"}],
        Offers: [{Conditions:["str1","str2"],Disclaimer:"discl1",DiscountRate:20,Id:1,Name:"offer1",Title:"offer1"}],
        Reviews: [{Id:1,ProductId:1,Comments:"comment1",RatingStars:5,ReviewedById:1}]
    },
    {
        
        Id: 3,
        Name: "IFB 8.5 kg Fully Automatic Front Load Washing Machine",
        CategoryId: 27,
        Title: "IFB 8.5 kg Fully Automatic Front Load Washing Machine",
        Description: "IFB 8.5 kg Fully Automatic Front Load Washing Machine",
        MarketPrice: 24000,
        SellingPrice: 22000,
        ModelNumber: "L100H",
        Quantity: 4,
        Features: ["Automatic","Power Saver","Compact in Size","Water Proof"],
        Specifications: [{Description:"Samsung",Id:1,ProductId:1,SpecificationCategoryName:"Display",Title:"Brand"}],
        Offers: [{Conditions:["str1","str2"],Disclaimer:"discl1",DiscountRate:20,Id:1,Name:"offer1",Title:"offer1"}],
        Reviews: [{Id:1,ProductId:1,Comments:"comment1",RatingStars:5,ReviewedById:1}]
    },
    {
        
        Id: 4,
        Name: "IFB 6 kg Fully Automatic Front Load Washing Machine",
        CategoryId: 27,
        Title: "IFB 6 kg Fully Automatic Front Load Washing Machine",
        Description: "IFB 6 kg Fully Automatic Front Load Washing Machine",
        MarketPrice: 24000,
        SellingPrice: 22000,
        ModelNumber: "L100H",
        Quantity: 4,
        Features: ["Automatic","Power Saver","Compact in Size","Water Proof"],
        Specifications: [{Description:"Samsung",Id:1,ProductId:1,SpecificationCategoryName:"Display",Title:"Brand"}],
        Offers: [{Conditions:["str1","str2"],Disclaimer:"discl1",DiscountRate:20,Id:1,Name:"offer1",Title:"offer1"}],
        Reviews: [{Id:1,ProductId:1,Comments:"comment1",RatingStars:5,ReviewedById:1}]
    },
    {
        Id: 5,
        Name: "Blue Star Prisma RO+UV 4.2 L RO + UV Water Purifier  (Maroon)",
        CategoryId: 28,
        Title: "Blue Star Prisma RO+UV 4.2 L RO + UV Water Purifier  (Maroon)",
        Description: "Blue Star Prisma RO+UV 4.2 L RO + UV Water Purifier  (Maroon)",
        MarketPrice: 24900,
        SellingPrice: 18000,
        ModelNumber: "Prisma RO + UV",
        Quantity: 2,
        Features: ["Electrical & Storage","RO + UV","4l Capacity","ABS Tank Material"],
        Specifications: [{Description:"spec1",Id:1,ProductId:1,SpecificationCategoryName:"Display",Title:"Title"}],
        Offers: [{Conditions:["str1","str2"],Disclaimer:"discl1",DiscountRate:20,Id:1,Name:"offer1",Title:"offer1"}],
        Reviews: [{Id:1,ProductId:1,Comments:"comment1",RatingStars:5,ReviewedById:1}]
    },
    {
        Id: 6,
        Name: "Kent Ace+ 7 L RO + UF Water Purifier  (White, Blue)",
        CategoryId: 28,
        Title: "Kent Ace+ 7 L RO + UF Water Purifier  (White, Blue)",
        Description: "Kent Ace+ 7 L RO + UF Water Purifier  (White, Blue)",
        MarketPrice: 24900,
        SellingPrice: 18000,
        ModelNumber: "Kent RO + UF",
        Quantity: 2,
        Features: ["Electrical & Storage","RO + UF","4l Capacity","ABS Tank Material"],
        Specifications: [{Description:"spec1",Id:1,ProductId:1,SpecificationCategoryName:"Display",Title:"Title"}],
        Offers: [{Conditions:["str1","str2"],Disclaimer:"discl1",DiscountRate:20,Id:1,Name:"offer1",Title:"offer1"}],
        Reviews: [{Id:1,ProductId:1,Comments:"comment1",RatingStars:5,ReviewedById:1}]
    }
]