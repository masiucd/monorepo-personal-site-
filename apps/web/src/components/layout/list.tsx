type Props = {
  children: React.ReactNode
}
function List({children}: Props) {
  return <ul className="flex gap-3 py-2 md:px-2">{children}</ul>
}

export default List
