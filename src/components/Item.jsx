export const Item = ({item}) => {
  return (
    <div className="item animate__animated animate__bounce">
      <img src={item.url} alt={item.title} />
    </div>
  )
}
