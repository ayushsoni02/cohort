export const Input = ({
    onClick,
    type,
    placeholder
}) => {
    return <span onClick={onClick} className={`p-8 rounded-2xl text-white text-4xl px-2 py-2 cursor-pointer ${disabled ? "bg-blue-500" : "bg-green-400"}`}>
        <input type={type} placeholder={placeholder}
         className="bg-blue-500 outline-none"></input>
    </span>
}