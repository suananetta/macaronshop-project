type Button = {
    btnClass: string;
    btnName: string;
    disabled: boolean;
    // onClick: any;
}


function Button({btnClass, btnName, disabled}:Button) {
    return (
        <button 
            className={btnClass} 
            disabled={disabled} 
            // onClick={onClick}
        >
            {btnName}
        </button>
    )
}

export default Button;