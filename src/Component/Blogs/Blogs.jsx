import "./blogs.css";

const blogs = [
  {
    title: "Roadmap on Finance",
    content:
      "Whether you are a newbie or a seasoned explorer, the blog is your treasure map to navigate the world of finance. Remember you are never alone on this quest! A Comprehensive Roadmap Presented by the Finance and Economics Club of IIT Kharagpur.",
    link: "https://medium.com/@fec.iitkgp/exploring-career-paths-in-finance-acaf3f438ca1",
  },
  {
    title: "Summer of Finance",
    content:
      "It's time to embark on a thrilling journey into Finance. As we delve into Finance, let's make the most of our vacations by immersing ourselves in its wonders. While your preferred learning style may vary, we recommend some resources that have proven to be useful:",
    link: "https://boatneck-cougar-e3c.notion.site/SUMMER-OF-FINANCE-79cc8e8d272b479e9a8fcf1e916314ad",
  },
];
const instagramPosts = [
  {
    imgSrc: "./post/recessionpost.jpeg",  
    topic: "2025 Recession: Imminent Reality or Speculative Fear?",
    title: "Some Kind of Title",
    content:
      "The Finance and Economics Club at IIT Kharagpur invites you to explore the potential 2025 recession. Is it an imminent reality or just speculative fear? Stay informed with our detailed analysis and join the discussion to share your insights. Swipe through to learn more about the economic outlook for 2025.",
    link: "https://www.instagram.com/p/C9E6ruixvwx/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    imgSrc: "./post/meta&eco.jpeg",  
    topic: "Metaverse & Economics",
    title: "Some Kind of Title",
    content:
      "The metaverse is here, and it's bringing a whole new dimension to economics!Finance and Economics Club, IIT Kharagpur invites you to explore the intersection of these two exciting fields. Swipe through the post where we discuss the potential impact of the metaverse on traditional economic concepts. ",
    link: "https://www.instagram.com/p/C8EExgVR9uF/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    imgSrc: "./post/impactofelection.jpeg",  
    topic: "IMPACT OF ELECTION on STOCK MARKET",
    title: "Some Kind of Title",
    content:
      "Elections can significantly influence the stock market, creating waves of volatility and opportunity. This in-depth analysis by FEC IIT Kharagpur explores how political shifts affect market trends, investor behavior, and asset prices.",
    link: "https://www.instagram.com/p/C7w818_SbkN/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    imgSrc: "./post/kotakmahindra.jpeg",  
    topic: "Kotak Mahindra Bank crisiss",
    title: "Some Kind of Title",
    content:
      "The Kotak Mahindra Bank crisis has sent shockwaves through the financial sector. Discover the causes and far-reaching consequences of this critical event with us. 🌐 .",
    link: "https://www.instagram.com/p/C7PJSoiPHGd/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  // Add more Instagram post objects here
];

export default function Blogs() {
  return (
    <>
      <section className="title container" style={{ marginTop: "60px" }}>
        <div className="row">
          <div className="col-md-12">
            <h1>Blogs</h1>
            <div className="seperator" />
            <p>Read some more Blogs</p>
          </div>
        </div>
      </section>

      {/* Start Blog Layout */}
      <div className="container">
        <div className="row">
          {blogs.map((blog, index) => (
            <div key={index} className="col-md-6 item">
              <div className="item-in">
                <h4>{blog.title}</h4>
                <div className="seperator" />
                <p>{blog.content}</p>
                <a href={blog.link} target={"_blank"}>
                  Read More
                  <i className="fa fa-long-arrow-right" />
                </a>
              </div>
            </div>
          ))}
        </div>
        <h1 style={{ textAlign: "center" }}>Instagram Posts</h1>
        {/* With Images */}
        <div className="row">
          {instagramPosts.map((post, index) => (
            <div key={index} className="col-md-6 item">
              <div className="item-in">
                <div className="icon">
                  <a href={post.link}>
                    <img src={post.imgSrc} alt={post.topic} />
                    <div className="icon-topic">{post.topic}</div>
                  </a>
                </div>
                {/* <h4>{post.title}</h4> */}
                <div className="seperator" />
                <p>{post.content}</p>
                <a href={post.link} target={"_blank"}>
                  Read More
                  <i className="fa fa-long-arrow-right" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}