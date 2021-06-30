import styled from "styled-components";

export const Container = styled.section`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`;

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.8;
  z-index: -1;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ImageTitle = styled.div`
  height: 30vh;
  width: 20vw;
  min-height: 170px;
  min-width: 200px;
  margin-top: 5rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
export const Controls = styled.div`
  display: flex;
  margin-top: 2rem;
  align-items: center;
`;
export const PlayButton = styled.button`
  display: flex;
  align-items: center;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  padding: 0 1.3rem;
  font-size: 1rem;
  text-transform: uppercase;
  background-color: rgb(249, 249, 249);
  letter-spacing: 1.8px;
  margin-right: 1.3rem;
  height: 56px;

  &:hover {
    background-color: rgb(198, 198, 198);
  }
`;
export const TrailerButton = styled(PlayButton)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
`;
export const AddButton = styled.button`
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(249, 249, 249);
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.6);
  color: #fff;
  margin-right: 1.3rem;
  cursor: pointer;

  span {
    font-size: 1.7rem;
  }
`;
export const GroupButton = styled(AddButton)`
  background: rgba(0, 0, 0, 0.8);
`;

export const SubTitle = styled.div`
  margin-top: 2rem;
  font-size: 1rem;
  color: rgb(249, 249, 249);

  span {
    font-size: 1.5rem;
  }
`;
export const Description = styled.div`
  width: 50%;
  margin-top: 2rem;
  font-size: 1.3rem;
  line-height: 1.7;
  letter-spacing: 1.4px;
  color: #fff;
`;
