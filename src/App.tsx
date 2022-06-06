import React from 'react';
import { Button, RadioButton, RadioBox, Header, Tumbler } from './controls';

import './App.scss';

export const App: React.FC = () => {
    return (
        <div>
            <div className='Area'>
                navigation
            </div>
            <div className='Content'>
                <div className='Area'>
                    <Header/>
                    content <Button /> <RadioButton /> <Tumbler /> <Tumbler checked />
                    <div className='Area'>
                        <RadioBox />
                    </div>
                </div>
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
