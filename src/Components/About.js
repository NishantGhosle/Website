import React from 'react'
import Common from "./Common";
import web from "../abouttttt.jpg";
import Footer from "./Footer";

function About() {
  return (
   <>
    <Common heading = "Welcome to our About Page" btnname = "About Click" imgsrc = {web}/>
    <div className="container">
      <h2 className="text-center my-4">About us</h2>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At ipsam laudantium voluptatibus odit perferendis delectus dolores provident commodi totam aspernatur, laborum eligendi a molestias et tempore illum natus consequuntur ipsum deserunt saepe. Aperiam harum cumque ducimus facere, consequatur sunt animi. Non nulla reiciendis voluptatum magnam dolores eaque est consequuntur facilis doloremque aliquid sed, perspiciatis at quam! Delectus reprehenderit officia consequatur eius accusantium fugit libero ratione quisquam culpa commodi. Tempore nesciunt voluptatibus distinctio incidunt adipisci vel ea numquam obcaecati hic minus repellat molestiae earum soluta perferendis sint ipsa ab dolores beatae ducimus magni deserunt blanditiis qui, doloremque porro. Similique, quaerat dolores.Lorem ipsum, dolor sit amet consectetur adipisicing elit. At ipsam laudantium voluptatibus odit perferendis delectus dolores provident commodi totam aspernatur, laborum eligendi a molestias et tempore illum natus consequuntur ipsum deserunt saepe. Aperiam harum cumque ducimus facere, consequatur sunt animi. Non nulla reiciendis voluptatum magnam dolores eaque est consequuntur facilis doloremque aliquid sed, perspiciatis at quam! Delectus reprehenderit officia consequatur eius accusantium fugit libero ratione quisquam culpa commodi. Tempore nesciunt voluptatibus distinctio incidunt adipisci vel ea numquam obcaecati hic minus repellat molestiae earum soluta perferendis sint ipsa ab dolores beatae ducimus magni deserunt blanditiis qui, doloremque porro. Similique, quaerat dolores.Lorem ipsum, dolor sit amet consectetur adipisicing elit. At ipsam laudantium voluptatibus odit perferendis delectus dolores provident commodi totam aspernatur, laborum eligendi a molestias et tempore illum natus consequuntur ipsum deserunt saepe. Aperiam harum cumque ducimus facere, consequatur sunt animi. Non nulla reiciendis voluptatum magnam dolores eaque est consequuntur facilis doloremque aliquid sed, perspiciatis at quam! Delectus reprehenderit officia consequatur eius accusantium fugit libero ratione quisquam culpa commodi. Tempore nesciunt voluptatibus distinctio incidunt adipisci vel ea numquam obcaecati hic minus repellat molestiae earum soluta perferendis sint ipsa ab dolores beatae ducimus magni deserunt blanditiis qui, doloremque porro. Similique, quaerat dolores.</p>
    </div>
    <Footer/>
    </>
  )
}

export default About