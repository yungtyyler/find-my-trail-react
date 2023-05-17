import { Card, CardImg, CardTitle, CardImgOverlay } from "reactstrap";
import { Link } from "react-router-dom";

const TrailCard = ({ trail }) => {
    const { id, images, fullName } = trail;

    return (
        <Link to={`/trail-directory/${id}`}>
            <Card>
                <CardImg
                    top
                    src={images[0]?.url}
                    alt={images[0]?.altText}
                    className='custom-card-img'
                />
                <CardImgOverlay>
                    <CardTitle className='fs-5 text-black'>
                        {fullName}
                    </CardTitle>
                </CardImgOverlay>
            </Card>
        </Link>
    )
}

export default TrailCard