import React, { memo } from 'react';
import styled from 'styled-components';

interface ICard {
  img: string,
  title: string,
  description: string,
  url: string
}

const CardStore = (props: ICard) => {
  return (
    <Card href={props.url}>
      <Image src={props.img} alt={props.title} />
      <div>
        <Title>{props.title}</Title>
        <Description>{props.description}</Description>
      </div>
      <Icon src="/icon/arrow-right.icon.svg" alt="Arrow" />
    </Card>
  );
};

const Card = styled.a`
  box-shadow: 0px 0px 8px 0px #00000014;
  background: white;
  padding: 12px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  color: black;
`;
const Image = styled.img`
  min-height: 60px;
  min-width: 60px;
  object-fit: cover;
  border-radius: 50%;
  margin-right: 12px;
  max-width: 60px;
  max-height: 60px;
`;
const Title = styled.h4`
  font-size: 14px;
  font-weight: 700;
  margin: 0px 0px 4px;
`;
const Description = styled.p`
  font-size: 12px;
  font-weight: 500;
  margin: 0px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
const Icon = styled.img`
  margin-left: 12px;
`;

export default memo(CardStore);