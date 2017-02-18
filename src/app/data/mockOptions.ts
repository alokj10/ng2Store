import { IOption } from '../model/option.interface';

export const MockOptions: IOption[] = [
    {
        Id: 1,
        OptionName: "Brand-WashingMachine",
        OptionTitle: "Brand",
        OptionStyle: "cb",
        OptionValues: [
            {
                Id: 1,
                OptionId: 1,
                OptionValue: "Samsung",
                OptionValueTitle: "Samsung",
                IsDefault: true
            },
            {
                Id: 2,
                OptionId: 1,
                OptionValue: "Videocon",
                OptionValueTitle: "Videocon",
                IsDefault: false
            },
            {
                Id: 3,
                OptionId: 1,
                OptionValue: "Panasonic",
                OptionValueTitle: "Panasonic",
                IsDefault: false
            },
            {
                Id: 4,
                OptionId: 1,
                OptionValue: "Onida",
                OptionValueTitle: "Onida",
                IsDefault: false
            }
        ]
    },
    {
        Id: 2,
        OptionName: "Capacity-Washing",
        OptionTitle: "Capacity",
        OptionStyle: "cb",
        OptionValues: [
            {
                Id: 5,
                OptionId: 2,
                OptionValue: "6",
                OptionValueTitle: "6kg & below",
                IsDefault: true
            },
            {
                Id: 6,
                OptionId: 2,
                OptionValue: "7",
                OptionValueTitle: "6.1kg to 7kg",
                IsDefault: false
            },
            {
                Id: 7,
                OptionId: 2,
                OptionValue: "8",
                OptionValueTitle: "7.1kg to 8kg",
                IsDefault: false
            },
            {
                Id: 8,
                OptionId: 2,
                OptionValue: "10",
                OptionValueTitle: "8kg and above",
                IsDefault: false
            }
        ]
    },
    {
        Id: 3,
        OptionName: "Brand-WaterPurifier",
        OptionTitle: "Brand",
        OptionStyle: "cb",
        OptionValues: [
            {
                Id: 9,
                OptionId: 3,
                OptionValue: "Blue Star",
                OptionValueTitle: "Blue Star",
                IsDefault: true
            },
            {
                Id: 10,
                OptionId: 3,
                OptionValue: "Kent",
                OptionValueTitle: "Kent",
                IsDefault: false
            }
        ]
    },
    {
        Id: 4,
        OptionName: "PurificationTechnology",
        OptionTitle: "PurificationTechnology",
        OptionStyle: "cb",
        OptionValues: [
            {
                Id: 11,
                OptionId: 4,
                OptionValue: "RO + UV",
                OptionValueTitle: "RO + UV",
                IsDefault: true
            },
            {
                Id: 12,
                OptionId: 4,
                OptionValue: "RO + UF",
                OptionValueTitle: "RO + UF",
                IsDefault: false
            }
        ]
    }
]