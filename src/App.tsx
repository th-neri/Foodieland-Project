import { LiaFacebookSquare } from "react-icons/lia";
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import ContentPage from "./components/ContentPage/ContentPage";
import Categories from "./components/Categories/Categories";

function App() {
return (
    <div>
      <header className="pt-10 px-20 flex justify-between">
        <div className="">
          <h1 className="flex items-center font-lobster font-normal text-2xl">Foodieland</h1>
        </div>

        <div className="flex items-center font-inter font-medium text-base gap-10 mr-64">
          <nav>
            <ul>
              <a href="#">
                <li>Home</li>
              </a>
            </ul>
          </nav>
          
          <nav>
            <ul>
              <a href="#">
                <li>Recipes</li>
              </a>
            </ul>
          </nav>
         
          <nav>
            <ul>
              <a href="#">
                <li>Blog</li>
              </a>
            </ul>
          </nav>
      
          <nav>
            <ul>
              <a href="#">
                <li>Contact</li>
              </a>
            </ul>
          </nav>
 
          <nav>
            <ul>
              <a href="#">
                <li>About us</li>
              </a>
            </ul>
          </nav> 
        </div>

        <div className="flex items-center gap-9">
           <a href="#">
            <LiaFacebookSquare size={36} className="text-black"/>
           </a>
     
           <a href="#">
            <FiTwitter size={30} className="text-black"/>
           </a>

           <a href="#">
            <FaInstagram size={30} className="text-black"/>
           </a>
        </div>
      </header>

      <section className="">
        <ContentPage />
      </section>

      <section className="pt-40 px-20">
        <Categories />
      </section>
    </div>
  )
}

export default App
