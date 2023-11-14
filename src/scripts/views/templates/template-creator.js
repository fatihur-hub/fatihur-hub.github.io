import CONFIG from '../../globals/config';

const createRestaurantItemTemplate = (restaurant) => `

    <div class="box-container restaurant-item">
        <div class="box">
            <div class="image">
                <img src="${
  CONFIG.BASE_IMAGE_URL + restaurant.pictureId
}" alt="${restaurant.name}" crossorigin="anonymous" > 
            </div>
            <div class="content">
                <div class="tags">
                     <i class="fas fa-map"></i> ${restaurant.city} | 
                    <i class="fas fa-star"></i> ${restaurant.rating} 

                </div>
                <h3>${restaurant.name}</h3>
                <p>${restaurant.description?.slice(0, 100)}...</p>
                <a href="/#/detail/${restaurant.id}" class="btn">read more</a>
            </div>
        </div>
   
`;

const createRestaurantdetailTemplate = (restaurant) => `
  <section class="about" id="about">
    <div class="image">
        <img src="${CONFIG.BASE_IMAGE_URL}/${restaurant.pictureId}" alt="${
  restaurant.name
}" crossorigin="anonymous" >
    </div>
    <div class="content">
        <span>${restaurant.name}</span>
        <div class="icons">
        <h1><i class="fas fa-star"></i>${restaurant.rating} |  ${
  restaurant.city
}</h1>
      </div>
        <p>${restaurant.description}</p>
    </div>
</section>




<section class="menu" id="menu">
<div class="heading">
    <span>our menu</span>
    <h3>Menu Terbaik Kami</h3>
</div>
<div class="box-container">
    <div class="box">
        <div class="content">
            <h3>Makanan</h3>
            <div class="price">
            <ul>${restaurant.menus?.foods
    ?.map(
      (food) => `
              <li>${food.name ?? '-'}</li>
              `,
    )
    ?.join('')}</ul>
              </div>
        </div>
    </div>

    <div  class="box">
        <div class="content">
            <h3>Minuman</h3>
            <div class="price"> 
            <ul>${restaurant.menus?.drinks
    ?.map(
      (drink) => `
            <li>${drink.name ?? '-'}</li>
            `,
    )
    ?.join('')}</ul>
              </div>
        </div>
    </div>
    </div>
</section>



<section class="order" id="order">

    <div class="heading">
        <span>Reviews</span>
        <h3>Apa Kata Mereka?</h3>
        <hr></hr>
    </div>

    <div class="icons-container">
        ${restaurant.customerReviews
    .map(
      (review) => `
          <div class="icons">
            <h3 class="customer-name">${review.name}</h3>
            <h4 class="customer-date">${review.date}</h4>
            <h1 class="customer-review">${review.review}</h1>
          </div>
        `,
    )
    .join('')}

    </div>
  </section>


   

`;

const createLikeButtonTemplate = () => `
      <button aria-label="Tambahkan ke favorit" id="likeButton" class="like">
        <i class="fa fa-heart-o" aria-hidden="true"></i>
      </button>
`;

const createLikedButtonTemplate = () => `
      <button aria-label="Hapus dari favorit" id="likeButton" class="like">
        <i class="fa fa-heart" aria-hidden="true"></i>
      </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantdetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
