import React from 'react';
import PropTypes from 'prop-types';

const App = () => {
  const profiles = [
    {name: 'Bob', age: 10},
    {name: 'Michael', age: 20},
    {name: 'Guest'},
  ]
  return (
    <>
    {
      profiles.map( (profile, index) => {
        return <User name={profile.name} age={profile.age} key={index}/>
      })
    }
    </>
  );
}

const User = (props) => {
  const {name, age} = props;
  return (
    <p>Hi, I'm {name}. {age} years old.</p>
  )
}

User.defaultProps = {
  age: 0
}

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}

export default App;
