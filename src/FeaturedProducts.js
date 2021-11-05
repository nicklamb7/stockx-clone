import React from 'react';
import './FeaturedProducts.css';

function FeaturedProducts({ title, productTitle, productImage, price, number, productTitle1, productImage1, price1, number1, productTitle2, productImage2, price2, number2, productTitle3, productImage3, price3, number3, productTitle4, productImage4, price4, number4,}) {
    return (
        <section className="featured-products">
            <h2>
                {title}
            </h2>
            <ul>
                <li>
                    <img className="" src={productImage} alt="" />
                    <div className="product-title">
                        {productTitle}
                    </div>
                    <div>
                        <small>Lowest Ask</small>
                    </div>
                    <div  className="product-price">
                        {price}
                    </div>
                    <div>
                        <small>{number} Sold</small>
                    </div>
                </li>
                <li>
                    <img className="" src={productImage1} alt="" />
                    <div>
                        {productTitle1}
                    </div>
                    <div>
                        <small>Lowest Ask</small>
                    </div>
                    <div  className="product-price">
                        {price1}
                    </div>
                    <div>
                        <small>{number1} Sold</small>
                    </div>
                </li>
                <li>
                    <img className="" src={productImage2} alt="" />
                    <div>
                        {productTitle2}
                    </div>
                    <div>
                        <small>Lowest Ask</small>
                    </div>
                    <div  className="product-price">
                        {price2}
                    </div>
                    <div>
                        <small>{number2} Sold</small>
                    </div>
                </li>
                <li>
                    <img className="" src={productImage3} alt="" />
                    <div>
                        {productTitle3}
                    </div>
                    <div>
                        <small>Lowest Ask</small>
                    </div>
                    <div  className="product-price">
                        {price3}
                    </div>
                    <div>
                        <small>{number3} Sold</small>
                    </div>
                </li>
                <li>
                    <img className="" src={productImage4} alt="" />
                    <div>
                        {productTitle4}
                    </div>
                    <div>
                        <small>Lowest Ask</small>
                    </div>
                    <div  className="product-price">
                        {price4}
                    </div>
                    <div>
                        <small>{number4} Sold</small>
                    </div>
                </li>
            </ul>
        </section>
    )
}

export default FeaturedProducts

