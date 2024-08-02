import React from 'react';
import styled from 'styled-components';
import * as Icon from 'react-feather';

const DetailsBarWrapper = styled.div`
  background-color: rgb(8, 8, 63);
  border-radius: 7px;
  position: relative;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  padding-bottom: 100px;
  @media (max-width: 768px) {
    padding-bottom: 80px;
    grid-row: 2;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TextOne = styled.p`
  text-align: center;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;

const TextTwo = styled.p`
  text-align: center;
  color: #fff;
  font-size: 12px;
  line-height: 18px;
`;

const ContactsWrapper = styled.a`
  display: flex;
  width: 200px;
  height: 10px;
  margin-top: 50px;
  cursor: pointer;
  text-decoration: none;
`;

const ContactText = styled.div`
  color: #fff;

  font-size: 15px;
  margin-left: 10px;
`;

const SocialsWrapper = styled.div`
  display: flex;
  justify-content: center;
  display: flex;
  height: 10px;
  justify-content: center;
  bottom: 30px;
  position: absolute;
  cursor: pointer;
`;

const SocialIconWrapper = styled.a`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: rgb(252, 113, 137);
  }
`;

const DetailsBar = () => {
  return (
    <DetailsBarWrapper>
      <TextWrapper>
        <TextOne>Contact Information</TextOne>
        <TextTwo>Fill out the form and we will get back with you ASAP.</TextTwo>
      </TextWrapper>
      <div>
        <ContactsWrapper href="mailto:f3chicago@gmail.com">
          <Icon.Mail size={15} color="rgb(252, 113, 137)" />
          <ContactText>f3chicago@gmail.com</ContactText>
        </ContactsWrapper>
      </div>

      {/* <SocialsWrapper>
        <SocialIconWrapper href="https://www.facebook.com/f3chicago">
          <Icon.Facebook color="#fff" size={20} />
        </SocialIconWrapper>
        <SocialIconWrapper href="https://www.twitter.com/f3chicago/">
          <Icon.Twitter color="#fff" size={20} />
        </SocialIconWrapper>
        <SocialIconWrapper href="https://www.instagram.com/f3chicago/">
          <Icon.Instagram color="#fff" size={20} />
        </SocialIconWrapper>
      </SocialsWrapper> */}
    </DetailsBarWrapper>
  );
};

export default DetailsBar;