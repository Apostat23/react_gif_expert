export const Item = ({item}) => {
  return (
    <div className="item">
      <img src={item.url} alt={item.title} />
    </div>
  )
}
