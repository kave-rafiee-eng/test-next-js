import {
    menuType,
    settingMultySelectType,
    settingOneParameterType,
    settingOneSelectType,
} from "../type/menu-type";
import { TableBasic, TableBasicProps } from "./TableBasic";

type propsType = {
    setting:
        | settingOneParameterType
        | settingOneSelectType
        | settingMultySelectType;
};

export default function EditStrucure({ setting }: propsType) {
    type TableRow = {
        id: number;
        title: string;
        value: string;
        type: string;
    };

    const tableData: TableRow[] = Object.entries(setting).map(
        ([key, value], index) => ({
            id: index + 1,
            title: key,
            value:
                typeof value === "string" || typeof value === "number"
                    ? value.toString()
                    : typeof value,
            type: typeof value,
        }),
    );

    const propsTable: TableBasicProps<TableRow> = {
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
            {
                id: "type",
                label: "type",
            },
        ],
        tableData: tableData,
    };

    return (
        <TableBasic
            height={"100%"}
            columns={propsTable.columns}
            tableData={propsTable.tableData}
        ></TableBasic>
    );
}
