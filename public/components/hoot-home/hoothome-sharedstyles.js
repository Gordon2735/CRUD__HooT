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
        --font-sizeHeader: 2.6rem;
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

`;

sharedStyles.hoothome = `

`;

export { sharedStyles };
