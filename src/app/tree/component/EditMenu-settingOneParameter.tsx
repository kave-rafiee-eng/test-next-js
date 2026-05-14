import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

import {
    menuType,
    DescriptionType,
    settingOneParameterType,
    MiniDescriptionType,
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
import EditDescriptionAi from "./EditDescriptionAi";
type propsType = {
    setting: settingOneParameterType;
    setSetting: (
        set: (prev: settingOneParameterType) => settingOneParameterType,
    ) => void;

    descrption: DescriptionType;
    setDescription: (set: (prev: DescriptionType) => DescriptionType) => void;

    descrption_AI: MiniDescriptionType;
    setDescription_AI: (
        set: (prev: MiniDescriptionType) => MiniDescriptionType,
    ) => void;
};
export default function EditMenu_settingOneParameter({
    setting,
    setSetting,
    descrption,
    setDescription,
    descrption_AI,
    setDescription_AI,
}: propsType) {
    const [tab, setTab] = React.useState("Structure");

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setTab(newValue);
    };

    return (
        <>
            <Box sx={{ width: "100%", height: "80%" }}>
                <Tabs
                    value={tab}
                    onChange={handleChange}
                    textColor="secondary"
                    indicatorColor="secondary"
                    aria-label="secondary tabs example"
                >
                    <Tab value="Description" label="Description" />
                    <Tab value="Structure" label="Structure" />
                </Tabs>

                <div
                    hidden={tab != "Description"}
                    style={{
                        width: "100%",
                        height: "80%",
                        maxHeight: "80%",
                        overflowY: "auto",
                    }}
                >
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
            </Box>
        </>
    );
}
