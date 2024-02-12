import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 32px;
    max-width: 704px;
    justify-content: center;
  }

  @media screen and (min-width: 1440px) {
    row-gap: 100px;
    column-gap: 14px;
    max-width: 1242px;
  }
`;

export const Time = styled.p`
  position: absolute;
  padding: 16px;
  right: 18px;
  top: 26px;
  border-radius: 8px;
  background-color: var(--lightBg);
  color: var(--subtitle);
  font-weight: 500;
  font-size: 16px;
  opacity: 0;

  transition: opacity 500ms ease-in-out;
`;

export const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  transition: all 500ms ease-in-out;
`;

export const Card = styled.li`
  position: relative;
  width: 343px;
  height: 323px;
  border-radius: 10px;
  overflow: hidden;
  transition: all 300ms ease-in-out;

  &:hover {
    box-shadow: var(--paginationArrow) 0px 4px 10px;
  }

  &:hover ${Time} {
    opacity: 1;
  }

  &:hover ${Image} {
    -webkit-animation: flash 1.5s;
    animation: flash 1.5s;
    filter: brightness(1.05) contrast(1.1);
  }

  @keyframes flash {
    0% {
      scale: 1;
    }

    20% {
      scale: 1.1;
    }

    100% {
      scale: 1;
    }
  }

  @media screen and (min-width: 768px) {
    width: 336px;
  }

  @media screen and (min-width: 1440px) {
    width: 300px;
  }
`;

export const Title = styled.p`
  position: absolute;
  width: 307px;
  padding: 16px;
  left: 18px;
  bottom: 26px;
  border-radius: 8px;
  background-color: var(--lightBg);
  color: var(--subtitle);
  font-weight: 500;
  font-size: 16px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media screen and (min-width: 768px) {
    width: 300px;
  }

  @media screen and (min-width: 1440px) {
    width: 268px;
    left: 16px;
    bottom: 24px;
  }
`;
