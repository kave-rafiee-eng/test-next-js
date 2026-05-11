"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { menuType } from "./type/menu-type";
import axios from "axios";
import TreeView from "./component/TreeView";
import { Grid } from "@mui/material";
import EditMenu from "./component/EditMenu";
import { typeMenuEnum } from "./type/menu-type";

export default function Menu() {
    console.log("Menu component render");
    const api = axios.create({
        baseURL: "http://localhost:3000",
    });

    const [menus, setMenus] = React.useState<menuType[]>([]);

    React.useEffect(() => {
        const loadData = async () => {
            try {
                const response = await api.get("/menu");

                setMenus((prev) => {
                    return response.data;
                });
                console.log(response.data);
            } catch (err) {
                console.log(err);
            }
        };

        loadData();
    }, []);

    const handleEdit = (id: string) => {
        console.log(`select id ${id}`);
    };
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                height: "100vh",
            }}
        >
            <Box sx={{ background: "red", height: "10%" }}></Box>

            <Grid container spacing={2} sx={{ height: "80%" }}>
                <Grid size={4} sx={{ background: "#eeeeee" }}>
                    <TreeView menus={menus} handleEdit={handleEdit} />
                </Grid>

                <Grid size={8} boxShadow={1} sx={{ padding: 1 }}>
                    <EditMenu allMenus={menus} idEdit="105" />
                </Grid>
            </Grid>
        </Box>
    );
}
