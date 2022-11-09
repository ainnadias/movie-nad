import React from "react";
import { MDBFooter, MDBContainer } from "mdb-react-ui-kit";

export default function Footer() {
  return (
    <MDBFooter className="text-center" color="white" bgColor="dark">
      <MDBContainer className="p-4">
        <section className="mb-4">
          <p>Movie App ©2022 Created by Ain Nadia Safira</p>
        </section>
      </MDBContainer>
    </MDBFooter>
  );
}
