import PropTypes from "prop-types";
import styles from "../inputControl/inputControl.module.css";

export function InputControl(props){
    return(
        <div className={styles.container}>
            {props.label && <label>{props.label}</label>}
            <input type="text" {...props}></input>
        </div>
    )
}

InputControl.propTypes = {
    label: PropTypes.string,
}

InputControl.defaultProps = {
    label: "",
}