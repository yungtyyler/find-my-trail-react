import Pagination from '../utils/Pagination';
import StateOptions from '../utils/StateOptions';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import TrailsList from '../features/trails/TrailsList';
import { fetchTrails, selectAllTrails } from '../features/trails/trailsSlice';

const TrailDirectory = () => {
    const [ inputState, setInputState ] = useState('');
    const [ currentPage, setCurrentPage ] = useState(1);
    const [ cardsPerPage ] = useState(12);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const trails = useSelector(selectAllTrails);
    const searchState = useSelector((state) => state.trails.searchState);
    const loading = useSelector((state) => state.trails.isLoading);
    const dispatch = useDispatch();

    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = trails.slice(indexOfFirstCard, indexOfLastCard);

    const handleSearch =() => {
        dispatch(fetchTrails({ searchState: inputState }));
    };

    return (
        <Container className='my-4 text-center'>
            <Row className='d-flex justify-content-center align-items-center'>
                <Col md='8' className='align-items-center'>
                    <StateOptions searchState={searchState} setInputState={setInputState} />
                </Col>
                <Col>
                    <button
                        onClick={handleSearch}
                        className='btn btn-success my-2'
                        type='button'
                        disabled={loading}
                    >
                        {loading ? 'Loading...' : 'Search Trails'}
                    </button>
                </Col>
            </Row>
            {trails && trails.length > 0 ? (
                <>
                    <TrailsList trails={currentCards} />
                    <Pagination 
                        cardsPerPage={cardsPerPage}
                        totalCards={trails.length}
                        currentPage={currentPage}
                        paginate={paginate}
                    />
                </>
            ) : (
                <p>No Trails available.</p>
            )}
        </Container>
    )
}

export default TrailDirectory