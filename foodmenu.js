import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const indianVegDishes = [
  { name: "Paneer Butter Masala", description: "A rich and creamy North Indian curry made with paneer cooked in a tomato-butter gravy.", ingredients: ["paneer","tomato","butter","cream","onion","ginger garlic","garam masala","kasuri methi"], img: "https://www.indianhealthyrecipes.com/wp-content/uploads/2014/11/paneer-butter-masala-recipe-2.jpg" },
  { name: "Masala Dosa", description: "A crispy fermented rice crepe filled with spiced potato masala, popular in South India.", ingredients: ["rice","urad dal","potato","onion","mustard seeds","curry leaves","green chilli","turmeric"], img: "https://www.shutterstock.com/image-photo/masala-dosa-variation-popular-south-260nw-2140359469.jpg" },
  { name: "Chole Bhature", description: "A Punjabi dish of spicy chickpea curry served with deep-fried bread.", ingredients: ["chickpeas","onion","tomato","ginger garlic","chole masala","flour","yogurt","oil"], img: "https://www.shutterstock.com/image-photo/chole-bhature-north-indian-food-600nw-2241211665.jpg" },
  { name: "Dal Makhani", description: "A slow-cooked lentil dish made with black lentils, butter, and cream.", ingredients: ["black lentils","kidney beans","butter","cream","tomato","ginger garlic","garam masala"], img: "https://t3.ftcdn.net/jpg/08/49/52/72/360_F_849527258_uZ2uxCidsx9OMIPajT1U7SGmQd5aqwhq.jpg" },
  { name: "Palak Paneer", description: "Paneer cubes cooked in a smooth spinach gravy with mild spices.", ingredients: ["paneer","spinach","onion","tomato","ginger garlic","cream","garam masala"], img: "https://media.istockphoto.com/id/497833552/photo/palak-paneer-and-nan-bread.jpg?s=612x612&w=0&k=20&c=mCGmaTXdOtdG3qNFIYplA8pXVplmfLTa2X4_3pTv1qc=" },
  { name: "Rajma Chawal", description: "A comforting North Indian meal of red kidney bean curry served with rice.", ingredients: ["kidney beans","rice","onion","tomato","ginger garlic","cumin","garam masala"], img: "https://www.secondrecipe.com/wp-content/uploads/2017/08/rajma-chawal-1.jpg" },
  { name: "Vegetable Biryani", description: "A fragrant rice dish cooked with mixed vegetables and aromatic spices.", ingredients: ["basmati rice","mixed vegetables","yogurt","onion","ginger garlic","biryani masala","mint"], img: "https://media.istockphoto.com/id/179085494/photo/indian-biryani.jpg?s=612x612&w=0&k=20&c=VJAUfiuavFYB7PXwisvUhLqWFJ20-9m087-czUJp9Fs=" },
  { name: "Aloo Paratha", description: "A stuffed Indian flatbread filled with spiced mashed potatoes.", ingredients: ["wheat flour","potato","green chilli","coriander","cumin","butter","salt"], img: "https://media.istockphoto.com/id/1413566368/photo/indian-food-aloo-paratha-or-indian-potato-stuffed-flatbread-served-with-butter-pickle-and.jpg?s=612x612&w=0&k=20&c=hIqRXgQTFJ4Ta_Zh_JhOc_Okjk_yJUB--uDYIjifVCc=" },
  { name: "Pav Bhaji", description: "A Mumbai street food made of mashed vegetables cooked in butter and spices, served with bread rolls.", ingredients: ["potato","tomato","peas","capsicum","butter","pav bhaji masala","bread rolls"], img: "https://media.istockphoto.com/id/1155185428/photo/indian-spicy-food-paav-bhaji-or-pav-bhaji.jpg?s=612x612&w=0&k=20&c=AMT1hmTm1xhTT0KmGsGPRyU6cPe-HFJuvkOgiT0m3Jo=" },
  { name: "Idli Sambar", description: "Soft steamed rice cakes served with lentil-vegetable stew.", ingredients: ["rice","urad dal","toor dal","vegetables","tamarind","sambar powder","mustard seeds"], img: "https://t3.ftcdn.net/jpg/01/61/13/66/360_F_161136674_NgVFcPtWfwLPY03NpJUrSiH9oDvma9Rn.jpg" }
];

// Class Component for Individual Dish Card
class DishCard extends React.Component {
  render() {
    const { name, description, ingredients, img } = this.props.dish;

    return (
      <div className="card h-100 bg-white shadow-lg border-0 rounded-4 overflow-hidden transition-all hover-shadow-xl hover-translate-y">
        <img 
          src={img} 
          alt={name} 
          className="card-img-top" 
          style={{ height: '220px', objectFit: 'cover' }}
        />
        <div className="card-body p-4">
          <h5 className="card-title fw-bold fs-3 text-primary mb-3">{name}</h5>
          <p className="text-muted mb-4">{description}</p>

          <div>
            <h6 className="fw-bold text-success mb-2">
              <i className="bi bi-list-ul me-2"></i>Key Ingredients:
            </h6>
            <div className="d-flex flex-wrap gap-2">
              {ingredients.map((ing, idx) => (
                <span key={idx} className="badge bg-light text-dark border py-2 px-3 rounded-pill">
                  {ing}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="card-footer bg-gradient text-white text-center py-3 fw-bold" style={{background: 'linear-gradient(135deg, #ff6b35, #f7931e)'}}>
          <i className="bi bi-emoji-heart-eyes me-2"></i> Pure Vegetarian Delight
        </div>
      </div>
    );
  }
}

// Main App - Function Component
function App() {
  return (
    <div className="min-vh-100" style={{ background: 'linear-gradient(to bottom, #fff8f0, #ffe8d6)' }}>
      <div className="container py-5">
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold text-danger mb-3">Indian Vegetarian Dishes</h1>
          <p className="lead text-muted">10 Iconic Pure Veg Recipes from Across India</p>
        </div>

        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5">
          {indianVegDishes.map((dish, index) => (
            <div className="col" key={index}>
              <DishCard dish={dish} />
            </div>
          ))}
        </div>
      </div>

      {/* Hover Effects */}
      <style jsx>{`
        .transition-all {
          transition: all 0.4s ease;
        }
        .hover-shadow-xl:hover {
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2) !important;
        }
        .hover-translate-y:hover {
          transform: translateY(-15px);
        }
      `}</style>
    </div>
  );
}

export default App;