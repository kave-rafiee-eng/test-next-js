import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

import { menuType, DescriptionType } from "../type/menu-type";
import {
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
type propsType = {
    menu: menuType;
};
export default function EditMenu_settingOneParameter({ menu }: propsType) {
    const [tab, setTab] = React.useState("Structure");
    const [languageSelect, setLanguageSelect] = React.useState("fa");

    menu.description.fa = "test farsi";
    menu.description.en = "test english";
    const [language, setLanguage] = React.useState<DescriptionType>(
        menu.description,
    );

    if (!menu.data.settingOneParameter) return;

    let languages = Object.keys(menu.description);

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setTab(newValue);
    };

    type MyRow = {
        id: number;
        title: string;
        value: string;
    };

    const tableData: MyRow[] = Object.entries(
        menu.data.settingOneParameter,
    ).map(([key, value], index) => ({
        id: index + 1,
        title: key,
        value: String(value),
    }));

    const props: TableBasicProps<MyRow> = {
        columns: [
            {
                id: "id",
                label: "c",
                Width: "10%",
            },
            {
                id: "title",
                label: "title",
            },
            {
                id: "value",
                label: "value",
            },
        ],
        tableData: tableData,
    };

    const handleChangeSelectLanguage = (event: any) => {
        setLanguageSelect(event.target.value);
    };

    const handleChageDescription = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setLanguage((prev) => {
            let newPrev = prev;
            newPrev[languageSelect as keyof typeof language] =
                event.target.value;
            return {
                ...prev,
            };
        });
    };

    return (
        <Box sx={{ width: "100%", height: "100%" }}>
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

            <div hidden={tab != "Description"}>
                <Stack direction={"column"} spacing={2} pt={2}>
                    <Stack direction={"row"}>
                        <FormControl
                            sx={{
                                width: "20%",
                            }}
                        >
                            <InputLabel id="demo-simple-select-label">
                                language
                            </InputLabel>
                            <Select
                                size="small"
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={languageSelect}
                                label="language"
                                onChange={handleChangeSelectLanguage}
                            >
                                {languages.map((lan, index) => {
                                    return (
                                        <MenuItem key={index} value={lan}>
                                            {lan}
                                        </MenuItem>
                                    );
                                })}
                            </Select>
                        </FormControl>
                    </Stack>

                    <TextField
                        onChange={handleChageDescription}
                        value={
                            language[languageSelect as keyof typeof language]
                        }
                        variant="filled"
                    ></TextField>
                </Stack>
            </div>
            <div
                hidden={tab != "Structure"}
                style={{ width: "100%", height: "100%" }}
            >
                <TableBasic
                    height={"80%"}
                    columns={props.columns}
                    tableData={props.tableData}
                ></TableBasic>
            </div>
        </Box>
    );
}
