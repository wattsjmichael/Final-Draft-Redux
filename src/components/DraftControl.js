import React from "react";
import NewKegForm from "./NewKegForm";
import DraftList from "./DraftList";
import KegDetail from "./KegDetail";
import EditKegForm from "./EditKegForm";
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import * as actions from "./../actions";

class DraftControl extends React.Component {

  handleClick = () => {
    const { dispatch } = this.props;
    if (this.props.selectedKeg != null) {
      const action = actions.notEditKeg();
      dispatch(action)
      const action2 = actions.notSelectedKeg();
      dispatch(action2)
      
    } else {
      const { dispatch } = this.props;
      const action = actions.toggleForm();
      dispatch(action);
    }
  }

  handleSellingPint = (id) => {
    const { dispatch } = this.props;
    const action = actions.sellPint(id);
    dispatch(action);
  }


  handleEditingKegInDraftList = (kegToEdit) => {
    const { dispatch } = this.props;
    const action = actions.addKeg(kegToEdit);
    dispatch(action);
    const action2 = actions.notEditKeg();
    dispatch(action2);
    const action3 = actions.notSelectedKeg();
    dispatch(action3);
  }

  handleEditClick = () => {
    const { dispatch } = this.props;
    const action = actions.editKeg();
    dispatch(action);
  }

  handleDeletingKeg = (id) => {
    const { dispatch } = this.props;
    const action = actions.deleteKeg(id);
    dispatch(action);
    const action2 = actions.notSelectedKeg();
    dispatch(action2);
  }

  handleChangingSelectedKeg = (id) => {
    const { dispatch } = this.props;
    const keg = this.props.fullDraftList[id];
    const action = actions.selectedKeg(keg);
    dispatch(action);
  }
  

  handleAddNewKegToDraftList = (newKeg) => {
    const { dispatch } = this.props;
    const action = actions.addKeg(newKeg);
    dispatch(action);
    const action2 = actions.toggleForm();
    dispatch(action2)
  }


  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.props.editing) {
      currentlyVisibleState = <EditKegForm keg={this.props.selectedKeg} onEditKeg={this.handleEditingKegInDraftList} />
      buttonText = "Return to the Draft List"
    }
    else if (this.props.selectedKeg != null) {
      currentlyVisibleState = <KegDetail keg={this.props.selectedKeg} onClickingDelete={this.handleDeletingKeg}
        onClickingEdit={this.handleEditClick} onSellingPint={this.handleSellingPint} />
      buttonText = "Return to the Keg List"

    }
    else if (this.props.kegFormVisibleOnPage) {
      currentlyVisibleState = <NewKegForm onNewKegCreation={this.handleAddNewKegToDraftList} />
      buttonText = "Return to the Keg List";
    } else {
      currentlyVisibleState = <DraftList draftList={this.props.fullDraftList} onKegSelection={this.handleChangingSelectedKeg} />
      buttonText = "Add a Keg";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

DraftControl.propTypes = {
  fullDraftList: PropTypes.object,
  kegFormVisibleOnPage: PropTypes.bool,
  selectedKeg: PropTypes.object,
  editing: PropTypes.bool
};

const mapStatetoProps = state => {
  return {
    fullDraftList: state.fullDraftList,
    kegFormVisibleOnPage: state.kegFormVisibleOnPage,
    selectedKeg: state.selectedKeg,
    editing: state.editing
  }
}

DraftControl = connect(mapStatetoProps)(DraftControl);

export default DraftControl;