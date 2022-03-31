import { Link } from 'react-router-dom';

export default function Nav () {
    return (
        <div className='nav'>
            <Link to='/'>
                <div>crypto prices</div>
            </Link>
            <Link to="/currencies">
                <div> currencies </div>
            </Link>

        </div>
    )
}