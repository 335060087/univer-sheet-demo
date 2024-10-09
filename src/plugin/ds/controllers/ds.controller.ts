import {
  Disposable,
  ICommandService,
  LifecycleStages,
  OnLifecycle,
  Inject,
  Injector,
} from "@univerjs/core";
import {
  ComponentManager,
  ContextMenuGroup,
  ContextMenuPosition,
  IMenuManagerService,
} from "@univerjs/ui";

import {
  SetPrimaryTableOperation,
  SetSlaveTableOperation,
} from "../commands/operations/ds-buttons-operations"; //引入菜单配置项
import {
  DS_MENU_DROPDOWN_LIST_OPERATION_ID,
  DsMenuMainButtonFactory,
  DsMenuSetPrimaryTableDataFactory,
  DsMenuSetSlaveTableDataFactory,
} from "../controllers/menu/ds.menu";

@OnLifecycle(LifecycleStages.Steady, DsController)
export class DsController extends Disposable {
  constructor(
    @Inject(Injector) private readonly _injector: Injector,
    @ICommandService private readonly _commandService: ICommandService,
    @IMenuManagerService
    private readonly _menuMangerService: IMenuManagerService,
    @Inject(ComponentManager)
    private readonly _componentManager: ComponentManager
  ) {
    super();

    this._initCommands();
    this._registerComponents();
    this._initMenus();
  }

  /**
   * register commands
   */
  private _initCommands(): void {
    [SetPrimaryTableOperation, SetSlaveTableOperation].forEach((c) => {
      this.disposeWithMe(this._commandService.registerCommand(c));
    });
  }

  /**
   * register icon components
   */
  private _registerComponents(): void {}

  /**
   * register menu items
   */
  private _initMenus(): void {
    this._menuMangerService.mergeMenu({
      // 右键
      [ContextMenuPosition.MAIN_AREA]: {
        [ContextMenuGroup.OTHERS]: {
          [DS_MENU_DROPDOWN_LIST_OPERATION_ID]: {
            order: 9,
            menuItemFactory: DsMenuMainButtonFactory,
            [SetPrimaryTableOperation.id]: {
              order: 0,
              menuItemFactory: DsMenuSetPrimaryTableDataFactory,
            },
            [SetSlaveTableOperation.id]: {
              order: 1,
              menuItemFactory: DsMenuSetSlaveTableDataFactory,
            },
          },
        },
      },
    });
  }
}
