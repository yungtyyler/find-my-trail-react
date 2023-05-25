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
    const [ searchHeaderText, setSearchHeaderText ] = useState('Nowhere');

    const trails = useSelector(selectAllTrails);
    const searchState = useSelector((state) => state.trails.searchState);
    const loading = useSelector((state) => state.trails.isLoading);
    
    const dispatch = useDispatch();

    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = trails.slice(indexOfFirstCard, indexOfLastCard);

    const handleSearch =() => {
        dispatch(fetchTrails({ searchState: inputState }));
        setSearchHeaderText(inputState);
    };

    return (
        <div>
            <div className='mb-5 py-3 px-4'>
                <h1 className='text-start fw-bold my-3'>Trail Directory</h1>
                <p className='text-start lead fst-italic'>Select a state to search in using the dropdown below!</p>
                <hr />
            </div>
            <Container className='my-5 text-center'>
                <Row className='d-flex justify-content-center align-items-center'>
                    <Col md='8' className='align-items-center'>
                        <select 
                            value={searchState}
                            onChange={(e) => setInputState(e.target.value)}
                            className='form-control-lg rounded shadow-sm w-100'
                        >
                            <StateOptions />
                        </select>
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
                <h2 className='fst-italic my-3 px-2 text-start'>Hiking trails and parks found in <span className='text-success'>{searchHeaderText}</span>: </h2>
                <Row>
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
                </Row>
            </Container>
        </div>
    )
}

export default TrailDirectory