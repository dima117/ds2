import React from 'react';
import { Button, RadioButton } from './controls';

import './App.scss';

export const App: React.FC = () => {
    return (
        <div>
            <div className='Area'>
                navigation
            </div>
            <div className='Content'>
                <div className='Area'>
                    <div className='Header'>Page header</div>
                    <div className='Subtitle'>This is the subtitle</div>
                    content <Button /> <RadioButton />
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
