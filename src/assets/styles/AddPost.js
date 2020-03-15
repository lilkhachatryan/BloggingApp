import styled from "styled-components";

export const StyledAddPost = styled.div `
    .create-post {
        #file {
            z-index: 100;
            position: absolute;
            opacity: 0;
            width: 104px;
            height: 38px
        }
        
        .file-visible {
            position: relative;
        }
    }
`;