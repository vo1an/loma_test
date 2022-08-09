import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";

export const EmailForm = () => {
    var isSpecial = false
    var password
    var isLength = false
    var isCapital = false


    const validate = (event) => {
        var letter = event.target.value
        console.log(letter)

        for (var i = 0; i < letter.length; i++) {
            if (letter.charAt(i) == letter.charAt(i).toUpperCase() && letter.charAt(i).match(/[a-z]/i)) {
                isCapital = true;
            } else {
                isCapital = false;
            }
        }

        var format = `\`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~`;

        if (letter) {
            isSpecial = format.split('').some(isSpecial => {
                if (letter.includes(isSpecial)) {
                    console.log('has special')

                    return true

                } else
                    return false

            });
            if (letter.length > 8) {
                isLength = true
                console.log('length true')

            } else if (letter.length < 8) {
                isLength = false
                console.log('length false')
            }


        }

    }
    return (

            <
            div className = "Auth-form-container" >
            <
            form className = "Auth-form" >
            <
            div className = "Auth-form-content" >
            <
            h3 className = "Auth-form-title" > Sign In < /h3> {
            /* <div className="text-center">
                        Already registered?{" "}
                        <span className="link-primary" onClick={changeAuthMode}>
                          Sign In
                        </span>
                      </div> */
        } <
        div className = "form-group mt-3" >
        <
        label > Full Name < /label> <
    input type = "email"
    className = "form-control mt-1"
    placeholder = "e.g Jane Doe" /
        >
        <
        /div> <
    div className = "form-group mt-3" >
        <
        label > Email address < /label> <
    input type = "email"
    className = "form-control mt-1"
    placeholder = "Email Address" /
        >
        <
        /div> <
    div className = "form-group mt-3" >
        <
        label > Password < /label> <
    input value = { password }
    onChange = { validate }
    type = "password"
    className = "form-control mt-1"
    placeholder = "Password" /
        >
        <
        /div> <
    div >
        <
        /div><
    div className = "d-grid gap-2 mt-3" >
        <
        button type = "submit"
    className = "btn btn-primary" >
        Submit <
        /button> < /
    div > <
        p className = "text-center mt-2" >
        Forgot < a href = "#" > password ? < /a> < /
    p > <
        /div> < /
    form > <
        /div>
)
}