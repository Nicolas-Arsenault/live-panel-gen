interface LinkButtonsProps{
    href: string;
    text: string;
}

export default function LinkButtons({href, text}: LinkButtonsProps){
    const css = "border-4 border-[#1c1d20] justify-center flex items-center p-2 m-2 text-white-900 rounded-lg dark:text-white transition-all duration-400 hover:bg-gray-100 dark:hover:bg-lime-700 group";
    return(
        <a href={href} className={css}>{text}</a>
    );

}