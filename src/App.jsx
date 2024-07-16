import styled from "styled-components";
// import { jasondata } from "./Components/FoodApi";
import { useEffect, useState } from "react";
import SearchResult from "./Components/SearchResult/SearchResult";

// const Base_url =
//   "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.022505&lng=72.5713621&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

// const App = () => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const fetchFoodData = async () => {
//     const resposne = await fetch(Base_url);
//     const json = await resposne.json();
//     console.log(json.data?.cards[1]);
//   };
//   fetchFoodData();
//   return (
//     <Container>
//       <TopSection>
//         <div className="logo">
//           <h2>
//             <span className="logo-name">A</span>man F
//             <span className="logo-name">oo</span>diee
//           </h2>
//         </div>
//         <div className="search">
//           <input type="text" placeholder="Search Here" />
//         </div>
//       </TopSection>
//       <FilterContainer>
//         <Button>All</Button>
//         <Button>Breakfast</Button>
//         <Button>Lunch</Button>
//         <Button>Dinner</Button>
//       </FilterContainer>

//       <FoodContainer>
//         <FoodCards></FoodCards>
//       </FoodContainer>
//     </Container>
//   );
// };

export const Base_url = "http://localhost:9000";

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFoodData = async () => {
      setLoading(true);
      try {
        const resposne = await fetch(Base_url);
        const json = await resposne.json();
        setData(json);
        setLoading(false);
      } catch (error) {
        setError("aavse a few minite waite");
      }
    };
    fetchFoodData();
  }, []);
  console.log(data);
  // fetchFoodData();

  if (error) return <div>{error}</div>;
  if (loading) return <div>Loading......</div>;
  return (
    <>
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
        <FilterContainer>
          <Button>All</Button>
          <Button>Breakfast</Button>
          <Button>Lunch</Button>
          <Button>Dinner</Button>
        </FilterContainer>
      </Container>
      <SearchResult data={data} />
    </>
  );
};

export default App;
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  .logo-name {
    color: #dc2828;
  }
  input[type="text"] {
    padding: 7px 15px;
    border-radius: 1rem;
    border: 1px solid #101010;
  }
  input[type="text"]:focus-visible {
    outline: none;
    box-shadow: rgb(188, 34, 34) 0px 1px 0px,
      rgba(188, 14, 34, 0.858) 0px 0px 8px;
  }
`;
const TopSection = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  align-items: center;
`;
const FilterContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const Button = styled.button`
  padding: 6px 1rem;
  background-color: #dc2828;
  border: none;
  font-size: 1rem;
  border-radius: 1rem;
  margin-bottom: 1rem;
  /* min-width: 70px; */
`;
