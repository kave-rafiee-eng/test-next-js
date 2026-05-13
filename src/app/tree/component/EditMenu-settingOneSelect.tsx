"use client";
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

import {
    menuType,
    DescriptionType,
    settingOneSelectType,
    MiniDescriptionType,
    optionType,
} from "../type/menu-type";
import {
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Paper,
    Select,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField,
    Typography,
} from "@mui/material";
import { TableBasic, TableBasicProps } from "./TableBasic";
import axios from "axios";
import EditDescription from "./EditDescription";
import EditStrucure from "./EditStructure";
import EditOptions from "./EditOptions";
type propsType = {
    setting: settingOneSelectType;
    setSetting: (
        set: (prev: settingOneSelectType) => settingOneSelectType,
    ) => void;
};
type tabType = "Structure" | "Description" | "Options";

export default function EditMenu_settingOneSelect({
    setting,
    setSetting,
}: propsType) {
    const [tab, setTab] = React.useState<tabType>("Structure");

    const handleChangeTab = (event: React.SyntheticEvent, newValue: string) => {
        if (
            newValue == "Structure" ||
            newValue == "Description" ||
            newValue == "Options"
        )
            setTab(newValue);
    };

    const description = setting.description;
    const setDescription = (newDescrip: DescriptionType) => {
        setSetting((prev) => {
            return {
                ...prev,
                description: newDescrip,
            };
        });
    };

    const options = setting.options;
    const setOptions = (set: (prev: optionType[]) => optionType[]) => {
        setSetting((prev) => {
            return {
                ...prev,
                options: set(prev.options),
            };
        });
    };

    return (
        <>
            <Box sx={{ width: "100%", height: "80%" }}>
                <Tabs
                    value={tab}
                    onChange={handleChangeTab}
                    textColor="secondary"
                    indicatorColor="secondary"
                    aria-label="secondary tabs example"
                >
                    <Tab value="Description" label="Description" />
                    <Tab value="Structure" label="Structure" />
                    <Tab value="Options" label="Options" />
                </Tabs>

                <div hidden={tab != "Description"}>
                    <EditDescription
                        description={description}
                        setDescription={setDescription}
                    />
                </div>
                <div
                    hidden={tab != "Structure"}
                    style={{
                        width: "100%",
                        height: "80%",
                        maxHeight: "80%",
                        background: "red",
                    }}
                >
                    <EditStrucure setting={setting} />
                </div>
                <div hidden={tab != "Options"}>
                    <EditOptions options={options} setOptions={setOptions} />
                </div>
            </Box>
        </>
    );
}
