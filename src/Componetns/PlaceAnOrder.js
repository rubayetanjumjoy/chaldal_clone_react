import React from 'react'
import { Link } from 'react-router-dom'
import { data } from '../Contexts/DataContext';
import { useContext } from 'react';
import { useEffect } from 'react';
import { CartProvider, useCart } from "react-use-cart";
import { useNavigate } from 'react-router-dom';
const PlaceAnOrder = () => {
  const {orderPlaced,setOrderPlaced} =useContext(data);
  let navigate = useNavigate();
  useEffect(() => {
    console.log(orderPlaced)
  }, [])
  const {
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
    clearCartMetadata 
  } = useCart();
  const backtoshopping=()=>{
    navigate('/')
    
  }
   
  
  return (
    <>
     {orderPlaced ? <div data-reactid=".1tjeiakmalq.a.2.0">
  <div class="checkoutExperience2" data-reactid=".1tjeiakmalq.a.2.0.0">
    <div data-reactid=".1tjeiakmalq.a.2.0.0.0">
      <div class="checkoutConfirmComponent" data-reactid=".1tjeiakmalq.a.2.0.0.0.0">
        <div class="orderSectionsContainer" data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2">
          <div class="orderSection left" data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.0">
            <div class="orderSuccessContainer" data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.0.0">
              <div class="orderSuccess" data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.0.0.0">
                <div class="orderStatus" data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.0.0.0.0">Order is scheduled</div>
                <div class="bagIconContainer" data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.0.0.0.1">
                <svg style={{display:'inline-block',verticalAlign:'middle'}} width="100px" height="100px" fill="none" viewBox="0 0 60 60" data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.0.0.0.1.0">
  <path fill="#412569" d="M50.88 0H9.12A9.12 9.12 0 000 9.12v41.76A9.12 9.12 0 009.12 60h41.76A9.12 9.12 0 0060 50.88V9.12A9.12 9.12 0 0050.88 0z" data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.0.0.0.1.0.0"></path>
  <path fill="#ED907A" d="M18.526 31.52l-.727 7.268-1.171.83a2.964 2.964 0 01-3.382.64L.019 34.121v-6.629l13.224 6.138a2.964 2.964 0 003.382-.64l1.901-1.47z" data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.0.0.0.1.0.1"></path>
  <path fill="#F89C8D" d="M28.829 39.55a1.887 1.887 0 00-1.14.39 1.894 1.894 0 00-3.046 1.515c0 1.05.852 3.425 1.904 3.425a1.886 1.886 0 001.14-.39c.327.252.727.388 1.14.39 1.05 0 1.903-2.374 1.903-3.425a1.903 1.903 0 00-1.9-1.904h-.001z" data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.0.0.0.1.0.2"></path>
  <path fill="#F8664F" d="M30.428 42.95c-.343.97-.929 1.93-1.596 1.93a1.896 1.896 0 01-1.14-.39c-.328.25-.728.387-1.14.39-1.05 0-1.904-2.376-1.904-3.426a1.904 1.904 0 011.545-1.869 3.806 3.806 0 004.24 3.364h-.005z" data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.0.0.0.1.0.3"></path>
  <path fill="#A1D51C" d="M28.827 38.788h-1.14a1.52 1.52 0 011.52-1.52h1.14a1.52 1.52 0 01-1.52 1.52z" data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.0.0.0.1.0.4"></path>
  <path fill="#7AB92D" d="M30.146 38.028a1.61 1.61 0 01-.24.316 1.532 1.532 0 01-1.079.444h-1.14c.001-.404.161-.79.446-1.077.051-.052.107-.1.167-.14a1.128 1.128 0 00.912.455l.934.002z" data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.0.0.0.1.0.5"></path>
  <path fill="#7AB92D" d="M27.686 40.31a.38.38 0 01-.38-.38v-.151a2.178 2.178 0 00-.972-1.817.381.381 0 01.422-.634 2.939 2.939 0 011.31 2.45v.153a.38.38 0 01-.38.38z" data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.0.0.0.1.0.6"></path>
  <path fill="#5EAE35" d="M35.715 31.727v-7.568h-2.364a2.364 2.364 0 110-4.729h2.364l-1.419-1.42a2.006 2.006 0 012.837-2.837l1.418 1.42V14.7a2.838 2.838 0 115.675 0v1.892l1.42-1.419a2.007 2.007 0 012.837 2.838l-1.419 1.419h2.364a2.364 2.364 0 110 4.73h-2.364v7.566H35.715z" data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.0.0.0.1.0.7"></path>
  <path fill="#FB0200" d="M42.336 24.16a4.73 4.73 0 00-4.73 4.728v.946h9.459v-.946a4.73 4.73 0 00-4.729-4.729z" data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.0.0.0.1.0.8"></path>
  <path fill="#FF8706" d="M21.528 30.78V14.701a4.73 4.73 0 119.459 0v16.08h-9.46z" data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.0.0.0.1.0.9"></path>
  <path fill="#FFA646" d="M24.365 16.593h3.784v1.892h-3.784v-1.892zM24.365 20.376h3.784v1.892h-3.784v-1.892zM24.365 24.16h3.784v1.891h-3.784v-1.892z" data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.0.0.0.1.0.a"></path>
  <path fill="#008C02" d="M37.607 21.322V19.43a1.894 1.894 0 001.892-1.892h1.891a3.788 3.788 0 01-3.783 3.784zM46.12 22.268a3.788 3.788 0 01-3.784-3.783h1.892a1.894 1.894 0 001.892 1.891v1.892z" data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.0.0.0.1.0.b"></path>
  <path fill="#C53287" d="M34.944 23.145a3.357 3.357 0 01-.193.772l-.382.797.046.024c.4.203.748.494 1.017.852l.015.02.026.001a3.24 3.24 0 011.43.382l.054.029 1.141-2.978a3.01 3.01 0 00-3.154.1v.001z" data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.0.0.0.1.0.c"></path>
  <path fill="#0ED290" d="M33.41 20.194c-.424.15-.797.417-1.075.772a.065.065 0 01-.058.024.065.065 0 01-.051-.036 3.103 3.103 0 00-1.913-1.649.065.065 0 00-.076.034 3.103 3.103 0 00-.052 2.524.064.064 0 01-.007.063.066.066 0 01-.057.027c-.45-.03-.899.068-1.294.285a.065.065 0 00-.03.077c.156.44.437.825.81 1.106.01.007.017.017.021.029a.064.064 0 01-.046.084c-.26.06-.51.157-.744.288a.066.066 0 00-.03.078l.004.009a2.944 2.944 0 011.895.075c.412.157.784.404 1.088.724a2.95 2.95 0 012.622.031l.382-.797.002-.006a3.125 3.125 0 00-.141-2.644.066.066 0 00-.078-.03 2.764 2.764 0 00-.708.363.064.064 0 01-.094-.023.065.065 0 01-.007-.035 2.375 2.375 0 00-.283-1.342.065.065 0 00-.08-.032z" data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.0.0.0.1.0.d"></path>
  <path fill="#00C285" d="M31.953 23.113a5.226 5.226 0 01-1.825-1.16 2.368 2.368 0 00-1.301.285.067.067 0 00-.03.078c.156.44.437.824.81 1.105a.064.064 0 01.007.096.064.064 0 01-.032.017c-.26.06-.51.157-.744.288a.066.066 0 00-.03.078l.004.009a2.945 2.945 0 011.895.075c.412.157.784.404 1.088.724a2.95 2.95 0 012.622.031l.382-.797.002-.006a3.44 3.44 0 00.171-.613 4.816 4.816 0 01-3.019-.21z" data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.0.0.0.1.0.e"></path>
  <path fill="#07B27B" d="M31.685 22.488a.405.405 0 00-.205.533l.686 1.538c.266-.086.542-.134.822-.143l-.77-1.724a.405.405 0 00-.533-.204z" data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.0.0.0.1.0.f"></path>
  <path fill="#98246A" d="M27.834 26.75c.531.203.968.597 1.224 1.105l.022.043.046-.017c.3-.117.622-.17.944-.153l.063.004-.006-.063a2.953 2.953 0 011.72-2.985 3 3 0 00-2.524-.937 3.015 3.015 0 00-2.686 2.88 2.295 2.295 0 011.197.123z" data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.0.0.0.1.0.g"></path>
  <path fill="#E03D9C" d="M30.776 27.877l.116.045.152-.036a3.426 3.426 0 001.828-1.121 3.29 3.29 0 012.645-1.152 3.014 3.014 0 00-5.438 2.116c.238.013.473.063.697.148z" data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.0.0.0.1.0.h"></path>
  <path fill="#FB2B3A" d="M45.655 23.757a2.862 2.862 0 01-3.126.445.163.163 0 00-.228.094 2.862 2.862 0 01-.922 1.307.056.056 0 01-.07 0 2.86 2.86 0 01-.921-1.307.164.164 0 00-.228-.094 2.862 2.862 0 01-3.126-.445 4.065 4.065 0 00-1.152 3.367h10.925a4.065 4.065 0 00-1.151-3.368z" data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.0.0.0.1.0.i"></path>
  <path fill="#E41F2D" d="M38.806 24.472a2.844 2.844 0 01-1.77-.718 4.066 4.066 0 00-1.151 3.367h2.337a4.058 4.058 0 01.584-2.65z" data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.0.0.0.1.0.j"></path>
  <path fill="#0ED290" d="M41.752 22.253v-1.08a.405.405 0 00-.81 0v1.08h.81z" data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.0.0.0.1.0.k"></path>
  <path fill="#00C285" d="M43.755 22.196H38.94a2.911 2.911 0 00-2.28 1.099.11.11 0 000 .136 2.916 2.916 0 003.529.817.112.112 0 01.09-.002.111.111 0 01.062.065c.18.524.506.986.94 1.332a.11.11 0 00.136 0 2.92 2.92 0 00.94-1.332.11.11 0 01.106-.074c.016 0 .031.005.045.011a2.915 2.915 0 003.529-.817.11.11 0 000-.136 2.91 2.91 0 00-2.28-1.099z" data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.0.0.0.1.0.l"></path>
  <path fill="#07B27B" d="M38.94 23.434a.11.11 0 010-.136 2.91 2.91 0 012.28-1.099h-2.28a2.91 2.91 0 00-2.28 1.099.11.11 0 000 .136 2.913 2.913 0 003.42.866 2.926 2.926 0 01-1.14-.866z" data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.0.0.0.1.0.m"></path>
  <path fill="#FE9901" d="M39.268 30.264a4.116 4.116 0 00-2.718-4.465 4.208 4.208 0 01-2.084-1.596l-.228-.333a.201.201 0 00-.334 0l-.228.333a4.208 4.208 0 01-2.085 1.596 4.117 4.117 0 00-2.717 4.465h10.394z" data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.0.0.0.1.0.n"></path>
  <path fill="#FB8801" d="M37.176 30.264c.016-.187.024-.38.024-.572 0-1.79-.69-3.325-1.647-3.893a3.205 3.205 0 01-1.245-1.596l-.136-.332c-.047-.118-.152-.118-.199 0l-.135.332a3.206 3.206 0 01-1.245 1.596c-.957.568-1.648 2.103-1.648 3.893 0 .194.009.385.025.572h6.206z" data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.0.0.0.1.0.o"></path>
  <path fill="#FE9901" d="M35.112 30.264c.005-.187.008-.378.008-.572a10.127 10.127 0 00-.55-3.893 4.94 4.94 0 01-.417-1.596l-.045-.332c-.016-.118-.051-.118-.067 0l-.045.332a4.94 4.94 0 01-.416 1.596 10.127 10.127 0 00-.551 3.893c0 .194.002.385.008.572h2.075z" data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.0.0.0.1.0.p"></path>
  <path fill="#A1D51C" d="M36.06 38.41a1.133 1.133 0 00-1.663-1.01 1.52 1.52 0 00-2.764 0 1.134 1.134 0 00-1.532 1.53 1.512 1.512 0 00-.367 2.525 1.52 1.52 0 102.25 2.004 1.14 1.14 0 002.1-.874c.025 0 .047.007.072.007a1.135 1.135 0 00.846-1.9 1.123 1.123 0 00.212-1.186 1.14 1.14 0 00.846-1.096z" data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.0.0.0.1.0.q"></path>
  <path fill="#7AB92D" d="M35.299 41.454a1.14 1.14 0 01-1.14 1.14c-.023 0-.05-.008-.072-.008.047.124.071.256.072.389a1.14 1.14 0 01-2.173.483 1.518 1.518 0 01-2.272.286 1.52 1.52 0 01.023-2.29 1.512 1.512 0 01.366-2.523 1.135 1.135 0 011.533-1.534c.113-.249.29-.463.516-.618a1.507 1.507 0 00.251 2.01 1.519 1.519 0 102.247 2.004c.128.274.36.487.643.59a.401.401 0 01.006.07z" data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.0.0.0.1.0.r"></path>
  <path fill="#5BA006" d="M31.51 42.455a.38.38 0 01-.334-.561 3.664 3.664 0 00.329-2.631.382.382 0 01.424-.47.382.382 0 01.314.284 4.425 4.425 0 01-.398 3.177.38.38 0 01-.334.2z" data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.0.0.0.1.0.s"></path>
  <path fill="#5BA006" d="M31.35 42.753a.38.38 0 01-.333-.562l.161-.299a4.712 4.712 0 012.394-2.138.381.381 0 01.283.708 3.946 3.946 0 00-2.007 1.791l-.16.299a.38.38 0 01-.339.2z" data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.0.0.0.1.0.t"></path>
  <path fill="#A1D51C" d="M36.495 43.816a1.135 1.135 0 00-1.242-1.498 1.52 1.52 0 00-2.614-.9 1.133 1.133 0 00-1.947.95 1.512 1.512 0 00-1.169 2.266 1.52 1.52 0 101.475 2.627 1.14 1.14 0 002.27-.14c.023.008.042.023.066.03a1.135 1.135 0 001.418-1.524 1.121 1.121 0 00.587-1.051 1.14 1.14 0 001.156-.76z" data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.0.0.0.1.0.u"></path>
  <path fill="#7AB92D" d="M34.784 46.446a1.14 1.14 0 01-1.45.707c-.02-.007-.043-.023-.065-.03.004.132-.015.264-.058.39a1.14 1.14 0 01-2.212-.25 1.518 1.518 0 01-2.246-.467 1.52 1.52 0 01.773-2.16 1.511 1.511 0 011.167-2.268 1.135 1.135 0 011.947-.951c.187-.199.424-.342.686-.416a1.507 1.507 0 00-.417 1.982 1.52 1.52 0 101.475 2.627c.032.301.183.578.42.768a.424.424 0 01-.02.068z" data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.0.0.0.1.0.v"></path>
  <path fill="#5BA006" d="M30.876 46.158a.38.38 0 01-.133-.64 3.664 3.664 0 001.167-2.38.38.38 0 01.757.069 4.426 4.426 0 01-1.41 2.874.38.38 0 01-.381.08v-.003z" data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.0.0.0.1.0.w"></path>
  <path fill="#5BA006" d="M30.627 46.388a.38.38 0 01-.132-.638l.25-.23a4.712 4.712 0 012.957-1.243.38.38 0 01.301.637.381.381 0 01-.263.125 3.947 3.947 0 00-2.482 1.04l-.25.23a.38.38 0 01-.381.08z" data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.0.0.0.1.0.x"></path>
  <path fill="#A1D51C" d="M44.911 42.257a1.816 1.816 0 00-1.992-2.4 2.432 2.432 0 00-4.189-1.442 1.816 1.816 0 00-3.12 1.522 2.424 2.424 0 00-1.873 3.633 2.432 2.432 0 102.362 4.213 1.824 1.824 0 003.638-.223c.036.012.068.035.106.048a1.823 1.823 0 002.274-2.442 1.8 1.8 0 00.94-1.686 1.825 1.825 0 001.854-1.223z" data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.0.0.0.1.0.y"></path>
  <path fill="#7AB92D" d="M42.17 46.474a1.83 1.83 0 01-2.326 1.134c-.035-.012-.068-.036-.106-.05a1.76 1.76 0 01-.093.627 1.83 1.83 0 01-3.545-.402 2.43 2.43 0 01-3.854-1.75 2.433 2.433 0 011.491-2.462 2.422 2.422 0 011.87-3.633 1.825 1.825 0 013.125-1.525c.3-.317.68-.548 1.1-.666a2.414 2.414 0 00-.667 3.177 2.432 2.432 0 102.363 4.214c.052.483.294.925.672 1.23a.656.656 0 01-.03.106z" data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.0.0.0.1.0.z"></path>
  <path fill="#5BA006" d="M35.904 46.013a.608.608 0 01-.21-1.024 5.872 5.872 0 001.876-3.813.609.609 0 111.208.102 7.092 7.092 0 01-2.26 4.608.608.608 0 01-.614.127z" data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.0.0.0.1.0.10"></path>
  <path fill="#5BA006" d="M35.504 46.382a.608.608 0 01-.21-1.023l.399-.368A7.551 7.551 0 0140.434 43a.61.61 0 01.293 1.163.61.61 0 01-.231.059 6.325 6.325 0 00-3.979 1.668l-.4.369a.607.607 0 01-.613.123z" data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.0.0.0.1.0.11"></path>
  <path fill="#A1D51C" d="M24.248 41.28a1.133 1.133 0 00-1.181 1.547 1.52 1.52 0 00-.29 2.75 1.132 1.132 0 001.362 1.683 1.511 1.511 0 002.471.63 1.52 1.52 0 102.23-2.027 1.14 1.14 0 00-.647-2.18c.003-.025.013-.047.015-.072a1.136 1.136 0 00-1.804-1.04 1.123 1.123 0 00-1.156-.336 1.14 1.14 0 00-1-.955z" data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.0.0.0.1.0.12"></path>
  <path fill="#7AB92D" d="M27.195 42.356a1.14 1.14 0 011.014 1.254c-.002.022-.013.048-.015.07a1.14 1.14 0 01.646 2.18 1.52 1.52 0 11-2.228 2.026 1.511 1.511 0 01-2.472-.628 1.136 1.136 0 01-1.365-1.683 1.501 1.501 0 01-.559-.576 1.507 1.507 0 002.025-.038 1.52 1.52 0 102.229-2.027c.287-.1.522-.309.654-.581.024-.001.048 0 .071.003z" data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.0.0.0.1.0.13"></path>
  <path fill="#5BA006" d="M27.792 46.229a.38.38 0 01-.594.273 3.664 3.664 0 00-2.58-.603.38.38 0 01-.105-.753 4.425 4.425 0 013.118.729.38.38 0 01.164.354h-.003z" data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.0.0.0.1.0.14"></path>
  <path fill="#5BA006" d="M28.072 46.42a.38.38 0 01-.592.272l-.28-.192a4.712 4.712 0 01-1.875-2.602.379.379 0 01.13-.403.383.383 0 01.422-.034.381.381 0 01.18.229c.253.89.809 1.663 1.572 2.184l.28.192a.38.38 0 01.163.355z" data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.0.0.0.1.0.15"></path>
  <path fill="#A1D51C" d="M42.15 36.888a1.132 1.132 0 00-1.663-1.011 1.52 1.52 0 00-2.765 0 1.133 1.133 0 00-1.532 1.531 1.512 1.512 0 00-.367 2.524 1.521 1.521 0 001.785 2.45 1.52 1.52 0 00.465-.446 1.14 1.14 0 002.1-.873c.025 0 .047.007.072.007a1.136 1.136 0 00.846-1.9 1.123 1.123 0 00.212-1.186 1.14 1.14 0 00.846-1.096z" data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.0.0.0.1.0.16"></path>
  <path fill="#7AB92D" d="M41.388 39.932a1.14 1.14 0 01-1.14 1.14c-.023 0-.05-.008-.072-.008.047.124.071.256.072.388a1.14 1.14 0 01-2.173.484 1.519 1.519 0 11-2.249-2.004 1.51 1.51 0 01.366-2.524 1.135 1.135 0 011.533-1.533c.113-.25.29-.463.516-.618a1.507 1.507 0 00.251 2.01 1.519 1.519 0 102.247 2.003c.128.275.36.487.644.592a.41.41 0 01.005.07z" data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.0.0.0.1.0.17"></path>
  <path fill="#5BA006" d="M37.6 40.932a.38.38 0 01-.335-.56 3.663 3.663 0 00.329-2.632.38.38 0 11.738-.185 4.426 4.426 0 01-.398 3.177.38.38 0 01-.334.2z" data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.0.0.0.1.0.18"></path>
  <path fill="#5BA006" d="M37.438 41.23a.38.38 0 01-.332-.561l.161-.299a4.712 4.712 0 012.394-2.138.381.381 0 01.284.708 3.947 3.947 0 00-2.008 1.791l-.16.299a.38.38 0 01-.339.2z" data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.0.0.0.1.0.19"></path>
  <path fill="#F89C8D" d="M31.169 49.466a2.505 2.505 0 100-5.01 2.505 2.505 0 000 5.01z" data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.0.0.0.1.0.1a"></path>
  <path fill="#F8664F" d="M33.777 46.972a2.474 2.474 0 11-3.033-2.409 2.477 2.477 0 002.462 2.218c.188 0 .376-.023.56-.067.004.086.011.175.011.258z" data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.0.0.0.1.0.1b"></path>
  <path fill="#A1D51C" d="M31.873 46.022a.379.379 0 01-.326-.577 2.702 2.702 0 011.96-1.292l.218-.03a.38.38 0 01.102.755l-.217.03a1.944 1.944 0 00-1.41.93.38.38 0 01-.327.186v-.002z" data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.0.0.0.1.0.1c"></path>
  <path fill="#F89C8D" d="M43.194 43.119a2.505 2.505 0 100-5.01 2.505 2.505 0 000 5.01z" data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.0.0.0.1.0.1d"></path>
  <path fill="#F8664F" d="M45.575 40.502a2.474 2.474 0 11-3.034-2.409 2.477 2.477 0 002.462 2.219c.189-.001.377-.024.56-.068.005.087.012.175.012.258z" data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.0.0.0.1.0.1e"></path>
  <path fill="#A1D51C" d="M43.67 39.552a.38.38 0 01-.326-.577 2.702 2.702 0 011.96-1.291l.218-.03a.38.38 0 11.103.754l-.218.03a1.945 1.945 0 00-1.41.93.38.38 0 01-.327.186v-.002z" data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.0.0.0.1.0.1f"></path>
  <path fill="#A2E62E" d="M22.711 29.98l4.48-7.165a2.91 2.91 0 00-3.422-2.791 2.91 2.91 0 00-3.314-2.073 2.91 2.91 0 00-5.114-.973 2.91 2.91 0 10-3.063 4.897 2.91 2.91 0 003.111 4.176 2.91 2.91 0 003.314 2.072 2.91 2.91 0 004.008 1.856z" data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.0.0.0.1.0.1g"></path>
  <path fill="#97D729" d="M22.711 29.98l1.854-2.965a2.912 2.912 0 01-3.926-1.605.34.34 0 00-.348-.217 2.911 2.911 0 01-2.964-1.854.34.34 0 00-.347-.217 2.91 2.91 0 01-2.972-3.93.346.346 0 00-.145-.421l-.037-.023a2.904 2.904 0 01-1.359-2.219 2.911 2.911 0 00-.19 5.349 2.91 2.91 0 003.112 4.173 2.91 2.91 0 003.314 2.072 2.91 2.91 0 004.008 1.856z" data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.0.0.0.1.0.1h"></path>
  <path fill="#8BC727" d="M18.104 22.706l1.49.932-1.882.347a.502.502 0 10.182.987l2.962-.546 1.464.917-.943.164a.502.502 0 10.174.989l2.043-.357 1.096.685.532-.85-3.835-2.398-.805-2.901a.502.502 0 00-.967.268l.512 1.844-1.491-.932-.78-2.882a.502.502 0 10-.97.26l.498 1.836-2.1-1.313a.502.502 0 10-.532.851l2.1 1.314-1.868.355a.503.503 0 00.19.986l2.93-.556z" data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.0.0.0.1.0.1i"></path>
  <path fill="#84D2F4" d="M23.78 19.871l-1.688-3.465-4.02 1.959 1.689 3.465a5.092 5.092 0 01.236 3.889 5.092 5.092 0 00.236 3.887L25.51 40.44l9.381-4.57-5.279-10.834a5.092 5.092 0 00-2.917-2.583 5.092 5.092 0 01-2.915-2.582z" data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.0.0.0.1.0.1j"></path>
  <path fill="#57B7EB" d="M30.681 27.228l4.211 8.642-9.38 4.57-5.279-10.833a5.092 5.092 0 01-.237-3.887 5.092 5.092 0 00-.236-3.891l-1.688-3.464 4.02-1.959.657 1.347a2.356 2.356 0 00-.979 3.097 5.092 5.092 0 01.237 3.887 5.091 5.091 0 00.237 3.892 8.317 8.317 0 008.336 4.636 7.86 7.86 0 01-.978-1.447 3.724 3.724 0 011.081-4.59h-.002z" data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.0.0.0.1.0.1k"></path>
  <path fill="#D0D8DA" d="M16.096 16.011l5.36-2.612 1.307 2.68-5.36 2.612-1.307-2.68zM20.942 31.061l9.38-4.57 2.286 4.69-9.381 4.57-2.285-4.69z" data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.0.0.0.1.0.1l"></path>
  <path fill="#93999A" d="M27.013 32.853c.468.164.95.282 1.44.352l-5.226 2.547-2.285-4.69 2.157-1.052a8.263 8.263 0 003.914 2.843zM30.681 27.228l1.927 3.954-2.626 1.28a5.657 5.657 0 01-.381-.645 3.724 3.724 0 011.082-4.59l-.002.001zM22.11 14.74l.653 1.34-5.36 2.611-1.307-2.68 1.702-.83a2.964 2.964 0 002.971.212l1.34-.653z" data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.0.0.0.1.0.1m"></path>
  <path fill="#F89C8D" d="M28.067 37.267a1.887 1.887 0 00-1.14.39 1.895 1.895 0 00-3.046 1.514c0 1.05.852 3.425 1.904 3.425a1.886 1.886 0 001.14-.389c.327.25.728.387 1.14.39 1.051 0 1.904-2.375 1.904-3.426a1.904 1.904 0 00-1.9-1.904h-.002z" data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.0.0.0.1.0.1n"></path>
  <path fill="#F8664F" d="M29.666 40.666c-.342.97-.928 1.93-1.596 1.93a1.895 1.895 0 01-1.14-.389c-.327.25-.727.386-1.14.388-1.05 0-1.903-2.375-1.903-3.425a1.904 1.904 0 011.545-1.869 3.806 3.806 0 004.239 3.365h-.005z" data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.0.0.0.1.0.1o"></path>
  <path fill="#A1D51C" d="M28.066 36.504h-1.14a1.52 1.52 0 011.52-1.52h1.14a1.52 1.52 0 01-1.52 1.52z" data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.0.0.0.1.0.1p"></path>
  <path fill="#7AB92D" d="M29.384 35.744a1.61 1.61 0 01-.24.316 1.532 1.532 0 01-1.078.444h-1.14c0-.404.16-.79.445-1.077.052-.052.107-.099.167-.14a1.128 1.128 0 00.912.456l.934.001z" data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.0.0.0.1.0.1q"></path>
  <path fill="#7AB92D" d="M26.924 38.027a.38.38 0 01-.38-.38v-.152a2.179 2.179 0 00-.972-1.816.384.384 0 01-.162-.391.383.383 0 01.585-.244 2.94 2.94 0 011.31 2.451v.152a.38.38 0 01-.38.38z" data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.0.0.0.1.0.1r"></path>
  <path fill="#4981F8" d="M40.271 28.613v1.181h-14.51v-1.181h-4.279v21.312h23.07V28.613h-4.28zM28.672 46.145a.524.524 0 01-.524.524h-3.295a.524.524 0 01-.524-.524v-2.209a.524.524 0 01.524-.524h3.295a.524.524 0 01.524.524v2.209zm0-5.43a.524.524 0 01-.524.524h-3.295a.524.524 0 01-.524-.524v-2.208a.524.524 0 01.524-.525h3.295a.524.524 0 01.524.525v2.208zm6.514 5.43a.524.524 0 01-.524.524h-3.293a.524.524 0 01-.524-.524v-2.209a.524.524 0 01.524-.524h3.295a.524.524 0 01.524.524l-.002 2.209zm0-5.43a.524.524 0 01-.524.524h-3.293a.524.524 0 01-.524-.524v-2.208a.524.524 0 01.524-.525h3.295a.524.524 0 01.524.525l-.002 2.208zm6.514 5.43a.524.524 0 01-.524.524h-3.293a.524.524 0 01-.524-.524v-2.209a.524.524 0 01.524-.524h3.295a.524.524 0 01.524.524l-.002 2.209zm0-5.43a.524.524 0 01-.524.524h-3.293a.524.524 0 01-.524-.524v-2.208a.524.524 0 01.524-.525h3.295a.524.524 0 01.524.525l-.002 2.208z" data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.0.0.0.1.0.1s"></path>
  <path fill="#62A4FB" d="M43.874 28.919h4.342V49.4h-4.342V28.92z" data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.0.0.0.1.0.1t"></path>
  <path fill="#5392F9" d="M46.71 28.919h1.507V49.4H46.71V28.92z" data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.0.0.0.1.0.1u"></path>
  <path fill="#62A4FB" d="M17.814 28.919h4.343V49.4h-4.343V28.92z" data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.0.0.0.1.0.1v"></path>
  <path fill="#5392F9" d="M20.65 28.919h1.508V49.4H20.65V28.92z" data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.0.0.0.1.0.1w"></path>
  <path fill="#80B6FC" d="M40.28 31.468H25.75a.542.542 0 01-.486-.305l-.784-1.567a.543.543 0 00-.485-.304H17.27a.543.543 0 01-.543-.54v-1.085a.543.543 0 01.543-.543h8.064a.542.542 0 01.486.304l.787 1.566a.543.543 0 00.486.305h11.844a.543.543 0 00.486-.305l.788-1.569a.543.543 0 01.486-.304h8.062a.542.542 0 01.542.543v1.089a.542.542 0 01-.542.543h-6.724a.542.542 0 00-.486.303l-.785 1.57a.543.543 0 01-.486.305l.002-.006zM48.794 35.81H17.238a.51.51 0 01-.51-.508v-1.154a.51.51 0 01.51-.51h31.556a.51.51 0 01.51.51v1.154a.51.51 0 01-.51.509zM23.82 51.011h-6.582a.51.51 0 01-.51-.508V49.35a.509.509 0 01.51-.508h6.582a.51.51 0 01.509.51v1.153a.51.51 0 01-.51.508zM48.793 51.011H42.21a.51.51 0 01-.51-.509V49.35a.51.51 0 01.51-.51h6.582a.51.51 0 01.51.51v1.153a.51.51 0 01-.508.51z" data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.0.0.0.1.0.1x"></path>
  <path fill="#62A4FB" d="M48.76 27.124h-1.508a.543.543 0 01.542.543v1.086a.542.542 0 01-.542.543h1.508a.542.542 0 00.542-.543v-1.086a.543.543 0 00-.542-.543zM48.778 33.639H47.27a.525.525 0 01.524.524v1.123a.524.524 0 01-.524.525h1.508a.525.525 0 00.524-.525v-1.123a.525.525 0 00-.524-.524zM48.778 48.84H47.27a.525.525 0 01.524.525v1.123a.525.525 0 01-.524.524h1.508a.525.525 0 00.524-.524v-1.123a.525.525 0 00-.524-.525zM23.805 48.84h-1.508a.525.525 0 01.524.525v1.123a.525.525 0 01-.524.524h1.508a.525.525 0 00.524-.524v-1.123a.525.525 0 00-.524-.525z" data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.0.0.0.1.0.1y"></path>
  <path fill="#FCBFA9" d="M26.93 53.6l-1.37.932a2.279 2.279 0 01-2.005.274L13.09 51.25.019 46.551v-12.54l13.44 6.167a2.75 2.75 0 003.245-.64l.83-1.108 2.27-2.029 5.541-1.245a1.66 1.66 0 011.976 1.245 1.693 1.693 0 01-1.091 2.03l-2.384.806a1.136 1.136 0 00-.76 1.074 1.152 1.152 0 00.677 1.05l13.731 5.993c.355.154.65.421.836.76a1.824 1.824 0 01.054 1.724 1.765 1.765 0 01-2.16.912l-2.484-.836-.83 1.692a1.529 1.529 0 01-1.869.784l-.407-.141-.747 1.142a1.531 1.531 0 01-1.769.618l-1.188-.41z" data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.0.0.0.1.0.1z"></path>
  <path fill="#ED907A" d="M21.315 52.828a1.082 1.082 0 00.624 1.51l1.41.469a2.349 2.349 0 002.033-.273l.174-.116-4.241-1.59zM36.193 50.771a1.803 1.803 0 002.249-1.04.143.143 0 01-.007-.017L27.858 46.01a1.344 1.344 0 00.57 2.176l5.247 1.748 2.518.837zM30.94 52.4a1.557 1.557 0 001.893-.777l.173-.345-6.237-1.891a1.453 1.453 0 00.889 1.919l2.867.954.416.14zM27.98 54.013a1.567 1.567 0 001.793-.616l.026-.039-6.748-2.423a1.612 1.612 0 001.08 1.792l2.642.88 1.208.406z" data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.0.0.0.1.0.20"></path>
</svg>
                </div>
                <div class="estimatedDeliveryText" data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.0.0.0.2">Selected Delivery Slot</div>
                <div class="deliveryTimeWithDate" data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.0.0.0.3">
                  <div class="estimatedDeliveryTime" data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.0.0.0.3.$10-00-PM-11-00-PM-02-11-22">
                    <span data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.0.0.0.3.$10-00-PM-11-00-PM-02-11-22.0">
                      <span data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.0.0.0.3.$10-00-PM-11-00-PM-02-11-22.0.0">10:00 PM</span>
                      <span data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.0.0.0.3.$10-00-PM-11-00-PM-02-11-22.0.1"> - </span>
                      <span data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.0.0.0.3.$10-00-PM-11-00-PM-02-11-22.0.2">11:00 PM</span>
                      <span data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.0.0.0.3.$10-00-PM-11-00-PM-02-11-22.0.3">, </span>
                      <span data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.0.0.0.3.$10-00-PM-11-00-PM-02-11-22.0.4">02/11/22</span>
                    </span>
                  </div>
                </div>
                <div class="cardContainer" data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.0.0.0.4">
                  <div class="paymentStatusCard" data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.0.0.0.4.0">
                    <div class="intro emphasize" data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.0.0.0.4.0.0">Pay with</div>
                    <div class="iconContainer" data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.0.0.0.4.0.1">
                     
                    </div>
                    <div data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.0.0.0.4.0.2">
                      <span data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.0.0.0.4.0.2.0">Cash On Delivery</span>
                      <span class="amount emphasize" data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.0.0.0.4.0.2.1">
                        <span data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.0.0.0.4.0.2.1.0">৳</span>
                        <span data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.0.0.0.4.0.2.1.1">{orderPlaced.totalprice}</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="orBlockContainer" data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.0.1">
              <div class="orBlock" data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.0.1.0">
                <div class="divider" data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.0.1.0.0"></div>
                <div class="blockText" data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.0.1.0.1">Or</div>
                <div class="divider" data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.0.1.0.2"></div>
              </div>
            </div>
            {/*<div class="paymentMethodsContainer" data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.0.2">
              <div class="paymentMethodsBlock" data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.0.2.0">
                <div class="paymentMethods" data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.0.2.0.0">
                  <div class="inlinePaymentComponent" data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.0.2.0.0.0">
                    <div data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.0.2.0.0.0.0">
                      <section class="paymentMethods" data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.0.2.0.0.0.0.2">
                        <div class="paymentMethodItem" data-payment="1" data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.0.2.0.0.0.0.2.0:$m0">
                          <div class="paymentMethodItemContent" data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.0.2.0.0.0.0.2.0:$m0.0">
                            <span data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.0.2.0.0.0.0.2.0:$m0.0.0">Credit / Debit Card</span>
                            <div class="imageContainer" data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.0.2.0.0.0.0.2.0:$m0.0.1">
                              <div data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.0.2.0.0.0.0.2.0:$m0.0.1.0">
                                
                              </div>
                            </div>
                            <div class="imageContainer" data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.0.2.0.0.0.0.2.0:$m0.0.2">
                              <div data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.0.2.0.0.0.0.2.0:$m0.0.2.0">
                            
                              </div>
                            </div>
                            <div class="imageContainer" data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.0.2.0.0.0.0.2.0:$m0.0.3">
                              <div data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.0.2.0.0.0.0.2.0:$m0.0.3.0">
                                
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="paymentMethodItem" data-payment="3" data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.0.2.0.0.0.0.2.0:$m1">
                          <div class="paymentMethodItemContent" data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.0.2.0.0.0.0.2.0:$m1.0">
                            <span data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.0.2.0.0.0.0.2.0:$m1.0.0">International Credit / Debit Card</span>
                            <div class="imageContainer" data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.0.2.0.0.0.0.2.0:$m1.0.1">
                              <div data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.0.2.0.0.0.0.2.0:$m1.0.1.0">
                              
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="paymentMethodItem" data-payment="2" data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.0.2.0.0.0.0.2.0:$m2">
                          <div class="paymentMethodItemContent" data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.0.2.0.0.0.0.2.0:$m2.0">
                            <span data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.0.2.0.0.0.0.2.0:$m2.0.0">bKash</span>
                            <div class="imageContainer" data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.0.2.0.0.0.0.2.0:$m2.0.1">
                              <div data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.0.2.0.0.0.0.2.0:$m2.0.1.0">
                                
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="paymentMethodItem" data-payment="5" data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.0.2.0.0.0.0.2.0:$m3">
                          <div class="paymentMethodItemContent" data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.0.2.0.0.0.0.2.0:$m3.0">
                            <span data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.0.2.0.0.0.0.2.0:$m3.0.0">Nagad</span>
                            <div class="imageContainer" data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.0.2.0.0.0.0.2.0:$m3.0.1">
                              <div data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.0.2.0.0.0.0.2.0:$m3.0.1.0">
                                 
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="oldBkashContainer" data-payment="4" data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.0.2.0.0.0.0.2.0:$m4">
                          <button class="linkButton" data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.0.2.0.0.0.0.2.0:$m4.0">
                            <div data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.0.2.0.0.0.0.2.0:$m4.0.0">
                              <span data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.0.2.0.0.0.0.2.0:$m4.0.0.0">bKash (TrxID method)</span>
                            </div>
                          </button>
                        </div>
                        <form id="braintreeCheckout" data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.0.2.0.0.0.0.2.1">
                          <div id="payment-container" data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.0.2.0.0.0.0.2.1.0"></div>
                        </form>
                      </section>
                      <br data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.0.2.0.0.0.0.4"/>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
          <div class="orderSection right" data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.1">
            <div class="orderInformationSection" data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.1.0">
              <div class="orderDetails" data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.1.0.0">
                <div class="orderSummary" data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.1.0.0.0">
                  <div class="orderSummaryContent" data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.1.0.0.0.0">
                    <h4 data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.1.0.0.0.0.0">Order Details</h4>
                    <table data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.1.0.0.0.0.1">
                      <tbody data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.1.0.0.0.0.1.0">
                        <tr data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.1.0.0.0.0.1.0.0">
                          <td class="label" data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.1.0.0.0.0.1.0.0.0">Order Number </td>
                          <td class="value" data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.1.0.0.0.0.1.0.0.1">
                            <span data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.1.0.0.0.0.1.0.0.1.0">{orderPlaced.shipment_id}</span>
                          </td>
                        </tr>
                        <tr data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.1.0.0.0.0.1.0.1">
                          <td class="label" data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.1.0.0.0.0.1.0.1.0">Total (Incl. VAT)</td>
                          <td class="value" data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.1.0.0.0.0.1.0.1.1">
                            <span data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.1.0.0.0.0.1.0.1.1.0">৳</span>
                            <b data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.1.0.0.0.0.1.0.1.1.1">
                              <span data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.1.0.0.0.0.1.0.1.1.1.0">{orderPlaced.totalprice}</span>
                            </b>
                          </td>
                        </tr>
                        <tr data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.1.0.0.0.0.1.0.2">
                          <td class="label" data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.1.0.0.0.0.1.0.2.0">Address</td>
                          <td class="value" data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.1.0.0.0.0.1.0.2.1">{orderPlaced.street_address}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div class="orderInstructionsSection" data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.1.0.1">
                <div data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.1.0.1.0">
                  <h4 data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.1.0.1.0.0">Instructions</h4>
                  <div class="orderInstructionList" data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.1.0.1.0.1"></div>
                </div>
                <div class="orderInstructionContainer" data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.1.0.1.1">
                  <div data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.1.0.1.1.0">
                    <div class="OrderInstructionForm" data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.1.0.1.1.0.1">
                      <textarea placeholder="Write instruction" data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.1.0.1.1.0.1.0"></textarea>
                      <button class="submitInstruction" data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.1.0.1.1.0.1.1">
                        <span data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.1.0.1.1.0.1.1.0">
                          
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="back-to-shopping-button" data-reactid=".1tjeiakmalq.a.2.0.0.0.0.2.1.3">
              <a onClick={backtoshopping} class="btn btn-primary"> Back to shopping</a> 
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div> : navigate('/')}
 
    </> 
  )
}

export default PlaceAnOrder