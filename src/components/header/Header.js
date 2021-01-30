import { ExcelComponent } from "../../core/ExcelComponent";

export class Header extends ExcelComponent {
    constructor($root) {
        super($root)
    }
    static className() {
        return 'excel__header'
    }
    toHTML() {
        return `
        <input class="input" type="text" value="Новая таблица" />
        <div>
            <div class="button">
                <i class="material-icons">delete</i>
            </div>
            <div class="button">
                <i class="material-icons">exit_to_app</i>
            </div>
        </div>
        `
    }
} 