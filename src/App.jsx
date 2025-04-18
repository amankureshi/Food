import styled from "styled-components";
// import { jasondata } from "./Components/FoodApi";
import { useEffect, useState } from "react";
import SearchResult from "./Components/SearchResult/SearchResult";

export const IMG_Detail =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/";

export const Base_url =
  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.022505&lng=72.5713621&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filterData, setFilterData] = useState(null);
  const [selectedBtn, setselectedBtn] = useState("all");

  //console.log("123", filterData);
  useEffect(() => {
    const fetchFoodData = async () => {
      setLoading(true);
      try {
        const response = await fetch(Base_url); // Replace with your API URL
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const json = await response.json();
        const fetchedRestaurants =
          json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants;
        console.log(fetchedRestaurants);
        setData(fetchedRestaurants);
        setFilterData(fetchedRestaurants);
      } catch (error) {
        setError("aavse a few minite waite");
      } finally {
        setLoading(false);
      }
    };
    fetchFoodData();
  }, []);

  // <-------- Search Food-fuction -------->
  const searchFood = (e) => {
    const searchValue = e.target.value;
    //console.log(searchValue);
    if (searchValue === "") {
      setFilterData(null);
    }
    const filter = data?.filter((food) =>
      food.info.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilterData(filter);
  };

  // // <-------- Tabs fuction -------->
  const filterFood = (type) => {
    if (type === "all") {
      setFilterData(data);
      setselectedBtn("all");
      return;
    }
    const filter = data?.filter((food) =>
      food.info.type.toLowerCase().includes(type.toLowerCase())
    );
    setFilterData(filter);
    setselectedBtn(type);
  };

  const filterBtns = [
    {
      name: "All",
      type: "all",
    },
    {
      name: "Breakfast",
      type: "breakfast",
    },
    {
      name: "Lunch",
      type: "lunch",
    },
    {
      name: "Dinner",
      type: "dinner",
    },
  ];

  //console.log(data);

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
            <input
              onChange={searchFood}
              type="text"
              placeholder="Search Here"
            />
          </div>
        </TopSection>
        <FilterContainer>
          {filterBtns.map((value) => (
            <Button
              isSelected={selectedBtn === value.type}
              key={value.name}
              onClick={() => filterFood(value.type)}
            >
              {value.name}
            </Button>
          ))}
        </FilterContainer>
      </Container>
      <SearchResult data={filterData} />
    </>
  );
};

export default App;

// -----------------------------CSS Part-------------------------------------------

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
  ::placeholder {
    color: #fff;
    font-size: 0.3;
    font-weight: lighter;
  }
`;
const TopSection = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  align-items: center;

  @media (0< width < 600px) {
    flex-direction: column;
    gap: 0.3rem;
  }
`;
const FilterContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  @media (max-width: 550px) {
    button {
      width: 5rem;
      padding: 7px 5px;
      font-size: 14px;
    }
  }
`;

export const Button = styled.button`
  padding: 6px 1rem;
  background-color: ${({ isSelected }) => (isSelected ? "red" : "#db3030")};
  border: none;
  font-size: 1rem;
  border-radius: 1rem;
  margin-bottom: 1rem;
  cursor: pointer;
  transition: 0.3s all;
  /* min-width: 70px; */
  &::after {
    background-color: #fff;
    color: black;
    transition: 0.3s all;
  }
`;
