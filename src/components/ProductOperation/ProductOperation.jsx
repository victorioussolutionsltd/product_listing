import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Add, Delete, Remove } from '@material-ui/icons'
import { IconButton, TextField } from '@material-ui/core';

class ProductOperation extends Component {
    constructor (props) {
        super(props);
        this.state = { volume : props.quantity }        
    }

    onAdd = () => {
        const { volume } = this.state;
        const { onChangedQuantity } = this.props;
        const updatedVolume = volume + 1;
        this.setState({ volume : updatedVolume}, () => { onChangedQuantity(updatedVolume) });
    }

    onDelete = () => {
        const { volume } = this.state;
        const { onChangedQuantity } = this.props;
        const updatedVolume = volume - 1;
        this.setState({ volume : updatedVolume}, () => { onChangedQuantity(updatedVolume) });
    }
    
    render() {
        const { volume } = this.state;
        const { onRemove } = this.props;
        
        return (
            <div className="ProductOperation">
                <div className="MainOperations">
                    <IconButton disabled={ volume === 0? true: false} aria-label="Remove" onClick={this.onDelete}>
                        <Remove fontSize="small" />
                    </IconButton>
                    <TextField 
                        id="standard-basic"
                        label="Quantity"
                        inputProps={{style: { textAlign: 'center' }}}
                        InputProps={{
                            readOnly: true,
                        }}
                        value={volume}
                        />
                    <IconButton aria-label="Add" onClick={this.onAdd}>
                        <Add fontSize="small" />
                    </IconButton>
                </div>
                <IconButton  aria-label="Delete" onClick={onRemove}>
                    <Delete fontSize="small" />
                </IconButton>
            </div>
        );
    }
}

ProductOperation.propTypes = {
    onChangedQuantity: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired,
    quantity: PropTypes.number.isRequired,
};

export default ProductOperation;