import './index.css'

const ImageItem = props => {
  const {data, onClickImageItem} = props
  const {thumbnailUrl, id} = data

  const clickImage = () => {
    onClickImageItem(id)
  }

  return (
    <li>
      <button onClick={clickImage} type="button" className="button">
        <img src={thumbnailUrl} alt="thumbnail" className="img" />
      </button>
    </li>
  )
}

export default ImageItem
