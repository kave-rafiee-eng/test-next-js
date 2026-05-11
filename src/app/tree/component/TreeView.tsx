"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { SimpleTreeView } from "@mui/x-tree-view/SimpleTreeView";
import { TreeItem } from "@mui/x-tree-view/TreeItem";
import { useSimpleTreeViewApiRef } from "@mui/x-tree-view/hooks";
import { menuType, typeMenuEnum } from "../type/menu-type";
import { Typography } from "@mui/material";

type maptype = {
    [key: string]: nodesType;
};
function convert(menuData: menuType[]) {
    let map: maptype = {};
    let root: nodesType[] = [];

    menuData.forEach((menu) => {
        let label = "";
        if (menu.parentId.length) {
            label = menu.parentId[0].label;
        } else label = menu.lable != undefined ? menu.lable : "no name";

        map[menu.id] = {
            id: menu.id,
            //name: menu.lable != undefined ? menu.lable : "empty name",
            name: label,
            children: [],
            type: menu.type === typeMenuEnum.SUBMENU ? "subMenu" : "setting",
        };
    });

    menuData.forEach((menu) => {
        if (menu.parentId.length == 0) {
            if (menu.lable == "Main") root.push(map[menu.id]);
        } else {
            menu.parentId.forEach((parent) => {
                map[parent.id].children.push({ ...map[menu.id] });
            });
        }
    });

    return root;
}
// const testData: nodesType = {
//     id: "root",
//     name: "Parent",
//     children: [
//         {
//             id: "1",
//             name: "Child - 1",
//             children: [],
//         },
//         {
//             id: "3",
//             name: "Child - 3",
//             children: [
//                 {
//                     id: "4",
//                     name: "Child - 4",
//                     children: [],
//                 },
//             ],
//         },
//     ],
// };

type nodesType = {
    id: string;
    name: string;
    children: nodesType[];
    type: "subMenu" | "setting";
};

type TreeViewProps = {
    menus: menuType[];
    handleEdit: (id: string) => void;
};
export default function TreeView({ menus, handleEdit }: TreeViewProps) {
    const apiRef = useSimpleTreeViewApiRef();

    React.useEffect(() => {});

    const treeData: nodesType = {
        id: "node is",
        name: "Parent",
        children: convert(menus),
        type: "subMenu",
    };

    console.log(treeData);

    const renderTree = (nodes: nodesType) => (
        <TreeItem
            key={nodes.id}
            itemId={nodes.id}
            label={
                <div>
                    {nodes.type == "setting" && (
                        <Button
                            variant="outlined"
                            sx={{
                                background: "#ffffff",
                            }}
                            size="small"
                            onClick={() => {
                                handleEdit(nodes.id);
                            }}
                        >
                            {nodes.name}
                        </Button>
                    )}

                    {nodes.type == "subMenu" && (
                        <Typography>{nodes.name}</Typography>
                    )}
                </div>
            }
        >
            {Array.isArray(nodes.children)
                ? nodes.children.map((node) => renderTree(node))
                : null}
        </TreeItem>
    );

    return (
        <Stack spacing={2}>
            <Box sx={{ minHeight: 352, minWidth: 250 }}>
                <SimpleTreeView apiRef={apiRef} defaultExpandedItems={["grid"]}>
                    {renderTree(treeData)}
                </SimpleTreeView>
            </Box>
        </Stack>
    );
}

/*
export default function RecursiveTreeView() {

    const renderTree = (nodes: RenderTree) => (
        <TreeItem key={nodes.id} nodeId={nodes.id} label={nodes.name}>
            {Array.isArray(nodes.children)
                ? nodes.children.map((node) => renderTree(node))
                : null}
        </TreeItem>
    );

    return (
        <TreeView
            className={classes.root}
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpanded={["root"]}
            defaultExpandIcon={<ChevronRightIcon />}
        >
            {renderTree(data)}
        </TreeView>
    );
}
*/
