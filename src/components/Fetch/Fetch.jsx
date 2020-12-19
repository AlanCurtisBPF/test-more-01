import { connect } from "react-redux";
import {
  fetchStart as fetchStartAction,
} from "../../redux/models/fetch/fetchActions";

const Fetch = (props) => {
  const { } = props;

  const handlePushToFetch =()=>{
    console.log('handlePushToFetch')
  }

  return (
    <div className="Conter">
      Fetch Comp
      <button>Push to Fetch</button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchStart: () => dispatch(fetchStartAction()),
    dispatch,
  };
};

const mapStateToProps = (state) => {
  return {
    state
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Fetch);
