import React from "react";
import { Carousel } from "react-bootstrap";

import Slide1 from "../assets/img/Slide1.jpg";
import Slide2 from "../assets/img/Slide2.jpg";
import Slide3 from "../assets/img/Slide3.jpg";

import "../styles/carousel.css";

function Carousels() {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={Slide1} alt="First slide" />
          <Carousel.Caption>
            <h3>Harry Potter and the Deathly Hallows: Part 2</h3>
            <p>
              Harry, Ron and Hermione continue their quest to vanquish the evil Voldemort once and for all. Just as things begin to look hopeless for the young wizards, Harry discovers a trio of magical objects that endow him with powers to
              rival Voldemort's formidable skills.
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={Slide2} alt="Second slide" />

          <Carousel.Caption>
            <h3>Harry Potter and the Philosopher's Stone</h3>
            <p>
              Harry Potter has lived under the stairs at his aunt and uncle's house his whole life. But on his 11th birthday, he learns he's a powerful wizard—with a place waiting for him at the Hogwarts School of Witchcraft and Wizardry.
              As he learns to harness his newfound powers with the help of the school's kindly headmaster, Harry uncovers the truth about his parents' deaths—and about the villain who's to blame.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Slide3} alt="Third slide" />

          <Carousel.Caption>
            <h3>Harry Potter and the Chamber of Secrets</h3>
            <p>
              Cars fly, trees fight back, and a mysterious house-elf comes to warn Harry Potter at the start of his second year at Hogwarts. Adventure and danger await when bloody writing on a wall announces: The Chamber Of Secrets Has Been
              Opened. To save Hogwarts will require all of Harry, Ron and Hermione’s magical abilities and courage.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      {/* );
      })} */}
    </>
  );
}

export default Carousels;
