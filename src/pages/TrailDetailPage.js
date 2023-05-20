import { Container, Row, Col, } from "reactstrap";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectTrailById } from "../features/trails/trailsSlice";
import CommentsList from "../features/comments/CommentsList";
import TrailImagesCarousel from "../components/TrailImagesCarousel";
import TrailDetail from "../features/trails/TrailDetail";
import Error from "../components/Error";
import Loading from "../components/Loading";
import RatingsList from "../features/comments/RatingsList";

const TrailDetailPage = () => {
    const { id } = useParams();
    const trail = useSelector(selectTrailById(id)); 
    const isLoading = useSelector((state) => state.trails.isLoading);
    const errMsg = useSelector((state) => state.trails.errMsg);
    let content = null;

    if (isLoading) {
        content = <Loading />;
    } else if (errMsg) {
        content = <Error errMsg={errMsg} />;
    } else {
        content = (
            <>
                <TrailDetail trail={trail} />
            </>
        )
    }

    return (
        <Container className='my-5'>
            <Row className='mb-5 py-3'>
                <h1 className='text-start fw-bold my-3'>{trail.name}: <span className='text-dark'>Details Page</span></h1>
                <p className='text-start lead fst-italic'>Some quick facts and pictures of this trail!</p>
                <hr />
            </Row>
            <Row className='align-items-center'>
                <Col className='mx-5 text-center'>
                    {content}
                    <a href='/' className='m-2 btn btn-success btn-lg'>Safety Information</a>
                    <button className='m-2 btn btn-warning btn-lg'>Rate & Comment</button>
                </Col>
                <Col className='mx-5'>
                    <TrailImagesCarousel trail={trail} />
                </Col>
            </Row>
            <Row className='my-5'>
                <div className='sub-header'>
                    <h2 className='text-end fw-bold my-3'>Comments and Ratings:</h2>
                    <p className='text-end lead fst-italic'>Here's what YOU have to say!</p>
                </div>
            </Row>
            <Row className='text-center'>
                <Col md='6' className='text-start border-end'>
                    <h3>Ratings</h3>
                    <div>
                        <RatingsList />                         
                    </div>
                </Col>
                <Col md='6' className='text-end'>
                    <h3>Comments</h3>
                    <div>
                        <CommentsList />
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default TrailDetailPage;