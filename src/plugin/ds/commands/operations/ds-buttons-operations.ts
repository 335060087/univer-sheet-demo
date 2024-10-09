/**
 * 构造commands在菜单被点击时候执行
 */
import { CommandType } from "@univerjs/core";
import type { ICommand, IAccessor } from "@univerjs/core";

const DS_MENU_OPERATION_DROPDOWN_LIST_SET_PRIMARY_TABLE =
  "ds-menu.operation.dropdown-list-set-primary-table";
const DS_MENU_OPERATION_DROPDOWN_LIST_SET_SLAVE_TABLE =
  "ds-menu.operation.dropdown-list-set-slave-table";
//

//设置主表数据项被点击时候执行
export const SetPrimaryTableOperation: ICommand = {
  id: DS_MENU_OPERATION_DROPDOWN_LIST_SET_PRIMARY_TABLE,
  type: CommandType.OPERATION,
  handler: async (accessor: IAccessor) => {
    return true;
  },
};
//设置从表数据项被点击时候执行
export const SetSlaveTableOperation: ICommand = {
  id: DS_MENU_OPERATION_DROPDOWN_LIST_SET_SLAVE_TABLE,
  type: CommandType.OPERATION,

  handler: async (accessor: IAccessor) => {
    return true;
  },
};
