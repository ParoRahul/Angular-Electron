export const menuConfig =
[{
    label: 'Project',
    role: 'Masters',
    submenu: [
        {
            label: 'New Project',
            role: 'Project',
            submenu: [
                {
                    label: 'Bill',
                    role: 'Purchase'
                },
                {
                    label: 'Chalan',
                    role: 'Purchase'
                },
                {
                    label: 'Line',
                    role: 'separator'
                },
                {
                    label: 'Modify Bill',
                    role: 'Purchase'
                },
                {
                    label: 'Modify Chalan',
                    role: 'Purchase'
                }
            ]
        },
        {
            label: 'Amend Project',
            role: 'Project'
        },
        {
            label: 'Delete Project',
            role: 'Project'
        },
        {
            label: 'Line',
            role: 'separator'
        },
        {
            label: 'Project Settings',
            role: 'Project'
        }
    ]
},
{
    label: 'Help',
    role: 'Help',
    submenu: [
        {
            label: 'Sale',
            role: 'Transactions'
        },
        {
            label: 'Purchase',
            role: 'Transactions',
            submenu: [
                {
                    label: 'Bill',
                    role: 'Purchase'
                },
                {
                    label: 'Chalan',
                    role: 'Purchase'
                },
                {
                    label: 'Line',
                    role: 'separator'
                },
                {
                    label: 'Modify Bill',
                    role: 'Purchase'
                },
                {
                    label: 'Modify Chalan',
                    role: 'Purchase'
                }
            ]
        },
    ]
}];
