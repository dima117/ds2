import { FC } from 'react';
import './button.scss';
import './header.scss';
import './tumbler.scss';
import './radioButton.scss';

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

export const Button: FC = () => {
    return (
        <div className='Button'>
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
    let cn = 'Tumbler';
    if (checked) {
        cn += ' Tumbler_checked'
    }

    return (
        <div className={cn}>
            <div className='Tumbler-Circle' />
        </div>
    );
};
