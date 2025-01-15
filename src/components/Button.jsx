const Button = ({name}) => {
  return (
    <div className="shrink-0">
        <button className=" bg-gray-200 px-3 py-[6px] m-2 text-sm font-semibold rounded-md">{name}</button>
    </div>
  )
}

export default Button