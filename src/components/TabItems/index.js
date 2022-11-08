import './index.css'

const TabItem = props => {
  const {data, isActive, onClickTabItem} = props
  const {tabId, displayText} = data

  const onClickTab = () => {
    onClickTabItem(tabId)
  }

  const tabClassName = isActive ? 'name active' : 'name'

  return (
    <li className="tab-item">
      <button type="button" onClick={onClickTab} className={tabClassName}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
