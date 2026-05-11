import { menuType } from "../type/menu-type";
import EditMenu_settingOneParameter from "./EditMenu-settingOneParameter";
import {
    Box,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    Stack,
    Typography,
} from "@mui/material";

type EditMenuPropsType = {
    allMenus: menuType[];
    idEdit: string;
};

function findMenuById(id: string, menus: menuType[]): menuType | undefined {
    return menus.find((menu) => menu.id === id);
}

export default function EditMenu({ allMenus, idEdit }: EditMenuPropsType) {
    let menuTarget = allMenus.find((menu) => menu.id === idEdit);

    type NavigationPath = string[];

    const navigations: NavigationPath[] = [];

    function findPaths(menuId: string, path: string[] = []) {
        const menu = findMenuById(menuId, allMenus);
        if (!menu) return;

        let newPath = [...path];

        if (!menu.parentId?.length) {
            if (menu.lable != undefined) newPath.push(menu.lable as string);
            navigations.push(newPath);
            return;
        }

        for (const parent of menu.parentId) {
            newPath.push(parent.label as string);
            findPaths(parent.id, newPath);
        }
    }

    for (const parent of menuTarget?.parentId ?? []) {
        findPaths(parent.id);
    }

    console.log(navigations);

    return (
        <Stack direction={"column"} spacing={1} sx={{ height: "100%" }}>
            <Stack
                direction={"row"}
                spacing={1}
                sx={{ background: "white" }}
                boxShadow={1}
                p={0.5}
                justifyContent={"center"}
                alignItems={"center"}
            >
                <Typography variant="h6" p={0.2}>
                    {" "}
                    id : {idEdit}
                </Typography>

                <FormControl>
                    <InputLabel id="demo-simple-select-label">
                        navigation
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={0}
                        label="Navgation"
                    >
                        {navigations.map((path, index) => {
                            let nav = "";
                            for (let i = path.length - 1; i >= 0; i--) {
                                nav += path[i] + "/";
                            }
                            return (
                                <MenuItem key={index} value={index}>
                                    {nav}
                                </MenuItem>
                            );
                        })}
                    </Select>
                </FormControl>
            </Stack>

            {menuTarget != undefined ? (
                <EditMenu_settingOneParameter menu={menuTarget} />
            ) : (
                "undefinded"
            )}
        </Stack>
    );
}

/*

                */
