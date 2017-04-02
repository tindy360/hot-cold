import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { connect } from 'react-redux';
import './Message.css'
import { divToggle, generateRandomNumber } from '../../actions'

const Message = ({hidden, toggleDiv, message, generateCorrectAnswer}) => (

      <div className="modal-container" style={{height: 200}}>

        <Modal
          show={!hidden}
          onHide={close}
          container={this}
          aria-labelledby="contained-modal-title"
        >
          <Modal.Header>
            <Modal.Title id="contained-modal-title">You are ....</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {message}
            
          </Modal.Body>
          <Modal.Footer>
            <p>Use Reset to get a new number</p>

            <Button bsStyle="default" bsSize="large" active onClick={toggleDiv}>Close</Button>
            <Button bsStyle="primary" bsSize="large" active className='reset' onClick={(e) => {toggleDiv(); generateCorrectAnswer() }}>Reset</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );



const mapStateToProps = (state) => ({
  hidden: state.hidden,
  message: state.message,
})

const mapDispatchToProps = (dispatch) => ({
  toggleDiv: () => dispatch(divToggle()),
  generateCorrectAnswer: () => dispatch(generateRandomNumber())
})
export default connect(mapStateToProps, mapDispatchToProps)(Message)
