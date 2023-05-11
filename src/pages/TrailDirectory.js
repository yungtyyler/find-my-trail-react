import { useEffect, useState } from 'react';
import Pagination from '../utils/Pagination';
import { Row, Col, Card, CardImg, CardBody, CardTitle, Container, Spinner } from 'reactstrap';

const TrailDirectory = () => {
    const [ trails, setTrails ] = useState([]);
    const [ location, setLocation ] = useState('');
    const [ loading, setLoading ] = useState(false);
    const [ error, setError ] = useState(null);

    const [ currentPage, setCurrentPage ] = useState(1);
    const [ cardsPerPage ] = useState(12);

    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = trails.slice(indexOfFirstCard, indexOfLastCard);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const fetchTrails = async () => {
        setLoading(true)
        setError(null);

        try {
            const apiKey = process.env.REACT_APP_API_KEY;
            const response = await fetch(
                `https://developer.nps.gov/api/v1/parks?stateCode=${location}&api_key=${apiKey}&q=hiking&limit=50`
            );

            if (!response.ok) {
                throw new Error('Failed to fetch trail data');
            }

            const responseData = await response.json();
            const trailData = responseData.data;

            console.log('success', trailData);
            setTrails(trailData);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = async () => {
        setLoading(true);
        setError(null);
    
        try {
          await fetchTrails();
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
    };

    return (
        <Container className='my-4 text-center'>
            <input 
                type='text'
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder='Enter Location: City, ST'
                className='search-input mb-3 mx-1'
            />
            <button onClick={handleSearch} className='search-button'>Search Trails</button>
    
            {loading ? (
                <div className='text-center mt-4'>
                    <Spinner color='success' />
                    <p>Loading...</p>
                </div>
            ) : error ? (
                <div>Error: {error}</div>
            ) : (
                <>
                    <Row className='py-3'>
                        {currentCards.map((trail) => (
                        <Col key={trail.id} sm="4" className="mb-4">
                            <Card>
                            <CardImg
                                top 
                                src={trail.images[0]?.url}
                                alt={trail.images[0]?.altText}
                            />
                            <CardBody>
                                <CardTitle className='fs-5'>{trail.fullName}</CardTitle>
                                {/* Additional trail information can be displayed here */}
                            </CardBody>
                            </Card>
                        </Col>
                        ))}
                    </Row>
                    {currentCards.length === 0 && <p>No Trails found.</p>}
                </>
            )}
            <Pagination 
                cardsPerPage={cardsPerPage}
                totalCards={trails.length}
                currentPage={currentPage}
                paginate={paginate}
            />
        </Container>
    )
}

export default TrailDirectory