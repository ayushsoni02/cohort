export const Button = ({
    disabled,
    children,
    onClick
}) => {
    return <span onClick={onClick} className={` rounded-2xl text-white text-2xl px-32 py-8  cursor-pointer ${disabled ? "bg-blue-500" : "bg-green-400"}`}>
        {children}
    </span>
}