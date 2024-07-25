import styled from "styled-components";
import { IMG_Detail, Button } from "../../App";
const SearchResult = ({ data }) => {
  return (
    <FoodContainer>
      <FoodCards>
        {data?.map((datas, index) => (
          <FoodCard key={index}>
            <div className="food_image">
              <img src={IMG_Detail + datas.info.cloudinaryImageId} />
            </div>
            <div className="food_info">
              <div className="info">
                <h3>{datas.info.name}</h3>
                <p>
                  <i className="fa-solid fa-star"></i>
                  {datas.info.avgRating}
                </p>
                <span className="cuisines">
                  {datas.info.cuisines.join(", ")}
                </span>
              </div>
              <Button>{datas.info.costForTwo}</Button>
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
  width: 240px;
  height: 370px;
  border: 2px solid #939292;
  border-radius: 10px;
  /* display: flex; */

  .food_info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 0.5rem;
    text-align: center;
  }
  .food_info p {
    text-align: center;
    font-family: "Playwrite BE WAL", cursive;
  }
  .food_info i {
    background-color: green;
    border-radius: 50%;
    padding: 4px;
    font-size: 12px;
    margin-right: 4px;
    color: #fff;
  }
  .food_info .cuisines {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: 400;
    line-height: 19px;
    color: rgba(201, 206, 214, 0.788);
    overflow: hidden;
    width: 100%;
  }
  .food_image img {
    width: 100%;
    object-fit: cover;
    border-radius: 9px 9px 0 0;
    aspect-ratio: 3/3;
  }
`;
