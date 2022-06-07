import React from 'react';
import { Button, RadioButton, RadioBox, Header, Tumbler, Input, MessageBox } from './controls';

import './App.scss';

export const App: React.FC = () => {
    return (
        <div>
            <div className='Area'>
                navigation
            </div>
            <div className='Content'>
                <div className='Area'>
                    <Header />
                    content <RadioButton /> <Tumbler /> <Tumbler checked />
                    <div className='Area'>
                        <Input /> <Button />
                    </div>
                    <div className='Area'>
                        <RadioBox />
                    </div>
                </div>
                <MessageBox preset='info'>
                    <Header />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <p>
                        <Button /> <Button />
                    </p>
                    <div className='Area'>
                        <RadioBox />
                    </div>
                </MessageBox>
                <div className='Container'>
                    <div className='Area'>
                        container 1 <Button />
                    </div>
                    <div className='Container'>
                        <div className='Area'>
                            container 2 <Button />
                        </div>
                        <div className='Container'>
                            <div className='Area'>
                                container 3 <Button />
                                <div className='Area'>
                                    <Input />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
