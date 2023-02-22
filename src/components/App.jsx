import React, { Component } from "react";
import ImageGallery from "./ImageGallery/ImageGallery";
import Searchbar from "./Searchbar/Searchbar";
import Modal from "./Modal/Modal";


class App extends Component {

  state = {
    inputValue: '',
    modalImg: '',
    showModal: false,
    page: 1,
  };

  getInputValue = handleValue => {
    this.setState({ inputValue: handleValue, page: 1 })
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }))
  };

  getLargeImg = url => {
    this.toggleModal();
    this.setState({ modalImg: url });
  };

  LoadMoreBtn = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { modalImg, showModal, page, } = this.state;
    return (
      <>
        <Searchbar getInputValue={this.getInputValue}/>
        <ImageGallery inputValue={this.state.inputValue} onClick={this.getLargeImg} LoadMoreBtn={this.LoadMoreBtn} page={ page} />
        {showModal && <Modal url={modalImg} onClose={this.toggleModal} />}
      </>
    )
  }
}

export default App;