import styled from "styled-components";

const App = () => {
  return (
    <Container>
      <TopSection>
        <div className="logo">
          <h2>
            <span className="logo-name">A</span>man F
            <span className="logo-name">oo</span>diee
          </h2>
        </div>
        <div className="search">
          <input type="text" placeholder="Search Here" />
        </div>
      </TopSection>
    </Container>
  );
};

export default App;
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  .logo-name {
    color: #dc2828;
  }
`;
const TopSection = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  align-items: center;
`;
