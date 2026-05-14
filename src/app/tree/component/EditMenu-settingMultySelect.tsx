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
    settingMultySelectType,
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
import EditDescriptionAi from "./EditDescriptionAi";
type propsType = {
    setting: settingMultySelectType;
    setSetting: (
        set: (prev: settingMultySelectType) => settingMultySelectType,
    ) => void;
    descrption: DescriptionType;
    setDescription: (set: (prev: DescriptionType) => DescriptionType) => void;

    descrption_AI: MiniDescriptionType;
    setDescription_AI: (
        set: (prev: MiniDescriptionType) => MiniDescriptionType,
    ) => void;
};
type tabType = "Structure" | "Description" | "Options" | "Items";

export default function EditMenu_settingMultySelect({
    setting,
    setSetting,
    descrption,
    setDescription,
    descrption_AI,
    setDescription_AI,
}: propsType) {
    const [tab, setTab] = React.useState<tabType>("Structure");

    const handleChangeTab = (event: React.SyntheticEvent, newValue: string) => {
        if (
            newValue == "Structure" ||
            newValue == "Description" ||
            newValue == "Options" ||
            newValue == "Items"
        )
            setTab(newValue);
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

    const items = setting.itemLabels;
    const setItems = (set: (prev: optionType[]) => optionType[]) => {
        setSetting((prev) => {
            return {
                ...prev,
                itemLabels: set(prev.itemLabels),
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
                    <Tab value="Items" label="Items" />
                </Tabs>

                <div hidden={tab != "Description"}>
                    <EditDescription
                        description={descrption}
                        setDescription={setDescription}
                    />
                    <EditDescriptionAi
                        description={descrption_AI}
                        setDescription={setDescription_AI}
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
                <div
                    hidden={tab != "Options"}
                    style={{
                        width: "100%",
                        height: "90%",
                        maxHeight: "100%",
                        background: "red",
                    }}
                >
                    <EditOptions options={options} setOptions={setOptions} />
                </div>
                <div
                    hidden={tab != "Items"}
                    style={{
                        width: "100%",
                        height: "90%",
                        maxHeight: "100%",
                        background: "red",
                    }}
                >
                    <EditOptions options={items} setOptions={setItems} />
                </div>
            </Box>
        </>
    );
}
