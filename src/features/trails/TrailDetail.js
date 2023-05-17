import { Card, CardImg, CardText, CardBody, Col } from "reactstrap";

const TrailDetail = ({ trail }) => {
    const { images, fullName, description } = trail;
    const trailImages = images.map((image) => {
        return image.url;
    });
    console.log(trail);

    return (
        <Col>
            <Card md='5' className='m-1'>
                <CardImg top src={trailImages[0]} alt={fullName} className='h-100'/>
                <CardBody>
                    <CardText className="">{description}</CardText>        
                </CardBody>
            </Card>
            {trailImages}
        </Col>
    );
};

export default TrailDetail;