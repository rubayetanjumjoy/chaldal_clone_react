import React from 'react'
import { useContext } from 'react';
import { useCart } from "react-use-cart";
import { useEffect } from 'react';
import { authProvider } from '../Contexts/Auth'
import { Link } from 'react-router-dom';
import { data } from '../Contexts/DataContext';
import { useLayoutEffect } from 'react';
import GetWindowSize from '../CustomHooks/GetWindowSize';
const ProfileResponsive = ({setSmallSignin,setNavopen}) => {
    const windowsize=GetWindowSize()
    const { emptyCart } = useCart();
    const {isopenmodal,setIsOpenmodal} =useContext(data);
    
    const {auth,setAuth} =useContext(authProvider);
    const handleLocalStorage=()=>{
        window.localStorage.clear();
        setAuth([]);
        emptyCart();
      }
    const handleloginmodal=()=>{
      setIsOpenmodal(true)
      setSmallSignin(()=>false)
      windowsize.width <700 && setNavopen(false)
      
    }
    const handlenav=()=>{
      setSmallSignin(()=>false)
      windowsize.width <700 && setNavopen(false)
    }
  
    
    return (
    <>
    <div className="mui" data-reactid=".1f53q7t4nfi.4.0.0.0.8">
  <div className="ModalDialogContainer headerDropDownDialog" onClick={(e) => {if (e.target.className === 'ModalDialogContainer headerDropDownDialog') {setSmallSignin(false)}}} data-reactid=".1f53q7t4nfi.4.0.0.0.8.0">
    <div className="ModalDialog" data-reactid=".1f53q7t4nfi.4.0.0.0.8.0.0">
      <div className="ModalDialogContent undefined" data-reactid=".1f53q7t4nfi.4.0.0.0.8.0.0.2">
        <ul data-reactid=".1f53q7t4nfi.4.0.0.0.8.0.0.2.0">
          { auth['token'] ? <>
          <li data-reactid=".1f53q7t4nfi.4.0.0.0.8.0.0.2.0.0" >
            <svg width="24px" height="16px" style={{display: 'inline-block', verticalAlign: 'middle'}} fill="none" viewBox="0 0 53 60" data-reactid=".1f53q7t4nfi.4.0.0.0.8.0.0.2.0.0.0">
              <path d="M26.367 0c-8.723 0-15.82 7.097-15.82 15.82 0 8.724 7.097 15.82 15.82 15.82 8.723 0 15.82-7.096 15.82-15.82C42.188 7.097 35.091 0 26.367 0zM46.05 41.976c-4.33-4.398-10.072-6.82-16.167-6.82h-7.031c-6.095 0-11.837 2.422-16.168 6.82C2.374 46.352 0 52.129 0 58.242 0 59.213.787 60 1.758 60h49.219c.97 0 1.757-.787 1.757-1.758 0-6.113-2.373-11.89-6.683-16.266z" data-reactid=".1f53q7t4nfi.4.0.0.0.8.0.0.2.0.0.0.0" />
            </svg>
            <span data-reactid=".1f53q7t4nfi.4.0.0.0.8.0.0.2.0.0.1">{auth['user']['name']}</span>
          </li>
           
        
          <li data-reactid=".1f53q7t4nfi.4.0.0.0.8.0.0.2.0.1">
            <Link to="/profile" data-reactid=".1f53q7t4nfi.4.0.0.0.8.0.0.2.0.1.0" onClick={handlenav}>
              <svg style={{display: 'inline-block', verticalAlign: 'middle'}} width="24px" height="19px" viewBox="0 0 26 32.5" data-reactid=".1f53q7t4nfi.4.0.0.0.8.0.0.2.0.1.0.0">
                <g data-reactid=".1f53q7t4nfi.4.0.0.0.8.0.0.2.0.1.0.0.0">
                  <path d="M25.7,3.4l-3.1-3.1c-0.4-0.4-1-0.4-1.4,0l-1.9,1.9c0,0,0,0,0,0s0,0,0,0l-7.4,7.4c0,0,0,0,0,0c-0.1,0.1-0.1,0.2-0.2,0.3   c0,0,0,0,0,0.1c0,0,0,0,0,0l-1.6,4.7c-0.1,0.4,0,0.8,0.2,1c0.2,0.2,0.4,0.3,0.7,0.3c0.1,0,0.2,0,0.3-0.1l4.7-1.6c0,0,0,0,0,0   c0,0,0,0,0.1,0c0.1,0,0.2-0.1,0.3-0.2c0,0,0,0,0,0l9.3-9.3C26.1,4.4,26.1,3.8,25.7,3.4z M23.6,4.1l-0.5,0.5l-1.7-1.7l0.5-0.5   L23.6,4.1z M15.7,12l-0.8-0.8L14,10.3l6-6l1.7,1.7L15.7,12z M12.6,13.4l0.4-1.2l0.8,0.8L12.6,13.4z" data-reactid=".1f53q7t4nfi.4.0.0.0.8.0.0.2.0.1.0.0.0.0" />
                  <path d="M21,14c-0.6,0-1,0.4-1,1v7c0,1.1-0.9,2-2,2H4c-1.1,0-2-0.9-2-2V8c0-1.1,0.9-2,2-2h7c0.6,0,1-0.4,1-1s-0.4-1-1-1H4   C1.8,4,0,5.8,0,8v14c0,2.2,1.8,4,4,4h14c2.2,0,4-1.8,4-4v-7C22,14.4,21.6,14,21,14z" data-reactid=".1f53q7t4nfi.4.0.0.0.8.0.0.2.0.1.0.0.0.1" />
                </g>
              </svg>
              <span data-reactid=".1f53q7t4nfi.4.0.0.0.8.0.0.2.0.1.0.1">Your Profile</span>
            </Link>
          </li>
          
          <li data-reactid=".1f53q7t4nfi.4.0.0.0.8.0.0.2.0.2">
            <Link to="/myorder" data-reactid=".1f53q7t4nfi.4.0.0.0.8.0.0.2.0.2.0"onClick={handlenav}>
              <svg version="1.1" id="Calque_1" x="0px" y="0px" width="24px" height="19px" viewBox="0 0 100 160.13" data-reactid=".1f53q7t4nfi.4.0.0.0.8.0.0.2.0.2.0.0">
                <g data-reactid=".1f53q7t4nfi.4.0.0.0.8.0.0.2.0.2.0.0.0">
                  <polygon points="11.052,154.666 21.987,143.115 35.409,154.666  " data-reactid=".1f53q7t4nfi.4.0.0.0.8.0.0.2.0.2.0.0.0.0" />
                  <path d="M83.055,36.599c-0.323-7.997-1.229-15.362-2.72-19.555c-2.273-6.396-5.49-7.737-7.789-7.737   c-6.796,0-13.674,11.599-16.489,25.689l-3.371-0.2l-0.19-0.012l-5.509,1.333c-0.058-9.911-1.01-17.577-2.849-22.747   c-2.273-6.394-5.49-7.737-7.788-7.737c-8.618,0-17.367,18.625-17.788,37.361l-13.79,3.336l0.18,1.731h-0.18v106.605l17.466-17.762   l18.592,17.762V48.06H9.886l42.845-10.764l2.862,0.171c-0.47,2.892-0.74,5.865-0.822,8.843l-8.954,1.75v106.605l48.777-10.655   V38.532l0.073-1.244L83.055,36.599z M36.35,8.124c2.709,0,4.453,3.307,5.441,6.081c1.779,5.01,2.69,12.589,2.711,22.513   l-23.429,5.667C21.663,23.304,30.499,8.124,36.35,8.124z M72.546,11.798c2.709,0,4.454,3.308,5.44,6.081   c1.396,3.926,2.252,10.927,2.571,18.572l-22.035-1.308C61.289,21.508,67.87,11.798,72.546,11.798z M58.062,37.612l22.581,1.34   c0.019,0.762,0.028,1.528,0.039,2.297l-23.404,4.571C57.375,42.986,57.637,40.234,58.062,37.612z M83.165,40.766   c-0.007-0.557-0.01-1.112-0.021-1.665l6.549,0.39L83.165,40.766z" data-reactid=".1f53q7t4nfi.4.0.0.0.8.0.0.2.0.2.0.0.0.1" />
                </g>
              </svg>
              <span data-reactid=".1f53q7t4nfi.4.0.0.0.8.0.0.2.0.2.0.1">Your Orders</span>
            </Link>
          </li>
           
          
          <li data-reactid=".1f53q7t4nfi.4.0.0.0.8.0.0.2.0.6">
            <Link to="/changepassword" data-reactid=".1f53q7t4nfi.4.0.0.0.8.0.0.2.0.6.0" onClick={handlenav}>
              <svg width="24px" height="19px" style={{fill: '#4f4f4f', stroke: '#4f4f4f', display: 'inline-block', verticalAlign: 'middle'}} version="1.1" viewBox="0 0 100 100" data-reactid=".1f53q7t4nfi.4.0.0.0.8.0.0.2.0.6.0.0">
                <g data-reactid=".1f53q7t4nfi.4.0.0.0.8.0.0.2.0.6.0.0.0">
                  <path d="m80.371 51.176c4.3594-4.3594 6.5312-10.059 6.5312-15.773 0-5.6992-2.1719-11.414-6.5312-15.773s-10.059-6.5312-15.773-6.5312c-5.6992 0-11.414 2.1719-15.773 6.5312-2.7695 2.7695-4.6562 6.0703-5.6562 9.5547-1.043 3.6328-1.1602 7.4844-0.3125 11.16l0.14844 0.65625-0.47656 0.47656c-9.8047 9.8047-19.598 19.598-29.406 29.406l0.51953 15.461 15.461 0.51953 29.883-29.883 0.65625 0.14844c3.6758 0.83203 7.5312 0.73047 11.16-0.3125 3.4961-1.0117 6.8008-2.8867 9.5547-5.6562zm-9.4922-9.4922c-3.4688 3.4688-9.0781 3.4688-12.543 0-3.4688-3.4688-3.4688-9.0781 0-12.543 3.4688-3.4688 9.0781-3.4688 12.543 0 3.4688 3.4688 3.4688 9.0781 0 12.543z" data-reactid=".1f53q7t4nfi.4.0.0.0.8.0.0.2.0.6.0.0.0.0" />
                  <path d="m19.102 60.75l2.125-2.125 4.8711 4.8711-2.125 2.125z" data-reactid=".1f53q7t4nfi.4.0.0.0.8.0.0.2.0.6.0.0.0.1" />
                  <path d="m21.617 55.801l3.1836-3.1836 4.8711 4.8711-3.1836 3.1836z" data-reactid=".1f53q7t4nfi.4.0.0.0.8.0.0.2.0.6.0.0.0.2" />
                  <path d="m13.094 64.32l3.1836-3.1836 4.8711 4.8711-3.1836 3.1836z" data-reactid=".1f53q7t4nfi.4.0.0.0.8.0.0.2.0.6.0.0.0.3" />
                </g>
              </svg>
              <span data-reactid=".1f53q7t4nfi.4.0.0.0.8.0.0.2.0.6.0.1">Change Password</span>
            </Link>
          </li>
         
          
          <li data-reactid=".1f53q7t4nfi.4.0.0.0.8.0.0.2.0.9">
            <Link to="/" onClick={handleLocalStorage}  data-reactid=".1f53q7t4nfi.4.0.0.0.8.0.0.2.0.9.0">
              <svg width="24px" height="17px" style={{display: 'inline-block', verticalAlign: 'middle'}} version="1.1" viewBox="0 0 100 100" data-reactid=".1f53q7t4nfi.4.0.0.0.8.0.0.2.0.9.0.0">
                <path d="m50 0c-27.617 0-50 22.383-50 50s22.383 50 50 50c27.613 0 50-22.383 50-50s-22.383-50-50-50zm-3.9062 24.586c0.007812-1.5898 0.98438-3.0195 2.4648-3.6016 1.4805-0.58594 3.168-0.21094 4.2617 0.94531 0.67188 0.66406 1.0547 1.5664 1.0586 2.5156v1.7266c0 8.7031 0.015625 17.695 0 26.547 0 2.0234-1.7891 3.7266-3.8906 3.7266-2.0859 0-3.8594-1.7031-3.875-3.7344-0.023437-3.3203-0.015625-6.6797-0.011719-9.9453v-4.1836-1.082-2.9141c-0.007812-3.2617-0.019531-6.6875-0.007812-10zm9.0117 54.215c-7.2617 1.3789-14.777-0.19922-20.871-4.3828-6.0938-4.1836-10.266-10.629-11.59-17.906-1.6562-9.3359 0.875-17.625 7.5312-24.629 0.74609-0.8125 1.8008-1.2812 2.9023-1.293 0.98828 0.003906 1.9336 0.39062 2.6406 1.0703 0.77344 0.71484 1.2227 1.7031 1.2578 2.75v0.003906c0.015626 1.0586-0.39453 2.0781-1.1406 2.8359-3.0742 3.1953-4.9688 6.9375-5.625 11.133-0.98828 7.082 1.875 14.152 7.5156 18.551 5.6406 4.3945 13.195 5.4492 19.824 2.7656 6.6289-2.6836 11.32-8.7031 12.309-15.785 0.74219-6.2891-1.1172-11.812-5.5156-16.43-1.2227-1.2812-1.5898-2.5859-1.1484-4.0938v0.003906c0.38281-1.3164 1.4336-2.332 2.7578-2.6719 1.3281-0.33984 2.7344 0.046875 3.7031 1.0156 4.7773 4.8281 7.4883 10.691 8.0547 17.422 0.046874 0.52734 0.078124 1.0703 0.10547 1.5977 0.015625 0.24219 0.027344 0.48047 0.042969 0.72266-0.10547 13.543-9.4531 24.777-22.754 27.32z" data-reactid=".1f53q7t4nfi.4.0.0.0.8.0.0.2.0.9.0.0.0" />
              </svg>
              <span data-reactid=".1f53q7t4nfi.4.0.0.0.8.0.0.2.0.9.0.1">Log out</span>
            </Link>
          </li>
          </>
          :
          <>
           
  <li data-reactid=".1f53q7t4nfi.4.0.0.0.8.0.0.2.0.0">
    <span className="dotMenuItemsTitle" data-reactid=".1f53q7t4nfi.4.0.0.0.8.0.0.2.0.0.0">Chaldal 🥚</span>
  </li>
  <li  onClick={handleloginmodal} data-reactid=".1f53q7t4nfi.4.0.0.0.8.0.0.2.0.1">
    <svg width="24px" height="19px" style={{display: 'inline-block', verticalAlign: 'middle'}} viewBox="0 0 100 100" data-reactid=".1f53q7t4nfi.4.0.0.0.8.0.0.2.0.1.0">
      <g data-reactid=".1f53q7t4nfi.4.0.0.0.8.0.0.2.0.1.0.0">
        <path d="m66.668 50l-33.336-34.512v17.844h-33.332v33.336h33.332v16.664z" data-reactid=".1f53q7t4nfi.4.0.0.0.8.0.0.2.0.1.0.0.0" />
        <path d="m75 8.332h-20.832c-2.3008 0-4.168 1.8672-4.168 4.168s1.8672 4.168 4.168 4.168h20.832c4.5977 0 8.332 3.7383 8.332 8.332v50c0 4.5977-3.7383 8.332-8.332 8.332h-20.832c-2.3008 0-4.168 1.8633-4.168 4.168s1.8672 4.168 4.168 4.168h20.832c9.168 0 16.668-7.5 16.668-16.668v-50c0-9.168-7.5-16.668-16.668-16.668z" data-reactid=".1f53q7t4nfi.4.0.0.0.8.0.0.2.0.1.0.0.1" />
      </g>
    </svg>
    <span   data-reactid=".1f53q7t4nfi.4.0.0.0.8.0.0.2.0.1.1">Login</span>
  </li>
  <li  onClick={handleloginmodal} data-reactid=".1f53q7t4nfi.4.0.0.0.8.0.0.2.0.2">
    <svg width="24px" height="19px" style={{display: 'inline-block', verticalAlign: 'middle'}} viewBox="0 0 100 100" data-reactid=".1f53q7t4nfi.4.0.0.0.8.0.0.2.0.2.0">
      <g data-reactid=".1f53q7t4nfi.4.0.0.0.8.0.0.2.0.2.0.0">
        <path d="m95.266 63h-15.266v-15.734c0-0.13672-0.51562-0.26562-0.64844-0.26562h-11.246c-0.13281 0-0.10547 0.12891-0.10547 0.26562v15.734h-15.812c-0.13281 0-0.1875 0.050781-0.1875 0.18359v11.242c0 0.13281 0.054688 0.57422 0.1875 0.57422h15.812v15.344c0 0.13281-0.027344 0.65625 0.10547 0.65625h11.246c0.13281 0 0.64844-0.52344 0.64844-0.65625v-15.344h15.266c0.13672 0 0.73438-0.44141 0.73438-0.57422v-11.242c0-0.13281-0.59766-0.18359-0.73438-0.18359z" data-reactid=".1f53q7t4nfi.4.0.0.0.8.0.0.2.0.2.0.0.0" />
        <path d="m52.188 77c-1.2344 0-2.1875-1.3398-2.1875-2.5742v-11.242c0-1.2383 0.95312-2.1836 2.1875-2.1836h13.812v-9.7461c-3.918-4.6367-9.1484-8.1641-15.156-9.9883 6.0234-3.3125 10.109-9.6836 10.109-17.004 0-10.727-8.7617-19.422-19.57-19.422-10.809 0-19.566 8.6953-19.566 19.422 0 7.3203 4.082 13.691 10.109 17.004-13.051 3.9609-22.527 15.887-22.527 29.996 0 17.34 14.316 20.324 31.98 20.324 9.9023 0 18.754-0.9375 24.617-4.8203l0.003906-9.7656z" data-reactid=".1f53q7t4nfi.4.0.0.0.8.0.0.2.0.2.0.0.1" />
      </g>
    </svg>
    <span  data-reactid=".1f53q7t4nfi.4.0.0.0.8.0.0.2.0.2.1">Sign Up</span>
  </li>
   
  <li data-reactid=".1f53q7t4nfi.4.0.0.0.8.0.0.2.0.4">
    <a href="/t/Help" data-reactid=".1f53q7t4nfi.4.0.0.0.8.0.0.2.0.4.0">
      <svg width="24px" height="17px" style={{display: 'inline-block', verticalAlign: 'middle'}} version="1.1" viewBox="0 0 100 100" data-reactid=".1f53q7t4nfi.4.0.0.0.8.0.0.2.0.4.0.0">
        <path d="m50 5c-24.898 0-45 20.102-45 45s20.102 45 45 45 45-20.102 45-45-20.102-45-45-45zm7.1016 70c0 2.1992-1.8984 4.1016-4.1016 4.1016h-6.1992c-2.1992 0-4.1016-1.8984-4.1016-4.1016v-26.199c0-2.3008 1.8984-4.1016 4.1016-4.1016h6.1992c2.1992 0 4.1016 1.8984 4.1016 4.1016zm-7.2031-37.102c-4.6016 0-8.3984-3.8008-8.3984-8.5 0-4.6992 3.8008-8.5 8.3984-8.5 4.6992 0 8.5 3.8008 8.5 8.5 0 4.7031-3.7969 8.5-8.5 8.5z" data-reactid=".1f53q7t4nfi.4.0.0.0.8.0.0.2.0.4.0.0.0" />
      </svg>
      <span data-reactid=".1f53q7t4nfi.4.0.0.0.8.0.0.2.0.4.0.1">Help</span>
    </a>
  </li>
 
          </>
          }
          
        </ul>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default ProfileResponsive