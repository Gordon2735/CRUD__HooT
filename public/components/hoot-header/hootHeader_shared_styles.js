const sharedStyles = {};

sharedStyles.trbl = `
    html {
        background: lightblue;
    }

    body {
        width: 100%;
        min-height: 100vh;
        background: lightblue;
    }
`;

sharedStyles.main = `   

    @import url('https://fonts.googleapis.com/css2?family=Days+One&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Chango&display=swap');

    :root {
        --bg-primary-clr: hsl(195, 53%, 79%);
        --bg-primaryDark-clr: hsl(0, 0%, 13%);
        --bg-modalMain-clr: hsl(195, 99%, 46%);
        --font-modalMain-clr: hsl(195, 90%, 88%);
        --font-modalMain2-clr: hsl(180, 100%, 100%);
        --font-primary-clr: hsl(0, 0%, 100%);
        --font-primaryhoot-clr: hsl(32, 83%, 54%);
        --font-secondary-clr: hsl(0, 0%, 0%);
        --font-sizeHeader: 2.9rem;
        --font-sizeSubHeader: 1.0rem;
        --font-sizeCaption: 0.5rem;
        --font-sizeSuper: 0.7rem;
        --font-familyHeader: 'Chango', sans-serif;
        --font-familySubHeader: 'Days One', sans-serif;
        --text-shadow: 3px 2px 2px hsl(195, 100%, 6%);
        --box-shadow: 6px 4px 10px hsl(195, 100%, 6%);
    }   

    html {
        background: var(--bg-primary-clr);
    }

    .body {
        width: 100%;
        min-height: 100vh;
        background: var(--bg-primary-clr);
    }

    .hoot-header {
        margin: 0 auto 0 auto;
    }

`;

sharedStyles.hootheader = `       

    .hoot-main {       
        margin: 0;
        width: 100%;
        height: 30vh;        
    }

    .primary-header { 
        display: grid;
        grid-template-areas:
            "header header ..."
            "main main main";
        grid-template-columns: 1fr 1fr 1fr;
        margin: 0;       
        width: 99.7%;
        height: 16vh;
        background: var(--bg-modalMain-clr);
        border: 3px solid black;
        border-radius: 0 0 8px 8px;
        box-shadow: var(--box-shadow);

    }

    .primary-figure {
        grid-area: 
            header 
            main;
        margin: 1.3vh 0 0 1vw;
        width: 35vw;
        height: 31vh;
        jusify-content: left;
        align-items: left;
    } 

    .primary-figure .primary-img {
        grid-area: header;  
        margin: 0vh 0 0 0.5vh;      
        padding: 0.15vh 0 -0.5vh 0vh;
        width: 22%;
        justify-self: left;
        filter: drop-shadow(8px 4px 6px hsl(195, 100%, 6%));
        transform: rotate(-13deg);
        
    }

    .primary-figure .primary-figcaption {
        grid-area: main;
        margin: 0vh 0 0.1vh 0;
        padding: 0;
        font-family: var(--font-familySubHeader);
        color: var(--font-primaryhoot-clr);
        font-size: var(--font-sizeCaption);
        text-align: left;
    }

    .primary-h1 {
        grid-area: header ...
            main ;
        margin: 5vh 0 0 -19vw;
        padding: 0;
        justify-self: center;
        align-text: left;
        font-family: var(--font-familyHeader);
        color: var(--font-primaryhoot-clr);
        font-size: var(--font-sizeHeader);
        font-weight: bold;
        letter-spacing: 0.25rem;
        text-shadow: var(--text-shadow);
    }
    
    .h1-tm {
        font-size: var(--font-sizeSuper);
        font-weight: 100;
    }
    
    .h1-r {
        font-size: var(--font-sizeSuper);
        font-weight: 100;
    }   
    
    .primary-h2 {
        margin: 5vh 0vw 0vh 0vw;
        padding: 0vh 0vw 0 vw;
        font-family: var(--font-familySubHeader);
        color: var(--font-modalMain2-clr);
        font-size: var(--font-sizeSubHeader);
        letter-spacing: 0.2rem;
        text-shadow: var(--text-shadow);
    }

    .contact-span {
        grid-area: main main;
        margin: -17vh 0vw 0vh 22vw;
        padding: 0vh 0vw 20vh 20vw;
        position: absolute;
        z-index: 100;

    }

    .contact-span .contact-a {
        margin: 0vh 0vw 0vh 0vw;
        padding: 0vh 0vw 0 0vw;
        font-family: var(--font-familySubHeader);
        color: var(--bg-primaryDark-clr);
        font-size: var(--font-sizeCaption);
        letter-spacing: 0.2rem;
        z-index: 100;
    }

    .contact-a:hover {
        color: var(--font-primaryhoot-clr);
        cursor: pointer;
    }



`;

export { sharedStyles };
