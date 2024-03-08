import React, { HTMLInputTypeAttribute, memo } from 'react';
import styled from 'styled-components';

function InputSearch(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <Section>
      <Input {...props} />
      <Icon src="./icon/search.icon.svg" />
    </Section>
  );
}

const Input = styled.input`
  width: -webkit-fill-available;
  background: white;
  box-shadow: none;
  border: 1px solid white;
  box-shadow: 0px 0px 8px 0px #00000014;
  height: 40px;
  border-radius: 12px;
  padding: 0px 46px 0px 16px;
  &:focus-visible{
    outline: none;
  }
`;

const Section = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
`;

const Icon = styled.img`
  position: absolute;
  right: 12px;
`;

export default memo(InputSearch);