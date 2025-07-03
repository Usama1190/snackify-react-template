"use client";

import CardImgOne from "../../assets/imgs/cardImage1.svg?react";
import CardImgTwo from "../../assets/imgs/cardImage2.svg?react";
import CardImgThr from "../../assets/imgs/cardImage3.svg?react";
import { useColor } from "../../context/colorContext";

const CardImage = ({ id, phd, phl }) => {
    console.log('card images', id);
    
    const { selectedColor } = useColor();

    {
    if (id === 1) {
        return (
            <>
            <CardImgOne className='card-one' />
            {
                phd?.map((item, index) => {
                return (
                    <style key={index}>
                    {`
                        .card-one path:nth-child(${item}) { 
                            fill: ${selectedColor.darkColor};
                        },
                    `}
                    </style>
                );
                })
            }

            {
                phl?.map((item, index) => {
                return (
                    <style key={index}>
                    {`
                        .card-one path:nth-child(${item}) { 
                            fill: ${selectedColor.lightColor};
                        },
                    `}
                    </style>
                );
                })
            }
            </>
        )
    }
    else if (id === 2) {
        return (
            <>
            <CardImgTwo className='card-two' />

            {
                phd?.map((item, index) => {
                return (
                    <style key={index}>
                    {`
                        .card-two path:nth-child(${item}) { 
                            fill: ${selectedColor.darkColor};
                        },
                    `}
                    </style>
                );
                })
            }

            {
                phl?.map((item, index) => {
                return (
                    <style key={index}>
                    {`
                        .card-two path:nth-child(${item}) { 
                            fill: ${selectedColor.lightColor};
                        },
                    `}
                    </style>
                );
                })
            }
            </>
        )
    }
    else if (id === 3) {
        return (
            <>
            <CardImgThr className='card-thr' />

            {
                phd?.map((item, index) => {
                return (
                    <style key={index}>
                    {`
                        .card-thr path:nth-child(${item}) { 
                            fill: ${selectedColor.darkColor};
                        },
                    `}
                    </style>
                );
                })
            }

            {
                phl?.map((item, index) => {
                return (
                    <style key={index}>
                    {`
                        .card-thr path:nth-child(${item}) { 
                            fill: ${selectedColor.lightColor};
                        },
                    `}
                    </style>
                );
                })
            }
            </>
        )
    }
    }
}

export default CardImage
 