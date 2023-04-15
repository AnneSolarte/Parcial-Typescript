import styles from "./jokes.css"

export enum AttriJokes {
    "text" = "text",
}

export class Jokes extends HTMLElement{
    text?: string

    static get observedAttributes(){
        const attrs : Record<AttriJokes, null> = {
            text: null,
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
        proptext : AttriJokes,
        _: string | undefined,
        newValue: string | undefined,
        ){
            switch (proptext) {

                default:
                this[proptext] = newValue;
                break;
            }

    }

    showJokes(){

    }

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <div class="jokeDiv">
                <img class="img" src="/img/chuck.png">
                <p class="text">${this.text}</p>
            </div>
            `}

        const cssJokes = this.ownerDocument.createElement("style");
        cssJokes.innerHTML = styles;
        this.shadowRoot?.appendChild(cssJokes);

    }


}

customElements.define("my-jokes", Jokes)
export default Jokes;
