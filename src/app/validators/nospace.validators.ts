import { AbstractControl, ValidationErrors } from "@angular/forms";

export class noSpaceValidator {
    static noSpaceValidations(control: AbstractControl): ValidationErrors | null {
        if ((control.value as string).indexOf(' ') >= 0) {
            return { noSpaceValidator: true };
        }
        return null;
    }
}