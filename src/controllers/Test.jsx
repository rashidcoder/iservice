
import useMyDataFetch from "../models/DataFetch";
const Workshops = props => {
  const { isLoading, error, data } = useMyDataFetch(props.data); // In Shows.js I would call api.get.shows
  console.log(isLoading + " ::: ");
  console.log(error + " :::: ");
  console.log(data + " ::::: ");
  return props.children({
    state: {
      order: isLoading,
      ascending: "true wow",
    },
    toggleOrder: "toggleOrder"
  });
};
export default Workshops;

// export class OrderController extends React.Component {
//     constructor(props) {
//       super(props)

//       this.state = {
//         order: this.props.defaultOrder,
//         ascending: true,
//       }
//     }

//     toggleOrder = (key) => {
//       if (this.state.order === key) {
//         this.setState({
//           ascending: !this.state.ascending
//         })
//       }
//       else {
//         this.setState({
//           order: key,
//           ascending: true,
//         })
//       }
//     }

//     render() {
//       return this.props.children({
//         ...this.state,
//         toggleOrder: this.toggleOrder,
//       })
//     }
//   }
