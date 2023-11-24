import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";


const GalleryArrow = ({next,prev}) => {
    return (
        <p className="arrow">
           <i onClick={()=>prev()}><GoArrowLeft /></i>
           <i onClick={()=>next()}><GoArrowRight /></i>
        </p>
    );
};

export default GalleryArrow;