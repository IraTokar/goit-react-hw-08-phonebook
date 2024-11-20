

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectFilter } from "components/redux/contacts/selectors";
import { changeFilter } from "components/redux/contacts/filterSlice";


const Filter = () => {
    const value = useSelector(selectFilter);
    const dispatch = useDispatch();

    const onChange = evt => {
        const normalizedValue = evt.target.value.toLowerCase();

        dispatch(changeFilter(normalizedValue));
    }

    return (
        <div>
            <label>
                Find contacts by name
                <input
                    type="text"
                    value={value}
                    onChange={onChange}
                />
            </label>
             
        </div>
    )
};

export default Filter;
