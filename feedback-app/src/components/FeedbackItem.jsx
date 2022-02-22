import Card from "./shared/Card"
import PropTypes from 'prop-types'
import {FaTimes} from 'react-icons/fa'
function FeedbackItem({item,handleDelete}) {
    //component level state
    // const[rating,setRating] = useState(7)
    // const[text,setText] = useState('This is an example of a feedback item')

    // const handleClick = () => {
    //     setRating((prev) => {
    //         return prev + 1
    //     })
    // }

  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => handleDelete(item.id)} className="close">
        <FaTimes color='purple'/>
      </button>
      <div className="text-display">{item.text}</div>
      {/* <button onClick={handleClick}>Click</button> */}
    </Card>
  )
}

FeedbackItem.prototypes = {
  item: PropTypes.object.isRequired
}

export default FeedbackItem