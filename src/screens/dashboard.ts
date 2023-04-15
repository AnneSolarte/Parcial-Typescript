import "../components/export";
import Button, { AttriButton } from "../components/button/button";
import Jokes, { AttriJokes} from "../components/jokes/jokes";
import { traer_categories } from "../services/getCategories";
import { traer_jokes } from "../services/getJokes";
import { CatType } from "../types/CatType";

export class Dashboard extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:"open"})
    }


    async connectedCallback(){
        const categories = await traer_categories()
        this.render(categories)
    }


    render(categories:any){
        if(this.shadowRoot)
        this.shadowRoot.innerHTML = "";
        categories.forEach((cat: any) => {
            const button = this.ownerDocument.createElement("my-button");
            button.setAttribute(AttriButton.name,cat);

            button.addEventListener("click", async () =>{
                const jokes = await traer_jokes(cat)
                console.log(jokes)

                    const Joke = this.ownerDocument.createElement("my-jokes");
                    Joke.setAttribute(AttriJokes.text, jokes.value);
                    this.shadowRoot?.appendChild(Joke);

            })
            this.shadowRoot?.appendChild(button);
        });
    }
}

customElements.define("app-dashboard",Dashboard);
