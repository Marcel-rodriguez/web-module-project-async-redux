import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import {getUni} from './../actions';

const Universities = ({ universities, isFetching, error,  dispatch }) => {

    useEffect(()=> {
      dispatch(getUni());
    }, []);
  
    if (error) {
      return <h2>We got an error: {error}</h2>;
    }
  
    if (isFetching) {
      return <h3>⏳Loading...</h3>
    }
  
    const handleClick = () => {
      dispatch(getUni());
    }
  
    return (
      <>
        <div>
          <p>University Name: {universities.name}</p>
          <p>Website: <a target='_blank' href={universities.web_pages}>{universities.web_pages}</a></p>
        </div>
        <button onClick={handleClick}>Get new Universities</button>
        <hr />
      </>
    );
  };
  
  const mapStateToProps = state => {
    return {
      universities: state.universities,
      isFetching: state.isFetching,
      error: state.error
    };
  };
  
  export default connect(mapStateToProps)(Universities);