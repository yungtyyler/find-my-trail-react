import { useState } from 'react';
import Pagination from '../utils/Pagination';
// import calculateDistance from '../utils/CalculateDistance';
import { Row, Col, Card, CardImg, CardBody, CardTitle, Container, Spinner } from 'reactstrap';
import axios from 'axios';

const TrailDirectory = () => {
    const [ trails, setTrails ] = useState([]);
    // const [ city, setCity ] = useState('');
    const [ state, setState ] = useState('');
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
            // const geocodingApiKey = process.env.REACT_APP_GEOCODING_API_KEY;
            const apiKey = process.env.REACT_APP_API_KEY;

            // All for geocoding and finding coordinates for radial search. Redevelop later
            // For radial search later
            // const radius = 30;

            // const geoCodingResponse = await axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
            //     params: {
            //         address: `${city.trim()}, ${state.trim()}`,
            //         key: geocodingApiKey
            //     }
            // });
            // console.log(geoCodingResponse);
            // const results = geoCodingResponse.data.results;
            // const localityResult = results.find(result => result.types.includes('locality'));

            // if(!localityResult) {
            //     throw new Error('No locality result found');
            // }

            // const { lat, lng } = localityResult.geometry.location;
            // console.log('Latitude: ', lat);
            // console.log('Longitude: ', lng);

            // if (!city && !state) {
            //     throw new Error('Please provide a city or state');
            // }

            if (!state) {
                throw new Error('Please provide a state');
            }

            const params = {
                api_key: apiKey,
                q: 'hiking',
                limit: 50
            }

            // if (city) {
            //     params.city = city;
            // }
            if (state) {
                params.stateCode = state;
            }
            
            const trailsResponse = await axios.get('https://developer.nps.gov/api/v1/parks', { params });

            const trailData = trailsResponse.data.data;

            // Filter method for distance from city

            // const filteredTrails = trailData.filter(trail => {
            //     const [ trailLat, trailLng ] = trail.latLong.split(',');
            //     const distance = calculateDistance(lat, lng, parseFloat(trailLat), parseFloat(trailLng));

            //     return distance;
            // })

            console.log('success', trailData);
            setTrails(trailData);
        } catch (error) {
            console.log(error)
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
            <Row className='d-flex justify-content-center align-items-center'>
                {/* <Col md='6' className='align-items-center'>
                    <input 
                        type='text'
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder='Enter City'
                        className='form-control-lg rounded shadow-sm w-100 my-2'
                    />
                </Col> */}
                <Col md='6' className='align-items-center'>
                    <input 
                        type='text'
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                        placeholder='State: CA, TX'
                        className='form-control-lg rounded shadow-sm w-100'
                    />
                </Col>
                <Col md='6'>
                    <button onClick={handleSearch} className='btn btn-success my-2' type='button'>Search Trails</button>
                </Col>
            </Row>
    
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