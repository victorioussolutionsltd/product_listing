import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

class ProductFilter extends Component {

    filterChanged = (event) => {
        const { onChange } = this.props;
        onChange(event.target.value);
    }

    render() {
        const { filters } = this.props;
        return (
            <div className="ProductFilter">
                <Select
                    labelId="filter"
                    id="filter"
                    defaultValue="No filter"
                    onChange={this.filterChanged}
                    >
                        <MenuItem value="No filter">No Filter</MenuItem>
                        {
                            filters.map( filter => (
                                    <MenuItem key={filter} value={filter}>{filter}</MenuItem>
                                )
                            )
                        }
                 </Select>
            </div>
        );
    }
}

ProductFilter.propTypes = {
    filters: PropTypes.arrayOf(PropTypes.string),
    onChange: PropTypes.func.isRequired,
};

export default ProductFilter;