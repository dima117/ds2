import { FC, ReactNode, useState } from 'react';
import { cn } from '@bem-react/classname';

import './button.scss';
import './header.scss';
import './tumbler.scss';
import './radioButton.scss';
import './radioBox.scss';
import './input.scss';
import './messageBox.scss';

export const RadioButton: FC = () => {
    return (
        <div className='RadioButton'>
            <div className='RadioButton-Item'>
                Cat
            </div>
            <div className='RadioButton-Item RadioButton-Item_current'>
                Dog
            </div>
            <div className='RadioButton-Item'>
                Pig
            </div>
            <div className='RadioButton-Item'>
                Little cow
            </div>
        </div>
    );
}
export const RadioBox: FC = () => {
    return (
        <div className='RadioBox'>
            <div className='RadioBox-Item'>
                <div className='RadioBox-Marker' /> Cat
            </div>
            <div className='RadioBox-Item RadioBox-Item_current'>
                <div className='RadioBox-Marker' /> Dog
            </div>
            <div className='RadioBox-Item'>
                <div className='RadioBox-Marker' /> Pig
            </div>
            <div className='RadioBox-Item'>
                <div className='RadioBox-Marker' /> Little cow
            </div>
        </div>
    );
}

export const Button: FC = () => {
    const className = cn('Button')();

    return (
        <div className={className} tabIndex={0}>
            Click me
        </div>
    );
}

export const Header: FC = () => {
    return (
        <div className='Header'>
            <div className='Header-Title'>
                Page header
            </div>
            <div className='Header-Subitle'>
                Click me
            </div>
        </div>
    );
}

export const Tumbler: FC<{ checked?: boolean }> = ({ checked }) => {
    let cn = 'Tumbler' + (checked ? ' Tumbler_checked' : '');

    return (
        <div className={cn}>
            <div className='Tumbler-Circle' />
        </div>
    );
};

export const Input: FC = () => {
    const [value, setValue] = useState('This is the input text');

    return (
        <input type="text"
            placeholder="Enter your name"
            className="Input"
            onChange={e => setValue(e.target.value)}
            value={value} />
    );
}

export const MessageBox: FC<{ children: ReactNode, theme: 'dark'|'blue' }> = ({ children, theme }) => {
    return (
        <div className={`MessageBox Theme_${theme}`}>{children}</div>
    );
}
