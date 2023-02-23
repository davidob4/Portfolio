import './index.scss';

const Animated = ({ letterClass, strArray}) => {
    return (
        <span>
            {
                strArray.map((char, i) =>(
                    <span key={char + i} className={`${letterClass} _${i}`}>
                        {char}
                    </span>
                ))
            }
        </span>
    )
}

export default Animated