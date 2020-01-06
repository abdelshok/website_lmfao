// About Component
// - Rendered in the @MainImageWrapper component
// - Renders a series of terminals that teach the new visitor abou the application

// External Packages
import React, { Component } from 'react';
import styled from 'styled-components';
import { render } from 'react-dom';
import Terminal from 'terminal-in-react';

const initialMsg = () => "LMFAO is the only (original) chat app for the terminal.\n\nIt is human-focused. LMFAO doesn't record any of your conversations and allows you to message friends and coworkers effortlessly.\n\nIt is secure. LMFAO protects user privacy by using end to end encryption to prevent anyone (me included) from tracking user data.\n\nMore importantly, it is fun. Fun with a capital F. You can join public channels or create private channels to talk with anyone while giving the impression that you are doing intense engineering work.\n\nType 'lmfao' in order to see a preview of the application.";
const lastMsg = () => "Scroll down to learn more about LMFAO's features"
const lmfaoMsg = () => "LMFAO \n \n 🙊 \n \n 🙉 \n \n 🙈 \n \n \nYour one and only chat app for the terminal. Please type in 'npm' for a link to learn more about this package.\n"
const npmMsg = () => "You can learn more about LMFAO at npmjs.com/package/lmfao or by looking up 'npm lmfao' in your search bar.\n\nAlternatively, you can type 'open' to open the NPM page in another tab.";

class AboutComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            commandTyped: 'initialPrompt',
        }
    }

    
    getLMFAO = () => {
        setTimeout(() => {
            this.setState({
                commandTyped: ''
            })
            setTimeout(() => {
                this.setState({
                    commandTyped: 'lmfao'
                })
            }, 0)
        }, 0)
    }

    getNpmInfo = () => {
        setTimeout(() => {
            this.setState({
                commandTyped: ''
            })
            setTimeout(() => {
                this.setState({
                    commandTyped: 'npm'
                })
            }, 0)
        }, 0)
    }

    getInitialInfo = () => {
        this.setState({
            commandTyped: 'initialPrompt'
        })
    }

    render() {
        return (
            <div>


            {
                this.state.commandTyped == 'initialPrompt' &&
                <div>
                <Terminal
                color='white'
                backgroundColor='black'
                barColor='black'
                style={{ fontWeight: "bold", fontSize: "1em", height: "60%", textAlign: 'justify'}} // Overrides the parent style
                commands={{
                    'lmfao': this.getLMFAO,
                }}
                descriptions={{
                    'lmfao': 'Runs the initial prompt of the package',
                }}
                msg={initialMsg()}
                />
                </div>
            }

            { 
            
                this.state.commandTyped == 'lmfao' && 
                <div>
                    <Terminal
                    color='white'
                    backgroundColor='black'
                    barColor='black'
                    style={{ fontWeight: "bold", fontSize: "1em", height: "60%", textAlign: 'justify'}} // Overrides the parent style
                    commands={{
                        'npm': this.getNpmInfo, 
                        'lmfao': this.getLMFAO,
                    }}
                    descriptions={{
                        showmsg: 'shows a message',
                        alert: 'alert', popup: 'alert'
                    }}
                    msg={lmfaoMsg()}
                    />
                </div>
            }


            { 
            
                this.state.commandTyped == 'npm' &&
                <div>
                <Terminal
                color='white'
                backgroundColor='black'
                barColor='black'
                style={{ fontWeight: "bold", fontSize: "1em", height: "60%", textAlign: 'justify'}} // Overrides the parent style
                commands={{
                    'lmfao': this.getLMFAO,
                    'npm': this.getNpmInfo,
                    'open':() => { window.open('https://www.npmjs.com/package/lmfao') },
                    ':)': this.getInitialInfo,

                }}
                descriptions={{
                    'lmfao': 'Runs the initial prompt of the package',
                }}
                msg={npmMsg()}
                />
                </div>
            }
            </div>
        )
    }

}

export default AboutComponent;