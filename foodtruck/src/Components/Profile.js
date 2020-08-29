import React from "react";
import { connect } from "react-redux";
import { addTruck } from "../actions/userActions";
import AddTruckForm from "./AddTruckForm";

function Profile(props) {
  console.log("profile props", props.user);
  let role;
  props.user.role === 1 ? (role = "Diner") : (role = "Operator");

  return (
    <div>
      <h3 style={{ marginTop: "100px" }}>{props.user.username}</h3>
      <p>Email: {props.user.email}</p>
      <p>Role: {role}</p>
      {props.user.role === 2 ? (
        <div>
          <AddTruckForm />
        </div>
      ) : null}
      {props.user.role === 2
        ? props.trucks.map((truck) => {
            if (truck.username === props.user.username) {
              return (
                <div>
                  <img src={truck.imageURL} />
                  <p>Cuisine Type: {truck.cuisineType}</p>
                  <p>Location: {truck.location}</p>
                  <p>Owner: {truck.username}</p>
                </div>
              );
            }
          })
        : null}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    trucks: state.trucks,
  };
};

export default connect(mapStateToProps, { addTruck })(Profile);
