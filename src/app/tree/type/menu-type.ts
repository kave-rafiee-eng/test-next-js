//--------------------- new Menu Types
export enum typeMenuEnum {
    UNDEFINDED = "UNDEFINDED",
    SUBMENU = "SUBMENU",
    SETTING_ON_PARAMETER = "SETTING_ON_PARAMETER",
    SETTING_ON_SELECT = "SETTING_ON_SELECT",
    SETTING_MULTY_SELECT = "SETTING_MULTY_SELECT",
    SETTING_MULTY_GROUP = "SETTING_MULTY_GROUP",
}
//

export type DescriptionType = Record<
    "english" | "persian" | "arabic" | "turkish" | "russian" | "german",
    string
>;

export type MiniDescriptionType = Record<"english" | "persian", string>;

export type optionType = {
    value: string;
    description: MiniDescriptionType;
};

export type settingOneParameterType = {
    address: number;
    addition: number;
    unit: string;
    factor: number;
    minValue: number;
    maxValue: number;
    label: string;
    description: DescriptionType;
};

export type settingOneSelectType = {
    address: number;
    options: optionType[];
    label: string;
    description: DescriptionType;
};

export type settingMultySelectType = {
    addresses: number[];
    options: optionType[];
    itemLabels: optionType[];
    description: DescriptionType;
};

type settingMultyGroupType = {
    settingOneParameter?: settingOneParameterType;
    settingOneSelect?: settingOneSelectType;
};

type menuDataType = {
    settingOneParameter?: settingOneParameterType;
    settingOneSelect?: settingOneSelectType;
    settingMultySelect?: settingMultySelectType;
    settingMultyGroup?: settingMultyGroupType[];
};

type ParanetIdLableType = {
    id: string;
    label: string;
};

export type menuType = {
    id: string;
    parentId: ParanetIdLableType[];
    lable: string | undefined;
    type: typeMenuEnum;
    data: menuDataType;
    description: DescriptionType;
};
