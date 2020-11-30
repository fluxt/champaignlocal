import React from "react";

// reactstrap components

// core components
import DefaultNavbar from "components/DefaultNavbar.js";

import StoresPageHeader from "components/Headers/StoresPageHeader.js"

import StoresSearch from "./stores/StoresSearch.js";
import StoresCreate from "./stores/StoresCreate.js";
import StoresUpdate from "./stores/StoresUpdate.js";
import StoresDelete from "./stores/StoresDelete.js";

function StorePage() {
  return (
    <>
      <DefaultNavbar />
      <StoresPageHeader />
      <StoresSearch />
      <StoresCreate />
      <StoresUpdate />
      <StoresDelete />
    </>
  );
}

export default StorePage;
