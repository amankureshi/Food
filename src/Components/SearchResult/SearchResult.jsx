import styled from "styled-components";
import { Base_url, Button } from "../../App";
const SearchResult = ({ data }) => {
  return (
    <FoodContainer>
      <FoodCards>
        {data?.map(({ name, image, text, price }) => (
          <FoodCard key={name}>
            <div className="food_image">
              <img src={Base_url + image} />
            </div>
            <div className="food_info">
              <div className="info">
                <h3>{name}</h3>
                <p>{text}</p>
              </div>
              <Button>${price.toFixed(2)}</Button>
            </div>
          </FoodCard>
        ))}
      </FoodCards>
    </FoodContainer>
  );
};

export default SearchResult;
const FoodContainer = styled.section`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)),
    url(https://img.freepik.com/free-photo/top-view-vegan-fast-food-with-copy-space_23-2148290801.jpg?w=826&t=st=1721132235~exp=1721132835~hmac=4dc65d0cae95ed788a4ebaf50310229fdb366b01b08575febf588251df9fd289);
  min-height: calc(100vh - 100px);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const FoodCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  row-gap: 2rem;
  column-gap: 1.2rem;
  padding-top: 2rem;
`;
const FoodCard = styled.div`
  backdrop-filter: blur(5px);
  width: 340px;
  height: 170px;
  border: 2px solid #939292;
  border-radius: 10px;
  display: flex;
  padding: 5px;

  .food_info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: end;
  }
`;
