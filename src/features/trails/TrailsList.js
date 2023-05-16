import { useSelector } from "react-redux";
import TrailCard from "./TrailCard";
import { Col, Row } from "reactstrap";
import Error from "../../components/Error";
import Loading from "../../components/Loading";

const TrailsList = ({ trails }) => {

    const isLoading = useSelector((state) => state.trails.isLoading);
    const errMsg = useSelector((state) => state.trails.errMsg);

    if (isLoading) {
        return <Loading />;
    };

    if (errMsg) {
        return <Error errMsg={errMsg} />;
    };
    
    return(
        <Row className='py-3 ms-auto'>
            {
                trails.map((trail) => {
                    return (
                        <Col key={trail.id} sm="4" className="mb-4">
                            <TrailCard trail={trail} />
                        </Col>
                    )
                })
            }
        </Row>
    );
}

export default TrailsList;