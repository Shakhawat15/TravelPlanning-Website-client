import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import moment from "moment";
import { blogsList } from "../../../backend-services/blogsApi";
import ScreenLoader from "../../screenloader/ScreenLoader";
export default function RecentPosts() {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const res = await blogsList({ query: { pageNumber: 1 } });
      if (res) {
        const { blogs } = res || {};
        setIsLoading(false);
        setBlogs(blogs);
      }
    })();
  }, []);
  return (
    <>
      {isLoading ? (
        <ScreenLoader />
      ) : (
        <div className="sb-widget posts-widget">
          <div className="w-inner">
            <div className="s-title">
              <i className="fa-solid fa-caret-right"></i>
              <h4>Recent Posts</h4>
            </div>
            <div className="posts">
              {blogs &&
                blogs.length > 0 &&
                blogs.map((blog) => {
                  const { _id, title, createdAt, thumbnailImage } = blog || {};
                  return (
                    <div className="post" key={_id}>
                      <div className="post-thumb">
                        <NavLink to={`/blogs/${_id}`}>
                          <img src={thumbnailImage} alt="Salalah" />
                        </NavLink>
                      </div>
                      <div className="travilo-text">
                        <NavLink to={`/blogs/${_id}`}>{title}</NavLink>
                      </div>
                      <div className="post-info">
                        {moment(createdAt).format("Do MMMM, YYYY")}
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
