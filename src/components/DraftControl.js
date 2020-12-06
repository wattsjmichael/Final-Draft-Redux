import React from "react";
import NewKegForm from "./NewKegForm";
import DraftList from "./DraftList";
import KegDetail from "./KegDetail";
import EditKegForm from "./EditKegForm";
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import * as actions from "./../actions";

class DraftControl extends React.Component {

  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      // kegFormVisibleOnPage: false,
      // fullDraftList: [],
      selectedKeg: null,
      editing: false,







    };
    // this.handleClick = this.handleClick.bind(this);
    // this.handleSellingPint = this.handleSellingPint.bind(this);


  }

  handleClick = () => {
    if (this.state.selectedKeg != null) {
      this.setState({
        // kegFormVisibleOnPage: false,
        selectedKeg: null,
        editing: false
      });
    } else {
      const { dispatch } = this.props;
      const action = actions.toggleForm();
      // console.log(this.props.kegFormVisibleOnPage);
      dispatch(action);
      // console.log(this.props.kegFormVisibleOnPage);
      //   this.setState(prevState => ({
      //     kegFormVisibleOnPage: !prevState.kegFormVisibleOnPage,
      //   }));
    }
  }

  handleSellingPint = (id) => {
    const clonedArray = [...this.state.fullDraftList]
    for (let i = 0; i < this.state.fullDraftList.length; i++) {
      if (clonedArray[i].id === id && clonedArray[i].pintsLeft > 0) {
        clonedArray[i].pintsLeft -= 1
      } else if (clonedArray[i].pintsLeft <= 0) {
        return alert("Change the Keg! Dont forget to delete it!");
      }
    }


    this.setState({
      fullDraftList: clonedArray
    });
  }


  handleEditingKegInDraftList = (kegToEdit) => {
    const { dispatch } = this.props;
    const action = actions.addKeg(kegToEdit);
    // const { id, name, brand, abv, price, pintsLeft } = kegToEdit;
    // const action = {
    //   type: 'ADD_KEG',
    //   id: id,
    //   name: name,
    //   brand: brand,
    //   abv: abv,
    //   price: price,
    //   pintsLeft: pintsLeft,
    // }
    dispatch(action);
    this.setState({
      editing: false,
      selectedKeg: null,
    });
  }
  //   const editedFullDraftList = this.state.fullDraftList
  //   .filter(keg => keg.id !== this.state.selectedKeg.id)
  //   .concat(kegToEdit);
  //   this.setState({
  //     fullDraftList: editedFullDraftList,
  //     editing: false,
  //     selectedKeg: null
  //   })
  // }

  handleEditClick = () => {
    this.setState({ editing: true });
  }

  handleDeletingKeg = (id) => {
    const { dispatch } = this.props;
    const action = actions.deleteKeg(id);
    // const action = {
    //   type: 'DELETE_KEG',
    //   id: id
    // }
    dispatch(action);
    this.setState({ selectedKeg: null });
  }

  //   const newFullDraftList = this.state.fullDraftList.filter(keg => keg.id !== id);
  //   this.setState({
  //     fullDraftList : newFullDraftList,
  //     selectedKeg: null
  //   });
  // }

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.props.fullDraftList[id];
    this.setState({ selectedKeg: selectedKeg });
  }
  //   const selectedKeg = this.state.fullDraftList.filter(keg => keg.id === id)[0];
  //   this.setState({ selectedKeg: selectedKeg });
  // }

  handleAddNewKegToDraftList = (newKeg) => {
    const { dispatch } = this.props;
    // const { id, name, brand, abv, price, pintsLeft } = newKeg;
    // 
    const action = actions.addKeg(newKeg);
    dispatch(action);
    const action2 = actions.toggleForm();
    // const action2 = {
    //   type: 'TOGGLE_FORM'
    // }
    dispatch(action2)
    // this.setState({ kegFormVisibleOnPage: false });
  }

  //   const newFullDraftList = this.state.fullDraftList.concat(newKeg);
  //   this.setState({
  //     fullDraftList: newFullDraftList,
  //     kegFormVisibleOnPage: false});
  // }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.editing) {
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
      // currentlyVisibleState = <DraftList draftList={this.state.fullDraftList} onKegSelection={this.handleChangingSelectedKeg} />
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
  selectedKeg: PropTypes.object
};

const mapStatetoProps = state => {
  return {
    fullDraftList: state.fullDraftList,
    kegFormVisibleOnPage: state.kegFormVisibleOnPage,
    selectedKeg: state.selectedKeg
  }
}

DraftControl = connect(mapStatetoProps)(DraftControl);

export default DraftControl;