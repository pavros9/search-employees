import React, {
    InputHTMLAttributes,
    memo,
    useRef,
    useState,
} from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';


type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange'
>;


interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string | number;
    label?: string;
    onChange?: (value: string) => void;
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        placeholder,
        label,
        ...otherProps
    } = props;
    const [isFocused, setIsFocused] = useState(false);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    const onBlur = () => {
        setIsFocused(false);
    };

    const onFocus = () => {
        setIsFocused(true);
    };

    const input = (
        <div
            className={classNames(cls.InputWrapper, {}, [
                className,
            ])}
        >
            <input
                type={type}
                value={value}
                onChange={onChangeHandler}
                className={cls.input}
                onFocus={onFocus}
                onBlur={onBlur}
                placeholder={placeholder}
                {...otherProps}
            />

        </div>
    );

    if (label) {
        return (
            <label >
                <span className={cls.label}>{label}</span>
                {input}
            </label>
        );
    }

    return input;
});
