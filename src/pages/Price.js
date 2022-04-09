import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';

export default function Price (props) {

  const apiKey = 'D44C9DE8-B752-4409-A654-BB95BC4C19DB';
  const params = useParams()
  const symbol = params.symbol
  const url = `https://rest-sandbox.coinapi.io/v1/exchangerate/${ symbol }/USD?apikey=${ apiKey }`;

  const [coin, setCoin] = useState( null );

  const getCoin = async () => {
    try{
      const response = await fetch( url );
      const data = await response.json();
      setCoin( data );
    } 
    
    catch( error ) {
      console.error( error )
    }
  };

  useEffect(() => {
    getCoin();
  }, []);
  
  const loaded = () => {
    return (
      <div>
        <h1>
          { coin.asset_id_base }/{ coin.asset_id_quote }
        </h1>
        <h2>{ coin.rate }</h2>
      </div>
    );
  };

  
  const loading = () => {
    return <h1>Loading...</h1>;
  };

  return coin && coin.rate ? loaded() : loading();
};


  // useEffect to run getCoin when component mounts
  // loaded function for when data is fetched
  // Function for when data doesn't exist
  // if coin has data, run the loaded function, otherwise, run loading