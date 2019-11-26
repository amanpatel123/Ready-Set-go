import React from 'react';
import styled from 'styled-components';

const Heading = styled.div`
  float: center;
  width: 500px;
  height: 75px;
  border: 1px solid rgba(0, 0, 0, .2);
  background: #3CB371;
  text-align: center;
`;

const TextWrapper = styled.text`
font-size: 42px;
color: white;
`;

const Title = ({heading}) => {
    return (
        <Heading>
            <TextWrapper>{heading}</TextWrapper>
        </Heading>
    );
}
 
export default Title;