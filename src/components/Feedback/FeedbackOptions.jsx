
import css from './FeedbackOptions.module.css'
import propTypes from 'prop-types';


const FeedbackOptions =({options, onLeaveFeedback})=> {
        return (
            <div className="">
                {options.map(option => {
                    return (<button type='button' className={css.optionBtn} onClick={()=>onLeaveFeedback(option)}>{option}</button>)
                })}
            </div>
        );
     }
 
FeedbackOptions.propTypes = {
  options: propTypes.arrayOf(propTypes.string.isRequired).isRequired,
  onLeaveFeedback: propTypes.func.isRequired,
};

export default FeedbackOptions