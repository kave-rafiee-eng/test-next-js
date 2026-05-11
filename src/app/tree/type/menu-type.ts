export enum typeMenuEnum {
    UNDEFINDED = "UNDEFINDED",
    SUBMENU = "SUBMENU",
    SETTING_ON_PARAMETER = "SETTING_ON_PARAMETER",
    SETTING_ON_SELECT = "SETTING_ON_SELECT",
    MULTY_SELECT_ONE_STAGE = "MULTY_SELECT_ONE_STAGE",
    MULTY_GROUP = "MULTY_GROUP",
}

type optionType = {
    value: string;
    describe: string;
};
type settingOneParameterType = {
    address: number;
    addition: number;
    unit: string;
    factor: number;
    minValue: number;
    maxValue: number;
    lable: string;
};

type settingOneSelectType = {
    address: number;
    options: optionType[];
    lable: string;
};

type settingMultySelectType = {
    addresses: number[];
    options: optionType[];
    itemLabels: optionType[];
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

export type DescriptionType = Record<"en" | "fa", string>;

export type menuType = {
    id: string;
    parentId: ParanetIdLableType[];
    lable: string | undefined;
    type: typeMenuEnum;
    data: menuDataType;
    description: DescriptionType;
};
