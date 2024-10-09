import {
  Plugin,
  UniverInstanceType,
  Injector,
  Inject,
  LocaleService,
} from "@univerjs/core";
import type { Dependency } from "@univerjs/core";
import { DsController } from "./controllers/ds.controller";
import zhCN from "./locale/zh-CN";
import enUS from "./locale/en-US";

const SHEET_CUSTOM_MENU_PLUGIN = "SHEET_DS_PLUGIN";

export class UniverSheetsDsMenuPlugin extends Plugin {
  static override type = UniverInstanceType.UNIVER_SHEET;
  static override pluginName = SHEET_CUSTOM_MENU_PLUGIN;

  constructor(
    @Inject(Injector) protected readonly _injector: Injector,
    @Inject(LocaleService) private readonly _localeService: LocaleService
  ) {
    super();
    this._localeService.load({
      zhCN,
      enUS,
    });
  }
  override onStarting(injector: Injector): void {
    ([[DsController]] as Dependency[]).forEach((d) => injector.add(d));
  }
}
