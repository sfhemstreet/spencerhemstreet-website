import styled from 'styled-components';
import React from 'react';
import Tilt from 'react-tilt';
import { Transition } from "react-transition-group"
import Layout from '../components/Layout';
import Fade from '../components/Fade';
import { YosemiteBackground, Container } from '../components/Backgrounds';
import {regexCheck, checkEmail, checkSpecial} from '../util/regexCheck';
import sendEmail from '../API/sendEmail';

interface Red {
    isRed: boolean
}

const Title = styled.p`
    font-size: 1.5rem;
    text-align: center;
    padding: 0.5rem;
    margin: 0;

    color: white;
`;

const ContactContainer = styled(Container)`
    padding-top: 40px;
`;

const FormContainer = styled.div`
    max-width: 30em;
    padding: 0 2rem 2rem 2rem;
    margin-left: auto;
    margin-right: auto;
`;

const PadTop = styled.div`
    padding-top: 10px;
`;

const Label = styled.label`
    color: #EEE;
    font-weight:600;
    line-height:1.5;
    font-size: 0.875rem;
`;

const Input = styled.input<Red>`
    width: 100%;
    padding: 0.5rem;

    -webkit-appearance:none;
    -moz-appearance:none;

    border-color: #999;
    border-radius: 0.225rem;

    font-weight: bold;
    font-size: 18px;

    color: white;
    background: ${props => props.isRed ? 'radial-gradient(circle, rgba(196,100,79,0.07326680672268904) 0%, rgba(215,27,27,0.7315301120448179) 100%)' : 'radial-gradient(circle, rgba(40,44,52,0.48783263305322133) 0%, rgba(0,224,255,0.196516106442577) 100%)'};
`;

const TextArea = styled.textarea<Red>`
    width: 100%;
    padding: 0.5rem;

    -webkit-appearance:none;
    -moz-appearance:none;

    border-color: #999;
    border-radius: 0.225rem;

    font-weight: bold;
    font-size: 18px;

    color: white;
    
    background: ${props => props.isRed ? 'radial-gradient(circle, rgba(196,100,79,0.07326680672268904) 0%, rgba(215,27,27,0.7315301120448179) 100%)' : 'radial-gradient(circle, rgba(40,44,52,0.48783263305322133) 0%, rgba(0,224,255,0.196516106442577) 100%)'};
`;

const SendButton = styled.button`
    color: white;

    width: 70px;
    height: 40px;

    font-size: 14px;

    border-color: #999;
    border-radius: 0.225rem;

    background: rgb(47,147,63);
    background: radial-gradient(circle, rgba(47,147,63,0.48783263305322133) 0%, rgba(0,224,255,0.196516106442577) 100%);

    -moz-osx-font-smoothing:grayscale;
    backface-visibility:hidden;
    transform:translateZ(0);
    transition: all 0.25s ease-out;

    cursor: pointer;

    :hover,:focus{
        transform:scale(1.05);
        background: rgb(35,185,38);
        background: radial-gradient(circle, rgba(35,185,38,0.6) 0%, rgba(0,224,255,0.6) 100%);
    }

    :active{
       transform:scale(.90); 
    }
`;

const A = styled.a`
    text-decoration:none;
    
    cursor: pointer;

    max-width: 50px;
    max-height: 50px;

    background-color: white;

    display: flex;
    justify-content: center;
    align-items:center;

    :hover {
        box-shadow: 0 0 10px rgb(6, 72, 83);
    }
`;

const GitHubA = styled(A)`
    border-radius: 100%;
`;

const LinkedInA = styled(A)`
    border-radius: 10%;
`;

const Img = styled.img`
    width: 105%;
    height: auto;

    -moz-osx-font-smoothing:grayscale;
    backface-visibility:hidden;
    transform:translateZ(0);
    transition: transform 0.25s ease-out;

    :hover,:focus{
        transform:scale(1.05);
    }

    :active{
       transform:scale(.90); 
    }
`;

const FlexBetween = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 2rem;
    max-width: 30em;

    margin-left: auto;
    margin-right: auto;
`;

const FlexCenter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    height: 442px;
`;

const TitleTilt = styled(Title)`
    border-radius: 0.225rem;
    background: radial-gradient(circle, rgba(47,147,63,0.48783263305322133) 0%, rgba(0,224,255,0.196516106442577) 100%);
`;

const ErrorMesage = styled(Title)`
    border-radius: 0.225rem;
    background: rgba(215,27,27,0.7315301120448179);
    max-width: 30em;

    margin-left: auto;
    margin-right: auto;
`;

const Copy = styled.span`
    text-decoration: underline;

    cursor: pointer;
`;

interface ContactProps {}

interface ContactState {
    name : string
    email : string
    title : string
    body : string
    highlightRed : boolean[]
    emailSent: null | boolean
}

class Contact extends React.Component<ContactProps,ContactState>{
    constructor(props: ContactProps){
        super(props);
        this.state = {
            name : '',
            email : '',
            title : '',
            body : '',
            highlightRed : new Array(4).fill(false),
            emailSent: null
        }
    }
    
    onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let hlr = [...this.state.highlightRed];
        if(regexCheck(event.target.value, 'plain')){
            hlr[0] = false; 
        }
        this.setState({ name : event.target.value, highlightRed : hlr})
    }

    onEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let hlr = [...this.state.highlightRed];
        if(checkEmail(event.target.value)){
            hlr[1] = false;
        }
        this.setState({ email : event.target.value, highlightRed : hlr})
    }

    onTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let hlr = [...this.state.highlightRed];
        if(checkSpecial(event.target.value)){
            hlr[2] = false;
        }
        this.setState({ title : event.target.value, highlightRed : hlr})
    }

    onBodyChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        let hlr = [...this.state.highlightRed];
        if(checkSpecial(event.target.value)){
            hlr[3] = false;
        }
        this.setState({ body : event.target.value, highlightRed : hlr})
    }
    
    onSend = async() => {
        const {name,email,title,body, highlightRed} = this.state;
        let hlr = [...highlightRed];
        
        if(!regexCheck(name, 'plain') || !name){
            hlr[0] = true;
        }
        if(!checkEmail(email) || !email){
            hlr[1] = true;
        }
        if(!regexCheck(title, 'special') || !title){
            hlr[2] = true;
        }
        if(!regexCheck(body, 'special') || !body){
            hlr[3] = true;
        }
        this.setState({ highlightRed : hlr })

        // Only sends if input is valid
        if(!hlr.includes(true)){
            const success = await sendEmail({name, email, title, body});

            this.setState({ emailSent: success });
        }
    }

    copyToClipBoard = async(event: React.MouseEvent<HTMLSpanElement>) => {
        if(!navigator.clipboard) {
            // Clipboard API not available
            return
        }
        const evt = event.target as HTMLSpanElement;

        const text = evt.innerText;
        try {
            await navigator.clipboard.writeText(text)
        } catch (err) {
            console.error('Failed to copy!', err)
        }
    }

    render(){
        const { highlightRed, emailSent } = this.state;
        return(
            <Layout>
                <YosemiteBackground>
                    <Transition
                        in={true}
                        timeout={{
                            appear: 150,
                        }}
                        appear={true}
                    >
                    {(state: string) => (
                        <Fade state={state}>
                            <ContactContainer>

                                {/* Only Display if email has not been sent or was unsuccesful */}
                                {<Transition
                                    in={(emailSent === null || emailSent === false)}
                                    timeout={{
                                        exit: 300
                                    }}
                                    unmountOnExit 
                                    mountOnEnter
                                >
                                {(state: string) => (
                                    <Fade state={state}>
                                        <Title>Send Me an Email</Title>
                                        <FormContainer>                            
                                            <Label>Name
                                                <Input 
                                                    onChange={this.onNameChange} 
                                                    isRed={highlightRed[0]} 
                                                    type="text" 
                                                />
                                            </Label>  
                                            <PadTop>                        
                                                <Label >Email
                                                    <Input 
                                                        onChange={this.onEmailChange} 
                                                        isRed={highlightRed[1]} 
                                                        type="email" 
                                                    />
                                                </Label> 
                                            </PadTop>  
                                            <PadTop>                       
                                                <Label>Subject
                                                    <Input 
                                                        onChange={this.onTitleChange} 
                                                        isRed={highlightRed[2]} 
                                                        type="text" 
                                                    />
                                                </Label>
                                            </PadTop> 
                                            <PadTop>
                                                <Label >Message
                                                    <TextArea 
                                                        onChange={this.onBodyChange} 
                                                        isRed={highlightRed[3]} 
                                                    />
                                                </Label>
                                            </PadTop>
                                            <PadTop>
                                                <SendButton onClick={this.onSend} >
                                                    Send
                                                </SendButton>    
                                            </PadTop>
                                        </FormContainer>  
                                    </Fade>
                                )}
                                </Transition>}

                                {/* Only Display if email was successfully sent */}
                                {<Transition
                                    in={emailSent}
                                    timeout={{
                                        enter: 350,
                                    }}
                                    unmountOnExit 
                                    mountOnEnter
                                >
                                {(state: string) => (
                                    <Fade state={state}>
                                        <FlexCenter>
                                            <Tilt options={{ max : 55 , perspective: 75 }}>
                                                <TitleTilt>
                                                    Email Sent!    
                                                </TitleTilt>
                                            </Tilt>
                                        </FlexCenter>
                                    </Fade>
                                )}
                                </Transition>}

                                {/* Only display if unsuccessful */}
                                {<Transition
                                    in={emailSent === false}
                                    timeout={{
                                        enter: 350,
                                        exit: 300
                                    }}
                                    unmountOnExit 
                                    mountOnEnter
                                >
                                {(state: string) => (
                                    <Fade state={state}>
                                        <ErrorMesage>
                                            Error sending email... you can reach me at  
                                            <Copy onClick={this.copyToClipBoard}> spencerhemstreet@gmail.com</Copy>
                                        </ErrorMesage>
                                    </Fade>
                                )}
                                </Transition>}

                                <Title>Reach Out To Me On GitHub or LinkedIn</Title>     
                                <FlexBetween>
                                    <Tilt options={{ max : 55 , perspective: 75 }} >
                                        <GitHubA  target='_blank' 
                                            rel="noopener noreferrer" 
                                            href='https://github.com/sfhemstreet' 
                                        >
                                            <Img  alt="github logo" src='/images/GitHub.png'/> 
                                        </GitHubA> 
                                    </Tilt>
                                    <Tilt options={{ max : 55, perspective: 75 }} >
                                        <LinkedInA  target='_blank' 
                                            rel="noopener noreferrer" 
                                            href='https://www.linkedin.com/in/spencer-hemstreet-094331177/' 
                                        >                                        
                                            <Img alt="linked in logo" src='/images/linkedIn.png'/> 
                                        </LinkedInA>
                                    </Tilt>
                                </FlexBetween>
                            </ContactContainer>
                        </Fade>
                    )} 
                    </Transition>
                </YosemiteBackground>        
            </Layout>
        )
    }
}

export default Contact;