import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { LicenciaturasRoutesConst} from "./licenciaturas.routes.const";

@NgModule({
    imports: [
      RouterModule.forChild(LicenciaturasRoutesConst)
    ],
    exports: [
      RouterModule
    ]
  })
  export class LicenciaturasRoutesModule { }