import {Component} from "react/cjs/react.production.min";
//resources
import PropTypes from "prop-types";
import style from "resources/jss/component/grid"
import withStyles from "withstyles";

class Grid extends Component {
  render() {
    const {align, justify, center, classes, children} = this.props;
    return (
      <div className={classes.container}>
        {children}
      </div>
    )
  }
}

Grid.propTypes = {
  align: PropTypes.string,
  justify: PropTypes.string,
  column: PropTypes.bool,
  center: PropTypes.bool
}

export default withStyles(style)(Grid);