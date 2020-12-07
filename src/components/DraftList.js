import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";





function DraftList(props){
  return (
    <React.Fragment>
      {Object.values(props.draftList).map((keg) =>
      <Keg
      whenKegClicked = { props.onKegSelection }
      name={keg.name}
      brand={keg.brand}
      price={keg.price}
      abv={keg.abv}
      pintsLeft={keg.pintsLeft}
      id={keg.id}
      key={keg.id}/>
      )}
    </React.Fragment>
  );
}

DraftList.propTypes = {
  draftList: PropTypes.object,
  onKegSelection: PropTypes.func
};

export default DraftList;
