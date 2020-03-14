import React from "react";
import { StyledDefaultAvatar } from "../../assets/styles/DefaultAvatar";

const DefaultAvatar = function (props) {
    const { avatar } = props;
    return (<StyledDefaultAvatar>{avatar}</StyledDefaultAvatar>);
};

export default DefaultAvatar;