import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #1e1e1e;
  margin: 30px 16px;
  border: 1px solid transparent;
  border-radius: 30px;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
`;
export const Text = styled.p`
font-size: 18px;
font-weight: small;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom:30px;
  min-height: 400px;
  max-width: 500px;
  padding: 10px;
  background: #fff;
  border: 1px solid #eee;
  border-radius: 4px;
  color: #101010;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

}
`;
