class WaterHacks extends HTMLElement { 

    connectedCallback() { 
        this.innerHTML = `
            <h3>water hacks</h3>
        `
    }

}

customElements.define('water-hacks',WaterHacks)