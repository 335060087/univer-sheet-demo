import type { IMenuButtonItem, IMenuSelectorItem } from "@univerjs/ui";
import { MenuItemType } from "@univerjs/ui";

import {
  SetPrimaryTableOperation,
  SetSlaveTableOperation,
} from "../../commands/operations/ds-buttons-operations";

export const DS_MENU_DROPDOWN_LIST_OPERATION_ID =
  "ds-menu.operation.dropdown-list";

// ds下的一级菜单
export function DsMenuMainButtonFactory(): IMenuSelectorItem<string> {
  return {
    // 绑定 Command id，单击该按钮将触发该命令
    id: DS_MENU_DROPDOWN_LIST_OPERATION_ID,
    // 菜单项的类型，在本例中，它是一个按钮
    type: MenuItemType.SUBITEMS,
    // 按钮的图标，需要在 ComponentManager 中注册
    icon: "GridSingle",
    // 按钮的提示，优先匹配国际化，如果没有匹配到，将显示原始字符串
    tooltip: "dsMenu.dropdownList",
    // 按钮的标题，优先匹配国际化，如果没有匹配到，将显示原始字符串
    title: "dsMenu.dropdownList",
    // 按钮位置，可以使用 MenuPosition 配置在工具栏或右键菜单，如果是表格，还可以使用 SheetMenuPosition 配置在行标题、列标题、工作表右键菜单
    // positions: [MenuPosition.CONTEXT_MENU],
  };
}

//设置主表数据菜单项配置

export function DsMenuSetPrimaryTableDataFactory(): IMenuButtonItem<string> {
  return {
    id: SetPrimaryTableOperation.id,
    type: MenuItemType.BUTTON,
    title: "dsMenu.setPrimaryTableData",
    icon: "",
    positions: [DS_MENU_DROPDOWN_LIST_OPERATION_ID],
  };
}
//设置从表数据菜单项配置
export function DsMenuSetSlaveTableDataFactory(): IMenuButtonItem<string> {
  return {
    id: SetSlaveTableOperation.id,
    type: MenuItemType.BUTTON,
    title: "dsMenu.setSlaveTableData",
    icon: "",
    positions: [DS_MENU_DROPDOWN_LIST_OPERATION_ID],
  };
}
