
import Home from "./home/page"
import Header from "@/components/layout/Header";
export default function Index() {
  return (
    <div className="body">
     <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
/>
<div>
<Header/>
<Home/>

</div>
    </div>
  );
}
