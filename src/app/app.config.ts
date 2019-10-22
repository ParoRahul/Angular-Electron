export const AppConfig ={
    menuConfig:[
        {
            label: "file",
            role: "file",
            submenu: [
                {
                    label: "Open file...",
                    role: "newimage"
                },
                {
                    label: "Line",
                    role: "separator"
                },
                {
                    label: "Folder",
                    role: "Open Folder...",
                    submenu: [
                        {
                            label: "item121",
                            role: "import_file",
                            submenu: [
                                {
                                    label: "item1211",
                                    role: "import_file"
                                },
                                {
                                    label: "item1212",
                                    role: "import_folder"
                                }
                            ]
                        },
                        {
                            label: "item122",
                            role: "import_folder"
                        }
                    ]
                },
                {
                    label: "item13",
                    role: "export",
                    submenu: [
                        {
                            label: "item131",
                            role: "import_file"
                        },
                        {
                            label: "item132",
                            role: "import_folder"
                        }
                    ]
                },
                {
                    label: "item14",
                    role: "project_settings"
                }
            ]
        }
    ]
}