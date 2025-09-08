interface ButtonsProps {
    text: string;
}

export default function Buttons({text}: ButtonsProps){
    const css = "mt-4 mb-4 border  p-2 font-sans  from-neutral-600 to-black text-white font-normal text-[1.15em] rounded-md transition-all duration-500 hover:cursor-pointer hover:-translate-y-1 hover:scale-105";

    return(
        <button className={css} type="submit">{text}</button>
    );
}