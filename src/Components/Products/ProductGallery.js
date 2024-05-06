////////////////////////////// we will use react-image-gallery /////////////
import React, { useEffect, useState } from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import LeftButton from "./LeftButton";
import RightButton from "./RightButton";
import { useParams } from "react-router-dom";
import mobile from "./../../images/banner-bg.png";
import ViewProductDetailsHook from "../../hook/product/view-product-details-hook";
import { Carousel } from "react-responsive-carousel";
const ProductGallery = () => {
  const { id } = useParams();
  const [item, images, cat, brand, prod] = ViewProductDetailsHook(id);

  // const images = [
  //   {
  //     original: `${mobile}`,
  //     thumbnail: `${mobile}`,
  //   },
  //   {
  //     original: `${mobile}`,
  //     thumbnail: `${mobile}`,
  //   },
  //   {
  //     original: `${mobile}`,
  //     thumbnail: `${mobile}`,
  //   },
  // ];

  ///////////////////ImageGallery takes images like this {original:`${img}`}
  return (
    <div
      className=" image-gallery-container image-gallery-wrapper
          pt-2"
    >
      {id ? (
        <div className="thumbnail-wrapper">
          {" "}
          {/* Wrapper for the thumbnails */}
          <ImageGallery
            items={images}
            showFullscreenButton={false}
            isRTL={true}
            showPlayButton={false}
            showThumbnails={true}
            originalHeight={false}
            renderRightNav={RightButton}
            renderLeftNav={LeftButton}
            thumbnailPosition="bottom"
          />
        </div>
      ) : null}
    </div>
  );
};

export default ProductGallery;
