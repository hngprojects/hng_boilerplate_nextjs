
export interface ButtonProps{
    title: string;
    onClick?: () => void;
    className?: string;
    type?: 'button' | 'submit' | 'reset';
    disabled?:boolean
}