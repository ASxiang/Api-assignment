import React from 'react';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

class DropDownSelect extends React.Component { // eslint-disable-line react/prefer-stateless-function

    renderSelectOptions = (object) => (
        <option key={object.value} value={object.value}>{object.label}</option>
    )

    render() {
        const { input, label, objects } = this.props;
        return (
            <div>
                {/* <label htmlFor={label}>{label}</label> */}
                <FormControl>
                    <InputLabel htmlFor="age-native-simple">{this.props.label}</InputLabel>
                    <Select {...input} native>
                        <option></option>
                        {objects.map(this.renderSelectOptions)}
                    </Select>
                </FormControl>
            </div>
        );
    }
}

// function DropDownSelect(person) {
//   return (
//     <option key={person} value={person}>{person}</option>
//   );
// }

export default DropDownSelect;