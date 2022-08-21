// Packages
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Home from "./Pages/Home";
import Subject from "./Pages/Subject";
import Contact from "./Pages/Contact";
import Textbooks from "./Pages/Textbooks";
import Notes from "./Pages/Notes";
import Lectures from "./Pages/Lectures";
import File from "./Pages/File";

// Components
import Navbar from "./Components/Navbar";
import ClassInfo from "./Components/ClassInfo";
import Footer from "./Components/Footer";

// Style
import "./App.css";


const App = () => {

  const [data, setData] = useState({});
  useEffect(() => {
    fetch("/json/home.json")
    .then(res => res.json())
    .then(json => setData(json))
  }, []);

  return (data && <>

    <BrowserRouter>

      <Navbar 
        logo_path="/images/school_logo.png"
        school_name="Demo School"
        subjects={data.subjects}
      />

      <ClassInfo 
        class={data.class}
        teacher={data.teacher}
      />

      <Routes>
  
        <Route 
          exact path="/" 
          element={<Home 
                      subjects={data.subjects}
                  />} 
        />
  
        {data.subjects &&

          // Subjects
          data.subjects.map(
            subject => {
              return <Route 
                        key={subject.url}
                        path={subject.url}
                        element={<Subject 
                                    name={subject.name} 
                                    url={subject.url} 
                                />}
                      />
            }
          )
        }

        {data.subjects && 
          // Textbooks
          data.subjects.map(
            subject => {
              return <Route 
                        key={subject.url}
                        path={subject.url+"/textbooks"}
                        element={<Textbooks 
                                    name={subject.name} 
                                    url={subject.url}
                                />}
                      />
            }
          )
        }

        {data.subjects && 
          // Textbooks
          data.subjects.map(
            subject => {
              return <Route 
                        key={subject.url}
                        path={subject.url+"/notes"}
                        element={<Notes 
                                    name={subject.name} 
                                    url={subject.url}
                                />}
                      />
            }
          )
        }

        {data.subjects && 
          // Textbooks
          data.subjects.map(
            subject => {
              return <Route 
                        key={subject.url}
                        path={subject.url+"/lectures"}
                        element={<Lectures
                                    name={subject.name} 
                                    url={subject.url}
                                />}
                      />
            }
          )
        }

        <Route path="/contact" element={<Contact />} />
        
        <Route path="/file" element={<File />} />
  
      </Routes>

      <Footer />
    </BrowserRouter>

  </>);
};

export default App;