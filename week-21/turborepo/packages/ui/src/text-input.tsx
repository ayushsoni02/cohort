
interface PropType{
  placeholder:string;
  onChange?:any;
}

export function TextInput({
    placeholder,
    onChange
}:PropType){
    return <input onChange={onChange} placeholder={placeholder} style={{
        padding:10,
        margin:10,
        borderColor:"black",
        borderWidth:1,
    }}></input>
}