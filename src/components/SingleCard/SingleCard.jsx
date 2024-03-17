import PropTypes from 'prop-types';

const SingleCard = ({card}) => {
    console.log(card);
    return (
        <div>
            
        </div>
    );
};

SingleCard.propTypes ={
    card:PropTypes.object.isRequired
}
export default SingleCard;