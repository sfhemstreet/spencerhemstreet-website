import styled from 'styled-components';
import React from 'react';
import Layout from '../components/Layout';
import { YosemiteBackground, Container, BigText } from '../components/Backgrounds';
import {regexCheck, checkEmail, checkSpecial} from '../util/regexCheck';
import Tilt from 'react-tilt';

interface Red {
    isRed: boolean
}

const FormContainer = styled.div`
    max-width: 30em;
    padding: 2rem;
    margin-left: auto;
    margin-right: auto;
`;

const Label = styled.label`
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
    border-radius: 0.125rem;

    font-weight: bold;

    color: white;
    background: ${props => props.isRed ? 'radial-gradient(circle, rgba(255,0,8,1) 0%, rgba(37,13,18,1) 100%)' : 'linear-gradient(90deg, rgba(181,175,175,1) 0%, rgba(147,157,161,1) 65%, rgb(47, 53, 54) 100%)'};
`;

const TextArea = styled.textarea<Red>`
    width: 100%;
    padding: 0.5rem;

    -webkit-appearance:none;
    -moz-appearance:none;

    border-color: #999;
    border-radius: 0.125rem;

    font-weight: bold;

    color: white;
    background: ${props => props.isRed ? 'radial-gradient(circle, rgba(255,0,8,1) 0%, rgba(37,13,18,1) 100%)' : 'linear-gradient(90deg, rgba(181,175,175,1) 0%, rgba(147,157,161,1) 65%, rgb(47, 53, 54) 100%)'};
`;

const SendButton = styled.button`

`;

const A = styled.a`
    text-decoration:none;
    
    cursor: pointer;

    display: inline-block;

    width: 2rem;
    height: 2rem;

    border-radius: 1rem;

    background-color: white;

    margin-left: auto;
    margin-right: auto;
`;

const Img = styled.img`
    padding: 0.25rem;

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


const FlexContainer = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 2rem;
    max-width: 30em;

    margin-left: auto;
    margin-right: auto;
`;

interface ContactProps {}

interface ContactState {
    name : string
    email : string
    title : string
    body : string
    highlightRed : boolean[]
}

class Contact extends React.Component<ContactProps,ContactState>{
    constructor(props: ContactProps){
        super(props);
        this.state = {
            name : '',
            email : '',
            title : '',
            body : '',
            highlightRed : new Array(4).fill(false)
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
    
    onSendEmail = () => {
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
            fetch('https://mysterious-mountain-40721.herokuapp.com/email', { 
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify({
                    name : name, 
                    email : email,
                    title : title, 
                    body : body
                })
            })
            .then(response => response.json())
            .then(res => {
                if(res === 'Success'){
                    console.log('emailed');
                }
                else{
                    // Server error
                }
            })
            .catch(error => {
                // failed to fetch
            });
        }
    }

    render(){
        const {highlightRed} = this.state;
        return(
            <Layout>
                <YosemiteBackground>
                    <Container>
                        <BigText>Send Me an Email</BigText>
                        <FormContainer>
                            <div className="mt3">
                                <Label>Name
                                    <Input onChange={this.onNameChange} isRed={highlightRed[0]} type="text" />
                                </Label>
                            </div>
                            <div className="mt3">
                                <Label >Email
                                    <Input onChange={this.onEmailChange} isRed={highlightRed[1]} type="email" />
                                </Label>
                            </div>
                            <div className="mv3">
                                <Label>Subject
                                    <Input onChange={this.onTitleChange} isRed={highlightRed[2]} type="text" />
                                </Label>
                            </div>
                            <div className="mv3">
                                <Label >Message
                                    <TextArea onChange={this.onBodyChange} isRed={highlightRed[3]} />
                                </Label>
                            </div>
                            <div className="">
                                <input onClick={this.onSendEmail} className="b ph3 pv2 input-reset br1 b--black bg-silver grow hover-bg-blue hover-white pointer f6 dib" type="submit" value="Send"/>
                            </div>
                        </FormContainer>       
                        <FlexContainer>
                            <A  target='_blank' 
                                rel="noopener noreferrer" 
                                href='https://github.com/sfhemstreet' 
                                > 
                                <Tilt 
                                    className="Tilt color_shadow bg-white center br2 dib w2 h2 pointer" 
                                    options={{ max : 55 , perspective: 75 }} 
                                    style={{ height: 50, width: 50 }} >
                                        <Img className=' center grow ' alt="github logo" src='/images/GitHub.png'/> 
                                </Tilt>
                            </A>
                            <A  target='_blank' 
                                rel="noopener noreferrer" 
                                href='https://www.linkedin.com/in/spencer-hemstreet-094331177/' 
                                >
                                <Tilt 
                                    className="Tilt bg-white color_shadow center br2 dib w2 h2 pointer" 
                                    options={{ max : 55, perspective: 75 }} 
                                    style={{ height: 50, width: 50 }} >
                                        <Img className='pa1 center grow ' alt="linked in logo" src='/images/linkedIn.png'/> 
                                </Tilt>
                            </A>
                        </FlexContainer>
                    </Container>
                </YosemiteBackground>        
            </Layout>
            
        )
    }
}

export default Contact;