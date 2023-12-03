import AppLayout from "../../components/applayout/AppLayout";
import ContentSide from "../../components/blogs/ListView/contentside/ContentSide";
import SidebarSide from "../../components/blogs/ListView/sidebarside/SidebarSide";

const BlogsListPage = () => {
  return (
    <AppLayout>
      <div className="sidebar-container blog-page">
        <div className="auto-container">
          <div className="row clearfix">
            <ContentSide />
            <SidebarSide />
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default BlogsListPage;
