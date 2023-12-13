import React from "react";
import UserSideNavbar from "../../navbar/UserSideNavbar";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import HotelCard from "./HotelCard";
import ContentLoader from "react-content-loader";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";
import "./HotelBookmarks.css";
import "../../commonCSS/common.css";

import { useLocation  } from "react-router-dom";
import { bookmarkList } from "../../../../backend-services/bookmarksApi";

const HotelBookmarks = () => {
  const location = useLocation();
  const [hotels, setHotels] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    window.scrollTo({
      top: 600,
      behavior: "smooth",
    });
    (async () => {
      setIsLoading(true);
      const res = await bookmarkList({
        query: { type: "hotel" },
      });
      if (res) {
        const { hotelId } = res.data || {};
        setIsLoading(false);
        setHotels(hotelId);
        console.log(hotelId);
      }
    })();
  }, [location.search]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="parent_content">
      <div className="container-fluids">
        <div className="row">
          <div className="col-4 fixed-start">
            <UserSideNavbar />
          </div>

          <div className="col-8 animated fixed-end w-60 bookmarks">
            <div className="pt-5">
              <NavLink to="/" className="mt-8">
                Back to Home
              </NavLink>
              <h2 className="card-title heading mt-4 text-start">
                Bookmarked Hotel List
              </h2>
            </div>
            {isLoading ? (
              <ContentLoader />
            ) : (
              <>
                {hotels &&
                  hotels.length > 0 &&
                  hotels.map((hotel) => {
                    return <HotelCard hotel={hotel} key={hotel._id} />;
                  })}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelBookmarks;
