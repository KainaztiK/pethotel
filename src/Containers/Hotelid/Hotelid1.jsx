import React, { useEffect, useState} from "react";
import { useParams, useNavigate } from 'react-router-dom';
import Axios from "../../API/api";
import { Post } from "../Components/FullPost/index";
import Grid from '@mui/material/Grid';
import ReactMarkdown from "react-markdown";
import { useSelector } from "react-redux";
import { isAuth } from "../../redux/slices/authSlice";
import "./Hotelid1.scss";

const Hotelid1 = () => {

  const {advertisementId} = useParams();
  const router = useNavigate();
  const isUserAuth = useSelector(isAuth);
  const [hotel, setHotel] = useState({});
  const [companyId, setCompanyId] = useState('');
  const[Cat, setCat]=useState(false)
  const[Dog, setDog]=useState(false)
  const[Rodent, setRodent]=useState(false)
  const[Other, setOther]=useState(false)
  const [company, setCompany] = useState({});
  useEffect(() => {
      async function fetchHotelById() {
          const response = await Axios.get(`/api/hotels/advertisements/${advertisementId}`);
          setHotel(response.data);
          setCat(response.data.cat);
          setDog(response.data.dog);
          setRodent(response.data.rodent);
          setOther(response.data.other);
          setCompanyId(response.data.companyId);
      };
      
      fetchHotelById(advertisementId);

      if(window.localStorage.getItem("role")==="User")
      {
          router(`/hotels/${advertisementId}`);
      }
      if(window.localStorage.getItem("role")==="Companyy")
      {
          router(`/hotels/${advertisementId}`);
      }
      if(!window.localStorage.getItem("token"))
      {
          router("/");
      }
  }, [isUserAuth, router, advertisementId])
  
  useEffect(()=>{
    async function fetchCompanyInn() {
      const response = await Axios.get(`/api/hotels/${companyId}`);
      setCompany(response.data);
    };
    fetchCompanyInn(companyId);
  }, [companyId])
  
  return (
    <Grid className="containerFullPost">
      <Post
        advertisementId={hotel.advertisementId}
        title={hotel.name}
        city={hotel.city}
        address={hotel.address}
        inn={company.inn}
        number={hotel.number}
        imageUrl={(hotel.photos ? hotel.photos.length : 0) ? `http://185.139.69.220/photo/${hotel.photos[hotel.photos.length-1]}` : ''}
        isFullPost
      >
        <div className="petsActive">
          {Cat && <div className="pet">Кошки</div>}
          {Dog && <div className="pet">Собаки</div>}
          {Rodent && <div className="pet">Грызуны</div>}
          {Other && <div className="pet">Другое</div>}
        </div>
        <div>
          <ReactMarkdown children={hotel.description} />
        </div>
      </Post>
    </Grid>
  );
};
export default Hotelid1;