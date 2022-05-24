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
            font-size: 1.1rem;
            text-align: center;
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
        .form-figure {
            margin: 0 auto 0 auto;
            display: flex;
            justify-content: center;
            justify-self: center;
        }   
     

        .contact-figcaption {
            font-size: 0.5rem;
            color: #000;
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
            cursor: pointer;
            width: 48%;
            box-shadow: 4px 3px 6px rgba(0, 0, 0, 0.7);
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

        .username-label {
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

        #checkbox-container-div {
            box-shadow: 4px 3px 6px rgba(0, 0, 0, 0.7);            
        }

        .checkbox-label {
            padding: 0 0 0 7px;
            text-align: center;
            font-size: 0.65rem;
            font-weight: 100;
            color: black;
            z-index: 300;
            box-shadow: 4px 3px 6px rgba(0, 0, 0, 0.7);

        }

        .span-a {
            font-size: 0.65rem;
            font-weight: 100;
            color: black;
            z-index: 300;
            box-shadow: 4px 3px 6px rgba(0, 0, 0, 0.7);

        }

        span.psw {
            float: right;
            padding-top: 0;
            padding-right: 15px;
            box-shadow: 4px 3px 6px rgba(0, 0, 0, 0.7);


        }

        .form-h1 {
            margin: 0 auto 0 auto;
            text-align: center base;
            font-size: 0.7rem;
            color: black;
            z-index: 300;
        }

        .span-signup {
            margin: 0 auto 0 auto;
            font-size: 0.45rem;
            font-weight: 100;
            color: black;
            z-index: 300;
        }

        .a-span-signup {
            margin: 0 auto 0 auto;
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
