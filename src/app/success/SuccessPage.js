import React from 'react';
import * as Icon from 'react-feather';
import { Fade } from 'react-awesome-reveal';
import styled from 'styled-components';

import Link from 'next/link';

import Header from '../_components/Header';
import Footer from '../_components/Footer';
import en from '../../locales/en.json'
import Head from 'next/head';

const MessageWrapper = styled.div`
  margin-top: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SuccessMessage = styled.h2`
  font-size: 25px;
  color: rgb(8, 8, 63);
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const SuccessPage = () => {
  const href = '/success'
  return (
    <><Header href={href} /><React.Fragment>
      <Fade bottom duration={700} distance="60px">
        <MessageWrapper>
          <Icon.CheckCircle color="rgb(8, 8, 63)" style={{ width: 50, height: 50 }} />
          <SuccessMessage className="sucess-message">INFO SENT SUCCESSFULLY</SuccessMessage>
        </MessageWrapper>
      </Fade>
    </React.Fragment>
    <Footer /></>
  );
};

export default SuccessPage;