import React,{ useState }from "react";
import { Button, Form, Col, Row, Dropdown } from "react-bootstrap";
import {} from "react-router-dom";
import {connect} from "react-redux";
import { poster } from "./actions";
import validatePost from "./validatePost";
import useForm from "../../../src/utils/useForm";
import { StyledAddPost } from "../../assets/styles/AddPost";
import TagsInput from 'react-tagsinput';
import 'react-tagsinput/react-tagsinput.css'

function AddPost(props) {
    const { dispatch, history } = props;
    const { user } = props;
    const defaultState = {title:"", about: "", imgAsFile: '', topic:"", tags: []};
    const { values, errors, handleChange, handleSubmit } = useForm(submit, validatePost, defaultState);
    const [tag, setTag] = useState('');

    function handleAddition(tags) {
        handleChange({target: { name: 'tags', value: tags } });
    }

    function handleChangeInput(tag) {
        setTag(tag);
    }

    async function submit() {
        // await poster({title: values.title, about: values.about, imgAsFile});
        dispatch(poster({
            title: values.title,
            about: values.about,
            user_id: user.id,
            created_at: values.created_at,
            imgAsFile: values.imgAsFile,
            topic: values.topic,
            tags: values.tags
        }))
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
                                    name="imgAsFile">Add Image</Button>
                                <label htmlFor="icon-button-file" className="ml-2">
                                    {values.imgAsFile && values.imgAsFile.name}
                                </label>
                                {errors.imgAsFile && <p className="ml-sm-2 error">{errors.imgAsFile}</p>}
                            </Col>
                        </Form.Group>
                    </div>

                    <Form.Group as={Row} controlId="formGridPassword" className="mr-0 ml-0">
                        <Form.Label column sm={4} className="ml-sm-2">Tags connected with post, you can add 3 unique tags.</Form.Label>
                        <Col sm={8}>
                            <TagsInput value={values.tags}
                                       onChange={handleAddition}
                                       inputValue={tag}
                                       onChangeInput={handleChangeInput}
                                       removeKeys={values.tags}
                                       onlyUnique={true}
                                       maxTags={3}
                                       className="react-tagsinput ml-2" />
                            {errors.tags && <p className="ml-sm-2 error">{errors.tags}</p>}
                        </Col>
                    </Form.Group>

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


