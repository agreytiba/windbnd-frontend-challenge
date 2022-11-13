import hotels from "../data/Hotels"
import Card from "./Card"

// style are on the General.css file
const Cardscollection = () => {
  return (
    <div className="cards-collection">
      {
        hotels.map((card) => {
          return(
          <div key={card.id}>
             <Card card={card} />
          </div>)
        }

        )
      }
     

    </div>
  )
}

export default Cardscollection

//  const hotels = [
//     {
//         "id": 1,
//         "name": "Stylis apartment in center of the city", 
//         "desc": "Entire apartment.2beds",
//         "rating": 4.40,
//         "special": "supper host",
//       "img":"https://res.cloudinary.com/greyma/image/upload/v1666070048/edvin-johansson-rlwE8f8anOc-unsplash_ira6i6.jpg"
//     },
//     {
//             "id": 2,
//         "name": "Cozy,peaceful and private room with ...", 
//         "desc": "private",
//         "rating": 4.25,
//          "special": "supper host",
//         "img":"https://res.cloudinary.com/greyma/image/upload/v1666070040/ciudad-maderas-MXbM1NrRqtI-unsplash_tnifky.jpg"
     
//     },
//     {
//                "id": 3,
//         "name": "Entire house", 
//         "desc": "Modern house in remote area",
//         "rating": 4.96,
//          "special": "supper host",
//         "img": "https://res.cloudinary.com/greyma/image/upload/v1666070034/gerson-repreza-CepDpEiALqM-unsplash_zcz1va.jpg"
      
//     },
//     {
//                   "id": 4,
//         "name": "Stylis room in design district", 
//         "desc": "Entire apartment.2beds",
//         "rating": 4.85,
//         "special": "supper host",
//        "img":"https://res.cloudinary.com/greyma/image/upload/v1666069961/tholaal-mohamed-8sKTHeGgrUM-unsplash_zmtfap.jpg"
//     },
//     {
//                      "id": 6,
//         "name": "Modern apartment close to nature", 
//         "desc": "Private",
//         "rating": 4.54,
//          "special": "supper host",
//         "img":"https://res.cloudinary.com/greyma/image/upload/v1666069960/yayaq-destination-ptj2xDWxEJU-unsplash_ilgvqd.jpg"
      
//     },
//     {
//         "id": 5,
//         "name": "House in a remote area", 
//         "desc": "Entire house",
//         "rating": 4.64,
//          "special": "supper host",
//      "img": "https://res.cloudinary.com/greyma/image/upload/v1666070034/gerson-repreza-CepDpEiALqM-unsplash_zcz1va.jpg"
//     }
// ]