'use strict';

//=    :::::::  Styles for hoot-contact  :::::::    =//

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

sharedStyles.contacts = `

        html,
        body {
            display: flex;
            justify-content: center;
            font-family: Roboto, Arial, sans-serif;
            font-size: 15px;
        }
        
        .contact-form {
            margin: 20vh;
            width: 50vw;
            height: auto;
            justify-self: center;
            border: 5px solid #f1f1f1;
        }


        input[type='text'],
        input[type='password'] {
            width: 100%;
            padding: 16px 8px;
            margin: 8px 0;
            display: inline-block;
            border: 1px solid #ccc;
            box-sizing: border-box;
        }
        .form-figure {
            font-size: 110px;
            display: flex;
            justify-content: center;
            justify-self: center;
            color: #4286f4;
        }
        
        .contact-img {
            width: 100px;
            text-align: center;
            justify-content: center;
            justify-self: center;
        }

        .contact-h1 {
            text-align: center;
        }

        .contact-p {
            text-align: center;
        }

        .submit-button {
            background-color: #4286f4;
            color: white;
            padding: 14px 0;
            margin: 10px 0;
            border: none;
            cursor: grab;
            width: 48%;
        }
        .form-h1 {
            text-align: center;
            font-size: 18;
        }
        .submit-button:hover {
            opacity: 0.8;
        }
        .form-container-div {
            text-align: center;
            margin: 24px 50px 12px;
        }
        .container {
            padding: 16px 0;
            text-align: left;
        }
        span.psw {
            float: right;
            padding-top: 0;
            padding-right: 15px;
        }
        /* Change styles for span on extra small screens */
        @media screen and (max-width: 300px) {
            span.psw,
            span.repsw {
                display: block;
                float: none;
            }
        }


`;

export { sharedStyles };
