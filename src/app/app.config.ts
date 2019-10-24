export const AppConfig ={
    menuConfig:[
        {
            label: "Masters",
            role: "Masters",
            submenu: [
                {
                    label: "Ledger Master",
                    role: "Masters",
                    submenu: [
                        {
                            label:"New Ledger",
                            role:"Ledger Master"
                        },
                        {
                            label:"Modify Ledger",
                            role:"Ledger Master"
                        },
                        {
                            label:"Delete Ledger",
                            role:"Ledger Master"
                        },
                        {
                            label:"Line",
                            role:"separator"
                        },
                        {
                            label:"New Sale",
                            role:"Ledger Master"
                        },
                        {
                            label:"Modify Sale",
                            role:"Ledger Master"
                        },
                        {
                            label:"Delete Sale",
                            role:"Ledger Master"
                        },
                        {
                            label:"Line",
                            role:"separator"
                        },
                        {
                            label:"New Purchase",
                            role:"Ledger Master"
                        },
                        {
                            label:"Modify Purchase",
                            role:"Ledger Master"
                        },
                        {
                            label:"Delete Purchase",
                            role:"Ledger Master"
                        }
                    ]
                },
                {
                    label: "Account Group",
                    role: "Masters"
                },
                {
                    label: "Inventory Master",
                    role: "Master",
                    submenu: [
                        {
                            label: "Item Master",
                            role: "Inventory Master",
                        },
                        {
                            label: "Company Master",
                            role: "Inventory Master"
                        },
                        {
                            label: "HSN/SAC Master",
                            role: "Inventory Master"
                        }

                    ]
                },
                {
                    label: "Rate & Discount Master",
                    role: "Master"
                }
            ]
        },
        {
            label: "Transactions",
            role: "Transactions",
            submenu:[
                {
                    label:"Sale",
                    role:"Transactions"
                },
                {
                    label:"Purchase",
                    role:"Transactions",
                    submenu:[
                        {
                            label:"Bill",
                            role:"Purchase"
                        },
                        {
                            label:"Chalan",
                            role:"Purchase"
                        },
                        {
                            label:"Line",
                            role:"separator"
                        },
                        {
                            label:"Modify Bill",
                            role:"Purchase"
                        },
                        {
                            label:"Modify Chalan",
                            role:"Purchase"
                        }
                    ]
                },
            ]
        }
    ]
}