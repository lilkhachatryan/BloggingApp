import React,{ useState }from "react";
import { Button, Form, Col, Row } from "react-bootstrap";
import {} from "react-router-dom";
import {connect} from "react-redux";
import {poster} from "./actions";
import validatePost from "./validatePost";
import useForm from "../../../src/utils/useForm";
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';


function AddPost(props) {
    // const [title, setTitle] = useState('');
    // const [about, setAbout] = useState('');

    // const handleTitleChange = event => setTitle(event.target.value);
    // const handleAboutChange = event => setAbout(event.target.value);

    const { values, errors, handleChange, handleSubmit } = useForm(submit, validatePost, {title:"",about: ""} );

    const { poster, history
     } = props;

    function submit() {
        poster(values.title,values.about);
         history.push('/posts');


    };
    const handleFileChange = (e)=>{
        if(e.target.files[0]){
            const {image} = e.target.files[0];
            
        }
        console.log("zzz", e.target.files[0]);

    }

    return (
        <div>
            <>
                <div className="create-post">
                    <Form.Row>
                        <Form.Group as={Row} >
                            <Form.Label column sm={4} className="ml-sm-2">Title</Form.Label>
                            <Col sm={8}>
                            <Form.Control
                                type="text"
                                name = "title"
                                value={values.title}
                                placeholder="Title"
                                className={
                                    {
                                        "ml-sm-2": true,
                                        "inputError": errors.title
                                    }
                                }
                                onChange={handleChange}/>
                                {errors.title && <p className="ml-sm-2 error">{errors.title}</p>}
                            </Col>
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Row} controlId="formGridPassword">
                            <Form.Label column sm={4} className="ml-sm-2">About</Form.Label>
                            <Col sm={8}>
                                <Form.Control
                                    type="text"
                                    name="about"
                                    value={values.about}
                                    placeholder="About"
                                    className={
                                        {
                                            "ml-sm-2": true,
                                            "inputError": errors.about
                                        }
                                    }
                                    onChange={handleChange}/>
                                    {errors.about && <p className="ml-sm-2 error">{errors.about}</p>}

                            </Col>
                        </Form.Group>
                    </Form.Row>
                    <div>
                    <input accept="image/*"  id="icon-button-file" type="file" name = "file" onChange ={handleFileChange} />
                    <label htmlFor="icon-button-file">
                    <IconButton color="primary" aria-label="upload picture" component="span">
                    </IconButton>
                     </label>
                     </div>              

                    
                    <Form.Row>
                        <Form.Group as={Row} controlId="post">
                            <Col sm={10}>
                                <Button
                                    variant="outline-success"
                                    className="ml-sm-2"
                                    size="0.25g"
                                    onClick={handleSubmit}
                                >ADD POST</Button>
                            </Col>
                        </Form.Group>
                    </Form.Row>
                    

                    
                </div>
            </>
            
                    
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
   return {
        poster: (title, about) => dispatch(poster({title,about,}))
    }
};

export default connect(null, mapDispatchToProps)(AddPost);



