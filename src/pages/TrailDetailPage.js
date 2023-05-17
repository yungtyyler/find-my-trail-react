import { Container, Row } from "reactstrap";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectTrailById } from "../features/trails/trailsSlice";
import TrailDetail from "../features/trails/TrailDetail";
import Error from "../components/Error";
import Loading from "../components/Loading";

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
    <div>
        <Container>
            <Row>
                {content}
            </Row>
        </Container>
    </div>
    );
};

export default TrailDetailPage;