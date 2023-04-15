import styles from "./button.css"

export enum AttriButton {
    "name" = "name",
}

export class Button extends HTMLElement{
    name?: string

    static get observedAttributes(){
        const attrs : Record<AttriButton, null> = {
            name: null,
        }
        return Object.keys(attrs)
    }


    constructor(){
        super();
        this.attachShadow({mode : "open"});

    }

    connectedCallback(){
        this.render();
    }

    attributeChangedCallback(
        propName : AttriButton,
        _: string | undefined,
        newValue: string | undefined,
        ){
            switch (propName) {

                default:
                this[propName] = newValue;
                break;
            }

    }

    showJokes(){

    }

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = ``}

        const button= this.ownerDocument.createElement("button");
        button.innerText = `${this.name}`
        button.className = "button"
        this.shadowRoot?.appendChild(button)

        const cssButton = this.ownerDocument.createElement("style");
        cssButton.innerHTML = styles;
        this.shadowRoot?.appendChild(cssButton);
    }


}

customElements.define("my-button", Button)
export default Button;


