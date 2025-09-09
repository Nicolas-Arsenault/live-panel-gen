interface InputsProps{
    value: string;
    placeholder: string;
    type: string;
}

export default function Inputs({value, placeholder, type}: InputsProps){
    const css = "border border-[#202225] bg-[#111214] p-3 mb-3 text-white font-sans rounded-md focus:outline-none focus:border-[#4dff00]";

    return(
        <input 
            className={css}
            value={value} 
            placeholder={placeholder}
            type={type} 
        />
    );
}