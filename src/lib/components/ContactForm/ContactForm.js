import { Button, FormControl, Input, Textarea, useToast } from "@chakra-ui/react";
import axios from "axios";
import { useState } from 'react';
const API_URL = process.env.NEXT_PUBLIC_API_URL;
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;


function ContactForm({ propertyAddress }) {
    const [error, setError] = useState("")
    const [inputEmail, setInputEmail] = useState('')
    const [userPhone, setUserPhone] = useState('')
    const [userName, setUserName] = useState('')
    const [inputMessage, setInputMessage] = useState(`I would like to receive more information about ${propertyAddress}`)

    const handleInputChangeEmail = (e) => {
        setInputEmail(e.target.value)
        setError("");
        if (!e.target.value) {
            setError(true)
        } else {
            setError(false)
        }
    }
    const handleInputChangeMessage = (e) => setInputMessage(e.target.value)
    const toast = useToast();

    const onFormsSubmit = async (e) => {
        e.preventDefault();
        if (inputEmail === "") {
            setError("Please enter your email");
            return;
        }
        console.log("form submit", inputEmail, inputMessage)
        try {
            const { data } = await axios.post(
                `${API_URL}/submitData/formDetails?authKey=${API_KEY}&inputEmail=${inputEmail}&inputMessage=${inputMessage}&userPhone=${userPhone}&userName=${userName}`, {
                inputEmail, inputMessage, userPhone, userName
            });

            toast({
                title: `Email sent`,
                status: 'success',
                isClosable: true,
            })
        } catch (error) {
            console.error(error);
        }
        setInputEmail("");
        setUserPhone("")
        setUserName("")
        // setInputMessage("");
    }

    function validateEmail(email) {
        const regex = /\S+@\S+\.\S+/;
        return regex.test(email);
    }
    function handleUserPhoneChange(event) {
        const input = event.target.value;
        const numericInput = input.replace(/\D/g, '');
        setUserPhone(numericInput)

    }
    const sanitizeName = (input) => {
        return input.replace(/[^a-z]/gi, "");
    };

    function handleNameChange(e) {
        const input = e.target.value;
        const cleanedInput = sanitizeName(input);
        setUserName(cleanedInput);
    }

    return (
        <>
            <form onSubmit={onFormsSubmit}>
                <FormControl>
                    <Input mt="4"
                        // required
                        w="full"
                        border="1px"
                        borderColor="black"
                        // maxLength="10"
                        bg="white"
                        // fontSize={{ base: "sm", md: "sm", xl: "sm", "2xl": "md" }}
                        fontSize="14px"
                        borderRadius="none"
                        color="black"
                        size="lg" type='text' placeholder="Name" value={userName} onChange={handleNameChange} />
                    <Input mt="4"
                        // required
                        w="full"
                        border="1px"
                        borderColor="black"
                        maxLength="10"
                        bg="white"
                        // fontSize={{ base: "sm", md: "sm", xl: "sm", "2xl": "md" }}
                        fontSize="14px"
                        borderRadius="none"
                        color="black"
                        size="lg" type='tel' placeholder="Phone" value={userPhone} onChange={handleUserPhoneChange} />

                    <Input mt="4"
                        // required
                        w="full"
                        border="1px"
                        borderColor="black"
                        bg="white"
                        // fontSize={{ base: "sm", md: "sm", xl: "sm", "2xl": "md" }}
                        fontSize="14px"
                        borderRadius="none"
                        color="black"
                        size="lg" type='email' placeholder="Email" value={inputEmail} onChange={handleInputChangeEmail} />
                    {error && <p style={{ color: "red" }}>{error}</p>}
                    <Textarea mt="4"
                        w="full"
                        border="1px"
                        borderColor="black"
                        bg="white"
                        // fontSize={{ base: "sm", md: "sm", xl: "sm", "2xl": "md" }}
                        fontSize="14px"
                        borderRadius="none"
                        color="black"
                        size="lg" type='message' placeholder="" defaultValue={`I would like to receive more information about ${propertyAddress}`} value={inputMessage} onChange={handleInputChangeMessage} />
                </FormControl>
                <Button mt="4"
                    w="full"
                    type="submit"
                    border="1px"
                    borderColor="black"
                    bg="white"
                    fontSize={{ base: "sm", md: "sm", xl: "sm", "2xl": "md" }}
                    borderRadius="none"
                    color="black"
                    // disabled={!validateEmail(inputEmail)}
                    size="lg" bgColor={"black"} style={{ color: "white" }} colorScheme='blackAlpha'>Send</Button>
            </form>
        </>
    )
}

export default ContactForm
