import React from "react";
import { StyledLoading } from "../../assets/styles/Loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const Loading = function () {
    return (
        <StyledLoading><div><FontAwesomeIcon icon={faSpinner} size="4x" pulse/></div></StyledLoading>
    )
};

export default Loading;