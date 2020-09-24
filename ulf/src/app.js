import { html, render } from "./lit-html.js";

import './WaterHacks.js';

class AirHacks extends HTMLElement { 
    
    connectedCallback() { 
        const template = html`
            <water-hacks></water-hacks>
            <input placeholder="some" @keyup=${e=>this.changed(e)}></input>
            <button @click=${_ => this.drinkCoffee()}>click</button>
        `;
        render(template,this);
    }

    changed({ target: { value } }) { 
        console.log(value);
    }

    drinkCoffee() { 

        console.log("drink");

    }

}

customElements.define('air-hacks',AirHacks);



