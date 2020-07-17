import { connect } from "react-redux";
import Home from "../ui/Home";
//容器处理逻辑
function mapStateToProps(state, ownProps) {
  return {
    user: state.user,
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {};
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
