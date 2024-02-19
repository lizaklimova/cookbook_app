import styled from 'styled-components';

export const FooterSubscribeFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-bottom: 44px;
`;

export const FooterSubscribeFormInput = styled.input`
  min-width: 204px;
  height: 38px;
  font-size: 10px;
  padding: 0 14px;
  color: var(--light);
  background-color: transparent;
  border: 1px solid var(--light);
  border-radius: 6px;

  &::placeholder {
    color: var(--light);
  }
`;

export const FooterSubscribeFormButton = styled.button`
  min-width: 204px;
  height: 38px;
  border-radius: 6px;
  color: var(--light);
  background-color: var(--footerButton);
`;
