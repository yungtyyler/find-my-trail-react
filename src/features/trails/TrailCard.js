import { Card, CardImg, CardTitle, CardImgOverlay } from "reactstrap";
import { Link } from "react-router-dom";

const TrailCard = ({ trail }) => {
    const { id, images, fullName } = trail;

    return (
        <Card>
            <CardImg
                top
                src={images[0]?.url}
                alt={images[0]?.altText}
                className='custom-card-img'
            />
            <CardImgOverlay>
                <CardTitle className='fs-5 text bg-white'>
                    <Link to={`/trails/${id}`}>{fullName}</Link>
                </CardTitle>
            </CardImgOverlay>
        </Card>
    )
}

export default TrailCard