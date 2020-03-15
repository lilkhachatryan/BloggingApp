import React,{ useState }from "react";
import { Button, Form, Col, Row, Dropdown } from "react-bootstrap";
import {} from "react-router-dom";
import {connect} from "react-redux";
import { poster } from "./actions";
import validatePost from "./validatePost";
import useForm from "../../../src/utils/useForm";
import { StyledAddPost } from "../../assets/styles/AddPost";
import IconButton from '@material-ui/core/IconButton';
import { storage } from "../../../src/config/firebase";


function AddPost(props) {
    //const [state, setState] = useState();
    // const [about, setAbout] = useState('');

    // const [imgAsFile, setImgAsFile] = useState(new File([], ''));
    // const [imgAsUrl, setImgAsUrl] = useState({imgUrl:""});
    const defaultState = {title:"", about: "", imgAsFile: '', topic:""};
    const { values, errors, handleChange, handleSubmit } = useForm(submit, validatePost, defaultState);

    const { dispatch, history } = props;
    const { user } = props;

    async function submit() {
        // await poster({title: values.title, about: values.about, imgAsFile});
        dispatch(poster({title: values.title, about: values.about, user_id: user.id, created_at: values.created_at, imgAsFile: values.imgAsFile, topic: values.topic}))
            .then(() => {
                console.log("endd");
                history.push('/posts/1');
            });
    }

    return (
            <StyledAddPost>
                <div className="create-post ml-5 mt-2">
                    <div>
                        <Form.Group as={Row} className="mr-0 ml-0">
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

                        <Form.Group as={Row} controlId="formGridPassword" className="mr-0 ml-0">
                            <Form.Label column sm={4} className="ml-sm-2">About</Form.Label>
                            <Col sm={8}>
                                <Form.Control
                                    type="text"
                                    name="about"
                                    as="textarea"
                                    aria-label="Enter post content"
                                    value={values.about}
                                    placeholder="Enter post content"
                                    className={
                                        {
                                            "ml-sm-2": true,
                                            "inputError": errors.about
                                        }
                                    }
                                    onChange={handleChange}
                                    style={{'minHeight': 300}}/>
                                    {errors.about && <p className="ml-sm-2 error">{errors.about}</p>}

                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formGridPassword" className="mr-0 ml-0">
                            <Form.Label column sm={4} className="ml-sm-2">Тopic</Form.Label>
                            <Col sm={8}>
                                <Dropdown className={"ml-sm-2"}>
                                    <Dropdown.Toggle variant="primary" id="dropdown-basic">
                                        Select a topic
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item value={'Travel'}>Travel</Dropdown.Item>
                                        <Dropdown.Item value={'IT'}>IT</Dropdown.Item>
                                        <Dropdown.Item value={'Finance'}>Finance</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Col>
                        </Form.Group>
                        {/*<h6>Тopic</h6>        */}
                        {/*<select className="controledSelect" id="categories" className="mr-0 ml-0" onChange = {handleChange} name = "topic">*/}
                        {/*    <option selected>Choose...</option>*/}
                        {/*    <option value="Travel">Travel</option>*/}
                        {/*    <option value="IT">IT</option>*/}
                        {/*    <option value="Finance">Finance</option>*/}
                        {/*</select>   */}
                
                    <div>
                        <Form.Group as={Row} controlId="formGridPassword" className="mr-0 ml-0">
                            <Form.Label column sm={4} className="ml-sm-2">Post image</Form.Label>
                            <Col sm={8}>
                                <input accept="image/*"
                                       className="ml-sm-2"
                                       id="file"
                                       type="file"
                                       name="imgAsFile"
                                       onChange ={handleChange} />
                                <Button
                                    variant="outline-primary"
                                    className="file-visible ml-sm-2"
                                    size="0.25g"
                                    type="file"
                                    name="imgAsFile"
                                    onChange ={handleChange}
                                >Add Image</Button>
                                <label htmlFor="icon-button-file" className="ml-2">
                                    {values.imgAsFile && values.imgAsFile.name}
                                </label>
                                {errors.imgAsFile && <p className="ml-sm-2 error">{errors.imgAsFile}</p>}
                            </Col>
                        </Form.Group>
                    </div>


                        <Form.Group as={Row} controlId="post" className="mr-0 ml-0">
                            <Col sm={10}>
                                <Button
                                    variant="outline-success"
                                    className="ml-sm-2"
                                    size="0.25g"
                                    onClick={handleSubmit}
                                >ADD POST</Button>
                            </Col>
                        </Form.Group>

                    </div>
                </div>
            </StyledAddPost>
            
    )
}


function mapStateToProps(state) {
    return {
        user: state.login.user
    }
}

export default connect(mapStateToProps)(AddPost);


