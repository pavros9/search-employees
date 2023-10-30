import React, {
    InputHTMLAttributes,
    memo,
    useRef,
    useState,
} from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';
import { Loader } from '../Loader/Loader';


type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange'
>;


interface InputProps extends HTMLInputProps {
    className?: string;
    isLoading?: boolean;
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
        isLoading,
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
            className={classNames(cls.InputWrapper, {})}
        >
            <input
                type={type}
                value={value}
                onChange={onChangeHandler}
                className={classNames(cls.input, {}, [className])}
                onFocus={onFocus}
                onBlur={onBlur}
                placeholder={placeholder}
                {...otherProps}
            />
            {isLoading && <div className={cls.loaderWrapper}>
                <Loader />
            </div>}


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
