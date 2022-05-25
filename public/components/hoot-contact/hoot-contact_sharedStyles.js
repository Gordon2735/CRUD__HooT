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
            justify-content: center;
            align-content: center;
        }
`;

sharedStyles.main = `   

        @import url('https://fonts.googleapis.com/css2?family=Days+One&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Chango&display=swap');
        
        :root {
            --bg-primary-clr: hsl(195, 53%, 79%);
            --bg-primaryDark-clr: hsl(0, 0%, 13%);
            --bg-modalMain-clr: hsl(195, 99%, 46%);
            --bg-modalBlueMain-clr: hsl(195, 99%, 46%);
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

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        .contact-shell {
            margin: -15vh auto 0 auto;
            padding: -10vh 0 0 1vw;
            justify-self: center;
            align-self: center;
            justify-content: center;
            align-content: center;
        }

        .hoot-contact {
            margin: 2vh auto 0 auto;
            justify-self: center;
        }

        
        `;

sharedStyles.contacts = `

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            display: flex;
            justify-content: center;
            font-family: Roboto, Arial, sans-serif;
            font-size: 1.5rem;
        }  
        
      
        
        .contact-form {
            margin: -11vh auto 0 auto;
            width: 25vw;
            height: 75vh;           
            justify-content: center;
            text-align: center;
            background-color: var(--bg-modalMain-clr);
            border: 5px solid #f1f1f1;
            box-shadow: 4px 3px 6px rgba(0, 0, 0, 0.7);
        }

        .contact-header {
            margin: 0 0 0 0;
        }
        
        .contact-h1 {
            margin: 2vh 0 0 0;
            font-size: 1.8rem;
            text-align: center;
            color: var(--h1-clr);
        }

        .form-figure {
            margin: 04vh auto 0 auto;
            display: flex;
            justify-content: center;
            justify-self: center;
        }   

        .contact-figure-img {
            margin: 1vh 0 0 0;
            width: 7vw;
        }
     

        .contact-figcaption {
            margin: -0.1vh auto 0 auto;
            padding: 0.1vh 0 0vh 0;
            font-size: 0.5rem;
            color: #000;
        }


        .contact-p {
            margin: 0vh auto -3vh auto;
            text-align: center;
            font-style: italic;
        }

        input[type='reset'],
        input[type='text'],
        input[type='password'] {
            margin: 0.8px auto 1.2vh auto;
            width: 100%;
            padding: 12px 6px;
            background-color: var(--bg-primary-clr);
            display: inline-block;
            border: 1px solid #ccc;
            box-sizing: border-box;
            box-shadow: 4px 3px 6px rgba(0, 0, 0, 0.7);

        }

        .form-container-div {
            text-align: center;
            margin: 24px 50px 12px;
        }
        
        .container {
            padding: 16px 0;
            text-align: left;
        }       
        
        #first-last-name-label {
            text-align: center;
            font-size: 1.1rem;
            font-weight: 200;
            color: black;
            z-index: 300;
        }
        
        .email-label {
            text-align: center;
            font-weight: 200;
            color: black;
            z-index: 300;
        }
        
        .password-label {
            text-align: center;
            font-weight: 200;
            color: black;            
            z-index: 300;
        }
        
        .repassword-label {
            text-align: center;
            font-weight: 200;
            color: black;
            z-index: 300;
        }

        .submit-button {
            margin:  -1vh 0 2vh 0;
            padding: 1vh 1vw;
            background-color: var(--font-primaryhoot-clr);
            color: black;
            border: none;
            cursor: pointer;
            width: 48%;
            box-shadow: 4px 3px 6px rgba(0, 0, 0, 0.7);
        }        
        
        .submit-button:hover {
            opacity: 0.8;
        }

        #checkbox-container-div {
            background-color: #363636;
            box-shadow: 4px 3px 6px rgba(0, 0, 0, 0.7);            
        }

        .checkbox-label {
            padding: 0 0 0 5px;
            text-align: center;
            font-size: 0.65rem;
            font-weight: 100;
            color: black;
            letter-spacing: 0.1rem;
            z-index: 300;
        }

        .checkbox-input {
            margin: 1vh 0 0 0.5vw;
        }

        .span-a {
            font-size: 0.65rem;
            font-weight: 100;
            color: black;            
            z-index: 300;
            text-decoration: none;
        }

        span.psw {
            margin: 0 0 0 5.7vw;
            text-align: right;
            padding-top: 0;
            padding-right: 1px;
            letter-spacing: 0.1rem;
            pointer: cursor;
        }

        .form-h1 {
            margin: -2vh 3vw 0 0;
            right: -5vw;
            top: 0;
            pointer: cursor;
            text-align: center base;
            font-size: 0.7rem;
            color: black;
            z-index: 300;
        }

        .span-signup {
            margin: 2vh 0 0 -4vw;
            left: 0;
            pointer: cursor;
            font-size: 0.45rem;
            font-weight: 100;
            color: black;
            z-index: 300;
        }

        .a-span-signup {            
            font-size: 0.45rem;
            font-weight: 100;
            color: black;
            z-index: 300;            
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
