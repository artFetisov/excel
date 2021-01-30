import { ExcelComponent } from "../../core/ExcelComponent";

export class Formula extends ExcelComponent {
    constructor($root) {
        super($root, {
            name: 'Formula',
            listeners: ['click', 'input']
        })
    }

    static className() {
        return 'excel__formula'
    }

    toHTML() {
        return `
        <div class="info">fx</div>
        <div class="input" contenteditable spellcheck="false"></div>
        `
    }

    onInput(event) {
        console.log(event)
    }

    onClick(event) {
        console.log(this.$root)
        console.log(event)
    }
}